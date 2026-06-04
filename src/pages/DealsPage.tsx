import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ShoppingBag, ArrowLeft, Flame, Sparkles } from "lucide-react";
import StoreHeader from "@/components/StoreHeader";

import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

// Featured deals - one from each category
const featuredDeals = [
  {
    id: "ph1",
    name: "ايفون 14",
    desc: "شاشة 6.1 انش Super Retina XDR - شريحة A15 Bionic",
    price: 1199,
    oldPrice: 2799,
    discount: "57%",
    section: "جوالات",
    category: "📱 جوالات",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    glow: "shadow-blue-500/30",
    isPhone: true,
  },
  {
    id: "lt1",
    name: "Apple MacBook Air M5 - 13 بوصة",
    desc: "شريحة M5 الجديدة - شاشة Liquid Retina - 512GB SSD",
    price: 4399,
    oldPrice: 5199,
    discount: "15%",
    section: "لابتوبات",
    category: "💻 لابتوبات",
    gradient: "from-gray-700 via-gray-800 to-black",
    glow: "shadow-gray-500/30",
    isPhone: false,
  },
  {
    id: "p1",
    name: "عطر هيرش لهب 100 مل",
    desc: "Eau De Parfum - ثبات يدوم طوال اليوم",
    price: 170,
    oldPrice: 350,
    discount: "51%",
    section: "عطور",
    category: "🌸 عطور",
    gradient: "from-pink-600 via-rose-500 to-fuchsia-600",
    glow: "shadow-pink-500/30",
    isPhone: false,
  },
  {
    id: "m3",
    name: "باليت ايشادو 12 لون نود وقلتر",
    desc: "ألوان دافئة مع لمعة قلتر",
    price: 85,
    oldPrice: 170,
    discount: "50%",
    section: "مكياج",
    category: "💄 مكياج",
    gradient: "from-fuchsia-600 via-pink-500 to-orange-500",
    glow: "shadow-fuchsia-500/30",
    isPhone: false,
  },
];

// Grid deals: iPhone 17 Pro Max & Pro first, then the carousel deals
const gridDeals = [
  {
    id: "ph15",
    name: "ايفون 17 برو ماكس",
    desc: "شاشة 6.9 انش ProMotion - إطار تيتانيوم - شريحة A19 Pro",
    price: 3649,
    oldPrice: 5249,
    discount: "30%",
    section: "جوالات",
    category: "📱 جوالات",
    gradient: "",
    glow: "",
    isPhone: true,
  },
  {
    id: "ph14",
    name: "ايفون 17 برو",
    desc: "شاشة 6.3 انش ProMotion - إطار تيتانيوم - شريحة A19 Pro",
    price: 3099,
    oldPrice: 4699,
    discount: "34%",
    section: "جوالات",
    category: "📱 جوالات",
    gradient: "",
    glow: "",
    isPhone: true,
  },
  ...featuredDeals,
];

// We need to get images from the data files
import { phoneProducts } from "@/data/phoneProducts";
import { laptopProducts } from "@/data/techProducts";
import { perfumeProducts, makeupProducts } from "@/data/products";

const getImage = (id: string) => {
  const phone = phoneProducts.find((p) => p.id === id);
  if (phone) return phone.image;
  const laptop = laptopProducts.find((p) => p.id === id);
  if (laptop) return laptop.image;
  const perfume = perfumeProducts.find((p) => p.id === id);
  if (perfume) return perfume.image;
  const makeup = makeupProducts.find((p) => p.id === id);
  if (makeup) return makeup.image;
  return "";
};

const DealsPage = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredDeals.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const deal = featuredDeals[activeIndex];
  const dealImage = getImage(deal.id);

  const handleAddToCart = (d: typeof featuredDeals[0]) => {
    const img = getImage(d.id);
    addItem({
      id: d.id,
      name: d.name,
      description: d.desc,
      price: d.price,
      oldPrice: d.oldPrice,
      image: img,
      category: d.section,
      section: d.section as any,
    });
    toast.success("تمت الإضافة للسلة", { description: d.name });
  };

  const handleProductClick = (d: typeof featuredDeals[0]) => {
    if (d.isPhone) {
      navigate(`/phone/${d.id}`);
    } else {
      navigate(`/product/${d.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <StoreHeader />

      {/* Hero Deal - Auto-rotating */}
      <div className="relative overflow-hidden">
        <div
          className={`relative h-[420px] bg-gradient-to-br ${deal.gradient} transition-all duration-700`}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white/10 rounded-full animate-pulse"
                style={{
                  top: `${15 + i * 15}%`,
                  left: `${10 + i * 14}%`,
                  animationDelay: `${i * 300}ms`,
                  animationDuration: `${2 + i * 0.5}s`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            {/* Category badge */}
            <div
              className={`inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              {deal.category}
            </div>

            {/* Product image */}
            <div
              className={`w-44 h-44 rounded-2xl overflow-hidden shadow-2xl ${deal.glow} mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <img
                src={dealImage}
                alt={deal.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product name */}
            <h2
              className={`text-xl font-extrabold text-white drop-shadow-lg mb-1 transition-all duration-500 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {deal.name}
            </h2>
            <p className="text-xs text-white/70 mb-3 max-w-[280px]">{deal.desc}</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-extrabold text-white">{deal.price} ر.س</span>
              <span className="text-sm text-white/50 line-through">{deal.oldPrice} ر.س</span>
              <span className="bg-white/20 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-full">
                -{deal.discount}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => handleProductClick(deal)}
                className="bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-white/30 transition-all"
              >
                عرض المنتج
              </button>
              <button
                onClick={() => handleAddToCart(deal)}
                className="bg-white text-foreground px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-white/90 transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                أضف للسلة
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {featuredDeals.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                if (intervalRef.current) clearInterval(intervalRef.current);
                intervalRef.current = setInterval(() => {
                  setActiveIndex((prev) => (prev + 1) % featuredDeals.length);
                }, 4000);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* All deals grid */}
      <div className="px-4 pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-sale" />
          <h2 className="text-lg font-extrabold text-foreground">أقوى العروض</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {gridDeals.map((d, i) => {
            const img = getImage(d.id);
            return (
              <button
                key={d.id}
                onClick={() => handleProductClick(d)}
                className="bg-card border border-border rounded-2xl overflow-hidden text-right group hover:shadow-lg transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={img}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-2 right-2 bg-sale text-sale-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                    -{d.discount}
                  </div>
                  <div className="absolute top-2 left-2 bg-foreground/80 backdrop-blur text-background text-[9px] font-bold px-2 py-0.5 rounded-full">
                    {d.category}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold text-foreground line-clamp-2 min-h-[2rem]">
                    {d.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 justify-end">
                    <span className="text-[10px] text-muted-foreground line-through">{d.oldPrice} ر.س</span>
                    <span className="text-sm font-extrabold text-sale">{d.price} ر.س</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(d);
                    }}
                    className="w-full mt-2 flex items-center justify-center gap-1.5 bg-foreground text-background rounded-lg py-2 text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    أضف للسلة
                  </button>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Browse all categories CTA */}
      <div className="px-4 mt-6">
        <button
          onClick={() => navigate("/categories")}
          className="w-full bg-secondary text-foreground py-3.5 rounded-xl text-sm font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2"
        >
          تصفح جميع الأقسام
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>

      
    </div>
  );
};

export default DealsPage;

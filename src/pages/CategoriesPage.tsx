import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StoreHeader from "@/components/StoreHeader";

import catMakeup from "@/assets/cat-makeup.jpg";
import catPerfume from "@/assets/cat-perfume.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catHome from "@/assets/cat-home.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catPhones from "@/assets/cat-phones.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catOutdoor from "@/assets/cat-outdoor.jpg";
import catEarbuds from "@/assets/earbuds-airpods-pro2.jpg";
import catPowerbank from "@/assets/powerbank-anker-737.jpg";
import catMonitor from "@/assets/monitor-samsung-odyssey.jpg";
import watchApRoyaloak from "@/assets/watch-ap-royaloak.jpg";

const categories = [
  { name: "جوالات", emoji: "📱", image: catPhones, desc: "ايفون وسامسونج بأقل الأسعار", gradient: "from-blue-600/80 to-purple-600/80" },
  { name: "لابتوبات", emoji: "💻", image: "https://i.ibb.co/fVKBLkXR/Mac-Book-Air-13-in-M5-Midnight-PDP-Image-Position-1-en-ME-2cebf58a-6744-44bf-ba4a-ad165a49efd4.webp", desc: "أحدث اللابتوبات بخصومات كبيرة", gradient: "from-gray-800/80 to-gray-600/80" },
  { name: "ساعات", emoji: "⌚", image: watchApRoyaloak, desc: "ساعات فاخرة وذكية", gradient: "from-amber-700/80 to-yellow-600/80" },
  { name: "شاشات", emoji: "🖥️", image: catMonitor, desc: "شاشات OLED و 4K", gradient: "from-cyan-700/80 to-blue-500/80" },
  { name: "سماعات", emoji: "🎧", image: catEarbuds, desc: "سماعات لاسلكية احترافية", gradient: "from-indigo-600/80 to-violet-500/80" },
  { name: "شواحن", emoji: "🔋", image: catPowerbank, desc: "باور بانك بشحن سريع", gradient: "from-green-700/80 to-emerald-500/80" },
  { name: "عطور", emoji: "🌸", image: catPerfume, desc: "عطور وبخور فاخرة", gradient: "from-pink-600/80 to-rose-400/80" },
  { name: "مكياج", emoji: "💄", image: catMakeup, desc: "أفضل المنتجات بأسعار مخفضة", gradient: "from-fuchsia-600/80 to-pink-400/80" },
  { name: "شنط", emoji: "👜", image: catBags, desc: "تصاميم أنيقة وعملية", gradient: "from-orange-600/80 to-amber-400/80" },
  { name: "أدوات منزلية", emoji: "🏠", image: catHome, desc: "أجهزة ذكية للمنزل", gradient: "from-teal-600/80 to-cyan-400/80" },
  { name: "أثاث مكتبي", emoji: "🪑", image: catOffice, desc: "كراسي ومكاتب بخصم 60%", gradient: "from-stone-700/80 to-stone-500/80" },
  { name: "طاولات سفرة", emoji: "🍽️", image: catDining, desc: "تصاميم فاخرة بأسعار تنافسية", gradient: "from-red-700/80 to-orange-500/80" },
  { name: "طاولات خارجية", emoji: "🌿", image: catOutdoor, desc: "جلسات حدائق بخصم 35%", gradient: "from-lime-700/80 to-green-400/80" },
  { name: "منوعات", emoji: "🎁", image: "https://i.ibb.co/Y4MXNrJZ/1000335b-2711-4ba3-a63b-eaecfe312943.avif", desc: "عروض حصرية ومنتجات مختارة", gradient: "from-purple-700/80 to-fuchsia-500/80" },
  { name: "عسل", emoji: "🍯", image: "https://i.ibb.co/N6TLkd4V/honey-nuts.jpg", desc: "عسل طبيعي ومكسرات فاخرة", gradient: "from-amber-600/80 to-yellow-500/80" },
];

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    categories.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * 80);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <StoreHeader />

      {/* Animated header */}
      <div className="px-4 pt-6 pb-4">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-foreground animate-fade-up">
            جميع الأقسام
          </h1>
          <p className="text-sm text-muted-foreground mt-1 animate-fade-up" style={{ animationDelay: "100ms" }}>
            اكتشف {categories.length} قسم بأفضل العروض
          </p>
          <div className="w-16 h-1 bg-sale mx-auto mt-3 rounded-full animate-fade-up" style={{ animationDelay: "200ms" }} />
        </div>
      </div>

      {/* Categories grid */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
            className={`relative rounded-2xl overflow-hidden group h-44 w-full shadow-md hover:shadow-xl transition-all duration-500 transform ${
              visibleItems.includes(i)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {/* Background image */}
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} group-hover:opacity-90 transition-opacity duration-500`} />
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-3 right-3 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
              <div className="absolute top-8 left-4 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: "500ms" }} />
              <div className="absolute bottom-12 right-6 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: "1000ms" }} />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
              <span className="text-3xl mb-2 transform group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-500 drop-shadow-lg">
                {cat.emoji}
              </span>
              <h3 className="text-base font-extrabold text-white drop-shadow-md leading-tight">
                {cat.name}
              </h3>
              <p className="text-[11px] text-white/80 mt-1 leading-snug max-w-[90%] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                {cat.desc}
              </p>
            </div>

            {/* Bottom shine effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        ))}
      </div>

      
    </div>
  );
};

export default CategoriesPage;

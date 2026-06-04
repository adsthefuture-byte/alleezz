import { useParams, useNavigate, Link } from "react-router-dom";
import { phoneProducts } from "@/data/phoneProducts";
import { useCart } from "@/context/CartContext";
import StoreHeader from "@/components/StoreHeader";
import StoreFooter from "@/components/StoreFooter";

import TrustBadges from "@/components/TrustBadges";
import { ShoppingBag, Heart, Share2, ArrowRight, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import StarRating from "@/components/StarRating";

const LIMITED_STOCK_IDS = ["ph15", "ph14"]; // iPhone 17 Pro Max, iPhone 17 Pro
const OUT_OF_STOCK_IDS = ["ph10"]; // iPhone 16 Plus

const PhoneDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImage(0);
    setSelectedStorage(0);
    setSelectedColor(0);
    setQuantity(1);
  }, [id]);

  const product = phoneProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <StoreHeader />
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-xl text-foreground font-bold">المنتج غير موجود</p>
          <button onClick={() => navigate("/")} className="mt-4 text-sale underline">العودة للرئيسية</button>
        </div>
      </div>
    );
  }

  const isLimitedStock = LIMITED_STOCK_IDS.includes(product.id);
  const isOutOfStock = OUT_OF_STOCK_IDS.includes(product.id);
  const currentStorage = product.storageOptions[selectedStorage];
  const currentColor = product.colors[selectedColor];
  const colorImages = product.colors
    .map((c) => c.image)
    .filter((img): img is string => !!img);
  const displayImages = colorImages.length > 0 ? colorImages : product.images;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: `${product.id}-${currentStorage.size}`,
        name: `${product.name} ${currentStorage.size}`,
        description: product.description,
        price: currentStorage.price,
        oldPrice: currentStorage.oldPrice,
        image: product.image,
        images: product.images,
        category: product.category,
        section: "جوالات" as any,
      });
    }
    toast.success(`تمت إضافة ${quantity} للسلة`, {
      description: `${product.name} - ${currentStorage.size} - ${product.colors[selectedColor].nameAr}`,
    });
  };

  const relatedPhones = phoneProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />

      <div className="px-4 py-3">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowRight className="w-4 h-4" />
          رجوع
        </button>
      </div>

      <div className="px-4 pb-8">
        <div className="md:flex md:gap-8 md:max-w-5xl md:mx-auto">
          {/* Image Gallery */}
          <div className="md:w-1/2">
            <div className="relative bg-secondary rounded-md overflow-hidden">
              {isLimitedStock && (
                <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs px-3 py-1.5 rounded-md font-bold flex items-center gap-1 animate-pulse">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  الكمية محدودة 🔥
                </span>
              )}
              {isOutOfStock && (
                <div className="absolute inset-0 z-10 bg-foreground/60 flex items-center justify-center">
                  <span className="bg-red-600 text-white text-lg px-6 py-3 rounded-lg font-bold shadow-lg">
                    نفذ من المخزون
                  </span>
                </div>
              )}
              <img
                src={displayImages[selectedImage] || displayImages[0]}
                alt={product.name}
                width={512}
                height={512}
                className={`w-full aspect-square object-cover transition-opacity duration-300 ${isOutOfStock ? "opacity-50 grayscale" : ""}`}
              />
            </div>
            {displayImages.length > 1 && (
              <div className="flex gap-2 mt-3 justify-center">
                {displayImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-sale shadow-md scale-105" : "border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx === 0 ? "أمامي" : "خلفي"}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="mt-6 md:mt-0 md:w-1/2 text-right">
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
            <p className="text-xs text-muted-foreground">{product.nameEn}</p>
            {product.rating && (
              <div className="mt-2">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
              </div>
            )}
            <p className="text-sm text-muted-foreground mt-2">{product.description}</p>

            {/* Limited stock warning */}
            {isLimitedStock && (
              <div className="mt-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-300 dark:border-orange-700 rounded-lg p-2.5 flex items-center gap-2 justify-end">
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400">⚡ الكمية محدودة — اطلب الآن قبل النفاذ!</span>
              </div>
            )}

            {/* Out of stock */}
            {isOutOfStock && (
              <div className="mt-3 bg-red-50 dark:bg-red-950/20 border border-red-300 dark:border-red-700 rounded-lg p-2.5 flex items-center gap-2 justify-end">
                <span className="text-xs font-bold text-red-600 dark:text-red-400">🚫 هذا المنتج نفذ من المخزون حالياً</span>
              </div>
            )}

            {/* Installment badges */}
            <div className="mt-4 flex flex-wrap gap-2 justify-end">
              <div className="flex items-center gap-1.5 bg-[#3FFFC6]/10 border border-[#3FFFC6]/30 rounded-md px-3 py-1.5">
                <span className="text-[10px] text-muted-foreground">تقسيط متاح</span>
                <span className="bg-[#3FFFC6] text-black text-[10px] px-1.5 py-0.5 rounded font-bold">tabby</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 border border-pink-300/30 rounded-md px-3 py-1.5">
                <span className="text-[10px] text-muted-foreground">تقسيط متاح</span>
                <span className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">tamara</span>
              </div>
            </div>

            {/* Colors */}
            <div className="mt-5">
              <p className="text-sm font-bold text-foreground mb-2">اللون: {product.colors[selectedColor].nameAr}</p>
              <div className="flex items-center gap-3 justify-end">
                {product.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(idx);
                      // Jump to this color's image in gallery
                      const img = color.image;
                      if (img) {
                        const imgIdx = displayImages.indexOf(img);
                        if (imgIdx >= 0) setSelectedImage(imgIdx);
                      } else {
                        setSelectedImage(0);
                      }
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === idx ? "border-sale scale-110 shadow-md ring-2 ring-sale/30" : "border-border hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.nameAr}
                  />
                ))}
              </div>
            </div>

            {/* Storage */}
            <div className="mt-5">
              <p className="text-sm font-bold text-foreground mb-2">المساحة</p>
              <div className="flex items-center gap-2 flex-wrap justify-end">
                {product.storageOptions.map((opt, idx) => (
                  <button
                    key={opt.size}
                    onClick={() => setSelectedStorage(idx)}
                    className={`px-4 py-2 rounded-sm border-2 text-sm font-bold transition-all ${
                      selectedStorage === idx
                        ? "border-sale bg-sale/10 text-sale"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    <span>{opt.size}</span>
                    <span className="block text-xs font-normal mt-0.5">{opt.price} ر.س</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-5 justify-end">
              <span className="text-sm text-muted-foreground line-through">{currentStorage.oldPrice} ر.س</span>
              <span className="text-2xl font-bold text-sale">{currentStorage.price} ر.س</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">شامل الضريبة</p>

            {/* Installment price hint */}
            <div className="mt-2 text-xs text-muted-foreground text-right space-y-0.5">
              <p>أو <span className="font-bold text-green-600">{Math.ceil(currentStorage.price / 4)} ر.س × 4</span> مع <span className="font-bold">Tamara</span></p>
              <p>أو <span className="font-bold text-green-600">{Math.ceil(currentStorage.price / 6)} ر.س × 6</span> مع <span className="font-bold">Tabby</span></p>
            </div>

            {/* Quantity */}
            {!isOutOfStock && (
              <div className="flex items-center gap-4 mt-5 justify-end">
                <span className="text-sm font-medium text-foreground">الكمية</span>
                <div className="flex items-center border border-border rounded-sm">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-foreground hover:bg-secondary">-</button>
                  <span className="px-4 py-2 text-foreground font-medium border-x border-border min-w-[3rem] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-foreground hover:bg-secondary">+</button>
                </div>
              </div>
            )}

            {/* Actions */}
            {!isOutOfStock ? (
              <>
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-foreground text-background py-3 rounded-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    إضافة للسلة
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                  <button className="border border-border p-3 rounded-sm text-muted-foreground hover:text-sale transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="border border-border p-3 rounded-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                <button
                  onClick={() => { handleAddToCart(); navigate("/checkout"); }}
                  className="w-full mt-3 bg-sale text-sale-foreground py-3 rounded-sm font-bold hover:opacity-90 transition-opacity"
                >
                  اشتري الآن
                </button>
              </>
            ) : (
              <div className="mt-5">
                <button
                  disabled
                  className="w-full bg-muted text-muted-foreground py-3 rounded-sm font-bold cursor-not-allowed opacity-60"
                >
                  غير متوفر حالياً
                </button>
                <button
                  className="w-full mt-2 border border-border text-foreground py-3 rounded-sm font-bold hover:bg-secondary transition-colors"
                >
                  🔔 أعلمني عند التوفر
                </button>
              </div>
            )}

            {/* Features */}
            <div className="mt-6 space-y-3 border-t border-border pt-5">
              <div className="flex items-center gap-3 justify-end text-sm text-muted-foreground">
                <span>توصيل مجاني لجميع مناطق المملكة</span>
                <span className="text-lg">🚚</span>
              </div>
              <div className="flex items-center gap-3 justify-end text-sm text-muted-foreground">
                <span>ضمان سنة كاملة</span>
                <span className="text-lg">🛡️</span>
              </div>
              <div className="flex items-center gap-3 justify-end text-sm text-muted-foreground">
                <span>تقسيط عبر Tabby و Tamara</span>
                <span className="text-lg">💳</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="px-4 max-w-5xl mx-auto">
        <TrustBadges />
      </div>

      {/* Related Phones */}
      {relatedPhones.length > 0 && (
        <div className="px-4 pb-8 md:max-w-5xl md:mx-auto">
          <h2 className="text-lg font-bold text-foreground text-right mb-4">جوالات قد تعجبك</h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2" dir="rtl">
            {relatedPhones.map((rp) => (
              <Link
                key={rp.id}
                to={`/phone/${rp.id}`}
                className="min-w-[160px] max-w-[160px] bg-card rounded-sm overflow-hidden shrink-0"
              >
                <div className="relative aspect-square bg-secondary overflow-hidden">
                  {LIMITED_STOCK_IDS.includes(rp.id) && (
                    <span className="absolute top-1 right-1 z-10 bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">محدود</span>
                  )}
                  {OUT_OF_STOCK_IDS.includes(rp.id) && (
                    <span className="absolute top-1 right-1 z-10 bg-red-600 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">نفذ</span>
                  )}
                  <img src={rp.image} alt={rp.name} className={`w-full h-full object-cover ${OUT_OF_STOCK_IDS.includes(rp.id) ? "opacity-50 grayscale" : ""}`} loading="lazy" />
                </div>
                <div className="p-2 text-right">
                  <p className="text-xs font-semibold text-foreground line-clamp-1">{rp.name}</p>
                  <div className="flex items-center gap-1 mt-1 justify-end flex-wrap">
                    {rp.colors.slice(0, 4).map((c) => (
                      <span key={c.name} className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: c.hex }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-1 justify-end">
                    <span className="text-xs text-muted-foreground line-through">{rp.storageOptions[0].oldPrice} ر.س</span>
                    <span className="text-sm font-bold text-sale">{rp.storageOptions[0].price} ر.س</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <StoreFooter />
      
    </div>
  );
};

export default PhoneDetailPage;

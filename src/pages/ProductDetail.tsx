import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StoreHeader from "@/components/StoreHeader";
import StoreFooter from "@/components/StoreFooter";

import TrustBadges from "@/components/TrustBadges";
import { ShoppingBag, Heart, Share2, Minus, Plus, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import StarRating from "@/components/StarRating";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
    setSelectedImage(0);
  }, [id]);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <StoreHeader />
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-xl text-foreground font-bold">المنتج غير موجود</p>
          <button onClick={() => navigate("/")} className="mt-4 text-sale underline">
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast.success(`تمت إضافة ${quantity} للسلة`, { description: product.name });
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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
              {product.badge && (
                <span className="absolute top-3 right-3 z-10 bg-badge-red text-sale-foreground text-sm px-3 py-1 rounded-sm font-medium">
                  {product.badge}
                </span>
              )}
              <span className="absolute top-3 left-3 z-10 bg-foreground text-background text-sm px-3 py-1 rounded-sm font-bold">
                خصم {discount}%
              </span>
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                width={512}
                height={512}
                className={`w-full aspect-square ${product.section === "منوعات" || product.section === "عسل" ? "object-contain" : "object-cover"} transition-opacity duration-300`}
              />
            </div>
            {productImages.length > 1 && (
              <div className="flex gap-2 mt-3 justify-center">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-sale shadow-md scale-105" : "border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="mt-6 md:mt-0 md:w-1/2 text-right">
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
            {product.rating && (
              <div className="mt-2">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
              </div>
            )}
            {product.description && (
              <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
            )}

            <div className="flex items-center gap-3 mt-4 justify-end">
              <span className="text-sm text-muted-foreground line-through">
                {product.oldPrice} ر.س
              </span>
              <span className="text-2xl font-bold text-sale">
                {product.price} ر.س
              </span>
            </div>

            <p className="text-xs text-muted-foreground mt-1">شامل الضريبة</p>

            {/* Installment badges */}
            {["لابتوبات", "شاشات", "ساعات", "طاولات خارجية", "جوالات"].includes(product.section) && (
              <>
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
                <div className="mt-2 text-xs text-muted-foreground text-right space-y-0.5">
                  <p>أو <span className="font-bold text-green-600">{Math.ceil(product.price / 4)} ر.س × 4</span> مع <span className="font-bold">Tamara</span></p>
                  <p>أو <span className="font-bold text-green-600">{Math.ceil(product.price / 6)} ر.س × 6</span> مع <span className="font-bold">Tabby</span></p>
                </div>
              </>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-6 justify-end">
              <span className="text-sm font-medium text-foreground">الكمية</span>
              <div className="flex items-center border border-border rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-foreground hover:bg-secondary"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-foreground font-medium border-x border-border min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-foreground hover:bg-secondary"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
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
              onClick={() => {
                handleAddToCart();
                navigate("/checkout");
              }}
              className="w-full mt-3 bg-sale text-sale-foreground py-3 rounded-sm font-bold hover:opacity-90 transition-opacity"
            >
              اشتري الآن
            </button>

            {/* Features */}
            <div className="mt-8 space-y-3 border-t border-border pt-6">
              <div className="flex items-center gap-3 justify-end text-sm text-muted-foreground">
                <span>توصيل مجاني لجميع مناطق المملكة</span>
                <span className="text-lg">🚚</span>
              </div>
              <div className="flex items-center gap-3 justify-end text-sm text-muted-foreground">
                <span>منتجات أصلية 100%</span>
                <span className="text-lg">✅</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="px-4 max-w-5xl mx-auto">
        <TrustBadges />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="px-4 pb-8 md:max-w-5xl md:mx-auto">
          <h2 className="text-lg font-bold text-foreground text-right mb-4">منتجات قد تعجبك</h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2" dir="rtl">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.id}
                to={`/product/${rp.id}`}
                className="min-w-[160px] max-w-[160px] bg-card rounded-sm overflow-hidden shrink-0"
              >
                <div className="aspect-square bg-secondary overflow-hidden">
                  <img src={rp.image} alt={rp.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-2 text-right">
                  <p className="text-xs font-semibold text-foreground line-clamp-2">{rp.name}</p>
                  <div className="flex items-center gap-1 mt-1 justify-end">
                    <span className="text-xs text-muted-foreground line-through">{rp.oldPrice} ر.س</span>
                    <span className="text-sm font-bold text-sale">{rp.price} ر.س</span>
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

export default ProductDetail;

import { Heart, Eye, ShoppingBag } from "lucide-react";
import StarRating from "@/components/StarRating";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const installmentSections = ["لابتوبات", "شاشات", "ساعات", "طاولات خارجية", "جوالات"];

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success("تمت الإضافة للسلة", { description: product.name });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-card rounded-sm overflow-hidden block"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {product.badge && (
          <span className={`absolute top-2 right-2 z-10 text-sale-foreground text-xs px-2 py-0.5 rounded-sm font-medium ${
            product.badge.includes("مجاناً") ? "bg-green-600 left-2 right-2 text-center" : "bg-badge-red"
          }`}>
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={512}
          height={512}
          className={`w-full h-full ${product.section === "منوعات" || product.section === "عسل" ? "object-contain" : "object-cover group-hover:scale-105"} transition-transform duration-300`}
        />
      </div>

      <div className="flex items-center gap-3 px-3 py-2">
        <button
          className="text-muted-foreground hover:text-sale transition-colors"
          aria-label="عرض سريع"
          onClick={(e) => e.stopPropagation()}
        >
          <Eye className="w-5 h-5" />
        </button>
        <button
          className="text-muted-foreground hover:text-sale transition-colors"
          aria-label="المفضلة"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <div className="px-3 pb-3 text-right">
        <h3 className="text-sm font-semibold text-foreground leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-xs text-muted-foreground mt-1">{product.description}</p>
        )}
        {product.rating && (
          <div className="mt-1.5">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
        )}
        <div className="flex items-center gap-2 mt-2 justify-end">
          <span className="text-xs text-muted-foreground line-through">
            {product.oldPrice} ر.س
          </span>
          <span className="text-base font-bold text-sale">
            {product.price} ر.س
          </span>
        </div>

        {installmentSections.includes(product.section) && (
          <div className="flex items-center gap-1 mt-1.5 justify-end">
            <span className="bg-[#3FFFC6] text-black text-[8px] px-1.5 py-0.5 rounded font-bold">tabby</span>
            <span className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">tamara</span>
            <span className="text-[9px] text-muted-foreground">تقسيط متاح</span>
          </div>
        )}

        {(product.section === "منوعات" || product.section === "عسل") && (
          <div className="mt-2 space-y-1 text-right">
            {product.stock !== undefined && product.stock <= 10 && (
              <div className="flex items-center gap-1 justify-end">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
                </span>
                <span className="text-[10px] font-bold text-red-600">
                  آخر {product.stock} قطع في المخزون
                </span>
              </div>
            )}
            <div className="text-[10px] text-green-700 font-semibold text-center bg-green-50 rounded py-0.5">
              🚚 شحن مجاني • التوصيل خلال 5 ساعات
            </div>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="w-full mt-3 flex items-center justify-center gap-2 border border-border rounded-sm py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          إضافة للسلة
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;

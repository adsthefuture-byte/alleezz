import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, AlertTriangle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { PhoneProduct } from "@/data/phoneProducts";
import { toast } from "sonner";
import StarRating from "@/components/StarRating";

const LIMITED_STOCK_IDS = ["ph15", "ph14"]; // iPhone 17 Pro Max, iPhone 17 Pro
const OUT_OF_STOCK_IDS = ["ph10"]; // iPhone 16 Plus

interface PhoneCardProps {
  product: PhoneProduct;
}

const PhoneCard = ({ product }: PhoneCardProps) => {
  const { addItem } = useCart();
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  const isLimitedStock = LIMITED_STOCK_IDS.includes(product.id);
  const isOutOfStock = OUT_OF_STOCK_IDS.includes(product.id);
  const currentStorage = product.storageOptions[selectedStorage];
  const currentColor = product.colors[selectedColor];
  const displayImage = currentColor.image || product.image;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;
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
    toast.success("تمت الإضافة للسلة", {
      description: `${product.name} - ${currentStorage.size} - ${product.colors[selectedColor].nameAr}`,
    });
  };

  return (
    <Link
      to={`/phone/${product.id}`}
      className="group bg-card rounded-lg overflow-hidden block shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {isLimitedStock && (
          <span className="absolute top-2 right-2 z-10 bg-orange-500 text-white text-[9px] px-2 py-1 rounded font-bold flex items-center gap-0.5 animate-pulse">
            <AlertTriangle className="w-3 h-3" />
            محدود 🔥
          </span>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 z-10 bg-foreground/50 flex items-center justify-center">
            <span className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-md font-bold">نفذ من المخزون</span>
          </div>
        )}
        <img
          src={displayImage}
          alt={product.name}
          loading="lazy"
          width={512}
          height={512}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${isOutOfStock ? "opacity-50 grayscale" : ""}`}
        />
      </div>

      {/* Colors */}
      <div className="flex items-center justify-center gap-1.5 pt-3 px-3">
        {product.colors.map((color, idx) => (
          <button
            key={color.name}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedColor(idx); }}
            className={`w-5 h-5 rounded-full border-2 transition-all ${
              selectedColor === idx ? "border-sale scale-110 shadow-sm" : "border-border"
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.nameAr}
          />
        ))}
      </div>

      {/* Info */}
      <div className="px-3 pb-3 text-right">
        <h3 className="text-sm font-bold text-foreground mt-2 leading-tight line-clamp-1">
          {product.name}
        </h3>
        <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">{product.nameEn}</p>

        {/* Storage Options */}
        <div className="flex items-center gap-1 mt-2 flex-wrap justify-end">
          {product.storageOptions.map((opt, idx) => (
            <button
              key={opt.size}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedStorage(idx); }}
              className={`text-[10px] px-2 py-0.5 rounded-sm border transition-all font-medium ${
                selectedStorage === idx
                  ? "border-sale bg-sale/10 text-sale"
                  : "border-border text-muted-foreground hover:border-foreground"
              }`}
            >
              {opt.size}
            </button>
          ))}
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="mt-1.5">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mt-2 justify-end">
          <span className="text-xs text-muted-foreground line-through">
            {currentStorage.oldPrice} ر.س
          </span>
          <span className="text-base font-bold text-sale">
            {currentStorage.price} ر.س
          </span>
        </div>

        {/* Installment badges */}
        <div className="flex items-center gap-1 mt-1.5 justify-end">
          <span className="bg-[#3FFFC6] text-black text-[8px] px-1.5 py-0.5 rounded font-bold">tabby</span>
          <span className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">tamara</span>
          <span className="text-[9px] text-muted-foreground">تقسيط متاح</span>
        </div>

        {isOutOfStock ? (
          <div className="w-full mt-2 flex items-center justify-center gap-2 bg-muted text-muted-foreground rounded-sm py-2 text-sm font-bold opacity-60 cursor-not-allowed">
            غير متوفر
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full mt-2 flex items-center justify-center gap-2 bg-foreground text-background rounded-sm py-2 text-sm font-bold hover:opacity-90 transition-opacity"
          >
            إضافة للسلة
            <ShoppingBag className="w-4 h-4" />
          </button>
        )}
      </div>
    </Link>
  );
};

export default PhoneCard;

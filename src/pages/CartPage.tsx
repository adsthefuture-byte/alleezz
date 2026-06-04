import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import StoreHeader from "@/components/StoreHeader";

import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <StoreHeader />
        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
          <p className="text-xl text-foreground font-bold">سلة المشتريات فارغة</p>
          <p className="text-sm text-muted-foreground mt-2">ابدأ التسوق وأضف منتجاتك المفضلة</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-foreground text-background px-8 py-3 rounded-sm font-bold hover:opacity-90"
          >
            تصفح المنتجات
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />

      <div className="px-4 py-3">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowRight className="w-4 h-4" />
          رجوع
        </button>
      </div>

      <div className="px-4 pb-4">
        <h1 className="text-xl font-bold text-foreground text-right">
          سلة المشتريات ({totalItems})
        </h1>
      </div>

      <div className="px-4 space-y-3 pb-40">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex gap-3 bg-card border border-border rounded-sm p-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-sm flex-shrink-0"
            />
            <div className="flex-1 text-right">
              <h3 className="text-sm font-semibold text-foreground line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-2 mt-1 justify-end">
                <span className="text-xs text-muted-foreground line-through">{product.oldPrice} ر.س</span>
                <span className="text-sm font-bold text-sale">{product.price} ر.س</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={() => removeItem(product.id)}
                  className="text-muted-foreground hover:text-sale transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="flex items-center border border-border rounded-sm">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="px-2 py-1 text-foreground hover:bg-secondary"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-3 py-1 text-sm font-medium text-foreground border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="px-2 py-1 text-foreground hover:bg-secondary"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed bottom summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-sale">{totalPrice} ر.س</span>
          <span className="text-sm text-foreground font-medium">الإجمالي</span>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-foreground text-background py-3 rounded-sm font-bold hover:opacity-90 transition-opacity"
        >
          إتمام الطلب
        </button>
      </div>
    </div>
  );
};

export default CartPage;

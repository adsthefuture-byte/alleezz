import { useState } from "react";
import { Tag, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";

const VALID_CODE = "f200";
const DISCOUNT_PERCENT = 16;

interface CouponCodeBoxProps {
  onApply: (discountPercent: number) => void;
  onSkip: () => void;
  applied: boolean;
}

const CouponCodeBox = ({ onApply, onSkip, applied }: CouponCodeBoxProps) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleApply = () => {
    if (applied) return;
    if (code.trim().toLowerCase() === VALID_CODE) {
      setError(false);
      onApply(DISCOUNT_PERCENT);
      toast.success("تم تطبيق الخصم بنجاح! 🎉", {
        description: `حصلت على خصم ${DISCOUNT_PERCENT}% على طلبك`,
      });
    } else {
      setError(true);
      toast.error("الكود غير صحيح", {
        description: "تأكد من كتابة الكود بشكل صحيح",
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card via-card to-secondary/30 p-5 shadow-sm">
      {/* Decorative corner accent */}
      <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-sale/5 blur-2xl" />
      <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/5 blur-xl" />

      <div className="relative space-y-4">
        {/* Header */}
        <div className="flex items-center gap-2 justify-end">
          <div>
            <h3 className="text-sm font-bold text-foreground text-right">كود الخصم</h3>
            <p className="text-[11px] text-muted-foreground text-right">أدخل كود الخصم للحصول على سعر مميز</p>
          </div>
          <div className="w-9 h-9 rounded-lg bg-sale/10 flex items-center justify-center">
            <Tag className="w-4 h-4 text-sale" />
          </div>
        </div>

        {/* Input + Apply */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleApply}
            disabled={applied || !code.trim()}
            className={`shrink-0 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              applied
                ? "bg-green-500 text-white cursor-default"
                : "bg-foreground text-background hover:opacity-90 disabled:opacity-40"
            }`}
          >
            {applied ? (
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                تم
              </span>
            ) : (
              "تطبيق"
            )}
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError(false);
              }}
              disabled={applied}
              placeholder="أدخل الكود هنا..."
              className={`w-full bg-background border rounded-lg py-2.5 px-4 text-right text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                error
                  ? "border-destructive focus:border-destructive"
                  : applied
                  ? "border-green-500 bg-green-50/50 dark:bg-green-950/20"
                  : "border-border focus:border-foreground"
              }`}
            />
            {error && (
              <XCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
            )}
            {applied && (
              <CheckCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
            )}
          </div>
        </div>

        {/* Applied success message */}
        {applied && (
          <div className="flex items-center gap-2 justify-end bg-green-50 dark:bg-green-950/20 rounded-lg p-3 border border-green-200 dark:border-green-800/40">
            <div className="text-right">
              <p className="text-xs font-bold text-green-600">تم تطبيق خصم {DISCOUNT_PERCENT}% ✨</p>
              <p className="text-[10px] text-green-500/80">سيظهر الخصم على الإجمالي أدناه</p>
            </div>
            <Sparkles className="w-5 h-5 text-green-500 shrink-0" />
          </div>
        )}

        {/* Action buttons */}
        {!applied && (
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 py-2.5 rounded-lg text-xs font-medium border border-border text-muted-foreground hover:bg-secondary transition-colors"
            >
              تخطي
            </button>
            <button
              type="button"
              onClick={handleApply}
              disabled={!code.trim()}
              className="flex-1 py-2.5 rounded-lg text-xs font-bold bg-foreground text-background hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              التالي →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CouponCodeBox;

import { CreditCard, Percent, Wallet, ChevronDown } from "lucide-react";
import { useState } from "react";

export type PaymentMethod = "visa" | "installment" | "tabby" | "tamara";

interface PaymentMethodSelectorProps {
  selected: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
  totalPrice: number;
  installmentMonths: number;
  onInstallmentMonthsChange: (months: number) => void;
  tabbyMonths: number;
  onTabbyMonthsChange: (months: number) => void;
  tamaraMonths: number;
  onTamaraMonthsChange: (months: number) => void;
}

const PaymentMethodSelector = ({
  selected,
  onSelect,
  totalPrice,
  installmentMonths,
  onInstallmentMonthsChange,
  tabbyMonths,
  onTabbyMonthsChange,
  tamaraMonths,
  onTamaraMonthsChange,
}: PaymentMethodSelectorProps) => {

  const installmentOptions = [3, 6, 9, 12, 18, 24];
  const tabbyOptions = [1, 2, 3, 4, 5, 6];
  const tamaraOptions = [2, 3, 4];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-right">
        <Wallet className="w-5 h-5 text-foreground" />
        <h3 className="text-base font-bold text-foreground">طريقة الدفع</h3>
      </div>

      {/* Visa / Mastercard */}
      <label
        onClick={() => onSelect("visa")}
        className={`flex items-center gap-3 rounded-lg p-4 cursor-pointer border-2 transition-all ${
          selected === "visa"
            ? "border-green-600 bg-green-50 dark:bg-green-950/20"
            : "border-border bg-card hover:border-muted-foreground/30"
        }`}
      >
        <div className="flex-1 text-right">
          <div className="flex items-center gap-2 justify-end">
            <span className="text-sm font-bold text-foreground">بطاقة فيزا / ماستركارد</span>
            <CreditCard className="w-5 h-5 text-foreground" />
          </div>
          <p className="text-xs text-green-600 font-medium mt-0.5">دفع كامل المبلغ</p>
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected === "visa" ? "border-green-600" : "border-muted-foreground/40"
        }`}>
          {selected === "visa" && <div className="w-2.5 h-2.5 rounded-full bg-green-600" />}
        </div>
      </label>

      {/* Installment */}
      <div>
        <label
          onClick={() => onSelect("installment")}
          className={`flex items-center gap-3 rounded-lg p-4 cursor-pointer border-2 transition-all ${
            selected === "installment"
              ? "border-green-600 bg-green-50 dark:bg-green-950/20 rounded-b-none"
              : "border-border bg-card hover:border-muted-foreground/30"
          }`}
        >
          <div className="flex-1 text-right">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm font-bold text-foreground">تقسيط بالفيزا</span>
              <Percent className="w-5 h-5 text-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">اختر عدد الأشهر المناسب لك</p>
            <span className="inline-block text-[10px] bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded mt-1 font-medium">حتى 24 شهر بدون فوائد</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selected === "installment" ? "border-green-600" : "border-muted-foreground/40"
          }`}>
            {selected === "installment" && <div className="w-2.5 h-2.5 rounded-full bg-green-600" />}
          </div>
        </label>
        {selected === "installment" && (
          <div className="border-2 border-t-0 border-green-600 rounded-b-lg bg-green-50/50 dark:bg-green-950/10 p-3 space-y-2">
            <p className="text-xs font-bold text-foreground text-right">اختر عدد الأشهر:</p>
            <div className="flex flex-wrap gap-2 justify-end">
              {installmentOptions.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => onInstallmentMonthsChange(m)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    installmentMonths === m
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-card border border-border text-foreground hover:border-green-600"
                  }`}
                >
                  {m} شهر
                </button>
              ))}
            </div>
            <div className="bg-card rounded-md p-3 mt-2 border border-green-200 dark:border-green-800">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-green-600">{Math.ceil(totalPrice / installmentMonths)} ر.س/شهر</span>
                <span className="text-muted-foreground">الدفعة الشهرية</span>
              </div>
              <div className="flex justify-between items-center text-xs mt-1 text-muted-foreground">
                <span>{totalPrice} ر.س</span>
                <span>المبلغ الإجمالي</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabby */}
      <div>
        <label
          onClick={() => onSelect("tabby")}
          className={`flex items-center gap-3 rounded-lg p-4 cursor-pointer border-2 transition-all ${
            selected === "tabby"
              ? "border-green-600 bg-green-50 dark:bg-green-950/20 rounded-b-none"
              : "border-border bg-card hover:border-muted-foreground/30"
          }`}
        >
          <div className="flex-1 text-right">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm font-bold text-foreground">Tabby</span>
              <span className="bg-[#3FFFC6] text-black text-xs px-2 py-0.5 rounded font-bold">tabby</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">اختر عدد الدفعات</p>
            <span className="inline-block text-[10px] bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded mt-1 font-medium">من 1 لـ 6 أشهر</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selected === "tabby" ? "border-green-600" : "border-muted-foreground/40"
          }`}>
            {selected === "tabby" && <div className="w-2.5 h-2.5 rounded-full bg-green-600" />}
          </div>
        </label>
        {selected === "tabby" && (
          <div className="border-2 border-t-0 border-green-600 rounded-b-lg bg-green-50/50 dark:bg-green-950/10 p-3 space-y-2">
            <p className="text-xs font-bold text-foreground text-right">اختر عدد الدفعات:</p>
            <div className="flex flex-wrap gap-2 justify-end">
              {tabbyOptions.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => onTabbyMonthsChange(m)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    tabbyMonths === m
                      ? "bg-[#3FFFC6] text-black shadow-md"
                      : "bg-card border border-border text-foreground hover:border-[#3FFFC6]"
                  }`}
                >
                  {m} {m === 1 ? "دفعة" : "دفعات"}
                </button>
              ))}
            </div>
            <div className="bg-card rounded-md p-3 mt-2 border border-green-200 dark:border-green-800">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-green-600">{Math.ceil(totalPrice / tabbyMonths)} ر.س</span>
                <span className="text-muted-foreground">الدفعة {tabbyMonths === 1 ? "الكاملة" : "الشهرية"}</span>
              </div>
              <div className="flex justify-between items-center text-xs mt-1 text-muted-foreground">
                <span>{totalPrice} ر.س</span>
                <span>المبلغ الإجمالي</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tamara */}
      <div>
        <label
          onClick={() => onSelect("tamara")}
          className={`flex items-center gap-3 rounded-lg p-4 cursor-pointer border-2 transition-all ${
            selected === "tamara"
              ? "border-green-600 bg-green-50 dark:bg-green-950/20 rounded-b-none"
              : "border-border bg-card hover:border-muted-foreground/30"
          }`}
        >
          <div className="flex-1 text-right">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm font-bold text-foreground">Tamara</span>
              <span className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs px-2 py-0.5 rounded font-bold">tamara</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">اختر عدد الدفعات</p>
            <span className="inline-block text-[10px] bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded mt-1 font-medium">حتى 4 أشهر بدون فوائد</span>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            selected === "tamara" ? "border-green-600" : "border-muted-foreground/40"
          }`}>
            {selected === "tamara" && <div className="w-2.5 h-2.5 rounded-full bg-green-600" />}
          </div>
        </label>
        {selected === "tamara" && (
          <div className="border-2 border-t-0 border-green-600 rounded-b-lg bg-green-50/50 dark:bg-green-950/10 p-3 space-y-2">
            <p className="text-xs font-bold text-foreground text-right">اختر عدد الدفعات:</p>
            <div className="flex flex-wrap gap-2 justify-end">
              {tamaraOptions.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => onTamaraMonthsChange(m)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                    tamaraMonths === m
                      ? "bg-gradient-to-r from-pink-400 to-yellow-400 text-white shadow-md"
                      : "bg-card border border-border text-foreground hover:border-pink-400"
                  }`}
                >
                  {m} دفعات
                </button>
              ))}
            </div>
            <div className="bg-card rounded-md p-3 mt-2 border border-green-200 dark:border-green-800">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-green-600">{Math.ceil(totalPrice / tamaraMonths)} ر.س</span>
                <span className="text-muted-foreground">الدفعة الشهرية</span>
              </div>
              <div className="flex justify-between items-center text-xs mt-1 text-muted-foreground">
                <span>{totalPrice} ر.س</span>
                <span>المبلغ الإجمالي</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;

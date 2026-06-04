import { createContext, useContext, useState, ReactNode } from "react";

interface DiscountContextType {
  discountPercent: number;
  discountApplied: boolean;
  applyDiscount: (percent: number) => void;
}

const DiscountContext = createContext<DiscountContextType | undefined>(undefined);

export const DiscountProvider = ({ children }: { children: ReactNode }) => {
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);

  const applyDiscount = (percent: number) => {
    setDiscountPercent(percent);
    setDiscountApplied(true);
  };

  return (
    <DiscountContext.Provider value={{ discountPercent, discountApplied, applyDiscount }}>
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscount = () => {
  const ctx = useContext(DiscountContext);
  if (!ctx) throw new Error("useDiscount must be used within DiscountProvider");
  return ctx;
};

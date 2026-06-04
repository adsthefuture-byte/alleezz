import ProductCard from "./ProductCard";
import PhoneCard from "./PhoneCard";
import ScrollReveal from "./ScrollReveal";
import { makeupProducts, perfumeProducts, bagProducts, homeProducts, officeProducts, diningTableProducts, outdoorTableProducts } from "@/data/products";
import { laptopProducts, monitorProducts, earbudProducts, powerBankProducts } from "@/data/techProducts";
import { luxuryWatchProducts } from "@/data/watchProducts";
import { phoneProducts } from "@/data/phoneProducts";
import { useState } from "react";

const tabs = [
  { label: "الكل", key: "all" },
  { label: "مكياج", key: "makeup" },
  { label: "جوالات", key: "phones" },
  { label: "لابتوبات", key: "laptops" },
  { label: "شاشات", key: "monitors" },
  { label: "سماعات", key: "earbuds" },
  { label: "شواحن", key: "powerbanks" },
  { label: "عطور", key: "perfume" },
  { label: "شنط", key: "bags" },
  { label: "منزلية", key: "home" },
  { label: "مكتبي", key: "office" },
  { label: "سفرة", key: "dining" },
  { label: "خارجية", key: "outdoor" },
  { label: "ساعات", key: "watches" },
];

const allDeals = {
  all: [...makeupProducts.slice(0, 2), ...laptopProducts.slice(0, 2), ...earbudProducts.slice(0, 2), ...luxuryWatchProducts.slice(0, 2), ...perfumeProducts.slice(0, 2), ...bagProducts.slice(0, 2)],
  makeup: makeupProducts.slice(0, 6),
  perfume: perfumeProducts.slice(0, 6),
  bags: bagProducts.slice(0, 6),
  home: homeProducts.slice(0, 6),
  office: officeProducts.slice(0, 6),
  dining: diningTableProducts.slice(0, 6),
  outdoor: outdoorTableProducts.slice(0, 6),
  laptops: laptopProducts.slice(0, 6),
  monitors: monitorProducts.slice(0, 6),
  earbuds: earbudProducts.slice(0, 6),
  powerbanks: powerBankProducts.slice(0, 6),
  watches: luxuryWatchProducts.slice(0, 6),
};

const DealsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const isPhones = activeTab === "phones";
  const products = isPhones ? [] : allDeals[activeTab as keyof typeof allDeals];

  return (
    <section className="px-4 py-8">
      <ScrollReveal>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-extrabold text-foreground">🔥 العروض الحصرية</h2>
          <p className="text-xs text-muted-foreground mt-1">أقوى الخصومات من جميع الأقسام</p>
          <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-secondary text-muted-foreground hover:bg-foreground/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-3">
        {isPhones
          ? phoneProducts.slice(0, 6).map((phone, i) => (
              <ScrollReveal key={phone.id} animation="scale-in" delay={i * 60}>
                <PhoneCard product={phone} />
              </ScrollReveal>
            ))
          : products.map((product, i) => (
              <ScrollReveal key={product.id} animation="scale-in" delay={i * 60}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
      </div>
    </section>
  );
};

export default DealsSection;

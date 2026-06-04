import { useParams, useNavigate } from "react-router-dom";
import { products, diningTableProducts, outdoorTableProducts } from "@/data/products";
import { laptopProducts, monitorProducts, earbudProducts, powerBankProducts } from "@/data/techProducts";
import { allWatchProducts } from "@/data/watchProducts";
import { variousProducts } from "@/data/variousProducts";
import { honeyProducts } from "@/data/honeyProducts";
import { phoneProducts } from "@/data/phoneProducts";
import StoreHeader from "@/components/StoreHeader";
import ProductCard from "@/components/ProductCard";
import PhoneCard from "@/components/PhoneCard";

import StoreFooter from "@/components/StoreFooter";

import { ChevronDown, ArrowRight } from "lucide-react";

const CategoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const categoryName = decodeURIComponent(name || "");

  const mainSections = ["مكياج", "عطور", "شنط", "أدوات منزلية", "أثاث مكتبي", "جوالات", "طاولات سفرة", "طاولات خارجية", "لابتوبات", "شاشات", "سماعات", "شواحن", "ساعات", "منوعات", "عسل"];
  const isMainSection = mainSections.includes(categoryName);
  const isPhoneSection = categoryName === "جوالات";
  const isDiningSection = categoryName === "طاولات سفرة";
  const isOutdoorSection = categoryName === "طاولات خارجية";
  const isLaptopSection = categoryName === "لابتوبات";
  const isMonitorSection = categoryName === "شاشات";
  const isEarbudSection = categoryName === "سماعات";
  const isPowerBankSection = categoryName === "شواحن";
  const isWatchSection = categoryName === "ساعات";
  const isVariousSection = categoryName === "منوعات";
  const isHoneySection = categoryName === "عسل";

  const filteredProducts = isPhoneSection || isDiningSection || isOutdoorSection || isLaptopSection || isMonitorSection || isEarbudSection || isPowerBankSection || isWatchSection || isVariousSection || isHoneySection
    ? (isDiningSection ? diningTableProducts : isOutdoorSection ? outdoorTableProducts : isLaptopSection ? laptopProducts : isMonitorSection ? monitorProducts : isEarbudSection ? earbudProducts : isPowerBankSection ? powerBankProducts : isWatchSection ? allWatchProducts : isVariousSection ? variousProducts : isHoneySection ? honeyProducts : [])
    : isMainSection
      ? products.filter((p) => p.section === categoryName)
      : products.filter((p) => p.category === categoryName);

  const filteredPhones = isPhoneSection ? phoneProducts : [];

  const totalCount = isPhoneSection ? filteredPhones.length : filteredProducts.length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StoreHeader />

      <div className="px-4 py-3">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowRight className="w-4 h-4" />
          رجوع
        </button>
      </div>

      <div className="px-4 py-3 text-sm text-muted-foreground text-right">
        الرئيسية &lt; {categoryName}
      </div>

      <div className="px-4 pb-2">
        <h1 className="text-xl font-bold text-foreground text-right">{categoryName}</h1>
        <p className="text-sm text-muted-foreground text-right mt-1">{totalCount} منتج</p>
      </div>

      {categoryName === "عطور" && (
        <div className="mx-4 mb-3 bg-green-600 text-white rounded-lg p-3 text-center">
          <p className="text-lg font-bold">🎁 عرض خاص - اشتري منتج واحصل على الثاني مجاناً!</p>
          <p className="text-sm opacity-90 mt-1">العرض ساري على جميع منتجات العطور والبخور</p>
        </div>
      )}

      {categoryName === "طاولات خارجية" && (
        <div className="mx-4 mb-3 bg-sale text-sale-foreground rounded-lg p-3 text-center">
          <p className="text-lg font-bold">🌿 خصم 35% على جميع الطاولات الخارجية!</p>
          <p className="text-sm opacity-90 mt-1">جلسات حدائق وبلكونات بأسعار لا تُقاوم</p>
        </div>
      )}

      <div className="flex items-center gap-4 px-4 py-3 border-b border-border">
        <button className="flex items-center gap-1 text-sm text-foreground font-medium">ترتيب</button>
        <button className="flex items-center gap-1 text-sm text-muted-foreground border border-border rounded-sm px-3 py-1">
          مقترحاتنا
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 flex-1">
        {isPhoneSection ? (
          filteredPhones.map((phone) => (
            <PhoneCard key={phone.id} product={phone} />
          ))
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-16 text-muted-foreground">
            <p className="text-lg">لا توجد منتجات في هذا القسم حالياً</p>
          </div>
        )}
      </div>

      <StoreFooter />
    </div>
  );
};

export default CategoryPage;

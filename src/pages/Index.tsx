import StoreHeader from "@/components/StoreHeader";
import WelcomeCouponPopup from "@/components/WelcomeCouponPopup";
import StoreFooter from "@/components/StoreFooter";
import PhoneCard from "@/components/PhoneCard";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";

import FeaturedCategories from "@/components/FeaturedCategories";
import DealsSection from "@/components/DealsSection";
import PromoBanner from "@/components/PromoBanner";
import ScrollReveal from "@/components/ScrollReveal";
import BrandRatings from "@/components/BrandRatings";

import { phoneProducts } from "@/data/phoneProducts";
import { diningTableProducts, outdoorTableProducts } from "@/data/products";
import { laptopProducts, monitorProducts, earbudProducts, powerBankProducts } from "@/data/techProducts";
import { luxuryWatchProducts, smartWatchProducts } from "@/data/watchProducts";
import { variousProducts } from "@/data/variousProducts";
import { honeyProducts } from "@/data/honeyProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <WelcomeCouponPopup />
      <StoreHeader />

      {/* Marquee Banner */}
      <div className="bg-sale text-sale-foreground py-2 text-xs font-medium overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          🚚 توصيل مجاني لجميع أنحاء المملكة | التوصيل خلال 5 ساعات بحد أقصى ⚡ &nbsp;&nbsp;&nbsp;&nbsp; 🔥 خصومات تصل حتى 50% &nbsp;&nbsp;&nbsp;&nbsp; 🚚 توصيل مجاني لجميع أنحاء المملكة | التوصيل خلال 5 ساعات بحد أقصى ⚡
        </div>
      </div>

      {/* Hero */}
      <HeroCarousel />

      {/* Categories */}
      <FeaturedCategories />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Deals */}
      <DealsSection />

      {/* Phones Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">📱 جوالات ايفون</h2>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {phoneProducts.map((phone, i) => (
            <ScrollReveal key={phone.id} animation="fade-up" delay={i * 80}>
              <PhoneCard product={phone} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Dining Tables Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">🍽️ طاولات سفرة</h2>
            <p className="text-xs text-muted-foreground mt-1">تصاميم فاخرة بأسعار تنافسية</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {diningTableProducts.slice(0, 6).map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Outdoor Tables Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">🌿 طاولات خارجية</h2>
            <p className="text-xs text-muted-foreground mt-1">خصم 35% على جميع الطاولات الخارجية</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {outdoorTableProducts.slice(0, 6).map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Laptops Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">💻 لابتوبات</h2>
            <p className="text-xs text-muted-foreground mt-1">أحدث الموديلات بأسعار أقل من السوق</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {laptopProducts.map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Monitors Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">🖥️ شاشات</h2>
            <p className="text-xs text-muted-foreground mt-1">شاشات OLED و 4K للقيمنق والتصميم</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {monitorProducts.map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Earbuds Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">🎧 سماعات لاسلكية</h2>
            <p className="text-xs text-muted-foreground mt-1">أفضل السماعات بعزل ضوضاء متقدم</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {earbudProducts.map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Power Banks Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">🔋 شواحن متنقلة</h2>
            <p className="text-xs text-muted-foreground mt-1">باور بانك بشحن سريع وسعات كبيرة</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {powerBankProducts.map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Luxury Watches Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">⌚ ساعات فاخرة</h2>
            <p className="text-xs text-muted-foreground mt-1">أشهر الماركات العالمية بأسعار لا تُصدق</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {luxuryWatchProducts.slice(0, 8).map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Smart Watches Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">⌚ ساعات ذكية</h2>
            <p className="text-xs text-muted-foreground mt-1">Apple Watch, Samsung, Google</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {smartWatchProducts.map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Various Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">🎁 قسم منوعات</h2>
            <p className="text-xs text-muted-foreground mt-1">منتجات مختارة بعروض حصرية</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {variousProducts.map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 80}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Honey Section */}
      <section className="px-4 py-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-extrabold text-foreground">🍯 قسم العسل</h2>
            <p className="text-xs text-muted-foreground mt-1">عسل طبيعي 100% ومكسرات فاخرة</p>
            <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-3">
          {honeyProducts.map((product, i) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={i * 60}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Brand Ratings */}
      <ScrollReveal>
        <BrandRatings />
      </ScrollReveal>

      <StoreFooter />
    </div>
  );
};

export default Index;

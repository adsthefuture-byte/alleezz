import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import catMakeup from "@/assets/cat-makeup.jpg";
import catPerfume from "@/assets/cat-perfume.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catHome from "@/assets/cat-home.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catPhones from "@/assets/cat-phones.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catOutdoor from "@/assets/cat-outdoor.jpg";
import catEarbuds from "@/assets/earbuds-airpods-pro2.jpg";
import catPowerbank from "@/assets/powerbank-anker-737.jpg";
import catMonitor from "@/assets/monitor-samsung-odyssey.jpg";
import watchApRoyaloak from "@/assets/watch-ap-royaloak.jpg";

const categories = [
  { name: "مكياج", emoji: "💄", image: catMakeup, desc: "أفضل المنتجات بأسعار مخفضة" },
  { name: "عطور", emoji: "🌸", image: catPerfume, desc: "عطور وبخور فاخرة" },
  { name: "شنط", emoji: "👜", image: catBags, desc: "تصاميم أنيقة وعملية" },
  { name: "أدوات منزلية", emoji: "🏠", image: catHome, desc: "أجهزة ذكية للمنزل" },
  { name: "أثاث مكتبي", emoji: "🪑", image: catOffice, desc: "كراسي ومكاتب بخصم 60%" },
  { name: "جوالات", emoji: "📱", image: catPhones, desc: "ايفون بأقل الأسعار" },
  { name: "لابتوبات", emoji: "💻", image: "https://i.ibb.co/fVKBLkXR/Mac-Book-Air-13-in-M5-Midnight-PDP-Image-Position-1-en-ME-2cebf58a-6744-44bf-ba4a-ad165a49efd4.webp", desc: "أحدث اللابتوبات بأقل الأسعار" },
  { name: "شاشات", emoji: "🖥️", image: catMonitor, desc: "شاشات OLED و 4K" },
  { name: "سماعات", emoji: "🎧", image: catEarbuds, desc: "سماعات لاسلكية احترافية" },
  { name: "شواحن", emoji: "🔋", image: catPowerbank, desc: "باور بانك بشحن سريع" },
  { name: "ساعات", emoji: "⌚", image: watchApRoyaloak, desc: "ساعات فاخرة وذكية" },
  { name: "طاولات سفرة", emoji: "🍽️", image: catDining, desc: "تصاميم فاخرة بأسعار تنافسية" },
  { name: "طاولات خارجية", emoji: "🌿", image: catOutdoor, desc: "جلسات حدائق بخصم 35%" },
  { name: "منوعات", emoji: "🎁", image: "https://i.ibb.co/Y4MXNrJZ/1000335b-2711-4ba3-a63b-eaecfe312943.avif", desc: "عروض حصرية ومنتجات مختارة" },
  { name: "عسل", emoji: "🍯", image: "https://i.ibb.co/N6TLkd4V/honey-nuts.jpg", desc: "عسل طبيعي ومكسرات بأجود الأنواع" },
];

const FeaturedCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-8">
      <ScrollReveal>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-foreground">تسوق حسب القسم</h2>
          <div className="w-12 h-1 bg-sale mx-auto mt-2 rounded-full" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {categories.map((cat, i) => {
          const isLast = i === categories.length - 1 && categories.length % 3 === 1;
          return (
            <ScrollReveal key={cat.name} animation={i % 2 === 0 ? "slide-right" : "slide-left"} delay={i * 50} className={isLast ? "col-span-3 md:col-span-1" : ""}>
              <button
                onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
                className="relative rounded-lg overflow-hidden group h-28 md:h-36 w-full shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent group-hover:from-foreground/80 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-2">
                  <span className="text-lg mb-0.5 transform group-hover:scale-125 transition-transform duration-300">{cat.emoji}</span>
                  <h3 className="text-xs font-bold text-background leading-tight">{cat.name}</h3>
                </div>
              </button>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCategories;

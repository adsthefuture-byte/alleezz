import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import catMakeup from "@/assets/cat-makeup.jpg";
import catPerfume from "@/assets/cat-perfume.jpg";
import catBags from "@/assets/cat-bags.jpg";
import catHome from "@/assets/cat-home.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catPhones from "@/assets/cat-phones.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catOutdoor from "@/assets/cat-outdoor.jpg";
import tabbyLogo from "@/assets/tabby-logo.webp";
import tamaraLogo from "@/assets/tamara-logo.webp";

const slides = [
  { image: catPhones, title: "جوالات ايفون", subtitle: "من ايفون 14 إلى ايفون 17 بأقل الأسعار", category: "جوالات", accent: "ضمان سنة كاملة" },
  { image: catDining, title: "طاولات سفرة فاخرة", subtitle: "تصاميم إيطالية وعصرية بأسعار لا تُقاوم", category: "طاولات سفرة", accent: "أقل من السوق بـ 199 ر.س" },
  { image: catOutdoor, title: "طاولات خارجية", subtitle: "جلسات حدائق وبلكونات مميزة", category: "طاولات خارجية", accent: "خصم 35% على الجميع" },
  { image: catPerfume, title: "عطور فاخرة", subtitle: "اشتري 1 واحصل على الثاني مجاناً", category: "عطور", accent: "من أرقى الماركات العالمية" },
  { image: catMakeup, title: "مكياج احترافي", subtitle: "خصومات تصل حتى 50%", category: "مكياج", accent: "جمالك يبدأ من هنا" },
  { image: catBags, title: "شنط أنيقة", subtitle: "تصاميم عصرية بأسعار مخفضة", category: "شنط", accent: "سفر • لابتوب • يومية" },
  { image: catHome, title: "أدوات منزلية", subtitle: "أجهزة مطبخ ومنزل ذكية", category: "أدوات منزلية", accent: "جودة عالية • سعر لا يُقاوم" },
  { image: catOffice, title: "أثاث مكتبي", subtitle: "كراسي جيمنج ومكاتب بخصم 60%", category: "أثاث مكتبي", accent: "راحة بلا حدود" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[28vh] md:h-[40vh] overflow-hidden bg-foreground/5">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
          style={{ pointerEvents: i === current ? "auto" : "none" }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent pointer-events-none" />
          
          <div className={`absolute bottom-0 right-0 left-0 p-4 md:p-10 transition-all duration-700 delay-200 ${
            i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-sale text-sale-foreground rounded-sm mb-2 tracking-wider">
              {slide.accent}
            </span>
            <h2 className="text-xl md:text-4xl font-extrabold text-background mb-1 leading-tight">
              {slide.title}
            </h2>
            <p className="text-background/80 text-xs md:text-base mb-3 font-light">
              {slide.subtitle}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/category/${encodeURIComponent(slide.category)}`);
              }}
              className="relative z-20 bg-background text-foreground px-5 py-2 text-xs font-bold rounded-sm hover:bg-sale hover:text-sale-foreground transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              تسوق الآن
            </button>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs font-medium text-background/80">قسّط مع</span>
              <img src={tabbyLogo} alt="Tabby" className="h-7 md:h-9 rounded-md" loading="lazy" />
              <img src={tamaraLogo} alt="Tamara" className="h-7 md:h-9 rounded-md" loading="lazy" />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/40 transition-all z-20">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/40 transition-all z-20">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-background" : "w-3 bg-background/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

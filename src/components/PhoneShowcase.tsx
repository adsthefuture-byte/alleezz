import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import iphone17Front from "@/assets/iphone17_front.jpg";
import iphone17Back from "@/assets/iphone17_back.jpg";
import iphone16proFront from "@/assets/iphone16pro_front.jpg";
import iphone15proFront from "@/assets/iphone15pro_front.jpg";

const PhoneShowcase = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-6">
      <ScrollReveal>
        <button
          onClick={() => navigate("/category/جوالات")}
          className="w-full relative rounded-2xl overflow-hidden bg-foreground group"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-foreground via-foreground/95 to-foreground/80 z-10" />

          {/* Phone images */}
          <div className="absolute inset-0 flex items-center justify-start pr-4 z-0 opacity-30">
            <img src={iphone17Back} alt="" className="h-full object-cover" />
          </div>

          <div className="relative z-20 flex items-center justify-between p-5 md:p-8">
            {/* Text content */}
            <div className="flex-1 text-right">
              <span className="inline-block px-2 py-0.5 bg-sale text-sale-foreground text-[9px] font-bold rounded-sm mb-2">
                متوفر الآن
              </span>
              <h3 className="text-lg md:text-2xl font-extrabold text-background leading-tight mb-1">
                جوالات ايفون
              </h3>
              <p className="text-background/60 text-[10px] md:text-xs mb-3">
                من ايفون 14 إلى ايفون 17 • ضمان سنة
              </p>
              <span className="inline-block bg-background text-foreground px-4 py-1.5 text-[10px] font-bold rounded-sm group-hover:bg-sale group-hover:text-sale-foreground transition-all duration-300">
                تسوق الآن ←
              </span>
            </div>

            {/* Phone images stack */}
            <div className="flex items-center gap-1 mr-2">
              <img
                src={iphone15proFront}
                alt="iPhone 15 Pro"
                className="h-24 md:h-36 object-contain opacity-50 -rotate-6 transform group-hover:opacity-70 transition-all duration-500"
              />
              <img
                src={iphone16proFront}
                alt="iPhone 16 Pro"
                className="h-28 md:h-40 object-contain opacity-70 transform group-hover:opacity-90 transition-all duration-500"
              />
              <img
                src={iphone17Front}
                alt="iPhone 17"
                className="h-32 md:h-44 object-contain rotate-3 transform group-hover:scale-105 transition-all duration-500 animate-float"
              />
            </div>
          </div>
        </button>
      </ScrollReveal>
    </section>
  );
};

export default PhoneShowcase;

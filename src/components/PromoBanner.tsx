import ScrollReveal from "./ScrollReveal";

const PromoBanner = () => {
  return (
    <ScrollReveal animation="scale-in">
      <div className="mx-4 my-6 rounded-xl overflow-hidden relative bg-foreground p-6 md:p-10">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-sale/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-sale/10 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 text-center">
          <div className="inline-block px-3 py-1 bg-sale text-sale-foreground text-[10px] font-bold rounded-sm mb-3 animate-pulse-glow">
            عرض لفترة محدودة
          </div>
          <h3 className="text-xl md:text-3xl font-extrabold text-background mb-3">
            خصم إضافي 15%
          </h3>
          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col items-center bg-background/10 rounded-lg px-3 py-2">
              <span className="text-lg font-extrabold text-background">50%</span>
              <span className="text-[9px] text-background/50">خصم يصل</span>
            </div>
            <div className="flex flex-col items-center bg-background/10 rounded-lg px-3 py-2">
              <span className="text-lg font-extrabold text-background">🚚</span>
              <span className="text-[9px] text-background/50">توصيل مجاني</span>
            </div>
            <div className="flex flex-col items-center bg-background/10 rounded-lg px-3 py-2">
              <span className="text-lg font-extrabold text-background">✅</span>
              <span className="text-[9px] text-background/50">ضمان الجودة</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default PromoBanner;

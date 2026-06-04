import { Star } from "lucide-react";

const ratings = [
  { stars: 5, percent: 70, color: "bg-green-600" },
  { stars: 4, percent: 12, color: "bg-green-600" },
  { stars: 3, percent: 5, color: "bg-green-500" },
  { stars: 2, percent: 3, color: "bg-yellow-500" },
  { stars: 1, percent: 10, color: "bg-orange-500" },
];

const BrandRatings = () => {
  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-extrabold text-foreground text-center mb-6">
        تقييمات العلامة التجارية
      </h2>
      <div className="bg-card rounded-xl border border-border p-5 max-w-lg mx-auto">
        <div className="flex gap-6 items-center">
          {/* Bars */}
          <div className="flex-1 space-y-2.5">
            {ratings.map((r) => (
              <div key={r.stars} className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-8 text-left">{r.percent}%</span>
                <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${r.color} transition-all duration-1000`}
                    style={{ width: `${r.percent}%` }}
                  />
                </div>
                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-green-600 text-green-600" />
                  <span className="text-xs font-bold text-foreground">{r.stars}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Score */}
          <div className="text-center min-w-[100px]">
            <span className="text-4xl font-black text-foreground">4.3</span>
            <div className="flex justify-center gap-0.5 mt-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 fill-green-600 text-green-600" />
              ))}
              <Star className="w-5 h-5 fill-muted text-muted" />
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
              استناداً إلى 45.5K تقييم
              <br />
              لمنتجات تُباع من قبل
              <br />
              العلامة التجارية
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandRatings;

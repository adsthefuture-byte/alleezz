import footerBadge1 from "@/assets/footer_badge1.png";
import footerBadge2 from "@/assets/footer_badge2.jpg";
import footerBadge3 from "@/assets/footer_badge3.png";
import footerBadge4 from "@/assets/footer_badge4.png";

const TrustBadges = () => {
  return (
    <div className="space-y-4 py-6">
      {/* Payment methods */}
      <div className="flex items-center justify-center gap-3">
        <span className="text-xs text-muted-foreground">طرق الدفع:</span>
        <div className="flex gap-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">VISA</span>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">MC</span>
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-bold">مدى</span>
          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-bold">STC</span>
        </div>
      </div>

      {/* Badge images */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <img src={footerBadge1} alt="شهادة ضريبة القيمة المضافة" className="h-14 object-contain" />
        <img src={footerBadge2} alt="Google Play" className="h-14 object-contain" />
        <img src={footerBadge3} alt="App Store" className="h-14 object-contain" />
        <img src={footerBadge4} alt="شهادة موثوقية" className="h-14 object-contain" />
      </div>
    </div>
  );
};

export default TrustBadges;

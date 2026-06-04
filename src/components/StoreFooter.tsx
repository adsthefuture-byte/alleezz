import { Phone, Mail, MapPin, Instagram, Twitter } from "lucide-react";
import TrustBadges from "./TrustBadges";

const StoreFooter = () => {
  return (
    <footer className="bg-background text-foreground mt-8 border-t border-border">
      {/* Main footer */}
      <div className="px-4 py-8 space-y-6 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-[0.3em]">ALEZZ</h2>
          <p className="text-sm text-muted-foreground mt-2">متجر متنوع للعطور والمكياج والشنط والجوالات واللابتوبات والشاشات والساعات والأثاث</p>
        </div>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-6 text-right text-sm">
          <div>
            <h3 className="font-bold mb-3 text-base">روابط سريعة</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/" className="hover:text-foreground">الرئيسية</a></li>
              <li><a href="/category/مكياج" className="hover:text-foreground">مكياج</a></li>
              <li><a href="/category/عطور" className="hover:text-foreground">عطور</a></li>
              <li><a href="/category/جوالات" className="hover:text-foreground">جوالات</a></li>
              <li><a href="/category/لابتوبات" className="hover:text-foreground">لابتوبات</a></li>
              <li><a href="/category/ساعات" className="hover:text-foreground">ساعات</a></li>
              <li><a href="/category/شاشات" className="hover:text-foreground">شاشات</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-base">تواصل معنا</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2 justify-end">
                <span>0571778279</span>
                <Phone className="w-4 h-4 flex-shrink-0" />
              </li>
              <li className="flex items-center gap-2 justify-end">
                <span>info@alezz.com</span>
                <Mail className="w-4 h-4 flex-shrink-0" />
              </li>
              <li className="flex items-center gap-2 justify-end">
                <span>المملكة العربية السعودية</span>
                <MapPin className="w-4 h-4 flex-shrink-0" />
              </li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-4 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          جميع الحقوق محفوظة © {new Date().getFullYear()} ALEZZ | متجر متعدد الأقسام
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          سياسة الخصوصية | الشروط والأحكام | سياسة الاستبدال والاسترجاع
        </p>
      </div>
    </footer>
  );
};

export default StoreFooter;

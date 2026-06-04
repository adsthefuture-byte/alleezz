import { useNavigate, useLocation } from "react-router-dom";
import { Home, Grid3X3, Percent, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { label: "الرئيسية", icon: Home, path: "/" },
  { label: "الفئات", icon: Grid3X3, path: "/categories" },
  { label: "العروض", icon: Percent, path: "/deals" },
  { label: "العربة", icon: ShoppingCart, path: "/cart" },
];

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around py-2 pb-[env(safe-area-inset-bottom,8px)]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === "/" && location.pathname === "/");
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-all duration-300 relative ${
                isActive 
                  ? "text-primary scale-110" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                <Icon className={`w-6 h-6 transition-all duration-300 ${isActive ? "stroke-[2.5px]" : ""}`} />
                {item.path === "/cart" && totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sale text-sale-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-bold transition-all duration-300 ${isActive ? "text-primary" : ""}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;

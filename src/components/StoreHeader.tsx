import { Search, ShoppingCart, Menu, X, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import SearchDialog from "@/components/SearchDialog";

const navCategories = ["مكياج", "عطور", "شنط", "أدوات منزلية", "أثاث مكتبي", "جوالات", "لابتوبات", "شاشات", "سماعات", "شواحن", "ساعات", "طاولات سفرة", "طاولات خارجية", "منوعات"];

const StoreHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleCategoryClick = (cat: string) => {
    setMenuOpen(false);
    navigate(`/category/${encodeURIComponent(cat)}`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/cart")} className="relative">
              <ShoppingCart className="w-6 h-6 text-foreground" />
              <span className="absolute -top-2 -right-2 bg-sale text-sale-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            </button>
          </div>

          <button onClick={() => navigate("/")} className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-foreground">
            ALEZZ
          </button>

          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(true)}>
              <Search className="w-6 h-6 text-foreground" />
            </button>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="القائمة"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-6 py-3 border-t border-border">
          {navCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className="text-sm font-medium text-foreground hover:text-sale transition-colors whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </nav>
        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Side drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-background z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-foreground" />
          </button>
          <h2 className="text-lg font-bold text-foreground">الأقسام</h2>
        </div>
        <nav className="overflow-y-auto h-[calc(100%-60px)]">
          {navCategories.map((cat) => (
            <button
              key={cat}
              className="flex items-center justify-between w-full px-5 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors border-b border-border"
              onClick={() => handleCategoryClick(cat)}
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
              <span>{cat}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default StoreHeader;

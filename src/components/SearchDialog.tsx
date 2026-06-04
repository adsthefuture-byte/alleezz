import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { categories, products } from "@/data/products";
import { phoneProducts } from "@/data/phoneProducts";
import type { PhoneProduct } from "@/data/phoneProducts";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const normalizedQuery = query.trim();

  const matchingCategories = useMemo(
    () =>
      normalizedQuery
        ? categories.filter((category) => category.includes(normalizedQuery))
        : [],
    [normalizedQuery],
  );

  const matchingProducts = useMemo(
    () =>
      normalizedQuery
        ? products
            .filter(
              (product) =>
                product.name.includes(normalizedQuery) ||
                product.category.includes(normalizedQuery) ||
                product.section.includes(normalizedQuery) ||
                product.description.includes(normalizedQuery),
            )
            .slice(0, 12)
        : [],
    [normalizedQuery],
  );

  const matchingPhones = useMemo(
    () =>
      normalizedQuery
        ? phoneProducts
            .filter(
              (p) =>
                p.name.includes(normalizedQuery) ||
                p.nameEn.toLowerCase().includes(normalizedQuery.toLowerCase()) ||
                p.category.includes(normalizedQuery) ||
                normalizedQuery.includes("ايفون") ||
                normalizedQuery.includes("جوال") ||
                normalizedQuery.includes("iphone"),
            )
            .slice(0, 8)
        : [],
    [normalizedQuery],
  );

  const closeAndReset = () => {
    onOpenChange(false);
    setQuery("");
  };

  const handleCategorySelect = (category: string) => {
    closeAndReset();
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  const handleProductSelect = (id: string, isPhone = false) => {
    closeAndReset();
    navigate(isPhone ? `/phone/${id}` : `/product/${id}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden" dir="rtl">
        <div className="flex items-center border-b border-border px-4 py-3 gap-3">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن منتج أو قسم..."
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          {normalizedQuery && (
            <button onClick={() => setQuery("")} aria-label="مسح البحث">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {normalizedQuery && (
            matchingCategories.length === 0 && matchingProducts.length === 0 && matchingPhones.length === 0 ? (
              <div className="p-6 text-center text-sm text-muted-foreground">
                لا توجد نتائج لـ "{normalizedQuery}"
              </div>
            ) : (
              <div>
                {matchingCategories.length > 0 && (
                  <div className="border-b border-border p-3 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">الأقسام</p>
                    <div className="flex flex-wrap gap-2">
                      {matchingCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleCategorySelect(category)}
                          className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground hover:bg-secondary transition-colors"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {matchingProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductSelect(product.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors text-right border-b border-border last:border-0"
                  >
                    <img src={product.image} alt={product.name} className="w-12 h-12 rounded-sm object-cover shrink-0" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground line-clamp-1">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.section} · {product.category}</p>
                    </div>
                    <span className="text-sm font-bold text-sale shrink-0">{product.price} ر.س</span>
                  </button>
                ))}

                {matchingPhones.map((phone) => (
                  <button
                    key={phone.id}
                    onClick={() => handleProductSelect(phone.id, true)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors text-right border-b border-border last:border-0"
                  >
                    <img src={phone.image} alt={phone.name} className="w-12 h-12 rounded-sm object-cover shrink-0" loading="lazy" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground line-clamp-1">{phone.name}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        {phone.colors.slice(0, 4).map((c) => (
                          <span key={c.name} className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: c.hex }} />
                        ))}
                        <span className="text-xs text-muted-foreground mr-1">جوالات</span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-sale shrink-0">{phone.storageOptions[0].price} ر.س</span>
                  </button>
                ))}
              </div>
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;

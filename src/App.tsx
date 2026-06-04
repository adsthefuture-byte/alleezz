import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import { DiscountProvider } from "@/context/DiscountContext";
import Index from "./pages/Index.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import PhoneDetailPage from "./pages/PhoneDetailPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import PaymentPage from "./pages/PaymentPage.tsx";
import OTPPage from "./pages/OTPPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import CategoriesPage from "./pages/CategoriesPage.tsx";
import DealsPage from "./pages/DealsPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";
import BottomNavBar from "./components/BottomNavBar.tsx";

const queryClient = new QueryClient();

const hideNavRoutes = ["/cart", "/checkout", "/payment", "/otp"];

const ConditionalBottomNav = () => {
  const location = useLocation();
  if (hideNavRoutes.includes(location.pathname)) return null;
  return <BottomNavBar />;
};

const ConditionalWhatsApp = () => {
  const location = useLocation();
  if (hideNavRoutes.includes(location.pathname)) return null;
  return <WhatsAppButton />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DiscountProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/phone/:id" element={<PhoneDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/otp" element={<OTPPage />} />
              <Route path="/category/:name" element={<CategoryPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/deals" element={<DealsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ConditionalWhatsApp />
            <ConditionalBottomNav />
          </BrowserRouter>
        </CartProvider>
      </DiscountProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

const jpgModules = import.meta.glob("/src/assets/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const webpModules = import.meta.glob("/src/assets/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const asset = (name: string) =>
  jpgModules[`/src/assets/${name}.jpg`] ??
  webpModules[`/src/assets/${name}.webp`] ??
  "";

export interface PhoneColor {
  name: string;
  nameAr: string;
  hex: string;
  image?: string;
}

export interface StorageOption {
  size: string;
  price: number;
  oldPrice: number;
}

export interface PhoneProduct {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  colors: PhoneColor[];
  storageOptions: StorageOption[];
  image: string;
  images: string[];
  badge?: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  section: "جوالات";
}

// ========== iPhone 14 Series ==========
const _phoneProducts: PhoneProduct[] = [
  {
    id: "ph1", name: "ايفون 14", nameEn: "iPhone 14",
    description: "شاشة 6.1 انش Super Retina XDR - شريحة A15 Bionic - كاميرا مزدوجة 12MP",
    colors: [
      { name: "Midnight", nameAr: "ميدنايت", hex: "#232A31" },
      { name: "Blue", nameAr: "أزرق", hex: "#A0C4E8" },
      { name: "Starlight", nameAr: "ستارلايت", hex: "#F9F3EE" },
      { name: "Purple", nameAr: "بنفسجي", hex: "#E8D5E0" },
      { name: "Red", nameAr: "أحمر", hex: "#FC0324" },
      { name: "Yellow", nameAr: "أصفر", hex: "#F9E8B8" },
    ],
    storageOptions: [
      { size: "128GB", price: 1199, oldPrice: 2799 },
      { size: "256GB", price: 1699, oldPrice: 3299 },
    ],
    image: asset("iphone14_front"), images: [asset("iphone14_front"), asset("iphone14_back")],
    category: "ايفون 14", rating: 5, reviewCount: 1123,
    section: "جوالات",
  },
  {
    id: "ph2", name: "ايفون 14 بلس", nameEn: "iPhone 14 Plus",
    description: "شاشة 6.7 انش Super Retina XDR - بطارية تدوم طوال اليوم - كاميرا مزدوجة 12MP",
    colors: [
      { name: "Midnight", nameAr: "ميدنايت", hex: "#232A31" },
      { name: "Blue", nameAr: "أزرق", hex: "#A0C4E8" },
      { name: "Starlight", nameAr: "ستارلايت", hex: "#F9F3EE" },
      { name: "Purple", nameAr: "بنفسجي", hex: "#E8D5E0" },
      { name: "Red", nameAr: "أحمر", hex: "#FC0324" },
      { name: "Yellow", nameAr: "أصفر", hex: "#F9E8B8" },
    ],
    storageOptions: [
      { size: "128GB", price: 1599, oldPrice: 3199 },
      { size: "256GB", price: 2099, oldPrice: 3699 },
    ],
    image: asset("iphone14plus_front"), images: [asset("iphone14plus_front"), asset("iphone14plus_back")],
    category: "ايفون 14", rating: 4, reviewCount: 691,
    section: "جوالات",
  },
  {
    id: "ph3", name: "ايفون 14 برو", nameEn: "iPhone 14 Pro",
    description: "شاشة 6.1 انش Always-On - Dynamic Island - شريحة A16 Bionic - كاميرا 48MP",
    colors: [
      { name: "Space Black", nameAr: "أسود فلكي", hex: "#403E3C" },
      { name: "Silver", nameAr: "فضي", hex: "#F4F4F2" },
      { name: "Gold", nameAr: "ذهبي", hex: "#F4E8CE" },
      { name: "Deep Purple", nameAr: "بنفسجي غامق", hex: "#5B4A75" },
    ],
    storageOptions: [
      { size: "128GB", price: 2099, oldPrice: 3699 },
      { size: "256GB", price: 2599, oldPrice: 4199 },
      { size: "512GB", price: 3599, oldPrice: 5199 },
    ],
    image: asset("iphone14pro_front"), images: [asset("iphone14pro_front"), asset("iphone14pro_back")],
    category: "ايفون 14 برو", rating: 4, reviewCount: 2353,
    section: "جوالات",
  },
  {
    id: "ph4", name: "ايفون 14 برو ماكس", nameEn: "iPhone 14 Pro Max",
    description: "شاشة 6.7 انش Always-On - Dynamic Island - شريحة A16 Bionic - كاميرا 48MP",
    colors: [
      { name: "Space Black", nameAr: "أسود فلكي", hex: "#403E3C" },
      { name: "Silver", nameAr: "فضي", hex: "#F4F4F2" },
      { name: "Gold", nameAr: "ذهبي", hex: "#F4E8CE" },
      { name: "Deep Purple", nameAr: "بنفسجي غامق", hex: "#5B4A75" },
    ],
    storageOptions: [
      { size: "128GB", price: 2599, oldPrice: 4199 },
      { size: "256GB", price: 3099, oldPrice: 4699 },
      { size: "512GB", price: 4099, oldPrice: 5699 },
    ],
    image: asset("iphone14pro_front"), images: [asset("iphone14pro_front"), asset("iphone14pro_back")],
    category: "ايفون 14 برو", rating: 4, reviewCount: 2538,
    section: "جوالات",
  },

  // ========== iPhone 15 Series ==========
  {
    id: "ph5", name: "ايفون 15", nameEn: "iPhone 15",
    description: "شاشة 6.1 انش Super Retina XDR - Dynamic Island - شريحة A16 Bionic - كاميرا 48MP - USB-C",
    colors: [
      { name: "Blue", nameAr: "أزرق", hex: "#DCEAF7" },
      { name: "Pink", nameAr: "وردي", hex: "#F9DED6" },
      { name: "Yellow", nameAr: "أصفر", hex: "#F9E8B8" },
      { name: "Green", nameAr: "أخضر", hex: "#D6E8D0" },
      { name: "Black", nameAr: "أسود", hex: "#3B3B3D" },
    ],
    storageOptions: [
      { size: "128GB", price: 1699, oldPrice: 3299 },
      { size: "256GB", price: 2199, oldPrice: 3799 },
      { size: "512GB", price: 3199, oldPrice: 4799 },
    ],
    image: asset("iphone15_front"), images: [asset("iphone15_front"), asset("iphone15_back")],
    category: "ايفون 15", rating: 5, reviewCount: 250,
    section: "جوالات",
  },
  {
    id: "ph6", name: "ايفون 15 بلس", nameEn: "iPhone 15 Plus",
    description: "شاشة 6.7 انش Super Retina XDR - Dynamic Island - بطارية كبيرة - كاميرا 48MP - USB-C",
    colors: [
      { name: "Blue", nameAr: "أزرق", hex: "#DCEAF7" },
      { name: "Pink", nameAr: "وردي", hex: "#F9DED6" },
      { name: "Yellow", nameAr: "أصفر", hex: "#F9E8B8" },
      { name: "Green", nameAr: "أخضر", hex: "#D6E8D0" },
      { name: "Black", nameAr: "أسود", hex: "#3B3B3D" },
    ],
    storageOptions: [
      { size: "128GB", price: 2199, oldPrice: 3799 },
      { size: "256GB", price: 2699, oldPrice: 4299 },
      { size: "512GB", price: 3699, oldPrice: 5299 },
    ],
    image: asset("iphone15plus_front"), images: [asset("iphone15plus_front"), asset("iphone15plus_back")],
    category: "ايفون 15", rating: 3, reviewCount: 503,
    section: "جوالات",
  },
  {
    id: "ph7", name: "ايفون 15 برو", nameEn: "iPhone 15 Pro",
    description: "شاشة 6.1 انش - إطار تيتانيوم - شريحة A17 Pro - كاميرا 48MP - USB-C 3.0",
    colors: [
      { name: "Natural Titanium", nameAr: "تيتانيوم طبيعي", hex: "#9A9896" },
      { name: "Blue Titanium", nameAr: "تيتانيوم أزرق", hex: "#3D4F5C" },
      { name: "White Titanium", nameAr: "تيتانيوم أبيض", hex: "#E3E1DB" },
      { name: "Black Titanium", nameAr: "تيتانيوم أسود", hex: "#3C3B37" },
    ],
    storageOptions: [
      { size: "128GB", price: 2699, oldPrice: 4299 },
      { size: "256GB", price: 3199, oldPrice: 4799 },
      { size: "512GB", price: 4199, oldPrice: 5799 },
      { size: "1TB", price: 5199, oldPrice: 6799 },
    ],
    image: asset("iphone15pro_front"), images: [asset("iphone15pro_front"), asset("iphone15pro_back")],
    category: "ايفون 15 برو", rating: 4, reviewCount: 1072,
    section: "جوالات",
  },
  {
    id: "ph8", name: "ايفون 15 برو ماكس", nameEn: "iPhone 15 Pro Max",
    description: "شاشة 6.7 انش - إطار تيتانيوم - شريحة A17 Pro - كاميرا 48MP - زووم بصري 5x",
    colors: [
      { name: "Natural Titanium", nameAr: "تيتانيوم طبيعي", hex: "#9A9896" },
      { name: "Blue Titanium", nameAr: "تيتانيوم أزرق", hex: "#3D4F5C" },
      { name: "White Titanium", nameAr: "تيتانيوم أبيض", hex: "#E3E1DB" },
      { name: "Black Titanium", nameAr: "تيتانيوم أسود", hex: "#3C3B37" },
    ],
    storageOptions: [
      { size: "256GB", price: 3599, oldPrice: 5199 },
      { size: "512GB", price: 4599, oldPrice: 6199 },
      { size: "1TB", price: 5599, oldPrice: 7199 },
    ],
    image: asset("iphone15pro_front"), images: [asset("iphone15pro_front"), asset("iphone15pro_back")],
    category: "ايفون 15 برو", rating: 3, reviewCount: 2418,
    section: "جوالات",
  },

  // ========== iPhone 16 Series ==========
  {
    id: "ph9", name: "ايفون 16", nameEn: "iPhone 16",
    description: "شاشة 6.1 انش Super Retina XDR - شريحة A18 - كاميرا 48MP - زر الكاميرا - USB-C",
    colors: [
      { name: "Ultramarine", nameAr: "أزرق ألترامارين", hex: "#3F51B5" },
      { name: "Teal", nameAr: "تيل", hex: "#4DB6AC" },
      { name: "Pink", nameAr: "وردي", hex: "#F8C8DC" },
      { name: "White", nameAr: "أبيض", hex: "#F5F5F0" },
      { name: "Black", nameAr: "أسود", hex: "#2C2C2E" },
    ],
    storageOptions: [
      { size: "128GB", price: 1899, oldPrice: 3499 },
      { size: "256GB", price: 2399, oldPrice: 3999 },
      { size: "512GB", price: 3399, oldPrice: 4999 },
    ],
    image: asset("iphone16_front"), images: [asset("iphone16_front"), asset("iphone16_back")],
    category: "ايفون 16", rating: 4, reviewCount: 2781,
    section: "جوالات",
  },
  {
    id: "ph10", name: "ايفون 16 بلس", nameEn: "iPhone 16 Plus",
    description: "شاشة 6.7 انش Super Retina XDR - شريحة A18 - بطارية كبيرة - كاميرا 48MP",
    colors: [
      { name: "Ultramarine", nameAr: "أزرق ألترامارين", hex: "#3F51B5" },
      { name: "Teal", nameAr: "تيل", hex: "#4DB6AC" },
      { name: "Pink", nameAr: "وردي", hex: "#F8C8DC" },
      { name: "White", nameAr: "أبيض", hex: "#F5F5F0" },
      { name: "Black", nameAr: "أسود", hex: "#2C2C2E" },
    ],
    storageOptions: [
      { size: "128GB", price: 2399, oldPrice: 3999 },
      { size: "256GB", price: 2899, oldPrice: 4499 },
      { size: "512GB", price: 3899, oldPrice: 5499 },
    ],
    image: asset("iphone16_front"), images: [asset("iphone16_front"), asset("iphone16_back")],
    category: "ايفون 16", rating: 5, reviewCount: 1022,
    section: "جوالات",
  },
  {
    id: "ph11", name: "ايفون 16 برو", nameEn: "iPhone 16 Pro",
    description: "شاشة 6.3 انش - إطار تيتانيوم - شريحة A18 Pro - كاميرا 48MP - زر الكاميرا",
    colors: [
      { name: "Desert Titanium", nameAr: "تيتانيوم صحراوي", hex: "#BFB0A0" },
      { name: "Natural Titanium", nameAr: "تيتانيوم طبيعي", hex: "#9A9896" },
      { name: "White Titanium", nameAr: "تيتانيوم أبيض", hex: "#E3E1DB" },
      { name: "Black Titanium", nameAr: "تيتانيوم أسود", hex: "#3C3B37" },
    ],
    storageOptions: [
      { size: "128GB", price: 2899, oldPrice: 4499 },
      { size: "256GB", price: 3399, oldPrice: 4999 },
      { size: "512GB", price: 4399, oldPrice: 5999 },
      { size: "1TB", price: 5399, oldPrice: 6999 },
    ],
    image: asset("iphone16pro_front"), images: [asset("iphone16pro_front"), asset("iphone16pro_back")],
    category: "ايفون 16 برو", rating: 5, reviewCount: 2533,
    section: "جوالات",
  },
  {
    id: "ph12", name: "ايفون 16 برو ماكس", nameEn: "iPhone 16 Pro Max",
    description: "شاشة 6.9 انش - إطار تيتانيوم - شريحة A18 Pro - كاميرا 48MP - أكبر بطارية ايفون",
    colors: [
      { name: "Desert Titanium", nameAr: "تيتانيوم صحراوي", hex: "#BFB0A0" },
      { name: "Natural Titanium", nameAr: "تيتانيوم طبيعي", hex: "#9A9896" },
      { name: "White Titanium", nameAr: "تيتانيوم أبيض", hex: "#E3E1DB" },
      { name: "Black Titanium", nameAr: "تيتانيوم أسود", hex: "#3C3B37" },
    ],
    storageOptions: [
      { size: "256GB", price: 3799, oldPrice: 5399 },
      { size: "512GB", price: 4799, oldPrice: 6399 },
      { size: "1TB", price: 5799, oldPrice: 7399 },
    ],
    image: asset("iphone16pro_front"), images: [asset("iphone16pro_front"), asset("iphone16pro_back")],
    category: "ايفون 16 برو", rating: 5, reviewCount: 146,
    section: "جوالات",
  },

  // ========== iPhone 17 Series ==========
  {
    id: "ph13", name: "ايفون 17", nameEn: "iPhone 17",
    description: "شاشة 6.3 انش 1.5K - شريحة A19 - كاميرا مزدوجة 48MP - كاميرا أمامية 18MP مع SL 3D",
    colors: [
      { name: "Black", nameAr: "أسود", hex: "#2C2C2E" },
      { name: "White", nameAr: "أبيض", hex: "#F5F5F0" },
      { name: "Sage", nameAr: "أخضر فاتح", hex: "#B2BFA0" },
      { name: "Lavender", nameAr: "لافندر", hex: "#C8B8D8" },
      { name: "Mist Blue", nameAr: "أزرق ضبابي", hex: "#A8C4D8" },
    ],
    storageOptions: [
      { size: "256GB", price: 2199, oldPrice: 3799 },
      { size: "512GB", price: 3199, oldPrice: 4799 },
    ],
    image: asset("iphone17_front"), images: [asset("iphone17_front"), asset("iphone17_back")],
    category: "ايفون 17", rating: 4, reviewCount: 1851,
    section: "جوالات",
  },
  {
    id: "ph14", name: "ايفون 17 برو", nameEn: "iPhone 17 Pro",
    description: "شاشة 6.3 انش ProMotion - إطار تيتانيوم - شريحة A19 Pro - كاميرا ثلاثية 48MP",
    colors: [
      { name: "Cosmic Orange", nameAr: "برتقالي كوني", hex: "#C75B30", image: asset("iphone17pro-orange") },
      { name: "Deep Blue", nameAr: "أزرق غامق", hex: "#1B3A5C", image: asset("iphone17pro-blue") },
      { name: "Silver", nameAr: "فضي", hex: "#D4D4D2", image: asset("iphone17pro-silver") },
    ],
    storageOptions: [
      { size: "256GB", price: 3099, oldPrice: 4699 },
      { size: "512GB", price: 4099, oldPrice: 5699 },
      { size: "1TB", price: 5099, oldPrice: 6699 },
    ],
    image: asset("iphone17pro_front"), images: [asset("iphone17pro_front"), asset("iphone17pro_back")],
    category: "ايفون 17 برو", rating: 5, reviewCount: 1258,
    section: "جوالات",
  },
  {
    id: "ph15", name: "ايفون 17 برو ماكس", nameEn: "iPhone 17 Pro Max",
    description: "شاشة 6.9 انش ProMotion - إطار تيتانيوم - شريحة A19 Pro - كاميرا 48MP - أقوى ايفون",
    colors: [
      { name: "Cosmic Orange", nameAr: "برتقالي كوني", hex: "#C75B30", image: asset("iphone17pro-orange") },
      { name: "Deep Blue", nameAr: "أزرق غامق", hex: "#1B3A5C", image: asset("iphone17pro-blue") },
      { name: "Silver", nameAr: "فضي", hex: "#D4D4D2", image: asset("iphone17pro-silver") },
    ],
    storageOptions: [
      { size: "256GB", price: 3649, oldPrice: 5249 },
      { size: "512GB", price: 4649, oldPrice: 6249 },
      { size: "1TB", price: 5649, oldPrice: 7249 },
    ],
    image: asset("iphone17pro_front"), images: [asset("iphone17pro_front"), asset("iphone17pro_back")],
    category: "ايفون 17 برو", rating: 4, reviewCount: 1001,
    section: "جوالات",
  },
];

import { androidPhoneProducts } from "./androidPhoneProducts";

export const phoneProducts = [..._phoneProducts.reverse(), ...androidPhoneProducts];

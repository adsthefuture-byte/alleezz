import type { PhoneProduct } from "./phoneProducts";

export const androidPhoneProducts: PhoneProduct[] = [
  // ========== Samsung Galaxy S25 Ultra ==========
  {
    id: "ph-sam1",
    name: "سامسونج جالكسي S25 الترا",
    nameEn: "Samsung Galaxy S25 Ultra",
    description: "شاشة 6.9 انش Dynamic AMOLED 2X - معالج Snapdragon 8 Elite - كاميرا 200MP - قلم S Pen - إطار تيتانيوم",
    colors: [
      { name: "Titanium Silverblue", nameAr: "تيتانيوم أزرق فضي", hex: "#A8B8C8", image: "https://i.ibb.co/PLSpKvy/Samsung-Galaxy-S25-FE-256-GB-8-GBRam-Icyblue-600x.webp" },
      { name: "Titanium Black", nameAr: "تيتانيوم أسود", hex: "#2C2C2E", image: "https://i.ibb.co/d4ZzqRL1/Samsung-Galaxy-S25-FE-256-GB-8-GB-Ram-black-600x.webp" },
      { name: "Titanium Grey", nameAr: "تيتانيوم رمادي", hex: "#8A8A8E" },
      { name: "Titanium Whitesilver", nameAr: "تيتانيوم أبيض فضي", hex: "#E8E8E0" },
      { name: "Titanium Jetblack", nameAr: "تيتانيوم أسود لامع", hex: "#1C1C1E" },
      { name: "Titanium Jadegreen", nameAr: "تيتانيوم أخضر جايد", hex: "#6B8E6B" },
      { name: "Titanium Pinkgold", nameAr: "تيتانيوم وردي ذهبي", hex: "#D4A8A0" },
    ],
    storageOptions: [
      { size: "256GB", price: 3699, oldPrice: 5299 },
      { size: "512GB", price: 4199, oldPrice: 5799 },
      { size: "1TB", price: 4699, oldPrice: 6299 },
    ],
    image: "https://i.ibb.co/PLSpKvy/Samsung-Galaxy-S25-FE-256-GB-8-GBRam-Icyblue-600x.webp",
    images: [
      "https://i.ibb.co/PLSpKvy/Samsung-Galaxy-S25-FE-256-GB-8-GBRam-Icyblue-600x.webp",
      "https://i.ibb.co/HTjydL8F/Samsung-Galaxy-S25-FE-256-GB-8-GB-Ram-bluee-600x.webp",
      "https://i.ibb.co/d4ZzqRL1/Samsung-Galaxy-S25-FE-256-GB-8-GB-Ram-black-600x.webp",
    ],
    category: "سامسونج",
    rating: 5,
    reviewCount: 3215,
    section: "جوالات",
  },

  // ========== Xiaomi 15 Ultra ==========
  {
    id: "ph-xia1",
    name: "شاومي 15 الترا",
    nameEn: "Xiaomi 15 Ultra",
    description: "شاشة 6.73 انش LTPO AMOLED - معالج Snapdragon 8 Elite - كاميرا Leica 50MP - شحن سريع 90W",
    colors: [
      { name: "Black", nameAr: "أسود", hex: "#1C1C1E", image: "https://i.ibb.co/HShckmm/pms-1740578505-75065575.webp" },
      { name: "White", nameAr: "أبيض", hex: "#F5F5F0", image: "https://i.ibb.co/F45DxnCP/pms-1740578505-62086732.webp" },
      { name: "Silver Chrome", nameAr: "فضي كروم", hex: "#C0C0C0", image: "https://i.ibb.co/KpTkYd1s/pms-1740578505-63475132.webp" },
    ],
    storageOptions: [
      { size: "512GB", price: 3499, oldPrice: 4999 },
      { size: "1TB", price: 3999, oldPrice: 5499 },
    ],
    image: "https://i.ibb.co/HShckmm/pms-1740578505-75065575.webp",
    images: [
      "https://i.ibb.co/HShckmm/pms-1740578505-75065575.webp",
      "https://i.ibb.co/F45DxnCP/pms-1740578505-62086732.webp",
      "https://i.ibb.co/KpTkYd1s/pms-1740578505-63475132.webp",
    ],
    category: "شاومي",
    rating: 4,
    reviewCount: 1847,
    section: "جوالات",
  },

  // ========== vivo X200 Pro ==========
  {
    id: "ph-viv1",
    name: "فيفو X200 برو",
    nameEn: "vivo X200 Pro",
    description: "شاشة 6.78 انش LTPO AMOLED - معالج Dimensity 9400 - كاميرا ZEISS 50MP - تصوير سينمائي",
    colors: [
      { name: "Titanium", nameAr: "تيتانيوم", hex: "#9A9896", image: "https://i.ibb.co/mVtCMJbm/56307.jpg" },
      { name: "Black", nameAr: "أسود", hex: "#2C2C2E", image: "https://i.ibb.co/tTTfm6nC/56311.jpg" },
      { name: "Blue", nameAr: "أزرق", hex: "#3D5A80", image: "https://i.ibb.co/nN7BB19t/53339.jpg" },
    ],
    storageOptions: [
      { size: "512GB", price: 2799, oldPrice: 3999 },
    ],
    image: "https://i.ibb.co/mVtCMJbm/56307.jpg",
    images: [
      "https://i.ibb.co/mVtCMJbm/56307.jpg",
      "https://i.ibb.co/tTTfm6nC/56311.jpg",
      "https://i.ibb.co/nN7BB19t/53339.jpg",
    ],
    category: "فيفو",
    rating: 4,
    reviewCount: 982,
    section: "جوالات",
  },

  // ========== OPPO Find X8 Pro ==========
  {
    id: "ph-opp1",
    name: "اوبو فايند X8 برو",
    nameEn: "OPPO Find X8 Pro",
    description: "شاشة 6.78 انش LTPO AMOLED - معالج Dimensity 9400 - كاميرا Hasselblad رباعية 50MP - بطارية 5910mAh",
    colors: [
      { name: "Space Black", nameAr: "أسود فضائي", hex: "#1C1C1E", image: "https://i.ibb.co/rBMt9wx/2-OPPO-Find-X8-Pro-Productimages-Front-Back-Black-3-RGB-20240812.webp" },
      { name: "Pearl White", nameAr: "أبيض لؤلؤي", hex: "#F0EDE8", image: "https://i.ibb.co/FkjfLtsH/Find-X8-Pro-White-Top-Bottom-Sides.webp" },
    ],
    storageOptions: [
      { size: "512GB", price: 2699, oldPrice: 3799 },
    ],
    image: "https://i.ibb.co/rBMt9wx/2-OPPO-Find-X8-Pro-Productimages-Front-Back-Black-3-RGB-20240812.webp",
    images: [
      "https://i.ibb.co/rBMt9wx/2-OPPO-Find-X8-Pro-Productimages-Front-Back-Black-3-RGB-20240812.webp",
      "https://i.ibb.co/FkjfLtsH/Find-X8-Pro-White-Top-Bottom-Sides.webp",
      "https://i.ibb.co/jPh6n07j/Find-X8-Pro-Black-Angle.webp",
      "https://i.ibb.co/39fzzB1m/Find-X8-Pro-White-Front-Back-Separate.webp",
      "https://i.ibb.co/d4SwRz2d/Find-X8-Pro-Black-Front-Back.webp",
    ],
    category: "اوبو",
    rating: 5,
    reviewCount: 1320,
    section: "جوالات",
  },

  // ========== HONOR Magic7 Pro ==========
  {
    id: "ph-hon1",
    name: "هونر ماجيك 7 برو",
    nameEn: "HONOR Magic7 Pro",
    description: "شاشة 6.8 انش LTPO OLED - معالج Snapdragon 8 Elite - كاميرا 50MP - بطارية Silicon-Carbon 5850mAh",
    colors: [
      { name: "Sunrise Gold", nameAr: "ذهبي شروق", hex: "#D4A85C" },
      { name: "Breeze Blue", nameAr: "أزرق نسيم", hex: "#7BA7C9", image: "https://i.ibb.co/8CpDKtq/honor-magic-7-pro-blue.jpg" },
      { name: "Lunar Shadow Grey", nameAr: "رمادي قمري", hex: "#6B6B6E" },
      { name: "Glacier White", nameAr: "أبيض جليدي", hex: "#F0F0EC" },
      { name: "Black", nameAr: "أسود", hex: "#1C1C1E", image: "https://i.ibb.co/m5bwSBxx/honor-magic-7-pro-black-1.jpg" },
    ],
    storageOptions: [
      { size: "512GB", price: 2499, oldPrice: 3499 },
      { size: "1TB", price: 2999, oldPrice: 3999 },
    ],
    image: "https://i.ibb.co/m5bwSBxx/honor-magic-7-pro-black-1.jpg",
    images: [
      "https://i.ibb.co/m5bwSBxx/honor-magic-7-pro-black-1.jpg",
      "https://i.ibb.co/8CpDKtq/honor-magic-7-pro-blue.jpg",
    ],
    category: "هونر",
    rating: 3,
    reviewCount: 756,
    section: "جوالات",
  },

  // ========== OnePlus 13 ==========
  {
    id: "ph-op1",
    name: "ون بلس 13",
    nameEn: "OnePlus 13",
    description: "شاشة 6.82 انش LTPO AMOLED - معالج Snapdragon 8 Elite - كاميرا Hasselblad ثلاثية 50MP - شحن 100W",
    colors: [
      { name: "Midnight Ocean", nameAr: "محيط منتصف الليل", hex: "#1B2838", image: "https://i.ibb.co/twXGNWLF/0c0b713df5d1f8f99b52956a17182bfc-1.webp" },
      { name: "Arctic Dawn", nameAr: "فجر قطبي", hex: "#E8E4DC", image: "https://i.ibb.co/3yhjYQxf/8140d6f70aa0fd1aa82368c1f4334035.webp" },
      { name: "Black Eclipse", nameAr: "كسوف أسود", hex: "#1C1C1E", image: "https://i.ibb.co/wF6Cj4PL/3836b808f7a61b0b102e94adaa2abbac.webp" },
    ],
    storageOptions: [
      { size: "256GB", price: 2399, oldPrice: 3299 },
      { size: "512GB", price: 2899, oldPrice: 3799 },
    ],
    image: "https://i.ibb.co/twXGNWLF/0c0b713df5d1f8f99b52956a17182bfc-1.webp",
    images: [
      "https://i.ibb.co/twXGNWLF/0c0b713df5d1f8f99b52956a17182bfc-1.webp",
      "https://i.ibb.co/3yhjYQxf/8140d6f70aa0fd1aa82368c1f4334035.webp",
      "https://i.ibb.co/wF6Cj4PL/3836b808f7a61b0b102e94adaa2abbac.webp",
      "https://i.ibb.co/SX8nMX4M/828ac8c16ce196b73cf17aac825faae1.webp",
      "https://i.ibb.co/ZR8M7PmC/052a246708df8233d079b3502aeeb327.webp",
    ],
    category: "ون بلس",
    rating: 4,
    reviewCount: 1103,
    section: "جوالات",
  },
];

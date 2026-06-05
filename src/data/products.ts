const assetModules = import.meta.glob("/src/assets/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const asset = (name: string) => assetModules[`/src/assets/${name}.jpg`] ?? "";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  images?: string[];
  badge?: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  reviews?: {
    name: string;
    location: string;
    comment: string;
  }[];
  stock?: number;
  section: "مكياج" | "عطور" | "شنط" | "أدوات منزلية" | "أثاث مكتبي" | "جوالات" | "طاولات سفرة" | "طاولات خارجية" | "لابتوبات" | "شاشات" | "سماعات" | "شواحن" | "ساعات" | "منوعات" | "عسل";
}

// ========== منتجات المكياج ==========
export const makeupProducts: Product[] = [
  { id: "m1", name: "فاونديشن فل كفر 30 مل", description: "تغطية كاملة تدوم 24 ساعة - مقاوم للماء", price: 65, oldPrice: 130, image: asset("product1"), images: [asset("product1"), asset("product1_b"), asset("product1_c")], badge: "خصم 50%", category: "كريم أساس", rating: 4, reviewCount: 828, section: "مكياج" },
  { id: "m2", name: "روج مات درجة روز", description: "تركيبة مخملية مرطبة - ثبات طوال اليوم", price: 45, oldPrice: 90, image: asset("product2"), images: [asset("product2"), asset("product2_b"), asset("product2_c")], badge: "الأكثر طلباً", category: "شفاه", rating: 4, reviewCount: 785, section: "مكياج" },
  { id: "m3", name: "باليت ايشادو 12 لون نود وقلتر", description: "ألوان دافئة مع لمعة قلتر", price: 85, oldPrice: 170, image: asset("product3"), images: [asset("product3"), asset("product3_b"), asset("product3_c")], badge: "عرض خاص", category: "عيون", rating: 5, reviewCount: 1286, section: "مكياج" },
  { id: "m4", name: "مسكرا كثافة مضاعفة ضد الماء", description: "رموش كثيفة وطويلة - ما تسيح", price: 35, oldPrice: 70, image: asset("product4"), images: [asset("product4"), asset("product4_b"), asset("product4_c")], category: "عيون", rating: 5, reviewCount: 138, section: "مكياج" },
  { id: "m5", name: "بيوتي بلندر طقم قطعتين", description: "اسفنجة مكياج احترافية لتوزيع مثالي", price: 25, oldPrice: 50, image: asset("product5"), images: [asset("product5"), asset("product5_b"), asset("product5_c")], badge: "خصم 50%", category: "أدوات مكياج", rating: 5, reviewCount: 1148, section: "مكياج" },
  { id: "m6", name: "فكسر مكياج سبراي لمسة ندية", description: "يثبت المكياج حتى 16 ساعة", price: 55, oldPrice: 110, image: asset("product6"), images: [asset("product6"), asset("product6_b"), asset("product6_c")], category: "بشرة", rating: 4, reviewCount: 825, section: "مكياج" },
  { id: "m7", name: "كونتور وهايلايت مع فرشاة", description: "نحت الوجه باحترافية - 6 درجات", price: 75, oldPrice: 150, image: asset("product7"), images: [asset("product7"), asset("product7_b"), asset("product7_c")], badge: "الأكثر طلباً", category: "بشرة", rating: 4, reviewCount: 1180, section: "مكياج" },
  { id: "m8", name: "كونسيلر سائل تغطية عالية", description: "يخفي الهالات والعيوب فوراً", price: 40, oldPrice: 80, image: asset("product8"), images: [asset("product8"), asset("product8_b"), asset("product8_c")], category: "كريم أساس", rating: 5, reviewCount: 1337, section: "مكياج" },
  { id: "m9", name: "طقم فرش مكياج 12 قطعة روز قولد", description: "شعيرات ناعمة مع شنطة جلد", price: 95, oldPrice: 190, image: asset("product9"), images: [asset("product9"), asset("product9_b"), asset("product9_c")], badge: "عرض خاص", category: "أدوات مكياج", rating: 5, reviewCount: 1232, section: "مكياج" },
  { id: "m10", name: "برايمر وجه قاعدة مكياج", description: "يملأ المسام ويوحد لون البشرة", price: 50, oldPrice: 100, image: asset("product10"), images: [asset("product10"), asset("product10_b"), asset("product10_c")], category: "بشرة", rating: 4, reviewCount: 1492, section: "مكياج" },
  { id: "m11", name: "بلاشر 4 ألوان بينك وكورال", description: "أحمر خدود بودرة ناعمة طبيعي", price: 60, oldPrice: 120, image: asset("product11"), images: [asset("product11"), asset("product11_b"), asset("product11_c")], badge: "خصم 50%", category: "بشرة", rating: 4, reviewCount: 143, section: "مكياج" },
  { id: "m12", name: "آيلاينر سائل أسود ضد الماء", description: "رأس دقيق لرسم خط مثالي", price: 30, oldPrice: 60, image: asset("product12"), images: [asset("product12"), asset("product12_b"), asset("product12_c")], category: "عيون", rating: 4, reviewCount: 642, section: "مكياج" },
  { id: "m13", name: "طقم لب قلوس 6 قطع نود وبينك", description: "لمعة فاخرة وترطيب مكثف", price: 70, oldPrice: 140, image: asset("product13"), images: [asset("product13"), asset("product13_b"), asset("product13_c")], badge: "الأكثر طلباً", category: "شفاه", rating: 4, reviewCount: 526, section: "مكياج" },
  { id: "m14", name: "بودرة سائبة شفافة مع باف", description: "تثبت المكياج وتعطي اشراقة طبيعية", price: 45, oldPrice: 90, image: asset("product14"), images: [asset("product14"), asset("product14_b"), asset("product14_c")], category: "بشرة", rating: 4, reviewCount: 828, section: "مكياج" },
  { id: "m15", name: "رموش صناعية 5 أزواج مع لاصق", description: "رموش 3D طبيعية - لاصق مضاد للحساسية", price: 35, oldPrice: 70, image: asset("product15"), images: [asset("product15"), asset("product15_b"), asset("product15_c")], badge: "عرض خاص", category: "عيون", rating: 5, reviewCount: 978, section: "مكياج" },
  { id: "m16", name: "بي بي كريم SPF مرطب ملون", description: "تغطية خفيفة مع حماية من الشمس", price: 40, oldPrice: 80, image: asset("product16"), images: [asset("product16"), asset("product16_b"), asset("product16_c")], category: "كريم أساس", rating: 5, reviewCount: 383, section: "مكياج" },
  { id: "m17", name: "طقم حواجب قلم وجل تثبيت", description: "رسم وتحديد الحواجب باحترافية", price: 30, oldPrice: 60, image: asset("product17"), images: [asset("product17"), asset("product17_b"), asset("product17_c")], category: "عيون", rating: 5, reviewCount: 777, section: "مكياج" },
  { id: "m18", name: "هايلايتر باليت 6 ألوان شمري", description: "لمعة ذهبية ووردية للوجه والجسم", price: 55, oldPrice: 110, image: asset("product18"), images: [asset("product18"), asset("product18_b"), asset("product18_c")], badge: "جديد", category: "بشرة", rating: 4, reviewCount: 1422, section: "مكياج" },
  { id: "m19", name: "طقم محدد شفايف 4 أقلام", description: "درجات نود وبينك - مقاوم للماء", price: 38, oldPrice: 75, image: asset("product19"), images: [asset("product19"), asset("product19_b"), asset("product19_c")], category: "شفاه", rating: 5, reviewCount: 1487, section: "مكياج" },
  { id: "m20", name: "ماء ميسلر مزيل مكياج 400 مل", description: "ينظف البشرة بعمق بدون جفاف", price: 42, oldPrice: 85, image: asset("product20"), images: [asset("product20"), asset("product20_b"), asset("product20_c")], category: "بشرة", rating: 4, reviewCount: 1297, section: "مكياج" },
  { id: "m21", name: "بوكس هدايا مكياج فاخر 6 قطع", description: "روج + مسكرا + ايشادو + برايمر + بلاشر + فرشاة", price: 149, oldPrice: 299, image: asset("product21"), images: [asset("product21"), asset("product21_b"), asset("product21_c")], badge: "عرض خاص", category: "عروض مكياج", rating: 4, reviewCount: 1143, section: "مكياج" },
  { id: "m22", name: "برونزر بودرة مع مرايه", description: "لون برونزي طبيعي يناسب كل البشرات", price: 48, oldPrice: 95, image: asset("product22"), images: [asset("product22"), asset("product22_b"), asset("product22_c")], badge: "جديد", category: "بشرة", rating: 4, reviewCount: 384, section: "مكياج" },
  { id: "m23", name: "كريم عيون للهالات السوداء", description: "يعالج الانتفاخ والهالات - نتائج من أسبوع", price: 58, oldPrice: 115, image: asset("product23"), images: [asset("product23"), asset("product23_b"), asset("product23_c")], category: "بشرة", rating: 5, reviewCount: 827, section: "مكياج" },
  { id: "m24", name: "بودرة مضغوطة مات مع مرايه", description: "تغطية متوسطة وملمس حريري", price: 42, oldPrice: 85, image: asset("product24"), images: [asset("product24"), asset("product24_b"), asset("product24_c")], category: "بشرة", rating: 5, reviewCount: 1360, section: "مكياج" },
];

// ========== منتجات العطور والبخور ==========
export const perfumeProducts: Product[] = [
  { id: "p-master", name: "طقم ماستر الجديد", description: "طقم عطور ماستر الجديد بتشكيلة فاخرة", price: 69, oldPrice: 150, image: "https://i.ibb.co/y5TrPxj/1d5db956-0d6d-4be2-a403-10378629f289.jpg", badge: "🆕 جديد", category: "بكجات عطور", rating: 5, reviewCount: 412, section: "عطور" },
  { id: "p-riyadh", name: "عطر الرياض", description: "عطر الرياض بنفحات شرقية أصيلة", price: 55, oldPrice: 120, image: "https://i.ibb.co/Q3DmGG5K/0340772d-fb51-4d59-8f96-4d84325d3b65.webp", category: "عطور", rating: 5, reviewCount: 328, section: "عطور" },
  { id: "p-leather", name: "دخون ليذر", description: "دخون ليذر برائحة جلدية فاخرة", price: 77, oldPrice: 160, image: "https://i.ibb.co/Q7kPJbrP/0dfc8ba3-f721-42d0-b7fb-c31ea99771af.webp", category: "بخور & عود", rating: 5, reviewCount: 287, section: "عطور" },
  { id: "p-hilal9", name: "الهلال 9", description: "عطر الهلال 9 بتركيبة مميزة", price: 29, oldPrice: 70, image: "https://i.ibb.co/1JtdHkT5/aacb8931-4f40-43b9-b4ca-5c5acd756485.webp", badge: "💸 سعر مخفض", category: "عطور", rating: 4, reviewCount: 540, section: "عطور" },
  { id: "p-zayed", name: "زايد", description: "عطر زايد برائحة رجالية فاخرة", price: 69, oldPrice: 150, image: "https://i.ibb.co/tMddb84N/5559e159-9940-412a-9951-de711f387516.webp", category: "عطور", rating: 5, reviewCount: 365, section: "عطور" },
  { id: "p-musk-vip", name: "برايفت مسك VIP", description: "عطر مسك VIP بثبات عالي", price: 45, oldPrice: 100, image: "https://i.ibb.co/Xfwhn4QJ/8013af56-25d5-461c-8774-56eb1f8414fd-thumbnail-1000x1000.webp", category: "عطور", rating: 5, reviewCount: 478, section: "عطور" },
  { id: "p-kuhailan", name: "كحيلان", description: "عطر كحيلان برائحة عربية أصيلة", price: 67, oldPrice: 140, image: "https://i.ibb.co/QFKLQ1Jw/c059d02c-185d-4c4f-a25a-6b6229e18ef7.webp", category: "عطور", rating: 5, reviewCount: 312, section: "عطور" },
  { id: "p-velvet-rose", name: "برايفت فلفت روز", description: "عطر فلفت روز بنفحات وردية ناعمة", price: 45, oldPrice: 100, image: "https://i.ibb.co/678xCVS2/706fa056-9b5a-4436-b8e0-a3883922d994-thumbnail-1000x1000.webp", category: "عطور", rating: 5, reviewCount: 421, section: "عطور" },
  { id: "p-sapphire", name: "سافاير", description: "عطر سافاير برائحة منعشة", price: 22, oldPrice: 60, image: "https://i.ibb.co/z381xdc/4cdaa344-1f4f-4987-b6b3-c1763b190cfc.webp", badge: "💸 سعر مخفض", category: "عطور", rating: 4, reviewCount: 692, section: "عطور" },
  { id: "p-kanam", name: "عود طبيعي كنام - 125 غرام", description: "عود كنام طبيعي 125 غرام بجودة عالية", price: 79, oldPrice: 180, image: "https://i.ibb.co/8DZcsc1r/7ceb03f3-313c-492f-8ca1-78fa849e129b.jpg", badge: "👑 فخامة", category: "بخور & عود", rating: 5, reviewCount: 256, section: "عطور" },
  { id: "p-diwan", name: "عبق الديوان", description: "عطر عبق الديوان بنفحات شرقية", price: 33, oldPrice: 80, image: "https://i.ibb.co/XrzctvRD/4f807625-632c-452a-9667-6f76d6a76d58.webp", category: "عطور", rating: 4, reviewCount: 587, section: "عطور" },
  { id: "p-omr", name: "بشارة العُمر", description: "بكج بشارة العُمر الفاخر للمناسبات", price: 495, oldPrice: 950, image: "https://i.ibb.co/SwZHBFzD/638a5cf1-3021-45d3-8a68-5c171a4795b1.jpg", badge: "👑 فخامة", category: "بكجات عطور", rating: 5, reviewCount: 198, section: "عطور" },
  { id: "p-casa", name: "كازا", description: "عطر كازا بلمسة شرقية فريدة", price: 199, oldPrice: 400, image: "https://i.ibb.co/R4S4vGvD/f99d52ad-0663-4ad5-a60c-73f701cea0fa.jpg", badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "عطور", rating: 5, reviewCount: 567, section: "عطور" },
  { id: "p-ola", name: "باقة العلا", description: "بكج عطور فاخر بلمسة عربية أصيلة", price: 495, oldPrice: 950, image: "https://i.ibb.co/4RG8Ryr2/bd121d1a-c0ca-4e5d-bd0b-da70cebb9f1a-thumbnail-1000x1000-70.jpg", badge: "🔥 الأكثر طلباً", category: "بكجات عطور", rating: 5, reviewCount: 1820, section: "عطور" },
  { id: "p-ostoory", name: "العرض الاسطوري", description: "تشكيلة عطور أسطورية بسعر استثنائي", price: 495, oldPrice: 990, image: "https://i.ibb.co/1hKWHNQ/9936a103-24ca-473f-8b26-4e4b1f58e16b.jpg", badge: "⭐ عرض حصري", category: "بكجات عطور", rating: 5, reviewCount: 1245, section: "عطور" },
  { id: "p-dokhoony1", name: "فخامة دخوني", description: "بخور وعود فاخر برائحة تدوم طويلاً", price: 395, oldPrice: 750, image: "https://i.ibb.co/67tCNkyx/337adc0b-8b82-4a35-a5e1-678fb18e6a26.jpg", badge: "👑 فخامة", category: "بخور & عود", rating: 5, reviewCount: 932, section: "عطور" },
  { id: "p-dokhoony2", name: "فخامة دخوني 2", description: "الإصدار الثاني من بكج فخامة دخوني الفاخر", price: 395, oldPrice: 750, image: "https://i.ibb.co/Y4h36X2W/f568f927-ca27-4035-945c-e2f7a23ec78e.jpg", badge: "👑 فخامة", category: "بخور & عود", rating: 5, reviewCount: 814, section: "عطور" },
  { id: "p1", name: "عطر هيرش لهب 100 مل", description: "Eau De Parfum - ثبات يدوم طوال اليوم", price: 170, oldPrice: 350, image: asset("perfume_new1"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "عطور", rating: 4, reviewCount: 1452, section: "عطور" },
  { id: "p2", name: "مجموعة الاميرة المدللــة", description: "بكج عطور نسائية فاخرة", price: 220, oldPrice: 450, image: asset("perfume_new2"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بكجات عطور", rating: 5, reviewCount: 164, section: "عطور" },
  { id: "p3", name: "عطر كلكات", description: "Eau De Parfum - عطر أنيق ومميز", price: 110, oldPrice: 250, image: asset("perfume_new3"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "عطور", rating: 4, reviewCount: 115, section: "عطور" },
  { id: "p4", name: "100 جرام عود مروكي الخاص", description: "عود طبيعي فاخر من أجود الأنواع", price: 129, oldPrice: 280, image: asset("perfume_new4"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بخور & عود", rating: 5, reviewCount: 871, section: "عطور" },
  { id: "p5", name: "عطر هيرش محور 100 مل", description: "Eau De Parfum - عطر فاخر بنوتات شرقية", price: 199, oldPrice: 400, image: asset("perfume_new5"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "عطور", rating: 5, reviewCount: 185, section: "عطور" },
  { id: "p6", name: "بكج دندن وغن", description: "بكج عطرين بسعر مخفض", price: 139, oldPrice: 300, image: asset("perfume_new6"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بكجات عطور", rating: 4, reviewCount: 1211, section: "عطور" },
  { id: "p7", name: "بخور مروكي الناهي 100 جرام", description: "بخور فاخر برائحة عود مروكي أصيل", price: 269, oldPrice: 550, image: asset("perfume_new7"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بخور & عود", rating: 5, reviewCount: 485, section: "عطور" },
  { id: "p8", name: "بكج العظماء بمناسبة اليوم الوطني", description: "بكج عطور فاخرة بسعر استثنائي", price: 142, oldPrice: 300, image: asset("perfume_new8"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بكجات عطور", rating: 5, reviewCount: 860, section: "عطور" },
  { id: "p9", name: "بكج خالد العليان التاريخي - هيرش لهب و هيرش 2", description: "بكج عطرين من مجموعة هيرش الفاخرة", price: 199, oldPrice: 400, image: asset("perfume_new9"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بكجات عطور", rating: 5, reviewCount: 342, section: "عطور" },
  { id: "p10", name: "بكج 100 جرام مروكي و 100 جرام كمبودي تايجر", description: "أجود أنواع العود الطبيعي", price: 185, oldPrice: 380, image: asset("perfume_new10"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بخور & عود", rating: 5, reviewCount: 335, section: "عطور" },
  { id: "p11", name: "بكج المعازيم", description: "بكج عطور بسعر خاص للمناسبات", price: 112, oldPrice: 240, image: asset("perfume_new11"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بكجات عطور", rating: 4, reviewCount: 1199, section: "عطور" },
  { id: "p12", name: "عطر العز 2", description: "Eau De Parfum - عطر فاخر من مجموعة العز", price: 105, oldPrice: 230, image: asset("perfume_new12"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "عطور", rating: 5, reviewCount: 1247, section: "عطور" },
  { id: "p13", name: "عطر غارة العز", description: "Eau De Parfum - عطر مميز وأنيق", price: 95, oldPrice: 200, image: asset("perfume_new13"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "عطور", rating: 5, reviewCount: 1245, section: "عطور" },
  { id: "p14", name: "عطر هيستورى نوت 100مل - HISTORY NOTE", description: "Eau De Parfum - عطر كلاسيكي فريد", price: 35, oldPrice: 80, image: asset("perfume_new14"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "عطور", rating: 5, reviewCount: 791, section: "عطور" },
  { id: "p15", name: "40 عود مروكي", description: "40 جرام عود مروكي فاخر", price: 55, oldPrice: 120, image: asset("perfume_new15"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بخور & عود", rating: 4, reviewCount: 333, section: "عطور" },
  { id: "p16", name: "عطر هيرش بخوري 100 مل", description: "Eau De Parfum - نوتات بخورية فاخرة", price: 131, oldPrice: 280, image: asset("perfume_new16"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "عطور", rating: 5, reviewCount: 236, section: "عطور" },
  { id: "p17", name: "بكج التحدي - كلكات جساس 200 مل و كلكات مُنــايـا 200 مل", description: "بكج عطرين فاخرين بسعر خاص", price: 140, oldPrice: 300, image: asset("perfume_new17"), badge: "🎁 اشتري 1 واحصل على الثاني مجاناً", category: "بكجات عطور", rating: 3, reviewCount: 274, section: "عطور" },
];

// ========== شنط سفر ولابتوب ==========
export const bagProducts: Product[] = [
  { id: "b1", name: "طقم شنط سفر روز قولد قطعتين", description: "هارد شل خفيفة مع عجلات 360°", price: 320, oldPrice: 640, image: asset("bag1"), badge: "خصم 50%", category: "شنط سفر", rating: 4, reviewCount: 1335, section: "شنط" },
  { id: "b2", name: "شنطة لابتوب باك باك جلد أسود", description: "تناسب لابتوب حتى 15.6 انش", price: 145, oldPrice: 290, image: asset("bag2"), badge: "الأكثر طلباً", category: "شنط لابتوب", rating: 4, reviewCount: 1443, section: "شنط" },
  { id: "b3", name: "شنطة سفر ويكند جلد بيج", description: "شنطة سفر أنيقة لعطلة نهاية الأسبوع", price: 180, oldPrice: 360, image: asset("bag3"), category: "شنط سفر", rating: 5, reviewCount: 1271, section: "شنط" },
  { id: "b4", name: "حافظة لابتوب جلد بينك 14 انش", description: "حماية كاملة مع سوستة ذهبية", price: 75, oldPrice: 150, image: asset("bag4"), badge: "خصم 50%", category: "شنط لابتوب", rating: 4, reviewCount: 838, section: "شنط" },
  { id: "b5", name: "شنطة سفر ترولي كبيرة أزرق", description: "سعة واسعة - قفل أمان TSA", price: 250, oldPrice: 500, image: asset("bag5"), category: "شنط سفر", rating: 5, reviewCount: 1270, section: "شنط" },
  { id: "b6", name: "شنطة كروس بودي سفر جلد بني", description: "شنطة عملية للسفر والتنقل اليومي", price: 95, oldPrice: 190, image: asset("bag6"), category: "شنط سفر", rating: 5, reviewCount: 1133, section: "شنط" },
  { id: "b7", name: "شنطة توت لابتوب رمادي أنيقة", description: "تصميم عملي للعمل - تناسب 14 انش", price: 130, oldPrice: 260, image: asset("bag7"), badge: "الأكثر طلباً", category: "شنط لابتوب", rating: 5, reviewCount: 1183, section: "شنط" },
  { id: "b8", name: "طقم شنط سفر أحمر قطعتين", description: "تصميم فاخر مع عجلات متينة", price: 350, oldPrice: 700, image: asset("bag8"), badge: "عرض خاص", category: "شنط سفر", rating: 3, reviewCount: 1443, section: "شنط" },
  { id: "b9", name: "شنطة مكياج سفر منظمة بينك", description: "جيوب متعددة لتنظيم المكياج", price: 65, oldPrice: 130, image: asset("bag9"), category: "شنط سفر", rating: 4, reviewCount: 1446, section: "شنط" },
  { id: "b10", name: "باك باك لابتوب جلد بني فاخر", description: "تصميم كلاسيكي مع جيوب متعددة", price: 165, oldPrice: 330, image: asset("bag10"), category: "شنط لابتوب", rating: 5, reviewCount: 1362, section: "شنط" },
  { id: "b11", name: "شنطة سفر كابينة سلفر", description: "حجم الطائرة - خفيفة ومتينة", price: 195, oldPrice: 390, image: asset("bag11"), badge: "جديد", category: "شنط سفر", rating: 5, reviewCount: 278, section: "شنط" },
  { id: "b12", name: "شنطة ماسنجر لابتوب جلد بني", description: "ستايل كلاسيكي - تناسب 13 انش", price: 120, oldPrice: 240, image: asset("bag12"), category: "شنط لابتوب", rating: 5, reviewCount: 940, section: "شنط" },
  { id: "b13", name: "شنطة ملابس سفر أسود", description: "لحماية البدل والفساتين أثناء السفر", price: 110, oldPrice: 220, image: asset("bag13"), category: "شنط سفر", rating: 4, reviewCount: 979, section: "شنط" },
  { id: "b14", name: "شنطة أدوات تجميل سفر ماربل", description: "تعليق مع جيوب شفافة منظمة", price: 55, oldPrice: 110, image: asset("bag14"), badge: "خصم 50%", category: "شنط سفر", rating: 3, reviewCount: 589, section: "شنط" },
  { id: "b15", name: "حافظة لابتوب نيوبرين كحلي 15 انش", description: "حماية ضد الصدمات - خفيفة الوزن", price: 60, oldPrice: 120, image: asset("bag15"), category: "شنط لابتوب", rating: 4, reviewCount: 1089, section: "شنط" },
  { id: "b16", name: "طقم منظمات سفر 6 قطع باستيل", description: "تنظيم الملابس داخل الشنطة", price: 85, oldPrice: 170, image: asset("bag16"), badge: "عرض خاص", category: "شنط سفر", rating: 4, reviewCount: 1330, section: "شنط" },
  { id: "b17", name: "شنطة رياضة وسفر بينك مع جيب أحذية", description: "مثالية للجيم والسفر القصير", price: 95, oldPrice: 190, image: asset("bag17"), category: "شنط سفر", rating: 5, reviewCount: 1358, section: "شنط" },
  { id: "b18", name: "باك باك لابتوب مضاد للسرقة أحمر", description: "منفذ USB - تناسب 15.6 انش", price: 135, oldPrice: 270, image: asset("bag18"), badge: "جديد", category: "شنط لابتوب", rating: 4, reviewCount: 363, section: "شنط" },
  { id: "b19", name: "شنطة سفر كبيرة أخضر زمردي", description: "توسعة إضافية - قفل TSA", price: 280, oldPrice: 560, image: asset("bag19"), badge: "خصم 50%", category: "شنط سفر", rating: 5, reviewCount: 380, section: "شنط" },
  { id: "b20", name: "محفظة جواز سفر روز قولد", description: "حامل جواز مع جيوب للبطاقات", price: 45, oldPrice: 90, image: asset("bag20"), category: "اكسسوارات سفر", rating: 3, reviewCount: 1276, section: "شنط" },
  { id: "b21", name: "باك باك سفر قابل للطي موف", description: "خفيفة جداً - تُطوى بسهولة", price: 70, oldPrice: 140, image: asset("bag21"), category: "شنط سفر", rating: 5, reviewCount: 1050, section: "شنط" },
  { id: "b22", name: "شنطة لابتوب بريف كيس نبيتي", description: "جلد فاخر - تصميم احترافي", price: 155, oldPrice: 310, image: asset("bag22"), badge: "الأكثر طلباً", category: "شنط لابتوب", rating: 3, reviewCount: 279, section: "شنط" },
  { id: "b23", name: "شنطة سفر ويكند أخضر زيتوني", description: "قماش كانفاس مع تفاصيل جلد", price: 160, oldPrice: 320, image: asset("bag23"), category: "شنط سفر", rating: 5, reviewCount: 679, section: "شنط" },
  { id: "b24", name: "باك باك لابتوب رمادي مقاوم للماء", description: "إكسسوارات ذهبية - أنيقة وعملية", price: 125, oldPrice: 250, image: asset("bag24"), category: "شنط لابتوب", rating: 4, reviewCount: 168, section: "شنط" },
  { id: "b25", name: "طقم شنط سفر أبيض روز قولد قطعتين", description: "تصميم عصري مع عجلات هادئة", price: 380, oldPrice: 760, image: asset("bag25"), badge: "عرض خاص", category: "شنط سفر", rating: 4, reviewCount: 1211, section: "شنط" },
  { id: "b26", name: "شنطة أحذية سفر بينك", description: "تنظيم الأحذية أثناء السفر", price: 40, oldPrice: 80, image: asset("bag26"), category: "اكسسوارات سفر", rating: 4, reviewCount: 225, section: "شنط" },
  { id: "b27", name: "باك باك متحول لابتوب أسود", description: "يتحول من باك باك لشنطة يد", price: 140, oldPrice: 280, image: asset("bag27"), badge: "جديد", category: "شنط لابتوب", rating: 5, reviewCount: 191, section: "شنط" },
  { id: "b28", name: "شنطة مجوهرات سفر فيلفت بينك", description: "تنظيم المجوهرات بأمان أثناء السفر", price: 55, oldPrice: 110, image: asset("bag28"), category: "اكسسوارات سفر", rating: 4, reviewCount: 312, section: "شنط" },
  { id: "b29", name: "شنطة سفر كابينة لافندر", description: "لون مميز - خفيفة مع عجلات 360°", price: 210, oldPrice: 420, image: asset("bag29"), category: "شنط سفر", rating: 5, reviewCount: 1175, section: "شنط" },
  { id: "b30", name: "حافظة تابلت ولابتوب بينك مبطنة", description: "حماية مبطنة ناعمة - تناسب 13 انش", price: 65, oldPrice: 130, image: asset("bag30"), category: "شنط لابتوب", rating: 4, reviewCount: 592, section: "شنط" },
  { id: "b31", name: "شنطة سفر دفل كانفاس كحلي", description: "قماش كانفاس متين مع جلد طبيعي", price: 175, oldPrice: 350, image: asset("bag31"), badge: "جديد", category: "شنط سفر", rating: 5, reviewCount: 483, section: "شنط" },
  { id: "b32", name: "باك باك لابتوب رمادي مع USB", description: "منفذ شحن - تناسب 15.6 انش", price: 115, oldPrice: 230, image: asset("bag32"), category: "شنط لابتوب", rating: 4, reviewCount: 688, section: "شنط" },
  { id: "b33", name: "شنطة سفر ترولي روز قولد", description: "هارد شل أنيقة مع عجلات 360°", price: 290, oldPrice: 580, image: asset("bag33"), badge: "الأكثر طلباً", category: "شنط سفر", rating: 5, reviewCount: 1425, section: "شنط" },
  { id: "b34", name: "حافظة لابتوب جلد بينك 13 انش", description: "جلد ناعم مع سوستة ذهبية", price: 85, oldPrice: 170, image: asset("bag34"), category: "شنط لابتوب", rating: 5, reviewCount: 947, section: "شنط" },
  { id: "b35", name: "طقم شنط سفر كحلي 3 قطع", description: "3 أحجام مختلفة - قفل TSA", price: 450, oldPrice: 900, image: asset("bag35"), badge: "خصم 50%", category: "شنط سفر", rating: 5, reviewCount: 297, section: "شنط" },
  { id: "b36", name: "باك باك لابتوب أسود ضد الماء", description: "حماية كاملة - تصميم عصري", price: 130, oldPrice: 260, image: asset("bag36"), category: "شنط لابتوب", rating: 4, reviewCount: 510, section: "شنط" },
  { id: "b37", name: "شنطة سفر كلاسيك جلد بني", description: "تصميم فينتاج أنيق - صناعة يدوية", price: 340, oldPrice: 680, image: asset("bag37"), badge: "عرض خاص", category: "شنط سفر", rating: 4, reviewCount: 742, section: "شنط" },
  { id: "b38", name: "شنطة توت لابتوب بيج كانفاس", description: "تناسب لابتوب 14 انش - عملية ومريحة", price: 110, oldPrice: 220, image: asset("bag38"), category: "شنط لابتوب", rating: 3, reviewCount: 1254, section: "شنط" },
  { id: "b39", name: "شنطة سفر كابينة أبيض ذهبي", description: "تصميم فاخر - مناسبة للطائرة", price: 230, oldPrice: 460, image: asset("bag39"), badge: "جديد", category: "شنط سفر", rating: 4, reviewCount: 1255, section: "شنط" },
  { id: "b40", name: "شنطة لابتوب ترولي أعمال أسود", description: "بعجلات - مثالية لرجال الأعمال", price: 195, oldPrice: 390, image: asset("bag40"), badge: "الأكثر طلباً", category: "شنط لابتوب", rating: 4, reviewCount: 64, section: "شنط" },
  { id: "b41", name: "شنطة رياضة وسفر أحمر غامق", description: "مثالية للجيم والسفر - جيب أحذية", price: 105, oldPrice: 210, image: asset("bag41"), category: "شنط سفر", rating: 4, reviewCount: 1499, section: "شنط" },
  { id: "b42", name: "طقم منظمات سفر باستيل 8 قطع", description: "تنظيم كامل للملابس والإكسسوارات", price: 95, oldPrice: 190, image: asset("bag42"), category: "اكسسوارات سفر", rating: 3, reviewCount: 518, section: "شنط" },
  { id: "b43", name: "شنطة سفر صغيرة زمردي متينة", description: "هارد شل مقاومة للخدش", price: 185, oldPrice: 370, image: asset("bag43"), category: "شنط سفر", rating: 4, reviewCount: 114, section: "شنط" },
  { id: "b44", name: "شنطة ماسنجر لابتوب جلد بيج", description: "جلد طبيعي - تناسب 14 انش", price: 140, oldPrice: 280, image: asset("bag44"), badge: "عرض خاص", category: "شنط لابتوب", rating: 5, reviewCount: 195, section: "شنط" },
  { id: "b45", name: "باك باك سفر قابل للطي تيل", description: "خفيفة جداً - مثالية للرحلات", price: 65, oldPrice: 130, image: asset("bag45"), category: "شنط سفر", rating: 4, reviewCount: 620, section: "شنط" },
  { id: "b46", name: "شنطة سفر ترولي بنفسجي متوسطة", description: "تصميم عصري مع توسعة إضافية", price: 260, oldPrice: 520, image: asset("bag46"), badge: "خصم 50%", category: "شنط سفر", rating: 5, reviewCount: 488, section: "شنط" },
  { id: "b47", name: "باك باك لابتوب رمادي غامق فاخر", description: "مضاد للسرقة - جيوب مخفية", price: 150, oldPrice: 300, image: asset("bag47"), category: "شنط لابتوب", rating: 4, reviewCount: 1219, section: "شنط" },
  { id: "b48", name: "شنطة مكياج سفر ماربل ذهبي", description: "تصميم أنيق للسفر والمناسبات", price: 70, oldPrice: 140, image: asset("bag48"), badge: "جديد", category: "اكسسوارات سفر", rating: 5, reviewCount: 547, section: "شنط" },
  { id: "b49", name: "طقم شنط سفر ذهبي 3 قطع فاخر", description: "3 أحجام - تصميم لامع فاخر", price: 520, oldPrice: 1040, image: asset("bag49"), badge: "الأكثر طلباً", category: "شنط سفر", rating: 5, reviewCount: 883, section: "شنط" },
  { id: "b50", name: "حافظة لابتوب كحلي مع حزام", description: "نيوبرين مبطن - تناسب 15 انش", price: 80, oldPrice: 160, image: asset("bag50"), category: "شنط لابتوب", rating: 4, reviewCount: 243, section: "شنط" },
];

// ========== أدوات منزلية ==========
export const homeProducts: Product[] = [
  { id: "h1", name: "خلاط كهربائي 1.5 لتر", description: "خلاط قوي لتحضير العصائر والسموثي - 600 واط", price: 189, oldPrice: 380, image: asset("home1"), badge: "خصم 50%", category: "أجهزة مطبخ", rating: 4, reviewCount: 1399, section: "أدوات منزلية" },
  { id: "h2", name: "ماكينة تحضير القهوة", description: "ماكينة قهوة أمريكية 12 كوب - فلتر دائم", price: 245, oldPrice: 490, image: asset("home2"), badge: "الأكثر طلباً", category: "أجهزة مطبخ", rating: 5, reviewCount: 775, section: "أدوات منزلية" },
  { id: "h3", name: "غلاية كهربائية ستانلس ستيل", description: "غلاية 1.7 لتر - فصل تلقائي - 2200 واط", price: 120, oldPrice: 240, image: asset("home3"), category: "أجهزة مطبخ", rating: 5, reviewCount: 891, section: "أدوات منزلية" },
  { id: "h4", name: "قلاية هوائية 5 لتر ديجيتال", description: "طبخ صحي بدون زيت - شاشة رقمية", price: 350, oldPrice: 700, image: asset("home4"), badge: "خصم 50%", category: "أجهزة مطبخ", rating: 5, reviewCount: 160, section: "أدوات منزلية" },
  { id: "h5", name: "توستر شريحتين ستانلس ستيل", description: "7 درجات تحميص - سحب تلقائي", price: 95, oldPrice: 190, image: asset("home5"), category: "أجهزة مطبخ", rating: 4, reviewCount: 174, section: "أدوات منزلية" },
  { id: "h6", name: "محضرة طعام كهربائية 2 لتر", description: "تقطيع وبشر وعجن - 3 أقراص مختلفة", price: 210, oldPrice: 420, image: asset("home6"), badge: "عرض خاص", category: "أجهزة مطبخ", rating: 5, reviewCount: 744, section: "أدوات منزلية" },
  { id: "h7", name: "صانعة ساندويتش وتوست", description: "سطح مانع للالتصاق - تحميص سريع", price: 85, oldPrice: 170, image: asset("home7"), category: "أجهزة مطبخ", rating: 4, reviewCount: 559, section: "أدوات منزلية" },
  { id: "h8", name: "خفاقة يدوية كهربائية 5 سرعات", description: "مضرب ومخفق - خفيفة وسهلة الاستخدام", price: 75, oldPrice: 150, image: asset("home8"), badge: "خصم 50%", category: "أجهزة مطبخ", rating: 4, reviewCount: 439, section: "أدوات منزلية" },
  { id: "h9", name: "مايكرويف 25 لتر سلفر", description: "5 مستويات طاقة - فك تجميد سريع", price: 320, oldPrice: 640, image: asset("home9"), badge: "الأكثر طلباً", category: "أجهزة مطبخ", rating: 5, reviewCount: 337, section: "أدوات منزلية" },
  { id: "h10", name: "حلة أرز كهربائية 1.8 لتر", description: "طهي تلقائي - حفظ الحرارة - مقاومة للالتصاق", price: 135, oldPrice: 270, image: asset("home10"), category: "أجهزة مطبخ", rating: 5, reviewCount: 425, section: "أدوات منزلية" },
  { id: "h11", name: "عصارة فواكه كهربائية", description: "عصير طبيعي طازج - سهلة التنظيف", price: 165, oldPrice: 330, image: asset("home11"), badge: "جديد", category: "أجهزة مطبخ", rating: 5, reviewCount: 997, section: "أدوات منزلية" },
  { id: "h12", name: "صانعة وافل ستانلس ستيل", description: "وافل ذهبي مقرمش - سطح مانع للالتصاق", price: 110, oldPrice: 220, image: asset("home12"), category: "أجهزة مطبخ", rating: 4, reviewCount: 204, section: "أدوات منزلية" },
  { id: "h13", name: "قدر ضغط كهربائي 6 لتر", description: "طبخ سريع - 8 برامج مسبقة", price: 280, oldPrice: 560, image: asset("home13"), badge: "خصم 50%", category: "أجهزة مطبخ", rating: 5, reviewCount: 1177, section: "أدوات منزلية" },
  { id: "h14", name: "عجانة ستاند ميكسر احترافية", description: "5 لتر - 6 سرعات - مضرب ومخفق وعجان", price: 450, oldPrice: 900, image: asset("home14"), badge: "الأكثر طلباً", category: "أجهزة مطبخ", rating: 4, reviewCount: 153, section: "أدوات منزلية" },
  { id: "h15", name: "سلاقة بيض كهربائية 7 بيضات", description: "سلق مثالي في دقائق - فصل تلقائي", price: 55, oldPrice: 110, image: asset("home15"), category: "أجهزة مطبخ", rating: 3, reviewCount: 241, section: "أدوات منزلية" },
  { id: "h16", name: "مطحنة قهوة كهربائية", description: "طحن ناعم ومتساوي - وعاء ستانلس ستيل", price: 95, oldPrice: 190, image: asset("home16"), badge: "عرض خاص", category: "أجهزة مطبخ", rating: 4, reviewCount: 390, section: "أدوات منزلية" },
  { id: "h17", name: "شواية كهربائية مسطحة", description: "شوي صحي بدون دخان - سطح واسع", price: 185, oldPrice: 370, image: asset("home17"), category: "أجهزة مطبخ", rating: 5, reviewCount: 1044, section: "أدوات منزلية" },
  { id: "h18", name: "مكنسة روبوت ذكية", description: "تنظيف تلقائي - استشعار العوائق - شحن ذاتي", price: 520, oldPrice: 1040, image: asset("home18"), badge: "جديد", category: "أجهزة تنظيف", rating: 5, reviewCount: 487, section: "أدوات منزلية" },
  { id: "h19", name: "مكواة بخار يدوية", description: "بخار قوي لإزالة التجاعيد - خفيفة الوزن", price: 110, oldPrice: 220, image: asset("home19"), badge: "خصم 50%", category: "أجهزة منزلية", rating: 5, reviewCount: 170, section: "أدوات منزلية" },
  { id: "h20", name: "مكنسة لاسلكية عصا", description: "بطارية قوية - خفيفة وعملية - شفط قوي", price: 380, oldPrice: 760, image: asset("home20"), badge: "الأكثر طلباً", category: "أجهزة تنظيف", rating: 4, reviewCount: 826, section: "أدوات منزلية" },
  { id: "h21", name: "صانعة كريب كهربائية", description: "سطح مسطح واسع - كريب رقيق مثالي", price: 95, oldPrice: 190, image: asset("home21"), category: "أجهزة مطبخ", rating: 3, reviewCount: 849, section: "أدوات منزلية" },
  { id: "h22", name: "صانعة فشار كلاسيكية", description: "فشار بدون زيت - تصميم ريترو أنيق", price: 120, oldPrice: 240, image: asset("home22"), badge: "عرض خاص", category: "أجهزة مطبخ", rating: 5, reviewCount: 981, section: "أدوات منزلية" },
  { id: "h23", name: "طباخة بطيئة 3.5 لتر", description: "طبخ بطيء لنكهة مكثفة - 3 إعدادات", price: 145, oldPrice: 290, image: asset("home23"), category: "أجهزة مطبخ", rating: 5, reviewCount: 916, section: "أدوات منزلية" },
  { id: "h24", name: "قلاية عميقة ستانلس ستيل", description: "سلة قابلة للإزالة - تحكم بالحرارة", price: 160, oldPrice: 320, image: asset("home24"), badge: "خصم 50%", category: "أجهزة مطبخ", rating: 5, reviewCount: 367, section: "أدوات منزلية" },
  { id: "h25", name: "صانعة خبز أوتوماتيكية", description: "12 برنامج - خبز طازج يومياً", price: 280, oldPrice: 560, image: asset("home25"), badge: "جديد", category: "أجهزة مطبخ", rating: 4, reviewCount: 657, section: "أدوات منزلية" },
  { id: "h26", name: "خلاط يدوي غمر ستانلس ستيل", description: "خلط وهرس - مع كوب وملحقات", price: 105, oldPrice: 210, image: asset("home26"), category: "أجهزة مطبخ", rating: 4, reviewCount: 169, section: "أدوات منزلية" },
  { id: "h27", name: "موزع ماء ساخن كهربائي", description: "3 درجات حرارة - خزان 3 لتر", price: 230, oldPrice: 460, image: asset("home27"), badge: "الأكثر طلباً", category: "أجهزة مطبخ", rating: 3, reviewCount: 692, section: "أدوات منزلية" },
  { id: "h28", name: "صانعة غزل البنات", description: "متعة للأطفال والكبار - سهلة الاستخدام", price: 85, oldPrice: 170, image: asset("home28"), badge: "عرض خاص", category: "أجهزة مطبخ", rating: 3, reviewCount: 152, section: "أدوات منزلية" },
  { id: "h29", name: "صانعة آيس كريم منزلية", description: "آيس كريم طازج في 30 دقيقة - 1.5 لتر", price: 195, oldPrice: 390, image: asset("home29"), category: "أجهزة مطبخ", rating: 5, reviewCount: 1079, section: "أدوات منزلية" },
  { id: "h30", name: "مجفف طعام كهربائي 5 طبقات", description: "تجفيف الفواكه والخضروات واللحوم", price: 220, oldPrice: 440, image: asset("home30"), badge: "خصم 50%", category: "أجهزة مطبخ", rating: 4, reviewCount: 166, section: "أدوات منزلية" },
];

// ========== أثاث مكتبي ==========
export const officeProducts: Product[] = [
  { id: "of1", name: "كرسي جيمنج احترافي أسود وأحمر", description: "ظهر عالي مع مسند رأس - إمالة 180°", price: 380, oldPrice: 950, image: asset("office1"), badge: "خصم 60%", category: "كراسي جيمنج", rating: 4, reviewCount: 430, section: "أثاث مكتبي" },
  { id: "of2", name: "كرسي مكتب تنفيذي جلد أسود", description: "جلد طبيعي فاخر - مساند كروم", price: 450, oldPrice: 1125, image: asset("office2"), badge: "الأكثر طلباً", category: "كراسي مكتب", rating: 4, reviewCount: 1268, section: "أثاث مكتبي" },
  { id: "of3", name: "مكتب كمبيوتر L-Shape خشبي", description: "سطح واسع مع هيكل معدني متين", price: 520, oldPrice: 1300, image: asset("office3"), badge: "خصم 60%", category: "مكاتب", rating: 4, reviewCount: 1432, section: "أثاث مكتبي" },
  { id: "of4", name: "مكتب قائم كهربائي قابل للتعديل", description: "تحكم كهربائي بالارتفاع - ذاكرة 3 أوضاع", price: 680, oldPrice: 1700, image: asset("office4"), badge: "عرض خاص", category: "مكاتب", rating: 4, reviewCount: 876, section: "أثاث مكتبي" },
  { id: "of5", name: "مكتبة رفوف 5 طوابق خشب ومعدن", description: "تصميم صناعي عصري - تحمل حتى 50 كجم", price: 280, oldPrice: 700, image: asset("office5"), category: "خزائن وأرفف", rating: 4, reviewCount: 1216, section: "أثاث مكتبي" },
  { id: "of6", name: "خزنة ملفات معدنية 3 أدراج", description: "قفل أمان مع عجلات - فولاذ متين", price: 195, oldPrice: 490, image: asset("office6"), badge: "خصم 60%", category: "خزائن وأرفف", rating: 4, reviewCount: 1235, section: "أثاث مكتبي" },
  { id: "of7", name: "حامل شاشتين مزدوج ألمنيوم", description: "ذراع متحرك قابل للتعديل - يناسب حتى 32 انش", price: 165, oldPrice: 415, image: asset("office7"), badge: "الأكثر طلباً", category: "اكسسوارات مكتب", rating: 3, reviewCount: 1318, section: "أثاث مكتبي" },
  { id: "of8", name: "مصباح مكتب LED ذكي", description: "5 درجات إضاءة - شحن لاسلكي مدمج", price: 95, oldPrice: 240, image: asset("office8"), category: "اكسسوارات مكتب", rating: 4, reviewCount: 908, section: "أثاث مكتبي" },
  { id: "of9", name: "كرسي مكتب شبكي مريح رمادي", description: "ظهر شبكي مسامي - دعم لأسفل الظهر", price: 320, oldPrice: 800, image: asset("office9"), badge: "خصم 60%", category: "كراسي مكتب", rating: 5, reviewCount: 584, section: "أثاث مكتبي" },
  { id: "of10", name: "منظم مكتب خشبي متعدد الأقسام", description: "حامل أقلام وملفات وهاتف", price: 65, oldPrice: 165, image: asset("office10"), category: "اكسسوارات مكتب", rating: 4, reviewCount: 1421, section: "أثاث مكتبي" },
  { id: "of11", name: "مكتب جيمنج مع إضاءة RGB", description: "سطح كربون فايبر - حامل أكواب وسماعة", price: 480, oldPrice: 1200, image: asset("office11"), badge: "عرض خاص", category: "مكاتب", rating: 5, reviewCount: 538, section: "أثاث مكتبي" },
  { id: "of12", name: "حامل لوحة مفاتيح تحت المكتب", description: "قابل للتعديل - سحب وإخفاء", price: 85, oldPrice: 215, image: asset("office12"), category: "اكسسوارات مكتب", rating: 5, reviewCount: 860, section: "أثاث مكتبي" },
  { id: "of13", name: "سبورة بيضاء متحركة بعجلات", description: "مغناطيسية وجهين - إطار فضي", price: 220, oldPrice: 550, image: asset("office13"), badge: "خصم 60%", category: "اكسسوارات مكتب", rating: 4, reviewCount: 1425, section: "أثاث مكتبي" },
  { id: "of14", name: "منظم كابلات مكتب أبيض", description: "صندوق أنيق لإخفاء الأسلاك والشواحن", price: 45, oldPrice: 115, image: asset("office14"), category: "اكسسوارات مكتب", rating: 5, reviewCount: 986, section: "أثاث مكتبي" },
  { id: "of15", name: "ستاند لابتوب ألمنيوم قابل للتعديل", description: "تبريد ممتاز - مناسب لجميع الأحجام", price: 75, oldPrice: 190, image: asset("office15"), badge: "الأكثر طلباً", category: "اكسسوارات مكتب", rating: 5, reviewCount: 198, section: "أثاث مكتبي" },
  { id: "of16", name: "كرسي جيمنج أبيض وأزرق مع فوت ريست", description: "إمالة كاملة مع مسند أقدام قابل للسحب", price: 420, oldPrice: 1050, image: asset("office16"), badge: "خصم 60%", category: "كراسي جيمنج", rating: 3, reviewCount: 988, section: "أثاث مكتبي" },
  { id: "of17", name: "مكتب زاوية خشب جوز مع أدراج", description: "تصميم كلاسيكي أنيق - 4 أدراج تخزين", price: 550, oldPrice: 1375, image: asset("office17"), badge: "عرض خاص", category: "مكاتب", rating: 4, reviewCount: 200, section: "أثاث مكتبي" },
  { id: "of18", name: "مسند أقدام مكتبي مريح", description: "ارتفاع قابل للتعديل - مضاد للانزلاق", price: 55, oldPrice: 140, image: asset("office18"), category: "اكسسوارات مكتب", rating: 4, reviewCount: 1086, section: "أثاث مكتبي" },
  { id: "of19", name: "آلة تمزيق ورق مكتبية", description: "تقطيع متقاطع آمن - سعة 15 لتر", price: 135, oldPrice: 340, image: asset("office19"), badge: "خصم 60%", category: "اكسسوارات مكتب", rating: 5, reviewCount: 321, section: "أثاث مكتبي" },
  { id: "of20", name: "خزانة مكتب أبيض بابين", description: "3 أرفف داخلية - تصميم عصري نظيف", price: 240, oldPrice: 600, image: asset("office20"), category: "خزائن وأرفف", rating: 5, reviewCount: 190, section: "أثاث مكتبي" },
  { id: "of21", name: "كرسي مكتب شبكي مع مسند رأس", description: "دعم كامل للظهر والرقبة - تعديل متعدد", price: 350, oldPrice: 875, image: asset("office21"), badge: "الأكثر طلباً", category: "كراسي مكتب", rating: 4, reviewCount: 806, section: "أثاث مكتبي" },
  { id: "of22", name: "مكتب كمبيوتر بسيط سكندنافي", description: "سطح أبيض مع أرجل خشبية - درج واحد", price: 290, oldPrice: 725, image: asset("office22"), category: "مكاتب", rating: 5, reviewCount: 373, section: "أثاث مكتبي" },
  { id: "of23", name: "وحدة أدراج متحركة أبيض 5 أدراج", description: "بعجلات - تناسب تحت أي مكتب", price: 120, oldPrice: 300, image: asset("office23"), badge: "خصم 60%", category: "خزائن وأرفف", rating: 5, reviewCount: 1162, section: "أثاث مكتبي" },
  { id: "of24", name: "كرسي جيمنج بينك للبنات", description: "تصميم أنثوي مريح - مسند رأس وظهر", price: 390, oldPrice: 975, image: asset("office24"), badge: "جديد", category: "كراسي جيمنج", rating: 5, reviewCount: 1302, section: "أثاث مكتبي" },
  { id: "of25", name: "مكتب مدير تنفيذي خشب داكن", description: "تصميم فخم مع أدراج جانبية - صناعة ممتازة", price: 850, oldPrice: 2125, image: asset("office25"), badge: "عرض خاص", category: "مكاتب", rating: 3, reviewCount: 1417, section: "أثاث مكتبي" },
  { id: "of26", name: "وسادة دعم أسفل الظهر ميموري فوم", description: "تناسب جميع الكراسي - تخفف آلام الظهر", price: 45, oldPrice: 115, image: asset("office26"), category: "اكسسوارات مكتب", rating: 5, reviewCount: 1408, section: "أثاث مكتبي" },
  { id: "of27", name: "ستاند شاشة خشبي مع تخزين", description: "رفع الشاشة - مساحة تخزين أسفل", price: 85, oldPrice: 215, image: asset("office27"), badge: "خصم 60%", category: "اكسسوارات مكتب", rating: 4, reviewCount: 325, section: "أثاث مكتبي" },
  { id: "of28", name: "طاولة اجتماعات حديثة 8 أشخاص", description: "سطح أبيض مع أرجل كروم - أنيقة واحترافية", price: 1200, oldPrice: 3000, image: asset("office28"), badge: "الأكثر طلباً", category: "مكاتب", rating: 5, reviewCount: 286, section: "أثاث مكتبي" },
  { id: "of29", name: "ماوس باد مكتبي جلد كبير", description: "جلد ناعم مع حواف مخيطة - مقاوم للماء", price: 35, oldPrice: 90, image: asset("office29"), category: "اكسسوارات مكتب", rating: 4, reviewCount: 1183, section: "أثاث مكتبي" },
  { id: "of30", name: "علاقة ملابس معدنية قائمة", description: "تصميم عصري أسود - مثالية للمكتب", price: 75, oldPrice: 190, image: asset("office30"), category: "اكسسوارات مكتب", rating: 4, reviewCount: 607, section: "أثاث مكتبي" },
];


// ========== طاولات سفرة ==========
export const diningTableProducts: Product[] = [
  { id: "dt1", name: "طاولة سفرة رخام أبيض 6 مقاعد", description: "سطح رخام طبيعي مع أرجل ذهبية - تصميم إيطالي فاخر", price: 1299, oldPrice: 1498, image: asset("dining1"), badge: "حصري", category: "طاولات سفرة", rating: 5, reviewCount: 1288, section: "طاولات سفرة" },
  { id: "dt2", name: "طاولة سفرة خشب جوز 8 مقاعد", description: "خشب جوز طبيعي بتصميم عصري وأرجل مستدقة", price: 1499, oldPrice: 1698, image: asset("dining2"), category: "طاولات سفرة", rating: 4, reviewCount: 752, section: "طاولات سفرة" },
  { id: "dt3", name: "طاولة سفرة زجاج مقسى كروم", description: "زجاج شفاف مقسى مع قاعدة كروم أنيقة - 6 مقاعد", price: 899, oldPrice: 1098, image: asset("dining3"), badge: "الأكثر مبيعاً", category: "طاولات سفرة", rating: 4, reviewCount: 1457, section: "طاولات سفرة" },
  { id: "dt4", name: "طاولة سفرة مستديرة رخام ذهبي", description: "رخام أبيض مع قاعدة ستانلس ستيل ذهبية - 4 مقاعد", price: 1099, oldPrice: 1298, image: asset("dining4"), category: "طاولات سفرة", rating: 5, reviewCount: 1085, section: "طاولات سفرة" },
  { id: "dt5", name: "طاولة سفرة قابلة للتمديد بلوط داكن", description: "تتسع من 6 إلى 10 أشخاص - خشب بلوط طبيعي", price: 1599, oldPrice: 1798, image: asset("dining5"), badge: "عرض خاص", category: "طاولات سفرة", rating: 5, reviewCount: 564, section: "طاولات سفرة" },
  { id: "dt6", name: "طاولة سفرة حجر سنترد رمادي", description: "سطح حجر سنترد إيطالي مع أرجل معدنية سوداء - 8 مقاعد", price: 1899, oldPrice: 2098, image: asset("dining6"), badge: "فاخر", category: "طاولات سفرة", rating: 3, reviewCount: 239, section: "طاولات سفرة" },
  { id: "dt7", name: "طقم طاولة سفرة سكندنافي 4 كراسي", description: "خشب فاتح بتصميم بسيط وأنيق - مناسب للمساحات الصغيرة", price: 799, oldPrice: 998, image: asset("dining7"), category: "طاولات سفرة", rating: 5, reviewCount: 616, section: "طاولات سفرة" },
  { id: "dt8", name: "طاولة سفرة رخام أسود فاخرة", description: "رخام أسود طبيعي مع إطار معدني أسود - 6 مقاعد", price: 1699, oldPrice: 1898, image: asset("dining8"), badge: "حصري", category: "طاولات سفرة", rating: 3, reviewCount: 57, section: "طاولات سفرة" },
  { id: "dt9", name: "طاولة سفرة بيضاء لامعة كروم", description: "سطح لاكر أبيض لامع مع أرجل كروم - تصميم معاصر", price: 999, oldPrice: 1198, image: asset("dining9"), category: "طاولات سفرة", rating: 5, reviewCount: 317, section: "طاولات سفرة" },
  { id: "dt10", name: "طاولة سفرة بيضاوية خشب تيك", description: "خشب تيك طبيعي بتصميم مودرن ميد سنشري - 6 مقاعد", price: 1399, oldPrice: 1598, image: asset("dining10"), badge: "الأكثر مبيعاً", category: "طاولات سفرة", rating: 5, reviewCount: 380, section: "طاولات سفرة" },
  { id: "dt11", name: "طاولة سفرة كلاسيك قابلة للتمديد", description: "خشب إسبريسو داكن فاخر - تتسع حتى 10 أشخاص", price: 1799, oldPrice: 1998, image: asset("dining11"), category: "طاولات سفرة", rating: 5, reviewCount: 1179, section: "طاولات سفرة" },
  { id: "dt12", name: "طاولة سفرة سيراميك حديثة", description: "سطح سيراميك أبيض مع قاعدة ستيل - 6 مقاعد", price: 1199, oldPrice: 1398, image: asset("dining12"), badge: "جديد", category: "طاولات سفرة", rating: 5, reviewCount: 1198, section: "طاولات سفرة" },
  { id: "dt13", name: "طاولة سفرة صناعية خشب معاد تدويره", description: "خشب طبيعي معاد تدويره مع أرجل حديد - 8 مقاعد", price: 1099, oldPrice: 1298, image: asset("dining13"), category: "طاولات سفرة", rating: 3, reviewCount: 279, section: "طاولات سفرة" },
  { id: "dt14", name: "طاولة سفرة مربعة رخام كالاكاتا", description: "رخام كالاكاتا ذهبي مع أرجل نحاسية - 4 مقاعد", price: 1499, oldPrice: 1698, image: asset("dining14"), badge: "فاخر", category: "طاولات سفرة", rating: 4, reviewCount: 1465, section: "طاولات سفرة" },
  { id: "dt15", name: "طاولة سفرة لايف إيدج خشب أكاسيا", description: "حافة طبيعية مع ريزن وأرجل معدنية - قطعة فنية فريدة", price: 2199, oldPrice: 2398, image: asset("dining15"), badge: "حصري", category: "طاولات سفرة", rating: 4, reviewCount: 1167, section: "طاولات سفرة" },
  { id: "dt16", name: "طاولة سفرة توليب مستديرة بيضاء", description: "تصميم توليب كلاسيكي بقاعدة واحدة - 4 مقاعد", price: 699, oldPrice: 898, image: asset("dining16"), category: "طاولات سفرة", rating: 3, reviewCount: 806, section: "طاولات سفرة" },
  { id: "dt17", name: "طاولة سفرة قابلة للطي متعددة الاستخدام", description: "تصميم ذكي موفر للمساحة - خشب جوز عصري", price: 599, oldPrice: 798, image: asset("dining17"), badge: "عرض خاص", category: "طاولات سفرة", rating: 4, reviewCount: 930, section: "طاولات سفرة" },
];

// ========== طاولات خارجية ==========
export const outdoorTableProducts: Product[] = [
  { id: "ot1", name: "طاولة خارجية تيك وألمنيوم 6 مقاعد", description: "خشب تيك مقاوم للعوامل مع إطار ألمنيوم", price: 1299, oldPrice: 1998, image: asset("outdoor1"), badge: "خصم 35%", category: "طاولات خارجية", rating: 4, reviewCount: 135, section: "طاولات خارجية" },
  { id: "ot2", name: "طقم جلسة راتان خارجية مستديرة", description: "راتان بني مع 4 كراسي - مثالية للحدائق", price: 999, oldPrice: 1537, image: asset("outdoor2"), badge: "خصم 35%", category: "طاولات خارجية", rating: 5, reviewCount: 796, section: "طاولات خارجية" },
  { id: "ot3", name: "طقم بيسترو موزاييك قابل للطي", description: "طاولة صغيرة مع كرسيين - تصميم متوسطي أنيق", price: 499, oldPrice: 768, image: asset("outdoor3"), category: "طاولات خارجية", rating: 3, reviewCount: 782, section: "طاولات خارجية" },
  { id: "ot4", name: "طاولة خارجية خرسانة وحديد 8 مقاعد", description: "سطح خرسانة متين مع أرجل حديد صناعي - تصميم مودرن", price: 1899, oldPrice: 2922, image: asset("outdoor4"), badge: "خصم 35%", category: "طاولات خارجية", rating: 4, reviewCount: 1446, section: "طاولات خارجية" },
  { id: "ot5", name: "طاولة خارجية قابلة للطي ألمنيوم", description: "خفيفة وقابلة للطي - مثالية للرحلات والتخييم", price: 199, oldPrice: 306, image: asset("outdoor5"), category: "طاولات خارجية", rating: 4, reviewCount: 1415, section: "طاولات خارجية" },
  { id: "ot6", name: "طاولة حديقة رخام وحديد مزخرف", description: "سطح رخام طبيعي مع قاعدة حديد كلاسيكية", price: 1099, oldPrice: 1691, image: asset("outdoor6"), badge: "فاخر", category: "طاولات خارجية", rating: 4, reviewCount: 774, section: "طاولات خارجية" },
  { id: "ot7", name: "طاولة خارجية مع مدفأة مدمجة", description: "طاولة دائرية مع مدفأة وسطية - مثالية للشتاء", price: 2499, oldPrice: 3845, image: asset("outdoor7"), badge: "حصري", category: "طاولات خارجية", rating: 5, reviewCount: 1321, section: "طاولات خارجية" },
  { id: "ot8", name: "طاولة نزهة خشب أرز كلاسيكية", description: "تصميم كلاسيكي مع مقاعد مدمجة - 6 أشخاص", price: 799, oldPrice: 1229, image: asset("outdoor8"), badge: "خصم 35%", category: "طاولات خارجية", rating: 4, reviewCount: 534, section: "طاولات خارجية" },
  { id: "ot9", name: "طقم جلسة خارجية بولي وود أبيض", description: "بلاستيك معاد تدويره مقاوم لجميع الأجواء - 6 مقاعد", price: 1599, oldPrice: 2460, image: asset("outdoor9"), category: "طاولات خارجية", rating: 4, reviewCount: 412, section: "طاولات خارجية" },
  { id: "ot10", name: "طاولة بار خارجية عالية معدنية", description: "طاولة واقفة بارتفاع بار مع فتحة مظلة", price: 399, oldPrice: 614, image: asset("outdoor10"), category: "طاولات خارجية", rating: 5, reviewCount: 100, section: "طاولات خارجية" },
  { id: "ot11", name: "طاولة قهوة خارجية تيك منخفضة", description: "طاولة خشب تيك منخفضة بتصميم بسيط - للجلسات الأرضية", price: 599, oldPrice: 922, image: asset("outdoor11"), badge: "خصم 35%", category: "طاولات خارجية", rating: 4, reviewCount: 730, section: "طاولات خارجية" },
  { id: "ot12", name: "طاولة خارجية ألمنيوم مع مظلة", description: "طاولة مستطيلة مع مظلة شمسية متكاملة", price: 899, oldPrice: 1383, image: asset("outdoor12"), category: "طاولات خارجية", rating: 5, reviewCount: 1421, section: "طاولات خارجية" },
  { id: "ot13", name: "طقم جلسة ألمنيوم مصبوب فيكتوري", description: "تصميم فيكتوري كلاسيكي برونزي مع 4 كراسي", price: 1399, oldPrice: 2153, image: asset("outdoor13"), badge: "فاخر", category: "طاولات خارجية", rating: 4, reviewCount: 596, section: "طاولات خارجية" },
  { id: "ot14", name: "طاولة خارجية حبال منسوجة دائرية", description: "تصميم حبال طبيعية أنيق - مثالية للبلكونات", price: 699, oldPrice: 1075, image: asset("outdoor14"), category: "طاولات خارجية", rating: 4, reviewCount: 1486, section: "طاولات خارجية" },
  { id: "ot15", name: "طاولة حديقة جرانيت طبيعي", description: "سطح جرانيت طبيعي مع أرجل خشبية متينة", price: 999, oldPrice: 1537, image: asset("outdoor15"), badge: "خصم 35%", category: "طاولات خارجية", rating: 4, reviewCount: 833, section: "طاولات خارجية" },
  { id: "ot16", name: "طاولة خارجية بامبو استوائية", description: "بامبو طبيعي صديق للبيئة - تصميم استوائي", price: 449, oldPrice: 691, image: asset("outdoor16"), category: "طاولات خارجية", rating: 3, reviewCount: 1013, section: "طاولات خارجية" },
  { id: "ot17", name: "طاولة خارجية ألمنيوم وزجاج قابلة للتمديد", description: "إطار ألمنيوم أبيض مع سطح زجاجي - 6-8 مقاعد", price: 1199, oldPrice: 1845, image: asset("outdoor17"), badge: "خصم 35%", category: "طاولات خارجية", rating: 4, reviewCount: 458, section: "طاولات خارجية" },
  { id: "ot18", name: "طقم جلسة راتان زاوية مع طاولة زجاج", description: "جلسة L-شكل مع طاولة زجاجية - تصميم مودرن", price: 1799, oldPrice: 2768, image: asset("outdoor18"), badge: "حصري", category: "طاولات خارجية", rating: 5, reviewCount: 766, section: "طاولات خارجية" },
  { id: "ot19", name: "طاولة خارجية أكاسيا لايف إيدج فاخرة", description: "خشب أكاسيا بحافة طبيعية وقاعدة X معدنية - 6 مقاعد", price: 1999, oldPrice: 3075, image: asset("outdoor19"), badge: "فاخر", category: "طاولات خارجية", rating: 5, reviewCount: 516, section: "طاولات خارجية" },
];

export const categories = [
  "مكياج",
  "عطور",
  "شنط",
  "أدوات منزلية",
  "أثاث مكتبي",
  "جوالات",
  "طاولات سفرة",
  "طاولات خارجية",
  "لابتوبات",
  "شاشات",
  "سماعات",
  "شواحن",
  "ساعات",
  "منوعات",
];

// كل المنتجات مجمعة
import { allTechProducts } from "./techProducts";
import { allWatchProducts } from "./watchProducts";
import { variousProducts } from "./variousProducts";
import { honeyProducts } from "./honeyProducts";

export const products: Product[] = [...makeupProducts, ...perfumeProducts, ...bagProducts, ...homeProducts, ...officeProducts, ...diningTableProducts, ...outdoorTableProducts, ...allTechProducts, ...allWatchProducts, ...variousProducts, ...honeyProducts];

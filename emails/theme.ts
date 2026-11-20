/**
 * ARZ Portfolio & ARZ Packages — Design Tokens & Featured Showcase (v5)
 * Theme: Cinematic Espresso & Honey-Amber
 */
export const arzTheme = {
  colors: {
    bg: "#0C0A08",
    bgAlt: "#120E0B",
    surface: "#15110D",
    surfaceAlt: "#1C1610",
    border: "#2A2118",
    borderStrong: "#3A2C1E",
    text: "#F5EFE7",
    muted: "#A89D8F",
    dim: "#756A5D",
    accent: "#DB9B3E",
    accentBright: "#F0B45A",
    accentInk: "#140E05",
  },
  fonts: {
    display:
      '"Bricolage Grotesque", "Cairo", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace',
    arabic:
      '"Cairo", "Segoe UI", Tahoma, Arial, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  brand: {
    shortName: "ARZ",
    name: "ARZ Portfolio",
    studio: "ARZ Studio",
    owner: "Abdelrazek Mahmoud",
    ownerAr: "عبدالرازق محمود",
    role: "Video Editor · DaVinci Resolve Colorist · Motion Designer",
    roleAr: "مونتير سينمائي · تلوين DaVinci Resolve · موشن جرافيك",
    location: "Mansoura, Egypt",
    locationAr: "المنصورة، مصر",
    logoMarkUrl: "https://arz-portfolio.me/assets/logo-mark.png",
    portfolioUrl: "https://arz-portfolio.me/",
    packagesUrl: "https://arz-portfolio.me/arz-packages/",
    cvUrl: "https://arz-portfolio.me/ARZ_CV.pdf",
    email: "abdelrazekwork72@gmail.com",
    phoneDisplay: "+20 101 467 3393",
    whatsappDirectUrl: "https://wa.me/201014673393",
    instagramUrl: "https://www.instagram.com/abdelrazek730/",
    linkedinUrl: "https://linkedin.com/in/abdelrazek-mahmoud-a8759b308",
    upworkUrl: "https://upwork.com/freelancers/abdelrazekmahmoud",
  },
  featuredProjects: [
    {
      id: "DiKWeWKRjUU",
      titleAr: "منارات المدينة",
      titleEn: "Manarat Al-Madinah",
      tagAr: "قصة نجاح",
      tagEn: "Story Film",
      thumbUrl: "https://i.ytimg.com/vi/DiKWeWKRjUU/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=DiKWeWKRjUU",
    },
    {
      id: "wbWJ93mq67s",
      titleAr: "حفل تامر حسني — دبي",
      titleEn: "Tamer Hosny — Dubai",
      tagAr: "تغطية حفلات",
      tagEn: "Live Concert",
      thumbUrl: "https://i.ytimg.com/vi/wbWJ93mq67s/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=wbWJ93mq67s",
    },
    {
      id: "iUH9WgUy54A",
      titleAr: "تلوين DaVinci Resolve",
      titleEn: "DaVinci Color Grading",
      tagAr: "قبل وبعد",
      tagEn: "Coloring",
      thumbUrl: "https://i.ytimg.com/vi/iUH9WgUy54A/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=iUH9WgUy54A",
    },
  ],
} as const;

export interface ArzPackageSpec {
  id: "P1" | "P2" | "P3" | "P4" | "P5" | "P6" | "P7" | "P8";
  nameAr: string;
  nameEn: string;
  priceEgp: number;
  cairoAvgEgp: number;
  savePct: number;
  deliverablesAr: string[];
  deliverablesEn: string[];
}

export const ARZ_PACKAGES: Record<ArzPackageSpec["id"], ArzPackageSpec> = {
  P1: {
    id: "P1",
    nameAr: "باقة الانطلاقة",
    nameEn: "Launch Pack",
    priceEgp: 10000,
    cairoAvgEgp: 18000,
    savePct: 44,
    deliverablesAr: [
      "نصف يوم تصوير (4 ساعات) بالعدة السينمائية الكاملة",
      "5 ريلز (مونتاج + تلوين DaVinci + صوت)",
      "10 صور ثابتة ملونة + تجهيز أفكار البداية",
    ],
    deliverablesEn: [
      "Half-day 6K shoot (4 hrs) with full cinema kit",
      "5 high-retention Reels (Edit + DaVinci Color + Sound)",
      "10 graded stills + opening hook planning",
    ],
  },
  P2: {
    id: "P2",
    nameAr: "باقة النمو الشهرية",
    nameEn: "Growth Retainer",
    priceEgp: 20000,
    cairoAvgEgp: 38000,
    savePct: 47,
    deliverablesAr: [
      "يوم تصوير كامل (8 ساعات) بالعدة السينمائية",
      "10 ريلز (أو فيديو رئيسي دقيقة + 6 ريلز)",
      "سكربتات سريعة + تلوين سينمائي + مقاسين للسوشيال",
    ],
    deliverablesEn: [
      "Full-day 6K shoot (8 hrs) with cinema kit",
      "10 Reels (or 1× 60s Hero Film + 6 Reels)",
      "Scripts + unified color grade + 9:16 & 16:9 exports",
    ],
  },
  P3: {
    id: "P3",
    nameAr: "باقة الشراكة المكثفة",
    nameEn: "Pro Retainer",
    priceEgp: 32000,
    cairoAvgEgp: 65000,
    savePct: 51,
    deliverablesAr: [
      "يومين تصوير في الشهر بالعدة الكاملة",
      "12 إلى 14 فيديو (ريلز + موشن عروض + إعلان رئيسي)",
      "أولوية في التسليم وتوحيد كامل لشكل الصفحة",
    ],
    deliverablesEn: [
      "2 full shoot days/month with full cinema rig",
      "12–14 monthly videos (Reels + Offer Motion + Hero Ad)",
      "Priority delivery & unified brand look",
    ],
  },
  P4: {
    id: "P4",
    nameAr: "باقة العقارات والسيارات",
    nameEn: "Real Estate / Auto",
    priceEgp: 20000,
    cairoAvgEgp: 36000,
    savePct: 44,
    deliverablesAr: [
      "يوم تصوير كامل بجيمبال DJI RS 5 وكاميرا 6K",
      "فيلم رئيسي للمشروع أو المعرض (60–90 ثانية) مع موشن الأسعار والمساحات",
      "3 ريلز إعلانية جاهزة للسوشيال ميديا",
    ],
    deliverablesEn: [
      "Full-day 6K shoot with DJI RS 5 gimbal",
      "60–90s Hero Film with animated pricing & specs",
      "3 ad-ready Reels for social campaigns",
    ],
  },
  P5: {
    id: "P5",
    nameAr: "باقة الفيلم المؤسسي",
    nameEn: "Corporate / Factory",
    priceEgp: 40000,
    cairoAvgEgp: 85000,
    savePct: 53,
    deliverablesAr: [
      "يومين تصوير كاملين في المقر أو المصنع أو الحرم",
      "فيلم تعريفي (2–3 دقايق) بلقاءات وموشن وتلوين DaVinci",
      "3 مقاطع قصيرة جاهزة للسوشيال ميديا",
    ],
    deliverablesEn: [
      "2 full on-site shoot days",
      "2–3 min Brand Film with interviews, motion & DaVinci color",
      "3 social cutdowns ready to publish",
    ],
  },
  P6: {
    id: "P6",
    nameAr: "باقة الإطلاق الرقمي",
    nameEn: "SaaS / Motion",
    priceEgp: 18000,
    cairoAvgEgp: 34000,
    savePct: 47,
    deliverablesAr: [
      "شغل أونلاين بالكامل من غير ما نعطل فريقك في تصوير",
      "سكربت + فيديو موشن يشرح السيستم والواجهات (60–90 ثانية)",
      "3 إعلانات قصيرة جاهزة للحملات الممولة",
    ],
    deliverablesEn: [
      "100% digital workflow (no on-site disruption)",
      "Script + 60–90s UI Motion Explainer video",
      "3 short ad variations ready for paid campaigns",
    ],
  },
  P7: {
    id: "P7",
    nameAr: "باقة إعلانات الـ AI الهجينة",
    nameEn: "Hybrid AI Ads",
    priceEgp: 16000,
    cairoAvgEgp: 35000,
    savePct: 54,
    deliverablesAr: [
      "نصف يوم تصوير للمنتج أو المشهد الأساسي",
      "3 إعلانات قصيرة تدمج التصوير الحقيقي بمشاهد AI بشكل طبيعي",
      "تلوين سينمائي موحد يخلّي المشاهد تبان حقيقية 100%",
    ],
    deliverablesEn: [
      "Half-day product/hero shoot",
      "3 Hybrid AI Ads blending real footage with generative scenes",
      "Unified DaVinci color grade for seamless realism",
    ],
  },
  P8: {
    id: "P8",
    nameAr: "باقة شريك الوكالات (White-Label)",
    nameEn: "B2B White-Label",
    priceEgp: 14000,
    cairoAvgEgp: 24000,
    savePct: 42,
    deliverablesAr: [
      "خيار (أ): يومين تصوير كاملين وتسليم ملفات خام RAW للوكالة",
      "أو خيار (ب): مونتاج وتلوين DaVinci وموشن لـ 12 ريل في الشهر",
      "تنفيذ مرن باسم الوكالة (White-Label)",
    ],
    deliverablesEn: [
      "Option A: 2 full shoot days with RAW delivery",
      "Or Option B: Editing, DaVinci color & motion for 12 Reels/month",
      "Flexible White-Label execution under your agency name",
    ],
  },
};

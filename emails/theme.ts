/**
 * ARZ Portfolio & ARZ Packages — Design Tokens
 * Mirrored from https://arz-portfolio.me/ & https://arz-portfolio.me/arz-packages/
 * Theme: Cinematic Espresso & Honey-Amber · High-End Editorial Portfolio
 */
export const arzTheme = {
  colors: {
    bg: "#110E0A",
    bgAlt: "#17120D",
    surface: "#1F1812",
    surfaceAlt: "#281F17",
    border: "#332719",
    borderStrong: "#4E3A21",
    text: "#F4EEE6",
    muted: "#A99E90",
    dim: "#73685B",
    accent: "#DB9B3E",
    accentBright: "#EAAD54",
    accentInk: "#171005",
    bronze: "#94662D",
    recRed: "#E5484D",
    liveGreen: "#46A758",
    problemBg: "#241612",
    problemBorder: "#592A20",
    solutionBg: "#162118",
    solutionBorder: "#294D33",
  },
  fonts: {
    display:
      '"Bricolage Grotesque", "Cairo", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace',
    arabic:
      '"Cairo", "Segoe UI", Tahoma, Arial, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  radius: {
    sm: "10px",
    md: "16px",
    lg: "20px",
    pill: "999px",
  },
  brand: {
    name: "ARZ Portfolio",
    studio: "ARZ Studio",
    owner: "Abdelrazek Mahmoud",
    ownerAr: "عبدالرازق محمود",
    role: "Senior Video Editor · DaVinci Resolve Colorist · Motion Designer",
    roleAr: "صانع أفلام · مونتير ومصحح ألوان DaVinci Resolve · موشن ديزاينر",
    location: "Mansoura, Egypt — working worldwide",
    locationAr: "المنصورة، مصر — تنفيذ ميداني بالدلتا وعن بُعد للخليج والعالم",
    tagline: "Videos that stop the scroll — and sell.",
    logoMarkUrl: "https://arz-portfolio.me/assets/logo-mark.png",
    portfolioUrl: "https://arz-portfolio.me/",
    packagesUrl: "https://arz-portfolio.me/arz-packages/",
    cvUrl: "https://arz-portfolio.me/ARZ_CV.pdf",
    email: "abdelrazekwork72@gmail.com",
    phoneDisplay: "+20 101 467 3393",
    whatsappUrl:
      "https://wa.me/201014673393?text=Hi%20Abdelrazek%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20video%20project.",
    whatsappDirectUrl: "https://wa.me/201014673393",
    instagramUrl: "https://www.instagram.com/abdelrazek730/",
    linkedinUrl: "https://linkedin.com/in/abdelrazek-mahmoud-a8759b308",
    upworkUrl: "https://upwork.com/freelancers/abdelrazekmahmoud",
  },
  metrics: [
    { value: "500+", label: "Videos Delivered", labelAr: "فيديو مُسلَّم" },
    { value: "950K+", label: "Peak Reel Views", labelAr: "أعلى مشاهدات ريل" },
    { value: "72h", label: "Fast Turnaround", labelAr: "تسليم سريع" },
    { value: "5.0★", label: "Client Rating", labelAr: "تقييم العملاء" },
  ],
} as const;

export interface ArzPackageSpec {
  id: "P1" | "P2" | "P3" | "P4" | "P5" | "P6" | "P7" | "P8";
  nameAr: string;
  nameEn: string;
  priceEgp: number;
  cairoAvgEgp: number;
  savePct: number;
  deliverables: string[];
}

export const ARZ_PACKAGES: Record<ArzPackageSpec["id"], ArzPackageSpec> = {
  P1: {
    id: "P1",
    nameAr: "باقة الانطلاقة",
    nameEn: "Launch Pack",
    priceEgp: 10000,
    cairoAvgEgp: 18000,
    savePct: 44,
    deliverables: [
      "نصف يوم تصوير (4 ساعات) بالعدة السينمائية الكاملة (Nikon ZR 6K + DJI RS 5)",
      "5 ريلز احترافية (مونتاج + تلوين DaVinci Resolve + هندسة صوتية)",
      "10 لقطات ثابتة 6K ملونة + تخطيط خطافات البداية (Hooks)",
    ],
  },
  P2: {
    id: "P2",
    nameAr: "باقة النمو الشهرية",
    nameEn: "Growth Retainer",
    priceEgp: 20000,
    cairoAvgEgp: 38000,
    savePct: 47,
    deliverables: [
      "يوم تصوير كامل (8 ساعات) بالعدة السينمائية الكاملة",
      "10 ريلز احترافية (أو فيديو رئيسي 60 ثانية + 6 ريلز)",
      "سكربتات سريعة + تلوين سينمائي موحّد + تسليم بمقاسين (9:16 و16:9)",
    ],
  },
  P3: {
    id: "P3",
    nameAr: "باقة الشراكة المكثفة",
    nameEn: "Pro Retainer",
    priceEgp: 32000,
    cairoAvgEgp: 65000,
    savePct: 51,
    deliverables: [
      "يومان تصوير ميداني شهرياً بالعدة السينمائية الكاملة",
      "12 إلى 14 فيديو شهرياً (ريلز + موشن عروض + إعلان Hero رئيسي)",
      "أولوية تسليم وتوحيد كامل للهوية البصرية واللونية",
    ],
  },
  P4: {
    id: "P4",
    nameAr: "باقة العقارات والسيارات",
    nameEn: "Real Estate / Auto",
    priceEgp: 20000,
    cairoAvgEgp: 36000,
    savePct: 44,
    deliverables: [
      "يوم تصوير كامل (Nikon ZR 6K + جيمبال DJI RS 5 للحركة المعمارية والسيارات)",
      "فيلم مشروع رئيسي (60–90 ثانية) مع موشن الأسعار والمساحات أو المواصفات",
      "3 ريلز إعلانية عالية الاحتفاظ مخصصة لحملات Meta وTikTok",
    ],
  },
  P5: {
    id: "P5",
    nameAr: "باقة الفيلم المؤسسي",
    nameEn: "Corporate / Factory",
    priceEgp: 40000,
    cairoAvgEgp: 85000,
    savePct: 53,
    deliverables: [
      "يومان تصوير ميداني كاملان داخل المقر أو المصنع أو الحرم الجامعي",
      "فيلم تعريفي مؤسسي (2–3 دقائق) بلقاءات إدارة وموشن بيانات وتلوين DaVinci",
      "3 مقاطع سوشيال مشتقة للترويج الرقمي والمعارض",
    ],
  },
  P6: {
    id: "P6",
    nameAr: "باقة الإطلاق الرقمي",
    nameEn: "SaaS / Motion",
    priceEgp: 18000,
    cairoAvgEgp: 34000,
    savePct: 47,
    deliverables: [
      "تنفيذ رقمي كامل بدون تعطيل فريق العمل (بدون تصوير ميداني)",
      "سكربت + فيديو Explainer موشن وتحريك واجهات UI (60–90 ثانية)",
      "3 إعلانات أداء قصيرة (Performance Ads) مختبرة الخطافات",
    ],
  },
  P7: {
    id: "P7",
    nameAr: "باقة إعلانات الـ AI الهجينة",
    nameEn: "Hybrid AI Ads",
    priceEgp: 16000,
    cairoAvgEgp: 35000,
    savePct: 54,
    deliverables: [
      "نصف يوم تصوير منتج أو مشهد أساسي بكاميرا Nikon ZR",
      "3 إعلانات هجينة (25–40 ثانية) تدمج التصوير الحقيقي بمشاهد AI",
      "تلوين سينمائي موحّد على DaVinci لدمج الواقع بالذكاء الاصطناعي بسلاسة",
    ],
  },
  P8: {
    id: "P8",
    nameAr: "باقة شريك الوكالات (White-Label)",
    nameEn: "B2B White-Label",
    priceEgp: 14000,
    cairoAvgEgp: 24000,
    savePct: 42,
    deliverables: [
      "خيار (أ): يومان تصوير بالعدة الكاملة وتسليم ملفات خام RAW / N-Log للوكالة",
      "أو خيار (ب): مونتاج وتلوين DaVinci وموشن لـ 12 ريل شهرياً بدون تصوير",
      "تنفيذ White-Label مرن باسم الوكالة وبنقطة اتصال واحدة",
    ],
  },
};

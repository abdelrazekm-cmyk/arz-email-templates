/**
 * ARZ Portfolio & ARZ Packages — Design Tokens & Featured Players (v6)
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
    packagesUrl: "https://arz-portfolio.me/#pricing",
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
      titleAr: "منارات المدينة — قصة نجاح طالب",
      titleEn: "Manarat Al-Madinah — Student Story",
      badgeAr: "950K+ views",
      badgeEn: "950K+ views",
      duration: "01:57",
      thumbUrl: "https://i.ytimg.com/vi/DiKWeWKRjUU/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=DiKWeWKRjUU",
    },
    {
      id: "wbWJ93mq67s",
      titleAr: "حفل تامر حسني — كوكاكولا أرينا دبي",
      titleEn: "Tamer Hosny — Coca-Cola Arena Dubai",
      badgeAr: "Live Concert · Dubai",
      badgeEn: "Live Concert · Dubai",
      duration: "02:12",
      thumbUrl: "https://i.ytimg.com/vi/wbWJ93mq67s/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=wbWJ93mq67s",
    },
    {
      id: "iUH9WgUy54A",
      titleAr: "تلوين DaVinci Resolve — قبل وبعد",
      titleEn: "DaVinci Resolve — Before & After Coloring",
      badgeAr: "Color Grading · DaVinci",
      badgeEn: "Color Grading · DaVinci",
      duration: "00:11",
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
  P1: { id: "P1", nameAr: "باقة الانطلاقة", nameEn: "Launch Pack", priceEgp: 10000, cairoAvgEgp: 18000, savePct: 44, deliverablesAr: [], deliverablesEn: [] },
  P2: { id: "P2", nameAr: "باقة النمو الشهرية", nameEn: "Growth Retainer", priceEgp: 20000, cairoAvgEgp: 38000, savePct: 47, deliverablesAr: [], deliverablesEn: [] },
  P3: { id: "P3", nameAr: "باقة الشراكة المكثفة", nameEn: "Pro Retainer", priceEgp: 32000, cairoAvgEgp: 65000, savePct: 51, deliverablesAr: [], deliverablesEn: [] },
  P4: { id: "P4", nameAr: "باقة العقارات والسيارات", nameEn: "Real Estate / Auto", priceEgp: 20000, cairoAvgEgp: 36000, savePct: 44, deliverablesAr: [], deliverablesEn: [] },
  P5: { id: "P5", nameAr: "باقة الفيلم المؤسسي", nameEn: "Corporate / Factory", priceEgp: 40000, cairoAvgEgp: 85000, savePct: 53, deliverablesAr: [], deliverablesEn: [] },
  P6: { id: "P6", nameAr: "باقة الإطلاق الرقمي", nameEn: "SaaS / Motion", priceEgp: 18000, cairoAvgEgp: 34000, savePct: 47, deliverablesAr: [], deliverablesEn: [] },
  P7: { id: "P7", nameAr: "باقة إعلانات الـ AI الهجينة", nameEn: "Hybrid AI Ads", priceEgp: 16000, cairoAvgEgp: 35000, savePct: 54, deliverablesAr: [], deliverablesEn: [] },
  P8: { id: "P8", nameAr: "باقة شريك الوكالات", nameEn: "B2B White-Label", priceEgp: 14000, cairoAvgEgp: 24000, savePct: 42, deliverablesAr: [], deliverablesEn: [] },
};

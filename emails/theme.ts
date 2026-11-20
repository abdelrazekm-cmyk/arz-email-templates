/**
 * ARZ Portfolio & ARZ Packages — Design Tokens & Featured Showcase
 * Mirrored from https://arz-portfolio.me/ & https://arz-portfolio.me/arz-packages/
 * Theme: Cinematic Espresso & Honey-Amber
 */
export const arzTheme = {
  colors: {
    bg: "#110E0A",
    bgAlt: "#17120D",
    surface: "#1F1812",
    surfaceAlt: "#281F17",
    border: "#35281A",
    borderStrong: "#543E24",
    text: "#F4EEE6",
    muted: "#B3A89A",
    dim: "#7E7264",
    accent: "#DB9B3E",
    accentBright: "#EAAD54",
    accentInk: "#171005",
    recRed: "#E5484D",
    liveGreen: "#46A758",
    problemBg: "#241612",
    problemBorder: "#592A20",
    solutionBg: "#162219",
    solutionBorder: "#2A5035",
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
    role: "Senior Video Editor · DaVinci Colorist · Motion Designer",
    roleAr: "مونتير سينمائي · مصحح ألوان DaVinci Resolve · موشن ديزاينر",
    location: "Mansoura, Egypt · Working across Egypt & GCC",
    locationAr: "المنصورة، مصر · تنفيذ ميداني بالدلتا وعن بُعد للخليج",
    logoMarkUrl: "https://arz-portfolio.me/assets/logo-mark.png",
    portraitDarkUrl: "https://arz-portfolio.me/assets/images/PORTIFOLIO_960.jpg",
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
  metrics: [
    { value: "500+", label: "Videos", labelAr: "فيديو مُسلَّم" },
    { value: "950K+", label: "Top Views", labelAr: "أعلى مشاهدة" },
    { value: "72h", label: "Turnaround", labelAr: "تسليم سريع" },
    { value: "5.0★", label: "Rating", labelAr: "تقييم العملاء" },
  ],
  featuredProjects: [
    {
      id: "DiKWeWKRjUU",
      titleAr: "منارات المدينة — قصة نجاح طالب ريادي",
      titleEn: "Manarat Al-Madinah — Student Founder Film",
      categoryAr: "أفلام تعليمية ووثائقية",
      categoryEn: "Educational & Documentary",
      badgeAr: "950K+ مشاهدة عضوية",
      badgeEn: "950K+ Organic Views",
      thumbUrl: "https://i.ytimg.com/vi/DiKWeWKRjUU/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=DiKWeWKRjUU",
    },
    {
      id: "wbWJ93mq67s",
      titleAr: "حفل إطلاق عزيزي ميلان — تامر حسني (دبي)",
      titleEn: "Azizi Milan Gala — Tamer Hosny (Dubai)",
      categoryAr: "حفلات كبرى وفعاليات VIP",
      categoryEn: "Mega Concerts & VIP Galas",
      badgeAr: "كوكاكولا أرينا · 7 أيام تسليم",
      badgeEn: "Coca-Cola Arena · 7-Day Edit",
      thumbUrl: "https://i.ytimg.com/vi/wbWJ93mq67s/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=wbWJ93mq67s",
    },
    {
      id: "tW5LG74eo94",
      titleAr: "ذا 12 جيت الرياض — تيزر عقاري 3D CGI",
      titleEn: "The 12 Gate Riyadh — 3D Helicopter CGI",
      categoryAr: "عقارات وموشن 3D VFX",
      categoryEn: "Real Estate & 3D VFX",
      badgeAr: "+100K مشاهدة · حملات دبي والرياض",
      badgeEn: "100K+ Views · Dubai & Riyadh",
      thumbUrl: "https://i.ytimg.com/vi/tW5LG74eo94/hqdefault.jpg",
      watchUrl: "https://www.youtube.com/watch?v=tW5LG74eo94",
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
      "نصف يوم تصوير (4 ساعات) بكاميرا Nikon ZR 6K + DJI RS 5 + صوت وإضاءة",
      "5 ريلز احترافية (مونتاج + تلوين DaVinci Resolve + هندسة صوتية)",
      "10 صور ثابتة 6K ملونة + تخطيط خطافات البداية (Hooks)",
    ],
    deliverablesEn: [
      "Half-day 6K shoot (4 hrs: Nikon ZR + DJI RS 5 + Audio & Lighting)",
      "5 high-retention Reels (Editing + DaVinci Color Grading + Sound)",
      "10 graded 6K stills + 3-second Hook planning",
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
      "يوم تصوير كامل (8 ساعات) بالعدة السينمائية الكاملة",
      "10 ريلز احترافية (أو فيديو رئيسي 60 ثانية + 6 ريلز)",
      "سكربتات سريعة + تلوين سينمائي موحّد + تسليم بمقاسين (9:16 و16:9)",
    ],
    deliverablesEn: [
      "Full-day 6K shoot (8 hrs) with complete cinema rig",
      "10 pro Reels (or 1× 60s Hero Video + 6 Reels)",
      "Scripts + DaVinci unified color grade + 9:16 & 16:9 exports",
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
      "يومان تصوير ميداني شهرياً بالعدة السينمائية الكاملة",
      "12 إلى 14 فيديو شهرياً (ريلز + موشن عروض + إعلان Hero شهري)",
      "أولوية تسليم وتوحيد كامل للهوية البصرية واللونية",
    ],
    deliverablesEn: [
      "2 full field shoot days/month with 6K cinema rig",
      "12–14 monthly videos (Reels + Offer Motion + Monthly Hero Ad)",
      "Priority delivery & full brand color consistency",
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
      "يوم تصوير كامل (Nikon ZR 6K + جيمبال DJI RS 5 للحركة السلسة)",
      "فيلم مشروع رئيسي (60–90 ثانية) مع موشن الأسعار والمساحات/المواصفات",
      "3 ريلز إعلانية عالية الاحتفاظ لحملات Meta وTikTok",
    ],
    deliverablesEn: [
      "Full-day shoot (Nikon ZR 6K + DJI RS 5 architectural/auto motion)",
      "60–90s Hero Film with animated pricing, specs & floorplan callouts",
      "3 high-retention ad Reels for Meta & TikTok",
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
      "يومان تصوير ميداني كاملان داخل المقر أو المصنع أو الحرم الجامعي",
      "فيلم تعريفي مؤسسي (2–3 دقائق) بلقاءات إدارة وموشن بيانات وتلوين DaVinci",
      "3 مقاطع سوشيال مشتقة للترويج الرقمي والمعارض",
    ],
    deliverablesEn: [
      "2 full on-site shoot days (HQ, factory, hospital, or campus)",
      "2–3 min Corporate Brand Film with leadership interviews & data motion",
      "3 social cutdowns for digital campaigns & expos",
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
      "تنفيذ رقمي كامل بدون تصوير ميداني أو تعطيل لفريق العمل",
      "سكربت + فيديو Explainer موشن وتحريك واجهات UI (60–90 ثانية)",
      "3 إعلانات أداء قصيرة مختبرة الخطافات (A/B Hooks)",
    ],
    deliverablesEn: [
      "100% digital execution (zero on-site disruption to your team)",
      "Script + 60–90s UI Motion Explainer video",
      "3 short performance ads with A/B tested hooks",
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
      "نصف يوم تصوير منتج أو مشهد أساسي بكاميرا Nikon ZR 6K",
      "3 إعلانات هجينة (25–40 ثانية) تدمج التصوير الحقيقي بمشاهد AI",
      "تلوين سينمائي موحّد على DaVinci لدمج الواقع بالذكاء الاصطناعي بسلاسة",
    ],
    deliverablesEn: [
      "Half-day product/hero shoot on Nikon ZR 6K",
      "3 Hybrid AI Ads (25–40s) blending real footage with generative AI",
      "Unified DaVinci Resolve color grade for seamless realism",
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
      "خيار (أ): يومان تصوير بالعدة الكاملة وتسليم خام RAW / N-Log للوكالة",
      "أو خيار (ب): مونتاج وتلوين DaVinci وموشن لـ 12 ريل شهرياً بدون تصوير",
      "تنفيذ White-Label مرن باسم الوكالة وبنقطة اتصال واحدة",
    ],
    deliverablesEn: [
      "Option A: 2 full 6K shoot days (RAW / N-Log delivery to your agency)",
      "Or Option B: Editing, DaVinci color & motion for 12 Reels/month",
      "Flexible White-Label execution under your agency brand",
    ],
  },
};

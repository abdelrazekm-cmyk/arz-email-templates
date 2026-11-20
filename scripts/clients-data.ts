import type { ArzPackageSpec } from "../emails/theme";

export interface ClientCampaignRecord {
  id: number;
  slug: string;
  companyName: string;
  contactGreeting: string;
  decisionMaker: string;
  track: "agencies" | "quick-cash" | "saas-tech" | "enterprise";
  trackLabel: string;
  sector: string;
  priority: string;
  email: string;
  cc?: string;
  phone: string;
  website?: string;
  digitalFootprintSummary: string;
  subject: string;
  scientificProblem: string;
  scientificSolution: string;
  expectedImpact: string;
  packageId: ArzPackageSpec["id"];
  secondaryPackageId?: ArzPackageSpec["id"];
}

/**
 * All 30 email-ready clients from "ملف متابعة المبيعات الموحد (Master CRM).md"
 * Enriched with website/social footprint analysis, scientific problem/solution,
 * and matched Standard ARZ Packages (P1–P8).
 */
export const CLIENT_CAMPAIGNS: ClientCampaignRecord[] = [
  // =========================================================================
  // TRACK 1: شراكات الوكالات (White-Label B2B)
  // =========================================================================
  {
    id: 1,
    slug: "geexar",
    companyName: "Geexar (جيكسر)",
    contactGreeting: "أهلاً فريق قيادة Geexar (د. محمود / م. أدهم)",
    decisionMaker: "د. محمود / م. أدهم",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "برمجة وتسويق أداء (مصر والسعودية)",
    priority: "9/10",
    email: "info@geexar.com",
    phone: "+20 108 000 2215",
    website: "https://geexar.com/",
    digitalFootprintSummary: "موقع geexar.com ومكتبي الرياض والمنصورة (70 موظفاً، برمجة Flutter/Next.js وتسويق أداء للخليج)",
    subject: "شريك مونتاج وتلوين DaVinci بنظام White-Label لحملات عملاء Geexar بالسعودية ومصر",
    scientificProblem:
      "الوكالات التقنية الكبرى ذات الحملات الممولة في السعودية ومصر تواجه ظاهرة Creative Fatigue (إرهاق الإعلان) خلال 7–14 يوماً، مما يرفع تكلفة النقرة (CPA) بنسبة 30%–50% عندما يتأخر خط إنتاج الفيديو التجاري أو يفتقر لتلوين سينمائي يواكب معايير السوق السعودي.",
    scientificSolution:
      "توفير خط إنتاج White-Label موازٍ لفريقكم بالمنصورة (مونتاج إعلانات أداء + تلوين DaVinci Resolve + تنويعات Hooks لاختبارات A/B) بنقطة اتصال واحدة وتسليم سريع خلال 48–72 ساعة بدون أعباء توظيف ثابتة.",
    expectedImpact:
      "تخفيض تكلفة إنتاج الفيديو للعملاء بنسبة 42% مقارنة بالسوق الخارجي ورفع سرعة إطلاق تنويعات الإعلانات لحملات السعودية.",
    packageId: "P8",
    secondaryPackageId: "P7",
  },
  {
    id: 2,
    slug: "advantedge",
    companyName: "AdvantEdge",
    contactGreeting: "أهلاً فريق AdvantEdge",
    decisionMaker: "إدارة النمو والشراكات",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "وكالة نمو وتسويق أداء (مصر والخليج)",
    priority: "9/10",
    email: "info@advantedge-eg.com",
    phone: "+20 101 400 0885",
    website: "https://advantedge-eg.com/",
    digitalFootprintSummary: "موقع advantedge-eg.com (+500 تعاون في مصر والخليج بتركيز على Performance Marketing وA/B Testing)",
    subject: "رفع ROAS حملات عملاء AdvantEdge عبر إعلانات فيديو + AI بنظام White-Label",
    scientificProblem:
      "في حملات تسويق الأداء (Performance Marketing)، يمثل الـ Creative أكثر من 70% من تباين العائد على الإنفاق الإعلاني (ROAS). الاعتماد على قوالب مونتاج تقليدية بدون اختبار خطافات أول 3 ثوانٍ (3-Second Thumb-Stop Rate) يستنزف ميزانيات العملاء بسرعة.",
    scientificSolution:
      "شراكة White-Label لإنتاج ريلز أداء عالية التحويل وإعلانات هجينة مدعومة بالذكاء الاصطناعي (Nikon ZR + AI + DaVinci Resolve) مع تسليم عدة تنويعات للـ Hook لكل إعلان لتغذية اختبارات A/B اليومية لفريقكم.",
    expectedImpact:
      "زيادة نسبة إيقاف التمرير (Thumb-Stop Rate) وتقليل تكلفة العميل المحتمل (CPL) في حملات مصر والخليج.",
    packageId: "P8",
    secondaryPackageId: "P7",
  },
  {
    id: 3,
    slug: "monjez",
    companyName: "Monjez (منجز)",
    contactGreeting: "أهلاً فريق Monjez",
    decisionMaker: "إدارة التسويق والشراكات",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "وكالة تقنية وتسويق وأتمتة",
    priority: "9/10",
    email: "info@monjez.it",
    phone: "+20 10 36511565",
    digitalFootprintSummary: "عقود إدارة إعلانات وواتساب للعيادات والمتاجر في مصر والخليج بدون قسم إنتاج فيديو مخصص",
    subject: "سد فجوة إنتاج الفيديو لعملاء العيادات والمتاجر في Monjez (White-Label)",
    scientificProblem:
      "إدارة حملات ممولة للعيادات والمتاجر الإلكترونية بدون ذراع إنتاج فيديو متخصص تخلق فجوة تحويل (Conversion Gap): الإعلانات الثابتة تحقق تفاعلاً أقل بنسبة 60% من الريلز الموجهة، مما يضغط على نتائج عقود الإدارة الشهرية.",
    scientificSolution:
      "العمل كشريك إنتاج فيديو White-Label فوري لعملائكم في المنصورة والخليج: تصوير ميداني بـ 6K أو مونتاج وتلوين DaVinci لـ 12 ريل شهرياً جاهزة للحملات الممولة.",
    expectedImpact:
      "فتح مصدر ربح إضافي لوكالتكم عبر إعادة بيع باقات الفيديو ورفع مدة بقاء العملاء (Client Retention).",
    packageId: "P8",
    secondaryPackageId: "P1",
  },
  {
    id: 5,
    slug: "ak-media",
    companyName: "AK Media",
    contactGreeting: "أهلاً أ. أحمد علوان وفريق AK Media",
    decisionMaker: "أحمد علوان (مدير)",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "وكالة تسويق رقمي متعددة الخدمات",
    priority: "9/10",
    email: "info@akmedia-eg.com",
    phone: "+20 1019692752",
    website: "https://akmedia-eg.com/",
    digitalFootprintSummary: "موقع akmedia-eg.com (وكالة مرخصة من وزارة الاتصالات تقدم المواقع والريلز والهوية البصرية)",
    subject: "تعاون White-Label في تلوين DaVinci والمونتاج التجاري لحملات AK Media",
    scientificProblem:
      "عند التوسع في عملاء B2B والبراندات المتوسطة والكبرى، يصبح التفاوت في جودة التلوين والإضاءة بين الريلز التجارية عائقاً أمام رفع متوسط قيمة العقد (Average Ticket Size) ومنافسة وكالات القاهرة.",
    scientificSolution:
      "تقديم دعم مخصص لمرحلة ما بعد الإنتاج (Node-based DaVinci Resolve Color Grading + مونتاج تجاري + موشن جرافيك) أو تصوير ميداني RAW كشريك White-Label لـ AK Media في المنصورة.",
    expectedImpact:
      "رفع الجودة البصرية لتسليمات الوكالة لمستوى وكالات القاهرة بتكلفة أقل 42% وبدون زيادة مصاريف التشغيل الثابتة.",
    packageId: "P8",
    secondaryPackageId: "P2",
  },
  {
    id: 6,
    slug: "tungsten-media",
    companyName: "Tungsten Media",
    contactGreeting: "أهلاً أ. مريم شوقي وفريق Tungsten Media",
    decisionMaker: "مريم شوقي (شريكة / Animation Lead)",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "وكالة رقمية وإنتاج فيديو وأنيميشن",
    priority: "8/10",
    email: "info@tungstenmedia.net",
    phone: "+20 121 1785005",
    digitalFootprintSummary: "وكالة متخصصة منذ 2018 بفريق بوتيكي وتركيز قوي على الأنيميشن والهوية الرقمية بالمنصورة",
    subject: "شريك تصوير ميداني 6K وتلوين DaVinci لمشاريع Tungsten Media",
    scientificProblem:
      "الاستوديوهات البوتيكية المتخصصة في الأنيميشن والموشن تواجه اختناقاً تشغيلياً (Capacity Bottleneck) عند طلب العملاء تصوير Live-Action ميداني متزامن مع ضغط تسليمات الموشن، مما يضطر الفريق لرفض مشاريع أو تأخير التسليم.",
    scientificSolution:
      "توفير شريك تصوير ميداني جاهز بالمنصورة (Nikon ZR 6K + DJI RS 5 + صوت وإضاءة) مع تسليم ملفات N-Log / RAW نظيفة أو مونتاج وتلوين DaVinci مدمج مع شغلكم في الأنيميشن.",
    expectedImpact:
      "مضاعفة الطاقة الاستيعابية للمشاريع الهجينة (Live-Action + Animation) بدون الحاجة لتعيين مصور ومصحح ألوان بدوام كامل.",
    packageId: "P8",
    secondaryPackageId: "P4",
  },
  {
    id: 7,
    slug: "soft-media-eg",
    companyName: "Soft Media EG",
    contactGreeting: "أهلاً فريق إنتاج Soft Media EG",
    decisionMaker: "مسؤول الإنتاج",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "إنتاج إعلامي وبرامج ووثائقيات",
    priority: "8/10",
    email: "softmediaeg@gmail.com",
    phone: "+20 100 0024773",
    digitalFootprintSummary: "إنتاج إعلامي وبرامج ووثائقيات منذ 2015 وقناة يوتيوب +10K بالمنصورة",
    subject: "دعم تلوين DaVinci وموشن جرافيك للمشاريع الوثائقية والبرامج في Soft Media EG",
    scientificProblem:
      "في الوثائقيات والبرامج المصوّرة بأكثر من كاميرا وفي ظروف إضاءة متغيرة، يستهلك توحيد الألوان (Camera Matching) وإعداد رسوم البيانات (Data Motion) أكثر من 55% من وقت ما بعد الإنتاج لفريق صغير.",
    scientificSolution:
      "تعاون مرن في مرحلة التشطيب النهائي (Finishing): توحيد ألوان متعدد الكاميرات عبر DaVinci Wide Gamut، هندسة صوتية (-14 / -23 LUFS)، وتصميم حزم Lower-Thirds وموشن وثائقي احترافي.",
    expectedImpact:
      "تقليص زمن تسليم الحلقات والوثائقيات بنسبة 25%–35% مع مظهر سينمائي جاهز للعرض الفضائي والرقمي.",
    packageId: "P8",
    secondaryPackageId: "P5",
  },
  {
    id: 8,
    slug: "geeks-lab",
    companyName: "Geeks Lab (جيكس لاب)",
    contactGreeting: "أهلاً فريق قيادة Geeks Lab",
    decisionMaker: "إدارة تطوير الأعمال والحاضنة",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "تطوير أعمال وحاضنة شركات ناشئة",
    priority: "8/10",
    email: "info@geeks.com.eg",
    phone: "+20 1025000057",
    website: "https://geeks.com.eg/",
    digitalFootprintSummary: "موقع geeks.com.eg (أول شركة تطوير أعمال بالدلتا تخدم +100 مؤسسة وشركة ناشئة عبر +40 خدمة)",
    subject: "شريك إنتاج الفيديو والموشن للشركات الناشئة المحتضنة في Geeks Lab",
    scientificProblem:
      "الشركات الناشئة والمؤسسات التي تبني تطبيقات وهويات جديدة عبر حاضنات الأعمال تفشل غالباً في مرحلة الإطلاق (Go-To-Market) لأن صفحاتها تعتمد على نصوص طويلة بدون فيديو Explainer يشرح القيمة في 60 ثانية.",
    scientificSolution:
      "شراكة White-Label مزدوجة: باقة الإطلاق الرقمي (P6) لفيديوهات شرح التطبيقات وSaaS للشركات الناشئة، وباقة P8 لإنتاج الريلز التجارية لعملاء التسويق لديكم.",
    expectedImpact:
      "رفع نجاح إطلاقات الشركات المحتضنة وزيادة قيمة حزم تطوير الأعمال التي تقدمها Geeks Lab.",
    packageId: "P8",
    secondaryPackageId: "P6",
  },
  {
    id: 10,
    slug: "mada-digital",
    companyName: "Mada Digital (مدى ديجيتال)",
    contactGreeting: "أهلاً فريق Mada Digital",
    decisionMaker: "إدارة الوكالة والاستوديو",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "وكالة تسويق واستوديو بودكاست",
    priority: "7/10",
    email: "info@madadigitl.com",
    phone: "01553148428",
    digitalFootprintSummary: "وكالة عامة واستوديو بودكاست بالمنصورة تغطي السيو والإعلانات والتصوير",
    subject: "تحويل حلقات البودكاست وتصوير الاستوديو في Mada Digital إلى ريلز عالية الاحتفاظ",
    scientificProblem:
      "تقطيع حلقات البودكاست بشكل تقليدي (Cut & Export) يحقق متوسط مشاهدة أقل من 15% على Reels وTikTok، لأن المشاهد يتوقف عن التمرير فقط عند وجود Hook بصري وصوتي ديناميكي وتلوين سينمائي ونصوص حركية دقيقة.",
    scientificSolution:
      "تعاون White-Label لتحويل تصوير استوديو Mada Digital إلى 12 ريل احترافي شهرياً (تقطيع إيقاعي + Kinetic Captions + تلوين DaVinci + Sound Design) دون تحميل فريقكم أعباء مونتاج إضافية.",
    expectedImpact:
      "رفع مشاهدات الريلز المقتطعة من البودكاست وإضافة باقة تشطيب سينمائي ترفع هامش ربح الاستوديو.",
    packageId: "P8",
    secondaryPackageId: "P2",
  },
  {
    id: 11,
    slug: "fekrh-nova",
    companyName: "Fekrh Nova (فكرة نوفا)",
    contactGreeting: "أهلاً فريق Fekrh Nova",
    decisionMaker: "إدارة المحتوى والعمليات",
    track: "agencies",
    trackLabel: "شراكات الوكالات (White-Label)",
    sector: "وكالة محتوى رقمي وAI",
    priority: "7/10",
    email: "fekrhnova@gmail.com",
    phone: "+20 1018411711",
    digitalFootprintSummary: "وكالة محتوى رقمي وحلول AI بالمنصورة تقدم أكثر من 50 خدمة متنوعة",
    subject: "شريك إخراج سينمائي وتلوين DaVinci ودمج AI لحملات Fekrh Nova",
    scientificProblem:
      "فيديوهات الذكاء الاصطناعي الخالصة (Pure AI) تعاني حالياً من انخفاض ثقة المستهلك وظهور تشوهات بصرية (Uncanny Valley) عند استخدامها بمفردها في الإعلانات التجارية.",
    scientificSolution:
      "شراكة إنتاج هجين (Live-Action 6K + AI Integration) مع توحيد لوني احترافي على DaVinci Resolve لإنتاج إعلانات تجارية تبدو واقعية ومقنعة وتدمج قوة الـ AI بدون فقدان المصداقية.",
    expectedImpact:
      "تمييز مخرجات Fekrh Nova عن المنافسين المحليين ورفع معدل التحويل لإعلانات العملاء.",
    packageId: "P8",
    secondaryPackageId: "P7",
  },

  // =========================================================================
  // TRACK 2: السيولة السريعة (عقارات، تجزئة، مدارس، مطاعم، مستشفيات)
  // =========================================================================
  {
    id: 32,
    slug: "azalia-properties",
    companyName: "Azalia Properties (أزاليا العقارية)",
    contactGreeting: "أهلاً فريق قيادة وتسويق Azalia Properties",
    decisionMaker: "إدارة التسويق والمبيعات",
    track: "quick-cash",
    trackLabel: "السيولة السريعة — التطوير العقاري",
    sector: "تطوير عقاري",
    priority: "10/10",
    email: "info@azalia-properties.com",
    phone: "+20 10 50502002",
    website: "https://azalia-properties.com/",
    digitalFootprintSummary: "موقع azalia-properties.com ومقر شارع الجيش بالمنصورة (مشاريع سكنية وتجارية واستثمارية)",
    subject: "خطة فيديو عقاري وموشن عائد استثماري لمشاريع Azalia Properties بالمنصورة",
    scientificProblem:
      "المشتري العقاري والمغترب يتخذ قرار حجز المعاينة بناءً على الثقة البصرية (Visual Proof). الاعتماد على صور ثابتة ورندرات فقط على الموقع والسوشيال يطيل دورة إغلاق الصفقة ويزيد تردد العميل حول جدية التنفيذ على أرض الواقع.",
    scientificSolution:
      "تصوير شهري لمتابعة الإنشاءات وجولات معمارية مستقرة بجيمبال DJI RS 5 وكاميرا Nikon ZR 6K، مدمجة بموشن جرافيك واضح للمساحات وأنظمة السداد والعائد الاستثماري (بنفس منهجية حملات The 12 Gate في دبي التي حققت +100K مشاهدة).",
    expectedImpact:
      "رفع جودة العملاء المحتملين (Qualified Leads) وتقليل تكلفة الاستفسار الجاد مع توفير 44%–51% عن شركات إنتاج القاهرة.",
    packageId: "P4",
    secondaryPackageId: "P3",
  },
  {
    id: 33,
    slug: "el-shawwa-group",
    companyName: "El Shawwa Commercial Group (مجموعة الشوا)",
    contactGreeting: "أهلاً فريق تسويق مجموعة الشوا التجارية",
    decisionMaker: "إدارة التسويق والعروض",
    track: "quick-cash",
    trackLabel: "السيولة السريعة — التجزئة الكبرى",
    sector: "سلسلة متاجر تجزئة",
    priority: "10/10",
    email: "info@elshawwa.com",
    phone: "+20 11 53666660",
    digitalFootprintSummary: "فروع شارع العباسي وقناة السويس بالمنصورة وعروض موسمية ومجلات تجزئة مستمرة",
    subject: "تحويل عروض ومجلات مجموعة الشوا إلى ريلز سريعة ترفع الزيارات للفروع",
    scientificProblem:
      "مجلات العروض الثابتة (Static Flyers) على فيسبوك تفقد 80% من الانتباه خلال أول ثانيتين مقارنة بالفيديو العمودي 9:16، مما يقلل الوصول العضوي ويرفع تكلفة الإعلان الممول في المواسم وباقات العرائس.",
    scientificSolution:
      "إنتاج 10 ريلز شهرية (أو 12–14 فيديو في الباقة المكثفة) تحوّل أهم العروض وباقات العرائس إلى جولات سريعة داخل الفروع مع موشن أسعار واضح ومونتاج إيقاعي يوقف التمرير.",
    expectedImpact:
      "مضاعفة معدل النقر والرسائل على عروض المواسم وزيادة الإقبال المباشر على فرعي العباسي وقناة السويس.",
    packageId: "P2",
    secondaryPackageId: "P3",
  },
  {
    id: 36,
    slug: "mansoura-college",
    companyName: "Mansoura College International Schools",
    contactGreeting: "أهلاً إدارة مدارس Mansoura College الدولية",
    decisionMaker: "إدارة التسويق والقبول",
    track: "quick-cash",
    trackLabel: "السيولة السريعة — المدارس الدولية",
    sector: "مدارس دولية (American / British / National)",
    priority: "9/10",
    email: "info@mc.edu.eg",
    phone: "+20 50 2588888",
    website: "https://mc2.mc.edu.eg/",
    digitalFootprintSummary: "مواقع mc.edu.eg وmc2.mc.edu.eg وig.mc.edu.eg (Microsoft Showcase School على طريق المنصورة–دمياط)",
    subject: "فيلم قبول سينمائي وريلز أولياء أمور لموسم 2026/2027 — Mansoura College",
    scientificProblem:
      "ولي الأمر عند اختيار مدرسة دولية يبحث عن دليل بصري حي على بيئة التعليم والتكنولوجيا والشخصية. الصور القديمة على الموقع لا تعكس مكانة Mansoura College كـ Microsoft Showcase School مقارنة بحملات الفيديو الحديثة.",
    scientificSolution:
      "إنتاج حملة قبول 2026/2027 متكاملة: فيلم تعريفي سينمائي للحرم والمعامل + ريلز شهادات أولياء أمور وموشن يشرح الفرق بين النظام الأمريكي والبريطاني (بخلفية عملنا مع مدارس منارات المدينة بالسعودية التي حققت +950K مشاهدة).",
    expectedImpact:
      "رفع طلبات التقديم وزيارات الحرم المدرسي في موسم القبول مع تعزيز الصورة الذهنية للمدرسة في الدلتا.",
    packageId: "P2",
    secondaryPackageId: "P5",
  },
  {
    id: 43,
    slug: "tawriqa",
    companyName: "Tawriqa (توريقة)",
    contactGreeting: "أهلاً فريق إدارة Tawriqa (توريقة)",
    decisionMaker: "إدارة المطعم والتسويق",
    track: "quick-cash",
    trackLabel: "السيولة السريعة — المطاعم",
    sector: "مطعم فطائر وتوصيل ليلي",
    priority: "9/10",
    email: "contact@tawriqa.com",
    phone: "+20 10 22595959",
    digitalFootprintSummary: "مطعم فطائر بوسط المنصورة يعتمد على الطلبات السريعة وإعلانات التوصيل الليلي",
    subject: "ريلز ماكرو ASMR لقرمشة وسحب الجبن لرفع طلبات التوصيل الليلي في توريقة",
    scientificProblem:
      "في إعلانات المطاعم (خصوصاً وقت الذروة الليلي 10م–3ص)، التصوير المسطح بإضاءة عادية لا يحفّز الاستجابة الحسية (Sensory Trigger)، ما يضطر المطعم لحرق ميزانية أكبر على ميتا وتيك توك لتحقيق نفس عدد الطلبات.",
    scientificSolution:
      "نصف يوم تصوير ماكرو احترافي + 5 ريلز طعام عالية الإغراء (لقطات بطيئة لقرمشة الفطير وسحب الجبن + هندسة صوتية ASMR + تلوين طعام دافئ على DaVinci Resolve) جاهزة لحملات التوصيل الممولة.",
    expectedImpact:
      "زيادة معدل النقر على زر الطلب (CTR) وتخفيض تكلفة الطلب الإعلاني خلال ساعات الذروة الليلية.",
    packageId: "P1",
    secondaryPackageId: "P2",
  },
  {
    id: 46,
    slug: "mg-real-estate",
    companyName: "MG Real Estate Egypt",
    contactGreeting: "أهلاً م. أحمد وفريق MG Real Estate Egypt",
    decisionMaker: "م. أحمد / إدارة المبيعات",
    track: "quick-cash",
    trackLabel: "السيولة السريعة — الوساطة العقارية",
    sector: "وساطة واستشارات عقارية",
    priority: "9/10",
    email: "info@mgrealestate-eg.com",
    phone: "+20 10 16444994",
    website: "https://www.mgrealestate-eg.com/",
    digitalFootprintSummary: "موقع mgrealestate-eg.com ومقر المشاية السفلية (أمام بوابة 1 جزيرة الورد)",
    subject: "مضاعفة استفسارات المشتري الجاد لـ MG Real Estate بريلز شرح التقسيط والعقار",
    scientificProblem:
      "ظهور موقع الشركة ببيانات قديمة وعرض الوحدات كبوستات نصية فقط يجعل الوسيط العقاري ينافس على السعر وحده، بينما يثق المشتري في المستشار العقاري الذي يظهر أمام الكاميرا ويشرح أنظمة السداد بالأرقام الواضحة.",
    scientificSolution:
      "تصوير 5 ريلز شهرية للمستشارين العقاريين مع موشن جرافيك مبسط للمقدم والأقساط ومقارنة المشروعات، بتلوين سينمائي يبني الثقة الفورية (نفس أسلوب ريلز العقارات الاستشارية التي نفذتها في دبي).",
    expectedImpact:
      "بناء سلطة رقمية للعلامة في المنصورة وتحويل المتابعين إلى مكالمات حجز واستشارة مباشرة.",
    packageId: "P1",
    secondaryPackageId: "P4",
  },
  {
    id: 55,
    slug: "tayseer-hospital",
    companyName: "Mansoura Medical Center (التيسير THG)",
    contactGreeting: "أهلاً أ. محمد مجدي وفريق مستشفى التيسير (THG)",
    decisionMaker: "محمد مجدي (رئيس قطاع الأفراد والثقافة)",
    track: "quick-cash",
    trackLabel: "السيولة السريعة — القطاع الطبي",
    sector: "مستشفى خاص (مجموعة التيسير الطبية)",
    priority: "8/10",
    email: "Tayseer.hospital@thg-egypt.com",
    phone: "+20 50 2728570",
    website: "https://thg-egypt.com/",
    digitalFootprintSummary: "موقع thg-egypt.com وتجديد وتوسعة فرع المنصورة (شارع الهدى والنور) ضمن مجموعة THG",
    subject: "فيلم إعادة الإطلاق وريلز التخصصات لمستشفى التيسير بالمنصورة (THG)",
    scientificProblem:
      "رغم التجديد والتوسعة الكبيرة في مستشفى التيسير بالمنصورة، غياب حملة فيديو محلية موثّقة يبقي الصورة الذهنية القديمة لدى المرضى بالدلتا، مما يقلل العائد من الاستثمار الضخم في البنية التحتية والأجهزة.",
    scientificSolution:
      "إنتاج فيلم إعادة إطلاق مؤسسي (قبل وبعد التطوير + جولة الأقسام والعمليات بتلوين طبي دافئ ومطمئن على DaVinci) مصحوباً بخطة ريلز شهرية للتخصصات والأطباء.",
    expectedImpact:
      "تحديث الصورة الذهنية للمستشفى محلياً وزيادة الحجوزات المباشرة في العيادات والأقسام الجراحية بتوفير 53% عن وكالات القاهرة.",
    packageId: "P5",
    secondaryPackageId: "P3",
  },
  {
    id: 56,
    slug: "glory-american-schools",
    companyName: "Glory American Schools — Mansoura",
    contactGreeting: "أهلاً د. حمدي عبد الرازق وإدارة Glory American Schools",
    decisionMaker: "د. حمدي عبد الرازق (رئيس مجلس الإدارة)",
    track: "quick-cash",
    trackLabel: "السيولة السريعة — المدارس الأمريكية",
    sector: "مدارس أمريكية وخاصة",
    priority: "8/10",
    email: "info@gals-mansoura.com",
    phone: "+20 12 88002529",
    website: "https://www.gals-mansoura.com/",
    digitalFootprintSummary: "موقع gals-mansoura.com (تأسست 2015، طريق نبروه، نظام أمريكي ووطني)",
    subject: "حملة فيديو القبول وجولة الحرم المدرسي لـ Glory American Schools",
    scientificProblem:
      "الموقع الحالي للمدرسة يعتمد على صور قديمة ونصوص تعريفية، وفي موسم القبول يتفوق المنافسون الذين يعرضون للآباء تجربة حية وملموسة داخل الفصول والأنشطة عبر ريلز سريعة وإعلان قبول واضح.",
    scientificSolution:
      "إنتاج فيلم جولة الحرم المدرسي وكلمة رئيس مجلس الإدارة + 6 إلى 10 ريلز أنشطة وقبول مصممة خصيصاً لإعلانات Meta المستهدفة لأولياء الأمور بالمنصورة والدلتا.",
    expectedImpact:
      "زيادة معدلات الاستفسار والزيارات الميدانية للمدرسة خلال موسم التقديم القادم.",
    packageId: "P2",
    secondaryPackageId: "P5",
  },

  // =========================================================================
  // TRACK 3: شركات التقنية والبرمجيات (SaaS & Motion)
  // =========================================================================
  {
    id: 60,
    slug: "akhdar",
    companyName: "Akhdar (أخضر)",
    contactGreeting: "أهلاً أ. محمد أسامة وفريق أخضر (Akhdar)",
    decisionMaker: "محمد أسامة (المؤسس المشارك والـ CEO)",
    track: "saas-tech",
    trackLabel: "شركات التقنية والبرمجيات (SaaS & Motion)",
    sector: "تكنولوجيا تعليم وملخصات كتب",
    priority: "9/10",
    email: "contact@a5dr.com",
    phone: "عبر نموذج التواصل الرسمي",
    website: "https://a5dr.com/",
    digitalFootprintSummary: "منصة a5dr.com وتطبيق أخضر وقناة YouTube (@a5drcom) وسلسلة جلسة أخضر / Green Cast",
    subject: "مضاعفة تحميلات تطبيق أخضر عبر إعلانات أداء وموشن سريع لـ Green Cast",
    scientificProblem:
      "الحلقات الطويلة (30–60 دقيقة) من بودكاست وجلسات أخضر تحتوي على كنز من اللحظات الذهبية، لكن عدم إعادة تدويرها كإعلانات استحواذ قصيرة (15–35 ثانية) بـ Kinetic Typography وخطافات نفسية يضيع فرصة خفض تكلفة تحميل التطبيق (CPI).",
    scientificSolution:
      "تنفيذ باقة الإطلاق الرقمي (P6): فيديو Explainer تفاعلي لمزايا الاشتراك في التطبيق + إعادة تدوير أقوى مقاطع Green Cast إلى إعلانات أداء قصيرة مختبرة الخطافات ومصممة لـ Reels وShorts وTikTok.",
    expectedImpact:
      "تخفيض تكلفة تثبيت التطبيق (CPI) ورفع نسبة التحويل للاشتراكات المدفوعة.",
    packageId: "P6",
    secondaryPackageId: "P2",
  },
  {
    id: 61,
    slug: "namra-tech",
    companyName: "Namra Tech (نمرة تك)",
    contactGreeting: "أهلاً أ. خالد رضا نمرة وفريق Namra Tech",
    decisionMaker: "خالد رضا نمرة (المؤسس والرئيس التنفيذي)",
    track: "saas-tech",
    trackLabel: "شركات التقنية والبرمجيات (SaaS & Motion)",
    sector: "برمجيات SaaS وERP وذكاء عملاء",
    priority: "9/10",
    email: "info@namratech.com",
    phone: "+20 15 54242047",
    website: "https://www.getnamra.com/",
    digitalFootprintSummary: "منظومة getnamra.com وnamraforge.com وnamraiq.com (Namra ERP / IQ / Forge — +687 عميل في 7 دول)",
    subject: "فيديوهات Motion & UI Explainers لمنظومة Namra ERP وNamra IQ للخليج",
    scientificProblem:
      "مع توسع منظومة نمرة لعدة منتجات قوية (Namra ERP، Namra IQ، Namra Forge) عبر 7 دول عربية، يواجه العميل التجاري صعوبة في استيعاب قيمة كل منتج من الصفحات النصية فقط، مما يبطئ قرار حجز الـ Demo.",
    scientificSolution:
      "إنتاج فيديوهات Explainer موشن احترافية (60–90 ثانية) تحرك واجهات Namra الحقيقية (UI Motion) مع 3 إعلانات أداء قصيرة موجهة لمديري الشركات في السعودية والإمارات والخليج — بتنفيذ رقمي كامل بدون تعطيل فريقكم.",
    expectedImpact:
      "تقليص وقت شرح المنتج في المبيعات ورفع معدل تحويل زوار الموقع وإعلانات الخليج إلى طلبات Demo.",
    packageId: "P6",
    secondaryPackageId: "P7",
  },
  {
    id: 65,
    slug: "alqemam-qtech",
    companyName: "AlQemam Technologies (qTech)",
    contactGreeting: "أهلاً أ. علي زكي وفريق AlQemam Technologies (qTech)",
    decisionMaker: "علي زكي (مدير المشتريات)",
    track: "saas-tech",
    trackLabel: "شركات التقنية والبرمجيات (Enterprise)",
    sector: "ذكاء اصطناعي وGIS وOdoo ERP (مدرجة بسوق نمو)",
    priority: "8/10",
    email: "ali.zaki@alqemam.com",
    cc: "Amir.Elghamry@alqemam.com",
    phone: "+20 11 23426012",
    website: "https://www.alqemam.com/",
    digitalFootprintSummary: "شركة مساهمة سعودية (+200 عميل حكومي ومؤسسي و+70 منتجاً) بفرع هندسي رئيسي في توريل، المنصورة",
    subject: "أفلام عرض منتجات SaaS وموشن مؤسسي بمستوى Vision 2030 لشركة القمم (qTech)",
    scientificProblem:
      "الشركات التقنية المدرجة التي تقدم +70 حلاً في الـ GIS وOdoo وAI تحتاج لعرض قدراتها أمام الجهات الحكومية ومؤتمرات السعودية (مثل LEAP) بمستوى بصري مؤسسي يضاهي حجمها، بدلاً من العروض التقديمية التقليدية.",
    scientificSolution:
      "إنتاج فيديوهات عرض منتجات وموشن بيانات (P6) أو فيلم مؤسسي متكامل (P5) يبرز حلول القمم وفرع الهندسة بالمنصورة بمعايير إخراج وتلوين DaVinci متوافقة مع السوق السعودي (بخبرتي السابقة مع عملاء شركات وفعاليات VIP في السعودية).",
    expectedImpact:
      "تعزيز قوة العروض الفنية للمناقصات الحكومية والمعارض السعودية بتكلفة أقل 47%–53% من وكالات القاهرة والرياض.",
    packageId: "P6",
    secondaryPackageId: "P5",
  },
  {
    id: 68,
    slug: "technical-vision",
    companyName: "Technical Vision (الرؤية التقنية)",
    contactGreeting: "أهلاً فريق قيادة Technical Vision",
    decisionMaker: "الإدارة التنفيذية والتسويق",
    track: "saas-tech",
    trackLabel: "شركات التقنية والبرمجيات (SaaS & Motion)",
    sector: "أنظمة مؤسسية وAI وتدريب",
    priority: "7/10",
    email: "technicalvision.egy@gmail.com",
    phone: "+20 122 018 9847",
    digitalFootprintSummary: "مقر توريل بالمنصورة مع خطة توسع للمدينة المنورة في الأنظمة المؤسسية والـ ERP والتدريب",
    subject: "فيديو الإطلاق المؤسسي وموشن شرح الـ ERP لتوسع Technical Vision بالسعودية",
    scientificProblem:
      "دخول سوق جديد مثل المدينة المنورة والسعودية بدون فيديو إطلاق مؤسسي وفيديو شرح واضح لأنظمة الـ ERP يضعف الانطباع الأول أمام العملاء المؤسسيين ويجبر فريق المبيعات على إعادة نفس الشرح يدوياً في كل اجتماع.",
    scientificSolution:
      "تنفيذ باقة الإطلاق الرقمي (P6): سكربت وفيديو موشن شرح لأنظمة ERP والـ AI (60–90 ثانية) + 3 إعلانات قصيرة للدبلومات والحلول المؤسسية جاهزة للحملات في مصر والسعودية.",
    expectedImpact:
      "تسريع بناء الثقة في السوق السعودي ورفع استجابة حملات الدبلومات والأنظمة المؤسسية.",
    packageId: "P6",
    secondaryPackageId: "P5",
  },

  // =========================================================================
  // TRACK 4: العقود الكبرى (جامعات، سيارات، مصانع، مطورون، مستشفيات)
  // =========================================================================
  {
    id: 69,
    slug: "delta-university",
    companyName: "Delta University for Science & Technology (جامعة الدلتا)",
    contactGreeting: "أهلاً مكتب أ.د. محمد ربيع ناصر وإدارة الإعلام بجامعة الدلتا",
    decisionMaker: "د. محمد ربيع ناصر (رئيس مجلس الإدارة)",
    track: "enterprise",
    trackLabel: "العقود الكبرى — التعليم العالي",
    sector: "جامعة خاصة (جمصة — الدلتا)",
    priority: "10/10",
    email: "info@deltauniv.edu.eg",
    phone: "15955 / +20 50 2770140",
    website: "https://www.deltauniv.edu.eg/",
    digitalFootprintSummary: "موقع deltauniv.edu.eg (أول جامعة خاصة بالدلتا — 12 كلية ومعامل حديثة، قبول 2026/2027)",
    subject: "تحديث الفيلم المؤسسي وأفلام الكليات الـ 12 وريلز القبول — جامعة الدلتا",
    scientificProblem:
      "بروموهات الكليات المنتجة قبل 4 سنوات والندوات الطويلة لم تعد تتناسب مع سلوك طلاب الثانوية (Gen Z) الذين يقضون 85% من وقتهم على الفيديوهات الرأسية السريعة، ما يقلل من إبراز التطور الضخم في معامل وتصنيف الجامعة.",
    scientificSolution:
      "إنتاج فيلم مؤسسي سينمائي حديث بـ 6K RAW وتلوين DaVinci Resolve (باقة P5) مع خطة لتحديث أفلام الكليات وتحويلها لريلز قبول عمودية 9:16 تبرز المعامل والحياة الجامعية (بخبرة حملات تعليمية حققت +950K مشاهدة عضوية).",
    expectedImpact:
      "رفع معدلات التقديم لموسم 2026/2027 وتوفير 53% من تكلفة استقدام شركات إنتاج من القاهرة بدون مصاريف انتقال وسفر فرق كاملة.",
    packageId: "P5",
    secondaryPackageId: "P3",
  },
  {
    id: 70,
    slug: "el-saba-automotive",
    companyName: "El-Saba Automotive (السبع أوتوموتيف)",
    contactGreeting: "أهلاً مكتب أ. علاء السبع وإدارة تسويق السبع أوتوموتيف",
    decisionMaker: "علاء السبع (رئيس مجلس الإدارة)",
    track: "enterprise",
    trackLabel: "العقود الكبرى — قطاع السيارات",
    sector: "معارض ومراكز صيانة سيارات متعددة العلامات",
    priority: "10/10",
    email: "info@elsaba-group.com",
    phone: "16449 / +20 11 22220829",
    website: "https://elsaba-group.com/",
    digitalFootprintSummary: "موقع elsaba-group.com (منذ 1975 بالمنصورة — 11 معرضاً و7 مراكز صيانة لنيسان وكيا وبيجو وستروين)",
    subject: "ريلز إطلاق سيارات بتلوين DaVinci للطلاء المعدني وجولات معارض السبع أوتوموتيف",
    scientificProblem:
      "عرض الموديلات الجديدة عبر مقالات نصية وصور تقليدية لا ينقل الفخامة الحقيقية للسيارة. تصوير السيارات بدون تلوين احترافي للانعاكاسات والطلاء المعدني (Metallic Paint Grading) وحركة جيمبال دقيقة يقلل من الرغبة الفورية في حجز التجربة.",
    scientificSolution:
      "باقة السيارات المخصصة (P4) أو عقد شهري (P3): تصوير بـ Nikon ZR 6K وجيمبال DJI RS 5 مع تلوين DaVinci يبرز تفاصيل الطلاء والمقصورة، وإنتاج ريلز إطلاق سيارات ومحتوى ثقة لمراكز صيانة السبع (بخبرة سابقة في ريلز معارض السيارات الفارهة).",
    expectedImpact:
      "رفع حجم حجوزات المعاينة والاستفسارات لموديلات المعارض وتعزيز ثقة عملاء خدمات ما بعد البيع.",
    packageId: "P4",
    secondaryPackageId: "P3",
  },
  {
    id: 71,
    slug: "dakahlia-group",
    companyName: "Dakahlia Group (مجموعة الدقهلية — تمري)",
    contactGreeting: "أهلاً أ. خالد محمود العناني وإدارة مجموعة الدقهلية",
    decisionMaker: "خالد محمود العناني (CEO الدقهلية الزراعية)",
    track: "enterprise",
    trackLabel: "العقود الكبرى — الصناعات الغذائية والزراعية",
    sector: "صناعات غذائية وزراعية ودواجن (تمري)",
    priority: "10/10",
    email: "info@dakahlia.com",
    cc: "k.alanani@dakahlia.com",
    phone: "16459 / +20 2 2305 4802",
    digitalFootprintSummary: "مزارع ومشروعات مجموعة الدقهلية وعلامة تمري ومبادرات الطاقة الشمسية والـ ESG",
    subject: "فيلم مؤسسي 6K لوثائقيات الـ ESG والطاقة الشمسية وإعلانات تمري — مجموعة الدقهلية",
    scientificProblem:
      "الشركات الصناعية والغذائية الكبرى التي تشارك في معارض دولية ومبادرات استدامة (ESG / الطاقة الشمسية) تخسر ميزة تنافسية ضخمة عند غياب أفلام وثائقية عالية الدقة تترجم حجم الاستثمار والأمان الغذائي خلال 3 دقائق.",
    scientificSolution:
      "إنتاج فيلم مؤسسي وثائقي 6K متكامل للمزارع وخطوط الإنتاج ومشروعات الطاقة الشمسية (باقة P5) مع موشن بيانات للمعارض الدولية + مقاطع إعلانية تجارية لمنتجات تمري بتلوين طعام سينمائي.",
    expectedImpact:
      "رفع مصداقية المجموعة أمام الشركاء والمستثمرين في المعارض الدولية مع توفير 53% من تكلفة وكالات القاهرة.",
    packageId: "P5",
    secondaryPackageId: "P7",
  },
  {
    id: 72,
    slug: "city-edge-zahya",
    companyName: "City Edge Developments (زاهية — المنصورة الجديدة)",
    contactGreeting: "أهلاً إدارة تسويق سيتي إيدج — مشروع زاهية المنصورة الجديدة",
    decisionMaker: "إدارة تسويق مشروع زاهية / م. تامر ناصر",
    track: "enterprise",
    trackLabel: "العقود الكبرى — التطوير العقاري",
    sector: "تطوير عقاري ساحلي كبرى",
    priority: "9/10",
    email: "info@ced-eg.com",
    phone: "16044 / +20 2 3761 1426",
    website: "https://cityedgedevelopments.com/ar/project/zahya-ar/",
    digitalFootprintSummary: "صفحة مشروع زاهية المنصورة الجديدة ومقر المبيعات بشارع الجمهورية بالمنصورة",
    subject: "شريك تصوير ميداني محلي في المنصورة الجديدة لمشروع زاهية (سيتي إيدج)",
    scientificProblem:
      "إرسال أطقم تصوير كاملة من القاهرة بشكل دوري لتغطية تقدم الإنشاءات وأجواء الساحل في زاهية المنصورة الجديدة يرفع التكلفة اللوجستية ويؤخر نشر تحديثات حية للمغتربين والمستثمرين في الدلتا والخليج.",
    scientificSolution:
      "تغطية ميدانية فورية من داخل الدلتا بدون مصاريف إقامة أو سفر: أفلام لايف ستايل وإنشاءات بتلوين الساعة الذهبية (Golden Hour DaVinci Grade) + موشن أنظمة سداد وإعلانات AI هجينة موجهة للمصريين بالخارج.",
    expectedImpact:
      "سرعة تسليم أعلى (72 ساعة) وتوفير 44%–54% في الميزانية مقارنة بفرق الإنتاج القادمة من القاهرة.",
    packageId: "P4",
    secondaryPackageId: "P7",
  },
  {
    id: 73,
    slug: "salam-properties",
    companyName: "Salam Properties (SPD — سلام العقارية)",
    contactGreeting: "أهلاً م. وليد الديب وفريق تسويق سلام العقارية (SPD)",
    decisionMaker: "م. وليد الديب (المؤسس ورئيس مجلس الإدارة)",
    track: "enterprise",
    trackLabel: "العقود الكبرى — التطوير العقاري والفندقي",
    sector: "تطوير عقاري (بيوت ولافيدا مول — المنصورة الجديدة)",
    priority: "9/10",
    email: "info@salamproperties-eg.com",
    phone: "17051 / +20 2 2322 9339",
    digitalFootprintSummary: "مشروعات بيوت (Beyout) ولافيدا مول (La Vida Mall) في مدينة المنصورة الجديدة",
    subject: "أفلام إطلاق وإعلانات AI معمارية لمشروعي بيوت ولافيدا مول — سلام العقارية",
    scientificProblem:
      "المنافسة الشرسة على المشتري العقاري في المنصورة الجديدة تجعل الإعلانات العقارية التقليدية تتشابه بصرياً، مما يرفع تكلفة العميل المحتمل (CPL) في حملات الإطلاق الجديدة.",
    scientificSolution:
      "دمج التصوير الميداني السينمائي (P4) مع إعلانات معمارية هجينة بالذكاء الاصطناعي (P7) لإحياء تجربة لافيدا مول وبيوت قبل التسليم، مع ريلز عائد استثماري عالية الاحتفاظ.",
    expectedImpact:
      "تمييز إعلانات الإطلاق بصرياً عن باقي مطوري المنصورة الجديدة ورفع جودة استفسارات المستثمرين.",
    packageId: "P4",
    secondaryPackageId: "P7",
  },
  {
    id: 74,
    slug: "ed-pharma",
    companyName: "ED Pharma / Delta Grand Pharma",
    contactGreeting: "أهلاً د. محمد ربيع وفريق تسويق ED Pharma",
    decisionMaker: "د. محمد ربيع (رئيس مجلس الإدارة)",
    track: "enterprise",
    trackLabel: "العقود الكبرى — الصناعات الدوائية",
    sector: "صناعة أدوية ومكملات ومستحضرات تجميل",
    priority: "9/10",
    email: "sales@edpharma.com.eg",
    cc: "info@edpharma.com.eg",
    phone: "+20 12 7353 4552",
    website: "https://edpharma.com.eg/",
    digitalFootprintSummary: "موقع edpharma.com.eg (مقر 5 شارع طيبة بالمنصورة — خطوط أدوية ومكملات Edmmun وWezylock وSkelet)",
    subject: "فيلم مصنع GMP وإعلانات فيديو هجينة لمكملات ED Pharma (Edmmun / Wezylock)",
    scientificProblem:
      "الاعتماد على كتالوجات PDF وصور عبوات ثابتة على الموقع لمنتجات المكملات والتجميل (مثل Edmmun وWezylock) يفوّت فرصة البيع المباشر للصيدليات والمستهلكين، كما يفتقر ملف التصدير لفيلم مصنع يوثق معايير الجودة GMP.",
    scientificSolution:
      "إنتاج فيلم مؤسسي للمصنع وخطوط الإنتاج بمعايير GMP للتصدير والموزعين (باقة P5) + إعلانات هجينة 3D/AI للمكملات تشرح آلية العمل بشكل بصري جذاب ومقنع (باقة P7).",
    expectedImpact:
      "رفع قبول المنتجات لدى الموزعين والصيدليات وتعزيز ثقة عملاء التصدير بصورة صناعية عالمية.",
    packageId: "P5",
    secondaryPackageId: "P7",
  },
  {
    id: 75,
    slug: "el-delta-hospital",
    companyName: "El Delta Hospital (مستشفى الدلتا)",
    contactGreeting: "أهلاً د. محمد سرحان وإدارة مستشفى الدلتا",
    decisionMaker: "د. محمد سرحان (مدير المستشفى)",
    track: "enterprise",
    trackLabel: "العقود الكبرى — الرعاية الصحية",
    sector: "مستشفى خاص متعدد التخصصات (9 غرف عمليات وقسطرة)",
    priority: "9/10",
    email: "Info@aldeltahospitals.com",
    phone: "+20 50 2944605",
    digitalFootprintSummary: "مستشفى الدلتا بشارع جيهان السادات (أمام طوارئ الجامعة) — 9 غرف عمليات ووحدات قسطرة",
    subject: "فيلم مؤسسي سينمائي لغرف العمليات و8 ريلز أطباء شهرياً — مستشفى الدلتا",
    scientificProblem:
      "الإضاءة الطبية الفلورسنت القاسية في تصوير المستشفيات العادي تمنح لون بشرة بارداً وتثير القلق النفسي لدى المريض، كما أن غياب دليل مرئي حديث لغرف العمليات الـ 9 والقسطرة يخفي قوة الإمكانيات الطبية الحقيقية للمستشفى.",
    scientificSolution:
      "تصوير فيلم مؤسسي فاخر يعالج الإضاءة الطبية عبر تلوين DaVinci Resolve دافئ ومطمئن يحافظ على دقة لون البشرة (Skin-Tone Calibration)، مع عقد شهري لريلز الأطباء والتخصصات.",
    expectedImpact:
      "رفع ثقة المرضى وعائلاتهم قبل اتخاذ قرار الجراحة أو القسطرة وزيادة الحجوزات المباشرة بالمستشفى.",
    packageId: "P5",
    secondaryPackageId: "P3",
  },
  {
    id: 76,
    slug: "mri-egypt",
    companyName: "Mansoura for Resins & Chemicals (MRI)",
    contactGreeting: "أهلاً إدارة التصدير والتسويق بشركة المنصورة للراتنجات (MRI)",
    decisionMaker: "إدارة المبيعات والتصدير",
    track: "enterprise",
    trackLabel: "العقود الكبرى — الصناعات الكيماوية والتصدير",
    sector: "صناعات كيماوية وتصدير (+10 دول)",
    priority: "9/10",
    email: "sales@mriegypt.com",
    cc: "office.manager@mriegypt.com",
    phone: "+20 50 2063033",
    website: "https://www.mriegypt.com/",
    digitalFootprintSummary: "موقع mriegypt.com (ISO 9001:2015، طريق سندوب — 40 كم من ميناء دمياط، تصدير لأكثر من 10 دول)",
    subject: "فيلم وثائقي صناعي 4K/6K للتصدير وفيديوهات HSE لشركة المنصورة للراتنجات (MRI)",
    scientificProblem:
      "المستوردون الدوليون في أوروبا وأفريقيا والشرق الأوسط يقيّمون موثوقية المصانع الكيماوية من حجم خطوط الإنتاج ومعايير ISO وHSE قبل طلب العينات. الموقع النصي والصور الثابتة لا تنقل الحجم الصناعي الحقيقي لـ MRI وقربها اللوجستي من ميناء دمياط.",
    scientificSolution:
      "إنتاج وثائقي صناعي 6K (2–3 دقائق باللغتين الإنجليزية والعربية) يوثّق مصنع سندوب ومعامل الجودة وميزة ميناء دمياط مع موشن جرافيك للبيانات ومعايير السلامة المهنية HSE.",
    expectedImpact:
      "أداة بيع قوية في المعارض الدولية ومراسلات التصدير تختصر وقت إقناع المستوردين وتوفر 53% عن وكالات القاهرة.",
    packageId: "P5",
    secondaryPackageId: "P6",
  },
  {
    id: 84,
    slug: "el-kheir-hospital",
    companyName: "El Kheir Hospital (مستشفى الخير)",
    contactGreeting: "أهلاً إدارة مستشفى الخير بالمنصورة",
    decisionMaker: "الإدارة الطبية والتسويق",
    track: "enterprise",
    trackLabel: "العقود الكبرى — الرعاية الصحية",
    sector: "مستشفى قلب (3 وحدات قسطرة) ومتعدد التخصصات",
    priority: "8/10",
    email: "elkheir.hospital1@gmail.com",
    phone: "+20 50 2504066",
    digitalFootprintSummary: "153 شارع قناة السويس بالمنصورة — وحدة قلب متقدمة (3 أجهزة قسطرة) وأقسام متعددة",
    subject: "وثائقي وحدة القلب والقسطرة وريلز أسئلة الأطباء — مستشفى الخير",
    scientificProblem:
      "مرضى القلب وأسرهم يبحثون عن أعلى درجات الطمأنينة والوضوح قبل اختيار المستشفى. غياب محتوى فيديو طبي احترافي يشرح جاهزية وحدات القسطرة الـ 3 ويجيب على تساؤلات المرضى يجعلهم يتشتتون بين المنافسين.",
    scientificSolution:
      "إنتاج فيلم وثائقي لوحدة القلب والقسطرة (باقة P5) مع سلسلة ريلز شهرية لأسئلة الأطباء مدعومة بموشن طبي مبسط وتلوين بشرة دافئ ونقي على DaVinci Resolve (باقة P2).",
    expectedImpact:
      "تعزيز السمعة التخصصية لوحدة القلب في الدلتا وزيادة الاستفسارات والحجوزات عبر السوشيال ميديا.",
    packageId: "P5",
    secondaryPackageId: "P2",
  },
  {
    id: 85,
    slug: "nile-higher-institutes",
    companyName: "Nile Higher Institutes (معاهد النيل العليا)",
    contactGreeting: "أهلاً إدارة معاهد النيل العليا بالمنصورة",
    decisionMaker: "إدارة الإعلام والقبول",
    track: "enterprise",
    trackLabel: "العقود الكبرى — التعليم العالي",
    sector: "تعليم عالي خاص (هندسة، حاسبات، تجارة)",
    priority: "8/10",
    email: "info@nilehi.edu.eg",
    phone: "+20 10 3492 0744",
    digitalFootprintSummary: "طريق المنصورة–دمياط القديم — معاهد الهندسة والحاسبات والذكاء الاصطناعي والتجارة",
    subject: "حملة ريلز القبول وجولات معامل الهندسة والـ AI — معاهد النيل العليا",
    scientificProblem:
      "في موسم التنسيق والقبول، يقارن طلاب الثانوية بين المعاهد العليا بناءً على ما يرونه على TikTok وReels خلال ثوانٍ. البوستات الإرشادية النصية تحقق وصولاً ضعيفاً ولا تُظهر قوة المعامل ومستقبل الخريجين.",
    scientificSolution:
      "باقة نمو القبول (P2) أو فيلم مؤسسي (P5): تصوير جولات معامل الهندسة والـ AI، لقاءات خريجين ناجحين، وموشن إرشادي عمودي 9:16 لخطوات التقديم والتنسيق.",
    expectedImpact:
      "زيادة معدلات التقديم المباشر وتقليل ضغط الأسئلة المتكررة على فريق القبول.",
    packageId: "P2",
    secondaryPackageId: "P5",
  },
];

import * as React from "react";
import {
  Button,
  Column,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { ArzLayout } from "./components/ArzLayout";
import { ARZ_PACKAGES, arzTheme, type ArzPackageSpec } from "./theme";

export interface StrategicClientPitchProps {
  companyName: string;
  contactGreeting: string;
  sector: string;
  trackLabel: string;
  digitalFootprintSummary: string;
  scientificProblem: string;
  scientificSolution: string;
  expectedImpact: string;
  packageId: ArzPackageSpec["id"];
  secondaryPackageId?: ArzPackageSpec["id"];
  ctaQuestion?: string;
}

export const StrategicClientPitch: React.FC<StrategicClientPitchProps> = ({
  companyName,
  contactGreeting,
  sector,
  trackLabel,
  digitalFootprintSummary,
  scientificProblem,
  scientificSolution,
  expectedImpact,
  packageId,
  secondaryPackageId,
  ctaQuestion = "هل يناسبكم مكالمة سريعة لمدة 10 دقائق هذا الأسبوع لمراجعة نموذج بصري مخصص لحملاتكم القادمة؟",
}) => {
  const { colors, fonts, brand, metrics } = arzTheme;
  const pkg = ARZ_PACKAGES[packageId];
  const secondaryPkg = secondaryPackageId ? ARZ_PACKAGES[secondaryPackageId] : null;
  const formatPrice = (n: number) => `${n.toLocaleString("en-US")} ج.م`;

  const customWaUrl = `https://wa.me/201014673393?text=${encodeURIComponent(
    `أهلاً أستاذ عبدالرازق، وصلنا إيميل التحليل البصري الخاص بـ ${companyName} وحابين نناقش تفاصيل ${pkg.nameAr} (${pkg.id}).`
  )}`;

  return (
    <ArzLayout
      dir="rtl"
      lang="ar"
      previewText={`تحليل بصري وحل عملي لـ ${companyName} — ${pkg.nameAr} (${formatPrice(pkg.priceEgp)})`}
      timecode="00:01:45:00"
      formatLabel={`ARZ AUDIT · ${pkg.id} · 6K RAW`}
    >
      {/* Track & Sector Eyebrow */}
      <Text
        style={{
          margin: "0 0 10px",
          fontFamily: fonts.arabic,
          fontSize: "12px",
          fontWeight: 700,
          color: colors.accent,
        }}
      >
        {trackLabel} · {sector}
      </Text>

      {/* Main Headline */}
      <Heading
        as="h1"
        className="arz-h1"
        style={{
          margin: "0 0 16px",
          fontFamily: fonts.arabic,
          fontSize: "26px",
          lineHeight: "36px",
          fontWeight: 800,
          color: colors.text,
        }}
      >
        تحليل بصري سريع لـ{" "}
        <span style={{ color: colors.accent }}>{companyName}</span> — وخطة رفع
        الانتباه والتحويل بالفيديو
      </Heading>

      <Text
        style={{
          margin: "0 0 14px",
          fontSize: "15px",
          lineHeight: "26px",
          color: colors.text,
        }}
      >
        {contactGreeting}،
      </Text>

      <Text
        style={{
          margin: "0 0 22px",
          fontSize: "14px",
          lineHeight: "25px",
          color: colors.muted,
        }}
      >
        أنا <strong style={{ color: colors.text }}>عبدالرازق محمود</strong>{" "}
        (مؤسس <strong style={{ color: colors.accent }}>ARZ Studio</strong> في
        المنصورة — مونتير، مصحح ألوان DaVinci Resolve، ومصمم موشن بخبرة +500
        فيديو في مصر والخليج). راجعت حضوركم الرقمي ({digitalFootprintSummary})
        ولاحظت فرصة واضحة لرفع العائد من المحتوى المرئي.
      </Text>

      {/* Scientific Problem Card */}
      <Section
        style={{
          backgroundColor: colors.problemBg,
          border: `1px solid ${colors.problemBorder}`,
          borderRight: `4px solid ${colors.recRed}`,
          borderRadius: "14px",
          padding: "18px 20px",
          marginBottom: "14px",
        }}
      >
        <Text
          style={{
            margin: "0 0 6px",
            fontSize: "12px",
            fontWeight: 700,
            color: "#F38B82",
          }}
        >
          01 — التشخيص العلمي للمشكلة (The Visual Bottleneck)
        </Text>
        <Text
          style={{
            margin: "0",
            fontSize: "14px",
            lineHeight: "24px",
            color: colors.text,
          }}
        >
          {scientificProblem}
        </Text>
      </Section>

      {/* Scientific Solution Card */}
      <Section
        style={{
          backgroundColor: colors.solutionBg,
          border: `1px solid ${colors.solutionBorder}`,
          borderRight: `4px solid ${colors.liveGreen}`,
          borderRadius: "14px",
          padding: "18px 20px",
          marginBottom: "14px",
        }}
      >
        <Text
          style={{
            margin: "0 0 6px",
            fontSize: "12px",
            fontWeight: 700,
            color: "#7CE393",
          }}
        >
          02 — الحل العلمي والتنفيذي (The Production Intervention)
        </Text>
        <Text
          style={{
            margin: "0 0 10px",
            fontSize: "14px",
            lineHeight: "24px",
            color: colors.text,
          }}
        >
          {scientificSolution}
        </Text>
        <Text
          style={{
            margin: "0",
            fontSize: "13px",
            lineHeight: "22px",
            color: colors.accentBright,
            fontWeight: 600,
          }}
        >
          الأثر المتوقع: {expectedImpact}
        </Text>
      </Section>

      {/* Matched Package Card */}
      <Section
        style={{
          backgroundColor: colors.surfaceAlt,
          border: `1px solid ${colors.borderStrong}`,
          borderRadius: "16px",
          padding: "20px 22px",
          marginTop: "20px",
          marginBottom: "22px",
        }}
      >
        <Row style={{ marginBottom: "12px" }}>
          <Column className="arz-stack" style={{ verticalAlign: "top" }}>
            <Text
              style={{
                margin: "0 0 4px",
                fontFamily: fonts.mono,
                fontSize: "11px",
                color: colors.accent,
                fontWeight: 700,
              }}
            >
              RECOMMENDED PACKAGE · {pkg.id}
            </Text>
            <Text
              style={{
                margin: "0",
                fontSize: "18px",
                fontWeight: 800,
                color: colors.text,
              }}
            >
              {pkg.nameAr} ({pkg.nameEn})
            </Text>
          </Column>
          <Column
            className="arz-stack"
            align="left"
            style={{ verticalAlign: "top" }}
          >
            <Text
              style={{
                margin: "0",
                fontSize: "20px",
                fontWeight: 800,
                color: colors.accentBright,
              }}
            >
              {formatPrice(pkg.priceEgp)}
            </Text>
            <Text
              style={{
                margin: "2px 0 0",
                fontSize: "11px",
                color: "#7CE393",
                fontWeight: 600,
              }}
            >
              توفير {pkg.savePct}% عن متوسط وكالات القاهرة (
              {formatPrice(pkg.cairoAvgEgp)})
            </Text>
          </Column>
        </Row>

        {pkg.deliverables.map((item, idx) => (
          <Text
            key={item}
            style={{
              margin: idx === pkg.deliverables.length - 1 ? "0" : "0 0 8px",
              padding: "9px 12px",
              backgroundColor: colors.bgAlt,
              border: `1px solid ${colors.border}`,
              borderRadius: "10px",
              fontSize: "13px",
              lineHeight: "20px",
              color: colors.text,
            }}
          >
            <span style={{ color: colors.accent, marginLeft: "8px" }}>✓</span>
            {item}
          </Text>
        ))}

        {secondaryPkg && (
          <Text
            style={{
              margin: "12px 0 0",
              fontSize: "12px",
              lineHeight: "20px",
              color: colors.muted,
            }}
          >
            <strong style={{ color: colors.accentBright }}>بديل للتوسع:</strong>{" "}
            {secondaryPkg.nameAr} ({secondaryPkg.id}) بسعر{" "}
            {formatPrice(secondaryPkg.priceEgp)} (توفير {secondaryPkg.savePct}%
            عن القاهرة).
          </Text>
        )}
      </Section>

      {/* Proof Metrics Strip (Responsive) */}
      <Section
        style={{
          backgroundColor: colors.bgAlt,
          border: `1px solid ${colors.border}`,
          borderRadius: "14px",
          padding: "14px 10px",
          marginBottom: "24px",
        }}
      >
        <Row>
          {metrics.map((metric) => (
            <Column
              key={metric.label}
              className="arz-metric-col"
              align="center"
              style={{ width: "25%" }}
            >
              <Text
                style={{
                  margin: "0 0 2px",
                  fontFamily: fonts.display,
                  fontSize: "18px",
                  fontWeight: 800,
                  color: colors.accentBright,
                }}
              >
                {metric.value}
              </Text>
              <Text
                style={{
                  margin: "0",
                  fontSize: "11px",
                  color: colors.muted,
                }}
              >
                {metric.labelAr}
              </Text>
            </Column>
          ))}
        </Row>
      </Section>

      {/* Dual Responsive CTAs */}
      <Section style={{ marginBottom: "18px" }}>
        <Row>
          <Column
            className="arz-stack"
            style={{ paddingLeft: "8px", paddingBottom: "8px" }}
          >
            <Button
              className="arz-btn"
              href={customWaUrl}
              style={{
                backgroundColor: colors.accent,
                color: colors.accentInk,
                fontFamily: fonts.arabic,
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                padding: "13px 22px",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              تواصل سريع عبر واتساب ←
            </Button>
          </Column>
          <Column className="arz-stack" style={{ paddingBottom: "8px" }}>
            <Button
              className="arz-btn"
              href={brand.packagesUrl}
              style={{
                backgroundColor: colors.surfaceAlt,
                color: colors.text,
                border: `1px solid ${colors.borderStrong}`,
                fontFamily: fonts.arabic,
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              عرض كل الباقات والحاسبة التفاعلية
            </Button>
          </Column>
        </Row>
      </Section>

      <Text
        style={{
          margin: "0",
          fontSize: "14px",
          lineHeight: "24px",
          color: colors.muted,
        }}
      >
        {ctaQuestion} تقدر ترد مباشرة على هذا الإيميل أو تبعتلي على واتساب.
      </Text>
    </ArzLayout>
  );
};

StrategicClientPitch.PreviewProps = {
  companyName: "Namra Tech (نمرة تك)",
  contactGreeting: "أهلاً أ. خالد رضا نمرة",
  sector: "برمجيات SaaS وERP",
  trackLabel: "شركات التقنية والبرمجيات",
  digitalFootprintSummary: "منظومة getnamra.com وNamra ERP وNamra IQ وNamra Forge (+687 عميل في 7 دول عربية)",
  scientificProblem:
    "المنتجات التقنية متعددة الوحدات (ERP / CRM / تحليلات) تعاني من فجوة الفهم السريع: الزائر يقرأ 20% فقط من النصوص، بينما شرح الواجهات بتسجيل شاشة تقليدي يخفض الاحتفاظ خلال أول 8 ثوانٍ ويطيل دورة المبيعات في الخليج.",
  scientificSolution:
    "إنتاج فيديو Explainer موشن جرافيك (60–90 ثانية) يحرك واجهات Namra ERP وNamra IQ بشكل مبسط مع 3 إعلانات أداء قصيرة مختبرة الخطافات (A/B Hooks) موجهة لصناع القرار في السعودية والخليج.",
  expectedImpact:
    "رفع معدل طلب العرض التجريبي (Demo Requests) وتقليل تكلفة الاستحواذ (CPA) بنسبة 25%–40% في حملات الخليج.",
  packageId: "P6",
  secondaryPackageId: "P7",
} satisfies StrategicClientPitchProps;

export default StrategicClientPitch;

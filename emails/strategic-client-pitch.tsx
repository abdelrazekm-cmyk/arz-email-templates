import * as React from "react";
import {
  Button,
  Column,
  Heading,
  Hr,
  Img,
  Link,
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
  /** Optional concise English mirror rendered inside the same email (#en-version) */
  englishSummary?: {
    greeting: string;
    hook: string;
    problem: string;
    solution: string;
    impact: string;
  };
}

/**
 * High-converting B2B Cold Outreach Template (AIDA + PAS Hybrid)
 * - Strictly RTL Arabic top section (#ar-version)
 * - Visual Portfolio Showcase (Top 3 flagship videos: 950K+ views, Coca-Cola Arena Dubai, 3D CGI)
 * - Dark Mode creator portrait from arz-portfolio.me
 * - In-email anchor switcher to English LTR section (#en-version) without leaving the inbox
 */
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
  englishSummary,
}) => {
  const { colors, fonts, brand, metrics, featuredProjects } = arzTheme;
  const pkg = ARZ_PACKAGES[packageId];
  const secondaryPkg = secondaryPackageId ? ARZ_PACKAGES[secondaryPackageId] : null;
  const formatEgp = (n: number) => `${n.toLocaleString("en-US")} ج.م`;
  const formatEgpEn = (n: number) => `${n.toLocaleString("en-US")} EGP`;

  const customWaUrl = `https://wa.me/201014673393?text=${encodeURIComponent(
    `أهلاً أستاذ عبدالرازق، شفت الإيميل الخاص بـ ${companyName} وحابب نرتّب مكالمة 10 دقائق بخصوص ${pkg.nameAr} (${pkg.id}).`
  )}`;

  const en = englishSummary ?? {
    greeting: `Hi ${companyName} team,`,
    hook: `I reviewed your digital presence and spotted a high-ROI opportunity to lift watch time and inbound leads with cinema-grade video.`,
    problem: `Static posts and generic edits lose 70%+ of viewer attention in the first 3 seconds, driving up ad costs and slowing buyer trust.`,
    solution: `End-to-end 6K shooting (Nikon ZR + DJI RS 5), DaVinci Resolve color grading, and motion graphics — delivered fast from Mansoura with ${pkg.savePct}% savings vs. Cairo agencies.`,
    impact: `Higher thumb-stop rate, stronger brand authority, and faster campaign turnaround (72h rush available).`,
  };

  return (
    <ArzLayout
      dir="rtl"
      lang="ar"
      previewText={`فكرة بصرية لـ ${companyName} — ${pkg.nameAr} (توفير ${pkg.savePct}% عن القاهرة)`}
      timecode="00:01:45:00"
      langToggleHref="#en-version"
      langToggleLabel="English ↓"
    >
      {/* ===================== ARABIC SECTION (RTL) ===================== */}
      <div id="ar-version" dir="rtl" style={{ direction: "rtl", textAlign: "right" }}>
        {/* ATTENTION: Creator Intro Card with Dark Mode Photo + Sharp Hook */}
        <Section
          style={{
            backgroundColor: colors.bgAlt,
            border: `1px solid ${colors.borderStrong}`,
            borderRadius: "16px",
            padding: "18px 20px",
            marginBottom: "22px",
          }}
        >
          <Row>
            <Column
              className="arz-stack"
              style={{
                width: "84px",
                verticalAlign: "middle",
                paddingLeft: "16px",
              }}
            >
              <Img
                src={brand.portraitDarkUrl}
                alt="Abdelrazek Mahmoud — ARZ"
                width="74"
                height="74"
                style={{
                  width: "74px",
                  height: "74px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  border: `2px solid ${colors.accent}`,
                  display: "block",
                }}
              />
            </Column>
            <Column
              className="arz-stack"
              align="right"
              style={{ verticalAlign: "middle", direction: "rtl", textAlign: "right" }}
            >
              <Text
                style={{
                  margin: "0 0 4px",
                  fontFamily: fonts.arabic,
                  fontSize: "12px",
                  fontWeight: 700,
                  color: colors.accent,
                  textAlign: "right",
                }}
              >
                {trackLabel} · {sector}
              </Text>
              <Heading
                as="h1"
                className="arz-h1"
                style={{
                  margin: "0",
                  fontFamily: fonts.arabic,
                  fontSize: "23px",
                  lineHeight: "32px",
                  fontWeight: 800,
                  color: colors.text,
                  textAlign: "right",
                }}
              >
                فيديوهات توقف الـ Scroll وتبيع لـ{" "}
                <span style={{ color: colors.accent }}>{companyName}</span>
              </Heading>
            </Column>
          </Row>
        </Section>

        {/* Personalized Opener */}
        <Text
          style={{
            margin: "0 0 10px",
            fontSize: "15px",
            lineHeight: "26px",
            fontWeight: 700,
            color: colors.text,
            textAlign: "right",
          }}
        >
          {contactGreeting}،
        </Text>
        <Text
          style={{
            margin: "0 0 20px",
            fontSize: "14px",
            lineHeight: "25px",
            color: colors.muted,
            textAlign: "right",
          }}
        >
          أثناء مراجعتي لحضوركم الرقمي ({digitalFootprintSummary}) لاحظت فرصة
          مباشرة لمضاعفة العائد من المحتوى المرئي بدون تكلفة شركات القاهرة:
        </Text>

        {/* INTEREST (PAS): Problem + Scientific Solution */}
        <Section
          style={{
            backgroundColor: colors.problemBg,
            border: `1px solid ${colors.problemBorder}`,
            borderRight: `4px solid ${colors.recRed}`,
            borderRadius: "14px",
            padding: "16px 18px",
            marginBottom: "12px",
          }}
        >
          <Text
            style={{
              margin: "0 0 5px",
              fontSize: "12px",
              fontWeight: 800,
              color: "#F38B82",
              textAlign: "right",
            }}
          >
            التحدي الحالي
          </Text>
          <Text
            style={{
              margin: "0",
              fontSize: "14px",
              lineHeight: "24px",
              color: colors.text,
              textAlign: "right",
            }}
          >
            {scientificProblem}
          </Text>
        </Section>

        <Section
          style={{
            backgroundColor: colors.solutionBg,
            border: `1px solid ${colors.solutionBorder}`,
            borderRight: `4px solid ${colors.liveGreen}`,
            borderRadius: "14px",
            padding: "16px 18px",
            marginBottom: "24px",
          }}
        >
          <Text
            style={{
              margin: "0 0 5px",
              fontSize: "12px",
              fontWeight: 800,
              color: "#7CE393",
              textAlign: "right",
            }}
          >
            الحل العملي والنتيجة المتوقعة
          </Text>
          <Text
            style={{
              margin: "0 0 8px",
              fontSize: "14px",
              lineHeight: "24px",
              color: colors.text,
              textAlign: "right",
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
              fontWeight: 700,
              textAlign: "right",
            }}
          >
            ← {expectedImpact}
          </Text>
        </Section>

        {/* DESIRE: Visual ARZ Portfolio Showcase (Top 3 Projects from Website) */}
        <Section style={{ marginBottom: "24px" }}>
          <Row style={{ marginBottom: "12px" }}>
            <Column align="right">
              <Text
                style={{
                  margin: "0",
                  fontSize: "12px",
                  fontWeight: 800,
                  color: colors.accent,
                  textAlign: "right",
                }}
              >
                معرض الأعمال — نماذج حقيقية من تنفيذ ARZ
              </Text>
            </Column>
            <Column align="left">
              <Link
                href={brand.portfolioUrl}
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: colors.accentBright,
                  textDecoration: "underline",
                }}
              >
                عرض +206 فيديو ←
              </Link>
            </Column>
          </Row>

          {/* 3 Clickable Video Cards */}
          {featuredProjects.map((proj, idx) => (
            <Section
              key={proj.id}
              style={{
                backgroundColor: colors.bgAlt,
                border: `1px solid ${colors.border}`,
                borderRadius: "14px",
                padding: "12px",
                marginBottom: idx === featuredProjects.length - 1 ? "0" : "10px",
              }}
            >
              <Row>
                <Column
                  className="arz-stack"
                  style={{
                    width: "156px",
                    verticalAlign: "middle",
                    paddingLeft: "14px",
                  }}
                >
                  <Link href={proj.watchUrl} style={{ textDecoration: "none" }}>
                    <Img
                      className="arz-thumb"
                      src={proj.thumbUrl}
                      alt={proj.titleAr}
                      width="150"
                      height="85"
                      style={{
                        width: "150px",
                        height: "85px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        border: `1px solid ${colors.borderStrong}`,
                        display: "block",
                      }}
                    />
                  </Link>
                </Column>
                <Column
                  className="arz-stack"
                  align="right"
                  style={{ verticalAlign: "middle", textAlign: "right" }}
                >
                  <Text
                    style={{
                      margin: "0 0 4px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: colors.accentBright,
                      textAlign: "right",
                    }}
                  >
                    ▶ {proj.badgeAr} · {proj.categoryAr}
                  </Text>
                  <Link
                    href={proj.watchUrl}
                    style={{
                      display: "block",
                      fontSize: "14px",
                      lineHeight: "21px",
                      fontWeight: 700,
                      color: colors.text,
                      textDecoration: "none",
                      marginBottom: "6px",
                      textAlign: "right",
                    }}
                  >
                    {proj.titleAr}
                  </Link>
                  <Link
                    href={proj.watchUrl}
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: colors.accent,
                      textDecoration: "none",
                    }}
                  >
                    شاهد الفيديو الآن ←
                  </Link>
                </Column>
              </Row>
            </Section>
          ))}
        </Section>

        {/* Proof Metrics Strip */}
        <Section
          style={{
            backgroundColor: colors.bgAlt,
            border: `1px solid ${colors.border}`,
            borderRadius: "14px",
            padding: "14px 8px",
            marginBottom: "22px",
          }}
        >
          <Row>
            {metrics.map((m) => (
              <Column
                key={m.label}
                className="arz-metric-cell"
                align="center"
                style={{ width: "25%", textAlign: "center" }}
              >
                <Text
                  style={{
                    margin: "0 0 2px",
                    fontFamily: fonts.display,
                    fontSize: "18px",
                    fontWeight: 800,
                    color: colors.accentBright,
                    textAlign: "center",
                  }}
                >
                  {m.value}
                </Text>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "11px",
                    color: colors.muted,
                    textAlign: "center",
                  }}
                >
                  {m.labelAr}
                </Text>
              </Column>
            ))}
          </Row>
        </Section>

        {/* OFFER: Matched Package Card */}
        <Section
          style={{
            backgroundColor: colors.surfaceAlt,
            border: `1px solid ${colors.borderStrong}`,
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "22px",
          }}
        >
          <Row style={{ marginBottom: "12px" }}>
            <Column className="arz-stack" align="right" style={{ textAlign: "right" }}>
              <Text
                style={{
                  margin: "0 0 3px",
                  fontFamily: fonts.mono,
                  fontSize: "11px",
                  fontWeight: 700,
                  color: colors.accent,
                  textAlign: "right",
                }}
              >
                الباقة الأنسب لكم · {pkg.id}
              </Text>
              <Text
                style={{
                  margin: "0",
                  fontSize: "18px",
                  fontWeight: 800,
                  color: colors.text,
                  textAlign: "right",
                }}
              >
                {pkg.nameAr}
              </Text>
            </Column>
            <Column className="arz-stack" align="left" style={{ textAlign: "left" }}>
              <Text
                style={{
                  margin: "0",
                  fontSize: "20px",
                  fontWeight: 800,
                  color: colors.accentBright,
                  textAlign: "left",
                }}
              >
                {formatEgp(pkg.priceEgp)}
              </Text>
              <Text
                style={{
                  margin: "2px 0 0",
                  fontSize: "11px",
                  color: "#7CE393",
                  fontWeight: 700,
                  textAlign: "left",
                }}
              >
                توفير {pkg.savePct}% عن القاهرة ({formatEgp(pkg.cairoAvgEgp)})
              </Text>
            </Column>
          </Row>

          {pkg.deliverablesAr.map((item, idx) => (
            <Text
              key={item}
              style={{
                margin: idx === pkg.deliverablesAr.length - 1 ? "0" : "0 0 8px",
                padding: "9px 12px",
                backgroundColor: colors.bgAlt,
                border: `1px solid ${colors.border}`,
                borderRadius: "10px",
                fontSize: "13px",
                lineHeight: "20px",
                color: colors.text,
                textAlign: "right",
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
                color: colors.muted,
                textAlign: "right",
              }}
            >
              <strong style={{ color: colors.accentBright }}>بديل للتوسع:</strong>{" "}
              {secondaryPkg.nameAr} ({secondaryPkg.id}) — {formatEgp(secondaryPkg.priceEgp)}
            </Text>
          )}
        </Section>

        {/* ACTION: Single Primary Low-Friction CTA + Subtle Secondary Link */}
        <Section style={{ textAlign: "center", marginBottom: "14px" }}>
          <Button
            className="arz-btn-full"
            href={customWaUrl}
            style={{
              backgroundColor: colors.accent,
              color: colors.accentInk,
              fontFamily: fonts.arabic,
              fontSize: "15px",
              fontWeight: 800,
              textDecoration: "none",
              padding: "14px 30px",
              borderRadius: "999px",
              display: "inline-block",
            }}
          >
            احجز مكالمة 10 دقائق على واتساب ←
          </Button>
          <Text
            style={{
              margin: "12px 0 0",
              fontSize: "13px",
              color: colors.muted,
              textAlign: "center",
            }}
          >
            أو استعرض{" "}
            <Link
              href={brand.packagesUrl}
              style={{ color: colors.accentBright, fontWeight: 700, textDecoration: "underline" }}
            >
              حاسبة الباقات التفاعلية
            </Link>{" "}
            ·{" "}
            <Link
              href={brand.portfolioUrl}
              style={{ color: colors.text, fontWeight: 700, textDecoration: "underline" }}
            >
              معرض الأعمال الكامل
            </Link>
          </Text>
        </Section>
      </div>

      {/* ===================== IN-EMAIL ENGLISH SECTION (LTR) ===================== */}
      <Hr
        style={{
          borderColor: colors.borderStrong,
          borderTop: `1px dashed ${colors.borderStrong}`,
          margin: "28px 0 22px",
        }}
      />

      <div id="en-version" dir="ltr" style={{ direction: "ltr", textAlign: "left" }}>
        <Row style={{ marginBottom: "14px" }}>
          <Column align="left" style={{ verticalAlign: "middle" }}>
            <Text
              style={{
                margin: "0",
                fontFamily: fonts.mono,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: colors.accent,
                textTransform: "uppercase",
                textAlign: "left",
              }}
            >
              ENGLISH VERSION · ARZ
            </Text>
          </Column>
          <Column align="right" style={{ verticalAlign: "middle" }}>
            <Link
              href="#ar-version"
              style={{
                display: "inline-block",
                backgroundColor: colors.surfaceAlt,
                border: `1px solid ${colors.borderStrong}`,
                borderRadius: "999px",
                padding: "4px 12px",
                fontFamily: fonts.arabic,
                fontSize: "11px",
                fontWeight: 700,
                color: colors.accentBright,
                textDecoration: "none",
              }}
            >
              النسخة العربية ↑
            </Link>
          </Column>
        </Row>

        <Heading
          as="h2"
          style={{
            margin: "0 0 10px",
            fontFamily: fonts.display,
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: 800,
            color: colors.text,
            textAlign: "left",
          }}
        >
          Scroll-stopping video production for{" "}
          <span style={{ color: colors.accent }}>{companyName}</span>
        </Heading>

        <Text
          style={{
            margin: "0 0 10px",
            fontFamily: fonts.body,
            fontSize: "14px",
            lineHeight: "22px",
            color: colors.text,
            textAlign: "left",
          }}
        >
          {en.greeting} {en.hook}
        </Text>

        <Text
          style={{
            margin: "0 0 8px",
            fontFamily: fonts.body,
            fontSize: "13px",
            lineHeight: "21px",
            color: colors.muted,
            textAlign: "left",
          }}
        >
          <strong style={{ color: "#F38B82" }}>The Bottleneck:</strong> {en.problem}
        </Text>

        <Text
          style={{
            margin: "0 0 14px",
            fontFamily: fonts.body,
            fontSize: "13px",
            lineHeight: "21px",
            color: colors.muted,
            textAlign: "left",
          }}
        >
          <strong style={{ color: "#7CE393" }}>The Fix:</strong> {en.solution}{" "}
          <strong style={{ color: colors.accentBright }}>{en.impact}</strong>
        </Text>

        {/* Compact English Package Box */}
        <Section
          style={{
            backgroundColor: colors.bgAlt,
            border: `1px solid ${colors.border}`,
            borderRadius: "14px",
            padding: "14px 16px",
            marginBottom: "16px",
          }}
        >
          <Text
            style={{
              margin: "0 0 8px",
              fontFamily: fonts.display,
              fontSize: "14px",
              fontWeight: 700,
              color: colors.text,
              textAlign: "left",
            }}
          >
            Recommended: {pkg.id} — {pkg.nameEn}{" "}
            <span style={{ color: colors.accentBright }}>
              ({formatEgpEn(pkg.priceEgp)} · Save {pkg.savePct}% vs. Cairo)
            </span>
          </Text>
          {pkg.deliverablesEn.map((item) => (
            <Text
              key={item}
              style={{
                margin: "0 0 4px",
                fontFamily: fonts.body,
                fontSize: "12px",
                lineHeight: "19px",
                color: colors.muted,
                textAlign: "left",
              }}
            >
              <span style={{ color: colors.accent, marginRight: "6px" }}>✓</span>
              {item}
            </Text>
          ))}
        </Section>

        <Text
          style={{
            margin: "0",
            fontFamily: fonts.body,
            fontSize: "13px",
            lineHeight: "21px",
            color: colors.muted,
            textAlign: "left",
          }}
        >
          Open to a quick 10-min chat this week?{" "}
          <Link
            href={customWaUrl}
            style={{ color: colors.accentBright, fontWeight: 700, textDecoration: "underline" }}
          >
            Message me on WhatsApp
          </Link>{" "}
          or explore{" "}
          <Link
            href={brand.portfolioUrl}
            style={{ color: colors.text, fontWeight: 700, textDecoration: "underline" }}
          >
            206+ projects on arz-portfolio.me
          </Link>
          .
        </Text>
      </div>
    </ArzLayout>
  );
};

StrategicClientPitch.PreviewProps = {
  companyName: "Namra Tech (نمرة تك)",
  contactGreeting: "أهلاً أ. خالد رضا نمرة",
  sector: "برمجيات SaaS وERP",
  trackLabel: "شركات التقنية والبرمجيات",
  digitalFootprintSummary: "منظومة getnamra.com وNamra ERP وNamra IQ (+687 عميل في 7 دول عربية)",
  scientificProblem:
    "الزائر التجاري يقرأ 20% فقط من النصوص، وتسجيلات الشاشة التقليدية لمنتجات ERP تفقد الانتباه خلال أول 8 ثوانٍ وتطيل دورة المبيعات في الخليج.",
  scientificSolution:
    "فيديو UI Motion Explainer مدته 60–90 ثانية يشرح قيمة Namra ERP وNamra IQ بوضوح + 3 إعلانات أداء قصيرة مختبرة الخطافات موجهة لصناع القرار بالسعودية والخليج.",
  expectedImpact:
    "رفع طلبات الـ Demo وتقليل تكلفة الاستحواذ (CPA) بنسبة 25%–40% بدون تعطيل فريقك.",
  packageId: "P6",
  secondaryPackageId: "P7",
} satisfies StrategicClientPitchProps;

export default StrategicClientPitch;

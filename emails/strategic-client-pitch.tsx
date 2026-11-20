import * as React from "react";
import {
  Button,
  Heading,
  Hr,
  Img,
  Link,
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
  englishSummary?: {
    greeting: string;
    hook: string;
    problem: string;
    solution: string;
    impact: string;
  };
}

/**
 * Minimal Luxury Editorial B2B Pitch Template (AIDA + PAS)
 * - Clean, breathable layout — zero clutter, zero top portrait photo
 * - 3-column visual filmstrip portfolio showcase (stacks cleanly on mobile)
 * - Refined espresso & gold palette matching arz-portfolio.me
 * - Strict RTL Arabic top + In-email LTR English section (#en-version)
 */
export const StrategicClientPitch: React.FC<StrategicClientPitchProps> = ({
  companyName,
  contactGreeting,
  sector,
  digitalFootprintSummary,
  scientificProblem,
  scientificSolution,
  expectedImpact,
  packageId,
  secondaryPackageId,
  englishSummary,
}) => {
  const { fonts, brand, metrics, featuredProjects } = arzTheme;
  const pkg = ARZ_PACKAGES[packageId];
  const secondaryPkg = secondaryPackageId ? ARZ_PACKAGES[secondaryPackageId] : null;
  const formatEgp = (n: number) => `${n.toLocaleString("en-US")} ج.م`;
  const formatEgpEn = (n: number) => `${n.toLocaleString("en-US")} EGP`;

  const customWaUrl = `https://wa.me/201014673393?text=${encodeURIComponent(
    `أهلاً أستاذ عبدالرازق، شفت الإيميل الخاص بـ ${companyName} وحابب نرتّب مكالمة 10 دقائق بخصوص ${pkg.nameAr} (${pkg.id}).`
  )}`;

  const en = englishSummary ?? {
    greeting: `Hi ${companyName} team,`,
    hook: `I reviewed your digital presence and noticed a clear opportunity to turn more views into qualified leads with cinema-grade video.`,
    problem: `Static posts and standard edits lose over 70% of attention in the first 3 seconds, driving up ad costs and slowing buyer trust.`,
    solution: `End-to-end 6K shooting (Nikon ZR + DJI RS 5), DaVinci Resolve color grading, and motion graphics — delivered fast from Mansoura at ${pkg.savePct}% less than Cairo agencies.`,
    impact: `Higher watch time, stronger brand authority, and faster 72h campaign turnarounds.`,
  };

  return (
    <ArzLayout
      dir="rtl"
      lang="ar"
      previewText={`فكرة بصرية لـ ${companyName} — ${pkg.nameAr} (توفير ${pkg.savePct}% عن القاهرة)`}
      langToggleHref="#en-version"
      langToggleLabel="English ↓"
    >
      {/* ===================== ARABIC EDITORIAL SECTION (RTL) ===================== */}
      <div id="ar-version" dir="rtl" style={{ direction: "rtl", textAlign: "right" }}>
        {/* Subtle Gold Kicker */}
        <Text
          style={{
            margin: "0 0 10px",
            fontFamily: fonts.arabic,
            fontSize: "12px",
            fontWeight: 700,
            color: "#DB9B3E",
            textAlign: "right",
          }}
        >
          ● {sector}
        </Text>

        {/* Clean Editorial Display Headline (No Photo Clutter) */}
        <Heading
          as="h1"
          className="arz-h1"
          style={{
            margin: "0 0 18px",
            fontFamily: fonts.arabic,
            fontSize: "28px",
            lineHeight: "38px",
            fontWeight: 800,
            color: "#F5EFE7",
            textAlign: "right",
          }}
        >
          فيديوهات <span style={{ color: "#DB9B3E" }}>توقف الـ Scroll</span> —
          وتضاعف عملاء {companyName}
        </Heading>

        {/* Warm, Direct Personal Opener */}
        <Text
          style={{
            margin: "0 0 10px",
            fontSize: "15px",
            lineHeight: "26px",
            fontWeight: 700,
            color: "#F5EFE7",
            textAlign: "right",
          }}
        >
          {contactGreeting}،
        </Text>
        <Text
          style={{
            margin: "0 0 26px",
            fontSize: "14px",
            lineHeight: "26px",
            color: "#B5AA9C",
            textAlign: "right",
          }}
        >
          تابعت حضوركم الرقمي ({digitalFootprintSummary})، وكمتخصص في الإخراج
          والمونتاج وتلوين <strong style={{ color: "#F5EFE7" }}>DaVinci Resolve</strong>{" "}
          بالمنصورة (+500 فيديو في مصر والخليج)، لفتت نظري نقطة واحدة تقدر ترفع
          عائد حملاتكم بشكل فوري:
        </Text>

        {/* Single Refined Editorial Insight Card (No Loud Red/Green Boxes) */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{
            width: "100%",
            backgroundColor: "#1C1610",
            border: "1px solid #2F2419",
            borderRight: "3px solid #DB9B3E",
            borderRadius: "14px",
            marginBottom: "30px",
          }}
        >
          <tbody>
            <tr>
              <td
                dir="rtl"
                style={{
                  padding: "22px 22px 20px",
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                <Text
                  style={{
                    margin: "0 0 6px",
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#DB9B3E",
                    textAlign: "right",
                  }}
                >
                  01 · الملاحظة البصرية
                </Text>
                <Text
                  style={{
                    margin: "0 0 16px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#E8E0D5",
                    textAlign: "right",
                  }}
                >
                  {scientificProblem}
                </Text>

                <Text
                  style={{
                    margin: "0 0 6px",
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#F0B45A",
                    textAlign: "right",
                  }}
                >
                  02 · الحل العملي
                </Text>
                <Text
                  style={{
                    margin: "0 0 14px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#E8E0D5",
                    textAlign: "right",
                  }}
                >
                  {scientificSolution}
                </Text>

                <Text
                  style={{
                    margin: "0",
                    paddingTop: "12px",
                    borderTop: "1px solid #2C2218",
                    fontSize: "13px",
                    lineHeight: "22px",
                    fontWeight: 700,
                    color: "#F0B45A",
                    textAlign: "right",
                  }}
                >
                  النتيجة المتوقعة: {expectedImpact}
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        {/* PORTFOLIO FILMSTRIP SHOWCASE (Clean 3-Column Editorial Grid) */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: "100%", marginBottom: "14px" }}
        >
          <tbody>
            <tr>
              <td align="right" style={{ verticalAlign: "baseline" }}>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "#F5EFE7",
                    textAlign: "right",
                  }}
                >
                  نماذج من أعمال ARZ
                </Text>
              </td>
              <td align="left" style={{ verticalAlign: "baseline" }}>
                <Link
                  href={brand.portfolioUrl}
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#DB9B3E",
                    textDecoration: "none",
                  }}
                >
                  شاهد +206 فيديو ←
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: "100%", marginBottom: "28px" }}
        >
          <tbody>
            <tr>
              {featuredProjects.map((proj, idx) => (
                <td
                  key={proj.id}
                  className="arz-col-3"
                  valign="top"
                  style={{
                    width: "33.33%",
                    paddingLeft: idx === featuredProjects.length - 1 ? "0" : "8px",
                    paddingRight: idx === 0 ? "0" : "4px",
                    verticalAlign: "top",
                  }}
                >
                  <table
                    role="presentation"
                    width="100%"
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                    style={{
                      width: "100%",
                      backgroundColor: "#1C1610",
                      border: "1px solid #2D2218",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td>
                          <Link href={proj.watchUrl} style={{ textDecoration: "none" }}>
                            <Img
                              className="arz-thumb"
                              src={proj.thumbUrl}
                              alt={proj.titleAr}
                              width="180"
                              height="102"
                              style={{
                                width: "100%",
                                height: "102px",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td
                          dir="rtl"
                          style={{
                            padding: "10px 10px 12px",
                            direction: "rtl",
                            textAlign: "right",
                          }}
                        >
                          <Text
                            style={{
                              margin: "0 0 4px",
                              fontSize: "10px",
                              fontWeight: 800,
                              color: "#F0B45A",
                              textAlign: "right",
                            }}
                          >
                            ▶ {proj.badgeAr}
                          </Text>
                          <Link
                            href={proj.watchUrl}
                            style={{
                              display: "block",
                              fontSize: "12px",
                              lineHeight: "18px",
                              fontWeight: 700,
                              color: "#F5EFE7",
                              textDecoration: "none",
                              textAlign: "right",
                            }}
                          >
                            {proj.titleAr}
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        {/* Minimal Hairline Proof Strip */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{
            width: "100%",
            borderTop: "1px solid #261E16",
            borderBottom: "1px solid #261E16",
            marginBottom: "28px",
          }}
        >
          <tbody>
            <tr>
              {metrics.map((m) => (
                <td
                  key={m.label}
                  className="arz-stat-cell"
                  align="center"
                  style={{ width: "25%", padding: "14px 4px", textAlign: "center" }}
                >
                  <Text
                    style={{
                      margin: "0 0 2px",
                      fontFamily: fonts.display,
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#F0B45A",
                      textAlign: "center",
                    }}
                  >
                    {m.value}
                  </Text>
                  <Text
                    style={{
                      margin: "0",
                      fontSize: "11px",
                      color: "#8F8477",
                      textAlign: "center",
                    }}
                  >
                    {m.labelAr}
                  </Text>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        {/* Luxury Minimal Package Block */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{
            width: "100%",
            backgroundColor: "#1C1610",
            border: "1px solid #35281B",
            borderTop: "2px solid #DB9B3E",
            borderRadius: "16px",
            marginBottom: "28px",
          }}
        >
          <tbody>
            <tr>
              <td
                dir="rtl"
                style={{
                  padding: "22px 24px",
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                <table
                  role="presentation"
                  width="100%"
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  style={{ width: "100%", marginBottom: "14px" }}
                >
                  <tbody>
                    <tr>
                      <td className="arz-col-2" align="right" style={{ verticalAlign: "top" }}>
                        <Text
                          style={{
                            margin: "0 0 2px",
                            fontFamily: fonts.mono,
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#DB9B3E",
                            textAlign: "right",
                          }}
                        >
                          الباقة الأنسب لكم · {pkg.id}
                        </Text>
                        <Text
                          style={{
                            margin: "0",
                            fontSize: "19px",
                            fontWeight: 800,
                            color: "#F5EFE7",
                            textAlign: "right",
                          }}
                        >
                          {pkg.nameAr}
                        </Text>
                      </td>
                      <td className="arz-col-2" align="left" style={{ verticalAlign: "top" }}>
                        <Text
                          style={{
                            margin: "0",
                            fontSize: "21px",
                            fontWeight: 800,
                            color: "#F0B45A",
                            textAlign: "left",
                          }}
                        >
                          {formatEgp(pkg.priceEgp)}
                        </Text>
                        <Text
                          style={{
                            margin: "2px 0 0",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#8AD99B",
                            textAlign: "left",
                          }}
                        >
                          توفير {pkg.savePct}% عن القاهرة ({formatEgp(pkg.cairoAvgEgp)})
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {pkg.deliverablesAr.map((item, idx) => (
                  <Text
                    key={item}
                    style={{
                      margin: idx === pkg.deliverablesAr.length - 1 ? "0" : "0 0 8px",
                      fontSize: "13px",
                      lineHeight: "22px",
                      color: "#DDD4C8",
                      textAlign: "right",
                    }}
                  >
                    <span style={{ color: "#DB9B3E", marginLeft: "8px", fontWeight: 800 }}>
                      ✓
                    </span>
                    {item}
                  </Text>
                ))}

                {secondaryPkg && (
                  <Text
                    style={{
                      margin: "14px 0 0",
                      paddingTop: "12px",
                      borderTop: "1px solid #2B2117",
                      fontSize: "12px",
                      color: "#A89D8F",
                      textAlign: "right",
                    }}
                  >
                    خيار إضافي للتوسع:{" "}
                    <strong style={{ color: "#F0B45A" }}>
                      {secondaryPkg.nameAr} ({secondaryPkg.id}) —{" "}
                      {formatEgp(secondaryPkg.priceEgp)}
                    </strong>
                  </Text>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Single Crisp Primary CTA */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: "100%", marginBottom: "8px" }}
        >
          <tbody>
            <tr>
              <td align="center" style={{ textAlign: "center" }}>
                <Button
                  className="arz-cta"
                  href={customWaUrl}
                  style={{
                    backgroundColor: "#DB9B3E",
                    color: "#140E05",
                    fontFamily: fonts.arabic,
                    fontSize: "15px",
                    fontWeight: 800,
                    textDecoration: "none",
                    padding: "14px 34px",
                    borderRadius: "999px",
                    display: "inline-block",
                  }}
                >
                  احجز مكالمة 10 دقائق على واتساب ←
                </Button>
                <Text
                  style={{
                    margin: "14px 0 0",
                    fontSize: "13px",
                    color: "#A89D8F",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href={brand.packagesUrl}
                    style={{ color: "#F0B45A", fontWeight: 700, textDecoration: "none" }}
                  >
                    استعرض كل الباقات والحاسبة التفاعلية
                  </Link>
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  <Link
                    href={brand.portfolioUrl}
                    style={{ color: "#F5EFE7", fontWeight: 700, textDecoration: "none" }}
                  >
                    تصفح معرض الأعمال
                  </Link>
                </Text>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===================== IN-EMAIL ENGLISH VERSION (LTR) ===================== */}
      <Hr
        style={{
          borderColor: "#2A2118",
          borderTop: "1px solid #2A2118",
          margin: "34px 0 26px",
        }}
      />

      <div id="en-version" dir="ltr" style={{ direction: "ltr", textAlign: "left" }}>
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: "100%", marginBottom: "16px" }}
        >
          <tbody>
            <tr>
              <td align="left" style={{ verticalAlign: "middle" }}>
                <Text
                  style={{
                    margin: "0",
                    fontFamily: fonts.mono,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#DB9B3E",
                    textAlign: "left",
                  }}
                >
                  ENGLISH VERSION · ARZ
                </Text>
              </td>
              <td align="right" style={{ verticalAlign: "middle" }}>
                <Link
                  href="#ar-version"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#1F1812",
                    border: "1px solid #3D2E1E",
                    borderRadius: "999px",
                    padding: "4px 12px",
                    fontFamily: fonts.arabic,
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#F0B45A",
                    textDecoration: "none",
                  }}
                >
                  النسخة العربية ↑
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <Heading
          as="h2"
          style={{
            margin: "0 0 10px",
            fontFamily: fonts.display,
            fontSize: "21px",
            lineHeight: "29px",
            fontWeight: 800,
            color: "#F5EFE7",
            textAlign: "left",
          }}
        >
          Videos that <span style={{ color: "#DB9B3E" }}>stop the scroll</span>{" "}
          — for {companyName}
        </Heading>

        <Text
          style={{
            margin: "0 0 12px",
            fontFamily: fonts.body,
            fontSize: "14px",
            lineHeight: "23px",
            color: "#D8CFC3",
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
            color: "#A89D8F",
            textAlign: "left",
          }}
        >
          <strong style={{ color: "#F5EFE7" }}>The Gap:</strong> {en.problem}
        </Text>

        <Text
          style={{
            margin: "0 0 18px",
            fontFamily: fonts.body,
            fontSize: "13px",
            lineHeight: "21px",
            color: "#A89D8F",
            textAlign: "left",
          }}
        >
          <strong style={{ color: "#F0B45A" }}>The Fix:</strong> {en.solution}{" "}
          {en.impact}
        </Text>

        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{
            width: "100%",
            backgroundColor: "#1C1610",
            border: "1px solid #2E2318",
            borderRadius: "12px",
            marginBottom: "16px",
          }}
        >
          <tbody>
            <tr>
              <td dir="ltr" style={{ padding: "16px 18px", textAlign: "left" }}>
                <Text
                  style={{
                    margin: "0 0 8px",
                    fontFamily: fonts.display,
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#F5EFE7",
                    textAlign: "left",
                  }}
                >
                  Recommended: {pkg.id} — {pkg.nameEn}{" "}
                  <span style={{ color: "#F0B45A" }}>
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
                      color: "#B5AA9C",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ color: "#DB9B3E", marginRight: "6px" }}>✓</span>
                    {item}
                  </Text>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <Text
          style={{
            margin: "0",
            fontFamily: fonts.body,
            fontSize: "13px",
            lineHeight: "22px",
            color: "#A89D8F",
            textAlign: "left",
          }}
        >
          Open to a 10-min chat this week?{" "}
          <Link
            href={customWaUrl}
            style={{ color: "#F0B45A", fontWeight: 700, textDecoration: "none" }}
          >
            WhatsApp me directly →
          </Link>{" "}
          or explore{" "}
          <Link
            href={brand.portfolioUrl}
            style={{ color: "#F5EFE7", fontWeight: 700, textDecoration: "none" }}
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
  digitalFootprintSummary: "منظومة getnamra.com وNamra ERP وNamra IQ (+687 عميل في 7 دول)",
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

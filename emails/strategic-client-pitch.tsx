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
import { arzTheme, type ArzPackageSpec } from "./theme";

export interface StrategicClientPitchProps {
  companyName: string;
  contactGreeting: string;
  sector?: string;
  trackLabel?: string;
  digitalFootprintSummary?: string;
  scientificProblem: string;
  scientificSolution?: string;
  expectedImpact?: string;
  packageId?: ArzPackageSpec["id"];
  secondaryPackageId?: ArzPackageSpec["id"];
  englishSummary?: {
    greeting: string;
    hook: string;
    problem: string;
    solution: string;
  };
}

/**
 * v8 — English FIRST (LTR), Arabic SECOND (RTL) with exact 1-to-1 content parity
 * - Footer ALWAYS in English
 * - Top bar shows EN (active) | AR; Arabic section shows AR (active) | EN
 * - Company name wrapped in white-space: nowrap so it never splits across lines
 * - Fluid 100% / max-width 680px responsive layout across all email screens
 */
export const StrategicClientPitch: React.FC<StrategicClientPitchProps> = ({
  companyName,
  contactGreeting,
  scientificProblem,
  englishSummary,
}) => {
  const { fonts, brand, featuredProjects, whyUsAr, whyUsEn } = arzTheme;

  const customWaUrl = `https://wa.me/201014673393?text=${encodeURIComponent(
    `Hi Abdelrazek, I saw your email for ${companyName} and would love to chat for 10 minutes about videos.`
  )}`;

  const flexibleSolutionAr =
    "نقدر نشتغل سوا على أنواع فيديوهات مختلفة حسب اللي يناسب شغلكم ويعكس القيمة الحقيقية اللي بتقدموها — من غير ما نلزمكم بشكل واحد. وعندنا باقات مختلفة تناسب كل احتياج، واشتغلنا مع شركات مختلفة في أكتر من مجال جوة وبره مصر.";

  const en = englishSummary ?? {
    greeting: `Hi ${companyName} team,`,
    hook: `I checked out your work and pages — really liked what you're building. I'm Abdelrazek, a video editor & DaVinci Resolve colorist, and I noticed one simple thing that could make a big difference:`,
    problem: `Most people scroll past long text and plain clips before they ever get to see how strong your work really is.`,
    solution: `We can work together on different styles of videos tailored to what fits your brand best and truly reflects the value you deliver — with flexible packages for every need, backed by experience working with companies across multiple industries in Egypt and abroad.`,
  };

  const nowrapCompany = (
    <span style={{ color: "#DB9B3E", whiteSpace: "nowrap", display: "inline-block" }}>
      {companyName}
    </span>
  );

  return (
    <ArzLayout
      dir="ltr"
      lang="en"
      previewText={`Quick video idea for ${companyName} — ARZ`}
      activeLang="en"
      otherLangHref="#ar-version"
    >
      {/* ===================== 1. ENGLISH SECTION FIRST (LTR) ===================== */}
      <div id="en-version" dir="ltr" style={{ direction: "ltr", textAlign: "left" }}>
        <Heading
          as="h1"
          className="arz-h1"
          style={{
            margin: "0 0 18px",
            fontFamily: fonts.display,
            fontSize: "27px",
            lineHeight: "36px",
            fontWeight: 800,
            letterSpacing: "-0.015em",
            color: "#F5EFE7",
            textAlign: "left",
          }}
        >
          Scroll-stopping videos that reflect the real work of {nowrapCompany}
        </Heading>

        <Text
          style={{
            margin: "0 0 10px",
            fontFamily: fonts.body,
            fontSize: "15px",
            lineHeight: "25px",
            fontWeight: 700,
            color: "#F5EFE7",
            textAlign: "left",
          }}
        >
          {en.greeting}
        </Text>

        <Text
          style={{
            margin: "0 0 22px",
            fontFamily: fonts.body,
            fontSize: "14px",
            lineHeight: "24px",
            color: "#B5AA9C",
            textAlign: "left",
          }}
        >
          {en.hook}
        </Text>

        {/* Problem + Flexible Solution + Companies Button */}
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
            borderLeft: "3px solid #DB9B3E",
            borderRadius: "14px",
            marginBottom: "22px",
          }}
        >
          <tbody>
            <tr>
              <td dir="ltr" style={{ padding: "20px", direction: "ltr", textAlign: "left" }}>
                <Text style={{ margin: "0 0 6px", fontFamily: fonts.body, fontSize: "12px", fontWeight: 700, color: "#DB9B3E", textAlign: "left" }}>
                  What I noticed
                </Text>
                <Text style={{ margin: "0 0 16px", fontFamily: fonts.body, fontSize: "14px", lineHeight: "24px", color: "#EAE2D7", textAlign: "left" }}>
                  {en.problem}
                </Text>
                <Text style={{ margin: "0 0 6px", fontFamily: fonts.body, fontSize: "12px", fontWeight: 700, color: "#F0B45A", textAlign: "left" }}>
                  How we can work together
                </Text>
                <Text style={{ margin: "0 0 14px", fontFamily: fonts.body, fontSize: "14px", lineHeight: "24px", color: "#EAE2D7", textAlign: "left" }}>
                  {en.solution}
                </Text>
                <Button
                  href={brand.portfolioUrl}
                  style={{
                    backgroundColor: "#261E16",
                    color: "#F0B45A",
                    border: "1px solid #4A3722",
                    fontFamily: fonts.body,
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    display: "inline-block",
                  }}
                >
                  See Companies We&apos;ve Worked With
                </Button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Why Work With Us */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{
            width: "100%",
            backgroundColor: "#19140E",
            border: "1px solid #2D2218",
            borderRadius: "14px",
            marginBottom: "26px",
          }}
        >
          <tbody>
            <tr>
              <td dir="ltr" style={{ padding: "20px", direction: "ltr", textAlign: "left" }}>
                <Text style={{ margin: "0 0 12px", fontFamily: fonts.display, fontSize: "15px", fontWeight: 700, color: "#F5EFE7", textAlign: "left" }}>
                  Why we&apos;re a great fit
                </Text>
                {whyUsEn.map((point, idx) => (
                  <Text
                    key={point}
                    style={{
                      margin: idx === whyUsEn.length - 1 ? "0" : "0 0 8px",
                      fontFamily: fonts.body,
                      fontSize: "13px",
                      lineHeight: "22px",
                      color: "#DDD4C8",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ color: "#DB9B3E", marginRight: "8px", fontWeight: 800 }}>✓</span>
                    {point}
                  </Text>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Full-Width Stacked Video Players (English) */}
        <Text style={{ margin: "0 0 14px", fontFamily: fonts.display, fontSize: "15px", fontWeight: 700, color: "#F5EFE7", textAlign: "left" }}>
          Quick samples of my work
        </Text>

        {featuredProjects.map((proj) => (
          <table
            key={`en-${proj.id}`}
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={{
              width: "100%",
              backgroundColor: "#120E0B",
              border: "1px solid #2F2419",
              borderRadius: "14px",
              overflow: "hidden",
              marginBottom: "16px",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <Link href={proj.watchUrl} style={{ textDecoration: "none", display: "block" }}>
                    <Img src={proj.thumbUrl} alt={proj.titleEn} width="624" style={{ width: "100%", height: "auto", display: "block" }} />
                  </Link>
                </td>
              </tr>
              <tr>
                <td dir="ltr" style={{ padding: "12px 16px", backgroundColor: "#1A140F", borderTop: "1px solid #2B2117" }}>
                  <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0}>
                    <tbody>
                      <tr>
                        <td align="left" style={{ verticalAlign: "middle" }}>
                          <Link href={proj.watchUrl} style={{ display: "block", fontFamily: fonts.body, fontSize: "14px", fontWeight: 700, color: "#F5EFE7", textDecoration: "none" }}>
                            <span style={{ color: "#DB9B3E", marginRight: "8px" }}>▶</span>
                            {proj.titleEn}
                          </Link>
                          <Text style={{ margin: "3px 0 0", fontFamily: fonts.body, fontSize: "11px", color: "#A89D8F", textAlign: "left" }}>
                            {proj.categoryEn}
                          </Text>
                        </td>
                        <td align="right" style={{ verticalAlign: "middle", whiteSpace: "nowrap" }}>
                          <span style={{ display: "inline-block", backgroundColor: "#281F17", border: "1px solid #4A3722", borderRadius: "999px", padding: "3px 10px", fontFamily: fonts.mono, fontSize: "11px", fontWeight: 700, color: "#F0B45A" }}>
                            {proj.badgeEn}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ))}

        {/* English Action Buttons */}
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginTop: "22px", marginBottom: "8px" }}>
          <tbody>
            <tr>
              <td align="center" style={{ textAlign: "center", paddingBottom: "10px" }}>
                <Button
                  className="arz-cta"
                  href={customWaUrl}
                  style={{
                    backgroundColor: "#DB9B3E",
                    color: "#140E05",
                    fontFamily: fonts.body,
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    padding: "13px 28px",
                    borderRadius: "999px",
                    display: "inline-block",
                  }}
                >
                  Book a 10-min WhatsApp Call
                </Button>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ textAlign: "center" }}>
                <Button
                  className="arz-cta"
                  href={brand.packagesUrl}
                  style={{
                    backgroundColor: "#1F1812",
                    color: "#F0B45A",
                    border: "1px solid #3D2E1E",
                    fontFamily: fonts.body,
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    display: "inline-block",
                    marginRight: "8px",
                  }}
                >
                  View All Packages
                </Button>
                <Button
                  className="arz-cta"
                  href={brand.portfolioUrl}
                  style={{
                    backgroundColor: "#1F1812",
                    color: "#F5EFE7",
                    border: "1px solid #35281B",
                    fontFamily: fonts.body,
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    display: "inline-block",
                  }}
                >
                  View All Work
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ===================== 2. ARABIC SECTION SECOND (EXACT 1-TO-1 MIRROR, RTL) ===================== */}
      <Hr style={{ borderColor: "#2A2118", borderTop: "1px solid #2A2118", margin: "36px 0 26px" }} />

      <div id="ar-version" dir="rtl" style={{ direction: "rtl", textAlign: "right", fontFamily: fonts.arabic }}>
        {/* Language Bar showing AR (active) | EN */}
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginBottom: "18px" }}>
          <tbody>
            <tr>
              <td align="right" style={{ verticalAlign: "middle" }}>
                <span style={{ fontFamily: fonts.body, fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", color: "#F0B45A" }}>
                  AR
                </span>
                <span style={{ color: "#3A2C1E", margin: "0 8px" }}>|</span>
                <Link href="#en-version" style={{ fontFamily: fonts.body, fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "#A89D8F", textDecoration: "none" }}>
                  EN
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <Heading
          as="h2"
          className="arz-h1"
          style={{
            margin: "0 0 18px",
            fontFamily: fonts.arabic,
            fontSize: "25px",
            lineHeight: "36px",
            fontWeight: 800,
            color: "#F5EFE7",
            textAlign: "right",
          }}
        >
          فيديوهات تخطف العين — وتعكس شغل {nowrapCompany} الحقيقي
        </Heading>

        <Text style={{ margin: "0 0 10px", fontSize: "15px", lineHeight: "26px", fontWeight: 700, color: "#F5EFE7", textAlign: "right" }}>
          {contactGreeting}،
        </Text>

        <Text style={{ margin: "0 0 22px", fontSize: "14px", lineHeight: "26px", color: "#B5AA9C", textAlign: "right" }}>
          دخلت على شغلكم وصفحاتكم وعجبني اللي بتقدموه جداً. أنا عبدالرازق، شغال
          في التصوير والمونتاج وتلوين{" "}
          <strong style={{ color: "#F5EFE7" }}>DaVinci Resolve</strong>، ولفتت
          نظري حاجة بسيطة تقدر تفرق معاكم:
        </Text>

        {/* Arabic Problem + Flexible Solution + Companies Button */}
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
            borderRight: "3px solid #DB9B3E",
            borderRadius: "14px",
            marginBottom: "22px",
          }}
        >
          <tbody>
            <tr>
              <td dir="rtl" style={{ padding: "20px", direction: "rtl", textAlign: "right" }}>
                <Text style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: 800, color: "#DB9B3E", textAlign: "right" }}>
                  المشكلة اللي لاحظتها
                </Text>
                <Text style={{ margin: "0 0 16px", fontSize: "14px", lineHeight: "25px", color: "#EAE2D7", textAlign: "right" }}>
                  {scientificProblem}
                </Text>
                <Text style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: 800, color: "#F0B45A", textAlign: "right" }}>
                  إزاي نقدر نشتغل سوا
                </Text>
                <Text style={{ margin: "0 0 14px", fontSize: "14px", lineHeight: "25px", color: "#EAE2D7", textAlign: "right" }}>
                  {flexibleSolutionAr}
                </Text>
                <Button
                  href={brand.portfolioUrl}
                  style={{
                    backgroundColor: "#261E16",
                    color: "#F0B45A",
                    border: "1px solid #4A3722",
                    fontFamily: fonts.arabic,
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    display: "inline-block",
                  }}
                >
                  شوف الشركات اللي اشتغلنا معاها
                </Button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Arabic Why Us */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{
            width: "100%",
            backgroundColor: "#19140E",
            border: "1px solid #2D2218",
            borderRadius: "14px",
            marginBottom: "26px",
          }}
        >
          <tbody>
            <tr>
              <td dir="rtl" style={{ padding: "20px", direction: "rtl", textAlign: "right" }}>
                <Text style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 800, color: "#F5EFE7", textAlign: "right" }}>
                  ليه إحنا مناسبين ليكم؟
                </Text>
                {whyUsAr.map((point, idx) => (
                  <Text
                    key={point}
                    style={{
                      margin: idx === whyUsAr.length - 1 ? "0" : "0 0 8px",
                      fontSize: "13px",
                      lineHeight: "23px",
                      color: "#DDD4C8",
                      textAlign: "right",
                    }}
                  >
                    <span style={{ color: "#DB9B3E", marginLeft: "8px", fontWeight: 800 }}>✓</span>
                    {point}
                  </Text>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Arabic Action Buttons */}
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ width: "100%", marginBottom: "8px" }}>
          <tbody>
            <tr>
              <td align="center" style={{ textAlign: "center", paddingBottom: "10px" }}>
                <Button
                  className="arz-cta"
                  href={customWaUrl}
                  style={{
                    backgroundColor: "#DB9B3E",
                    color: "#140E05",
                    fontFamily: fonts.arabic,
                    fontSize: "14px",
                    fontWeight: 800,
                    textDecoration: "none",
                    padding: "13px 28px",
                    borderRadius: "999px",
                    display: "inline-block",
                  }}
                >
                  احجز مكالمة 10 دقايق على واتساب
                </Button>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ textAlign: "center" }}>
                <Button
                  className="arz-cta"
                  href={brand.packagesUrl}
                  style={{
                    backgroundColor: "#1F1812",
                    color: "#F0B45A",
                    border: "1px solid #3D2E1E",
                    fontFamily: fonts.arabic,
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    display: "inline-block",
                    marginLeft: "8px",
                  }}
                >
                  استعرض كل الباقات
                </Button>
                <Button
                  className="arz-cta"
                  href={brand.portfolioUrl}
                  style={{
                    backgroundColor: "#1F1812",
                    color: "#F5EFE7",
                    border: "1px solid #35281B",
                    fontFamily: fonts.arabic,
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    padding: "10px 20px",
                    borderRadius: "999px",
                    display: "inline-block",
                  }}
                >
                  شوف كل الشغل
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ArzLayout>
  );
};

StrategicClientPitch.PreviewProps = {
  companyName: "Namra Tech",
  contactGreeting: "أهلاً أ. خالد",
  scientificProblem:
    "أغلب الناس دلوقتي ما بتقراش كلام طويل على الموقع، والفيديوهات العادية بتخلي العميل يقلب بسرعة قبل ما يفهم قد إيه شغلكم قوي.",
} satisfies StrategicClientPitchProps;

export default StrategicClientPitch;

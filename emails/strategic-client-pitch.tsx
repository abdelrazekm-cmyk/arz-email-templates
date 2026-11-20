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
 * Simple, Natural Egyptian Arabic B2B Pitch Template (v6)
 * - Open, non-pushy positioning (flexible video formats & packages, Egypt & international clients)
 * - Full-width stacked Video Players (950K+ views Manarat, Tamer Hosny Dubai, DaVinci Coloring)
 * - Clean buttons: WhatsApp 10-min call, View All Packages, View All Work
 */
export const StrategicClientPitch: React.FC<StrategicClientPitchProps> = ({
  companyName,
  contactGreeting,
  scientificProblem,
  englishSummary,
}) => {
  const { fonts, brand, featuredProjects } = arzTheme;

  const customWaUrl = `https://wa.me/201014673393?text=${encodeURIComponent(
    `أهلاً يا عبدالرازق، شفت الإيميل الخاص بـ ${companyName} وحابب نتكلم 10 دقايق بخصوص الفيديوهات.`
  )}`;

  const flexibleSolutionAr =
    "نقدر نشتغل سوا على أنواع فيديوهات مختلفة حسب اللي يناسب شغلكم ويعكس القيمة الحقيقية اللي بتقدموها — من غير ما نلزمكم بشكل واحد. وعندنا باقات مختلفة تناسب كل احتياج، واشتغلنا قبل كده مع أكتر من حد جوة وبرة مصر.";

  const en = englishSummary ?? {
    greeting: `Hi ${companyName} team,`,
    hook: `I checked out your work and pages — really liked what you're building. I'm Abdelrazek, a video editor and DaVinci Resolve colorist working with clients across Egypt and abroad.`,
    problem: `Most people scroll past text-heavy posts before they ever get to see the real quality behind what you offer.`,
    solution: `We can work together on different styles of videos tailored to what fits your brand best and truly reflects the quality you deliver — with flexible packages to match any scope.`,
  };

  return (
    <ArzLayout
      dir="rtl"
      lang="ar"
      previewText={`فكرة بسيطة للفيديوهات عند ${companyName}`}
      langToggleHref="#en-version"
      langToggleLabel="EN"
    >
      {/* ===================== ARABIC SECTION (NATURAL EGYPTIAN RTL) ===================== */}
      <div id="ar-version" dir="rtl" style={{ direction: "rtl", textAlign: "right" }}>
        <Heading
          as="h1"
          className="arz-h1"
          style={{
            margin: "0 0 18px",
            fontFamily: fonts.arabic,
            fontSize: "26px",
            lineHeight: "36px",
            fontWeight: 800,
            color: "#F5EFE7",
            textAlign: "right",
          }}
        >
          فيديوهات <span style={{ color: "#DB9B3E" }}>تخطف العين</span> — وتعكس
          شغل {companyName} الحقيقي
        </Heading>

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
            margin: "0 0 22px",
            fontSize: "14px",
            lineHeight: "26px",
            color: "#B5AA9C",
            textAlign: "right",
          }}
        >
          دخلت على شغلكم وصفحاتكم وعجبني اللي بتقدموه جداً. أنا عبدالرازق، شغال
          في التصوير والمونتاج وتلوين{" "}
          <strong style={{ color: "#F5EFE7" }}>DaVinci Resolve</strong>، واشتغلت
          مع أكتر من شركة وبراند جوة وبرة مصر — ولفتت نظري حاجة بسيطة تقدر تفرق
          معاكم:
        </Text>

        {/* Clean Egyptian Arabic Problem + Open Flexible Solution Card */}
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
            marginBottom: "28px",
          }}
        >
          <tbody>
            <tr>
              <td
                dir="rtl"
                style={{
                  padding: "20px",
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                <Text
                  style={{
                    margin: "0 0 6px",
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#DB9B3E",
                    textAlign: "right",
                  }}
                >
                  المشكلة اللي لاحظتها
                </Text>
                <Text
                  style={{
                    margin: "0 0 16px",
                    fontSize: "14px",
                    lineHeight: "25px",
                    color: "#EAE2D7",
                    textAlign: "right",
                  }}
                >
                  {scientificProblem}
                </Text>

                <Text
                  style={{
                    margin: "0 0 6px",
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#F0B45A",
                    textAlign: "right",
                  }}
                >
                  إزاي نقدر نشتغل سوا
                </Text>
                <Text
                  style={{
                    margin: "0",
                    fontSize: "14px",
                    lineHeight: "25px",
                    color: "#EAE2D7",
                    textAlign: "right",
                  }}
                >
                  {flexibleSolutionAr}
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        {/* FULL-WIDTH STACKED VIDEO PLAYERS */}
        <Text
          style={{
            margin: "0 0 14px",
            fontSize: "15px",
            fontWeight: 800,
            color: "#F5EFE7",
            textAlign: "right",
          }}
        >
          نماذج سريعة من شغلي
        </Text>

        {featuredProjects.map((proj) => (
          <table
            key={proj.id}
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
                    <Img
                      src={proj.thumbUrl}
                      alt={proj.titleAr}
                      width="564"
                      height="317"
                      style={{
                        width: "100%",
                        height: "auto",
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
                    padding: "12px 16px",
                    backgroundColor: "#1A140F",
                    borderTop: "1px solid #2B2117",
                  }}
                >
                  <table
                    role="presentation"
                    width="100%"
                    cellPadding={0}
                    cellSpacing={0}
                    border={0}
                  >
                    <tbody>
                      <tr>
                        <td align="right" style={{ verticalAlign: "middle" }}>
                          <Link
                            href={proj.watchUrl}
                            style={{
                              fontSize: "14px",
                              fontWeight: 800,
                              color: "#F5EFE7",
                              textDecoration: "none",
                            }}
                          >
                            <span style={{ color: "#DB9B3E", marginLeft: "8px" }}>▶</span>
                            {proj.titleAr}
                          </Link>
                        </td>
                        <td align="left" style={{ verticalAlign: "middle", whiteSpace: "nowrap" }}>
                          <span
                            style={{
                              display: "inline-block",
                              backgroundColor: "#281F17",
                              border: "1px solid #4A3722",
                              borderRadius: "999px",
                              padding: "3px 10px",
                              fontFamily: fonts.mono,
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "#F0B45A",
                            }}
                          >
                            {proj.badgeAr}
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

        {/* Clean Action Buttons */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: "100%", marginTop: "24px", marginBottom: "8px" }}
        >
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

      {/* ===================== IN-EMAIL ENGLISH SECTION (LTR) ===================== */}
      <Hr
        style={{
          borderColor: "#2A2118",
          borderTop: "1px solid #2A2118",
          margin: "32px 0 24px",
        }}
      />

      <div id="en-version" dir="ltr" style={{ direction: "ltr", textAlign: "left" }}>
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
              <td align="left" style={{ verticalAlign: "middle" }}>
                <Text
                  style={{
                    margin: "0",
                    fontFamily: fonts.body,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#DB9B3E",
                    textAlign: "left",
                  }}
                >
                  ENGLISH
                </Text>
              </td>
              <td align="right" style={{ verticalAlign: "middle" }}>
                <Link
                  href="#ar-version"
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#A89D8F",
                    textDecoration: "none",
                  }}
                >
                  AR
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
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: 800,
            color: "#F5EFE7",
            textAlign: "left",
          }}
        >
          Videos that reflect the real quality of{" "}
          <span style={{ color: "#DB9B3E" }}>{companyName}</span>
        </Heading>

        <Text
          style={{
            margin: "0 0 10px",
            fontFamily: fonts.body,
            fontSize: "14px",
            lineHeight: "22px",
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
          <strong style={{ color: "#F5EFE7" }}>What I noticed:</strong> {en.problem}
        </Text>
        <Text
          style={{
            margin: "0 0 16px",
            fontFamily: fonts.body,
            fontSize: "13px",
            lineHeight: "21px",
            color: "#A89D8F",
            textAlign: "left",
          }}
        >
          <strong style={{ color: "#F0B45A" }}>How we can work together:</strong>{" "}
          {en.solution}
        </Text>

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
          <Link
            href={customWaUrl}
            style={{ color: "#F0B45A", fontWeight: 700, textDecoration: "none" }}
          >
            Book a 10-min WhatsApp call
          </Link>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <Link
            href={brand.packagesUrl}
            style={{ color: "#F5EFE7", fontWeight: 700, textDecoration: "none" }}
          >
            View All Packages
          </Link>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <Link
            href={brand.portfolioUrl}
            style={{ color: "#A89D8F", fontWeight: 700, textDecoration: "none" }}
          >
            View All Work
          </Link>
        </Text>
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

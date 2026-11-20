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
  trackLabel?: string;
  digitalFootprintSummary?: string;
  scientificProblem: string;
  scientificSolution: string;
  expectedImpact?: string;
  packageId: ArzPackageSpec["id"];
  secondaryPackageId?: ArzPackageSpec["id"];
  englishSummary?: {
    greeting: string;
    hook: string;
    problem: string;
    solution: string;
  };
}

/**
 * Simple, Natural Egyptian Arabic B2B Pitch Template (v5)
 * - Logo only in header + subtle flat "EN" / "AR" link (no arrows, no bulky pills)
 * - Conversational Egyptian Arabic (no stiff corporate phrasing, no stats clutter)
 * - 3 compact mini-player video cards (Manarat 950K, Tamer Hosny Dubai, DaVinci Coloring)
 * - Clean buttons: WhatsApp 10-min call, View All Packages, View All Work
 */
export const StrategicClientPitch: React.FC<StrategicClientPitchProps> = ({
  companyName,
  contactGreeting,
  scientificProblem,
  scientificSolution,
  packageId,
  englishSummary,
}) => {
  const { fonts, brand, featuredProjects } = arzTheme;
  const pkg = ARZ_PACKAGES[packageId];

  const customWaUrl = `https://wa.me/201014673393?text=${encodeURIComponent(
    `أهلاً يا عبدالرازق، شفت الإيميل الخاص بـ ${companyName} وحابب نتكلم 10 دقايق بخصوص الفيديوهات.`
  )}`;

  const en = englishSummary ?? {
    greeting: `Hi ${companyName} team,`,
    hook: `I checked out your website and social pages — great work so far. I'm Abdelrazek, a video editor & DaVinci Resolve colorist based in Mansoura, and I noticed one simple way video can bring you more clients.`,
    problem: `Most people scroll past text-heavy posts and plain edits within seconds before seeing how good your service really is.`,
    solution: `Clean, scroll-stopping videos with cinema-grade color and crisp motion — delivered fast right here in Mansoura without Cairo agency overhead.`,
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
          فيديوهات <span style={{ color: "#DB9B3E" }}>تخطف العين</span> — وتجيب
          عملاء لـ {companyName}
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
          <strong style={{ color: "#F5EFE7" }}>DaVinci Resolve</strong> هنا في
          المنصورة، ولفتت نظري حاجة بسيطة تقدر تفرق معاكم جامد في المبيعات:
        </Text>

        {/* Clean Egyptian Arabic Problem + Solution Card */}
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
            marginBottom: "26px",
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
                  إزاي نقدر نحلها سوا
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
                  {scientificSolution}
                </Text>
              </td>
            </tr>
          </tbody>
        </table>

        {/* COMPACT 3 MINI VIDEO PLAYERS (950K, Tamer Hosny, DaVinci Coloring) */}
        <Text
          style={{
            margin: "0 0 12px",
            fontSize: "14px",
            fontWeight: 800,
            color: "#F5EFE7",
            textAlign: "right",
          }}
        >
          نماذج سريعة من شغلي (اضغط على أي فيديو عشان يشتغل)
        </Text>

        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: "100%", marginBottom: "26px" }}
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
                              src={proj.thumbUrl}
                              alt={proj.titleAr}
                              width="175"
                              height="92"
                              style={{
                                width: "100%",
                                height: "92px",
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
                            padding: "8px 10px 10px",
                            direction: "rtl",
                            textAlign: "right",
                          }}
                        >
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
                            ▶ {proj.titleAr}
                          </Link>
                          <Text
                            style={{
                              margin: "2px 0 0",
                              fontSize: "10px",
                              color: "#A89D8F",
                              textAlign: "right",
                            }}
                          >
                            {proj.tagAr}
                          </Text>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        {/* Recommended Package (Simple & Clean — No Clutter) */}
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
            borderRadius: "14px",
            marginBottom: "26px",
          }}
        >
          <tbody>
            <tr>
              <td
                dir="rtl"
                style={{
                  padding: "18px 20px",
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                <Text
                  style={{
                    margin: "0 0 4px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#DB9B3E",
                    textAlign: "right",
                  }}
                >
                  الباقة المناسبة ليكم
                </Text>
                <Text
                  style={{
                    margin: "0 0 12px",
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "#F5EFE7",
                    textAlign: "right",
                  }}
                >
                  {pkg.nameAr}
                </Text>
                {pkg.deliverablesAr.map((item, idx) => (
                  <Text
                    key={item}
                    style={{
                      margin: idx === pkg.deliverablesAr.length - 1 ? "0" : "0 0 6px",
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
              </td>
            </tr>
          </tbody>
        </table>

        {/* Clean Action Buttons */}
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
          Videos that stop the scroll — for{" "}
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
          <strong style={{ color: "#F0B45A" }}>How we fix it:</strong> {en.solution}
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
            View Packages
          </Link>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <Link
            href={brand.portfolioUrl}
            style={{ color: "#A89D8F", fontWeight: 700, textDecoration: "none" }}
          >
            View Portfolio
          </Link>
        </Text>
      </div>
    </ArzLayout>
  );
};

StrategicClientPitch.PreviewProps = {
  companyName: "Namra Tech",
  contactGreeting: "أهلاً أ. خالد",
  sector: "SaaS & ERP",
  scientificProblem:
    "أغلب الناس دلوقتي ما بتقراش كلام طويل على الموقع، وفيديوهات تسجيل الشاشة العادية بتخلي العميل يزهق في أول كام ثانية قبل ما يفهم قد إيه السيستم بتاعكم قوي.",
  scientificSolution:
    "نعمل فيديو موشن سريع يشرح السيستم ببساطة وحركة شيك، مع 3 إعلانات قصيرة تخطف العين وتجيبلك طلبات ديمو أكتر من مصر والخليج.",
  packageId: "P6",
} satisfies StrategicClientPitchProps;

export default StrategicClientPitch;

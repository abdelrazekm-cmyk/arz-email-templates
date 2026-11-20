import * as React from "react";
import {
  Body,
  Column,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { arzTheme } from "../theme";

export interface ArzLayoutProps {
  previewText: string;
  children: React.ReactNode;
  dir?: "ltr" | "rtl";
  lang?: string;
  timecode?: string;
  /** Kept optional for backward compatibility with existing templates */
  formatLabel?: string;
  showAvailability?: boolean;
  /** Optional in-email anchor button (e.g. jump to #en-version without leaving email) */
  langToggleHref?: string;
  langToggleLabel?: string;
}

export const ArzLayout: React.FC<ArzLayoutProps> = ({
  previewText,
  children,
  dir = "rtl",
  lang = "ar",
  timecode = "00:01:45:00",
  showAvailability = true,
  langToggleHref,
  langToggleLabel,
}) => {
  const { colors, fonts, brand } = arzTheme;
  const isRtl = dir === "rtl";
  const activeBodyFont = isRtl ? fonts.arabic : fonts.body;

  return (
    <Html lang={lang} dir={dir}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
        <Font
          fontFamily="Cairo"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a1Pi.woff2",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Bricolage Grotesque"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/bricolagegrotesque/v7/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19Ppbp.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
        <style>{`
          body, table, td, p, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
          }
          img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            outline: none;
            text-decoration: none;
          }
          @media only screen and (max-width: 620px) {
            .arz-outer-pad {
              padding: 12px 8px !important;
            }
            .arz-card {
              width: 100% !important;
              max-width: 100% !important;
            }
            .arz-pad {
              padding: 20px 16px !important;
            }
            .arz-header-pad {
              padding: 16px !important;
            }
            .arz-h1 {
              font-size: 22px !important;
              line-height: 31px !important;
            }
            .arz-stack {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              padding-bottom: 12px !important;
              box-sizing: border-box !important;
            }
            .arz-metric-cell {
              display: inline-block !important;
              width: 48% !important;
              padding-bottom: 10px !important;
              vertical-align: top !important;
            }
            .arz-btn-full {
              display: block !important;
              width: 100% !important;
              text-align: center !important;
              box-sizing: border-box !important;
            }
            .arz-thumb {
              width: 100% !important;
              height: auto !important;
            }
          }
        `}</style>
      </Head>
      <Preview>{previewText}</Preview>
      <Body
        dir={dir}
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          fontFamily: activeBodyFont,
          margin: "0",
          padding: "0",
          width: "100%",
          direction: dir,
          textAlign: isRtl ? "right" : "left",
        }}
      >
        {/* Full-Width Fluid Outer Wrapper (prevents narrow-box bug in Gmail/Outlook) */}
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{
            width: "100%",
            backgroundColor: colors.bg,
            margin: "0",
            padding: "0",
          }}
        >
          <tbody>
            <tr>
              <td
                align="center"
                className="arz-outer-pad"
                style={{ padding: "24px 12px" }}
              >
                <table
                  role="presentation"
                  className="arz-card"
                  width="640"
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  style={{
                    width: "100%",
                    maxWidth: "640px",
                    margin: "0 auto",
                    backgroundColor: colors.surface,
                    border: `1px solid ${colors.border}`,
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <tbody>
                    {/* Top Cinema HUD Bar — Clean "ARZ" branding + Timecode */}
                    <tr>
                      <td
                        dir="ltr"
                        style={{
                          backgroundColor: colors.bgAlt,
                          borderBottom: `1px solid ${colors.border}`,
                          padding: "10px 22px",
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
                              <td align="left" style={{ verticalAlign: "middle" }}>
                                <Text
                                  style={{
                                    margin: "0",
                                    fontFamily: fonts.mono,
                                    fontSize: "11px",
                                    letterSpacing: "0.08em",
                                    color: colors.muted,
                                    direction: "ltr",
                                    textAlign: "left",
                                  }}
                                >
                                  <span style={{ color: colors.recRed }}>●</span>{" "}
                                  REC&nbsp;·&nbsp;{timecode}&nbsp;&nbsp;
                                  <span style={{ color: colors.dim }}>|</span>
                                  &nbsp;&nbsp;
                                  <strong style={{ color: colors.accent }}>
                                    {brand.shortName}
                                  </strong>
                                </Text>
                              </td>
                              <td align="right" style={{ verticalAlign: "middle" }}>
                                {langToggleHref && langToggleLabel ? (
                                  <Link
                                    href={langToggleHref}
                                    style={{
                                      display: "inline-block",
                                      backgroundColor: colors.surfaceAlt,
                                      border: `1px solid ${colors.borderStrong}`,
                                      borderRadius: "999px",
                                      padding: "4px 12px",
                                      fontFamily: fonts.body,
                                      fontSize: "11px",
                                      fontWeight: 700,
                                      color: colors.accentBright,
                                      textDecoration: "none",
                                    }}
                                  >
                                    {langToggleLabel}
                                  </Link>
                                ) : (
                                  <Text
                                    style={{
                                      margin: "0",
                                      fontFamily: fonts.mono,
                                      fontSize: "11px",
                                      color: colors.accent,
                                      fontWeight: 700,
                                    }}
                                  >
                                    {brand.shortName}
                                  </Text>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Brand Header */}
                    <tr>
                      <td
                        className="arz-header-pad"
                        dir={dir}
                        style={{
                          padding: "18px 24px",
                          backgroundColor: colors.bgAlt,
                          borderBottom: `1px solid ${colors.border}`,
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
                              <td
                                align={isRtl ? "right" : "left"}
                                style={{ verticalAlign: "middle" }}
                              >
                                <Link
                                  href={brand.portfolioUrl}
                                  style={{
                                    textDecoration: "none",
                                    display: "inline-block",
                                  }}
                                >
                                  <Img
                                    src={brand.logoMarkUrl}
                                    alt="ARZ"
                                    width="46"
                                    height="23"
                                    style={{
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                    }}
                                  />
                                  <span
                                    style={{
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                      marginRight: isRtl ? "10px" : "0",
                                      marginLeft: isRtl ? "0" : "10px",
                                      fontFamily: fonts.display,
                                      fontSize: "16px",
                                      fontWeight: 800,
                                      color: colors.text,
                                      letterSpacing: "0.02em",
                                    }}
                                  >
                                    ARZ
                                  </span>
                                </Link>
                              </td>
                              {showAvailability && (
                                <td
                                  align={isRtl ? "left" : "right"}
                                  style={{ verticalAlign: "middle" }}
                                >
                                  <span
                                    style={{
                                      display: "inline-block",
                                      backgroundColor: colors.surfaceAlt,
                                      border: `1px solid ${colors.borderStrong}`,
                                      borderRadius: "999px",
                                      padding: "4px 11px",
                                      fontFamily: isRtl ? fonts.arabic : fonts.body,
                                      fontSize: "11px",
                                      color: colors.accentBright,
                                    }}
                                  >
                                    <span style={{ color: colors.liveGreen }}>●</span>{" "}
                                    {isRtl ? "متاح لمشاريع جديدة" : "Available for projects"}
                                  </span>
                                </td>
                              )}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Main Content */}
                    <tr>
                      <td
                        className="arz-pad"
                        dir={dir}
                        style={{
                          padding: "28px 24px 24px",
                          direction: dir,
                          textAlign: isRtl ? "right" : "left",
                        }}
                      >
                        {children}
                      </td>
                    </tr>

                    {/* Footer Signature with Dark Mode Portrait */}
                    <tr>
                      <td style={{ padding: "0 24px" }}>
                        <Hr
                          style={{
                            borderColor: colors.border,
                            borderTop: `1px solid ${colors.border}`,
                            margin: "0",
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="arz-pad"
                        dir={dir}
                        style={{
                          padding: "22px 24px 26px",
                          backgroundColor: colors.bgAlt,
                          direction: dir,
                          textAlign: isRtl ? "right" : "left",
                        }}
                      >
                        <Section>
                          <Row>
                            <Column
                              style={{
                                width: "64px",
                                verticalAlign: "top",
                                paddingLeft: isRtl ? "14px" : "0",
                                paddingRight: isRtl ? "0" : "14px",
                              }}
                            >
                              <Img
                                src={brand.portraitDarkUrl}
                                alt={brand.owner}
                                width="56"
                                height="56"
                                style={{
                                  width: "56px",
                                  height: "56px",
                                  objectFit: "cover",
                                  borderRadius: "14px",
                                  border: `2px solid ${colors.accent}`,
                                  display: "block",
                                }}
                              />
                            </Column>
                            <Column
                              align={isRtl ? "right" : "left"}
                              style={{ verticalAlign: "top" }}
                            >
                              <Text
                                style={{
                                  margin: "0 0 2px",
                                  fontFamily: isRtl ? fonts.arabic : fonts.display,
                                  fontSize: "15px",
                                  fontWeight: 800,
                                  color: colors.text,
                                  textAlign: isRtl ? "right" : "left",
                                }}
                              >
                                {isRtl ? `${brand.ownerAr} — ARZ` : `${brand.owner} — ARZ`}
                              </Text>
                              <Text
                                style={{
                                  margin: "0 0 4px",
                                  fontSize: "12px",
                                  lineHeight: "18px",
                                  color: colors.accent,
                                  fontWeight: 700,
                                  textAlign: isRtl ? "right" : "left",
                                }}
                              >
                                {isRtl ? brand.roleAr : brand.role}
                              </Text>
                              <Text
                                style={{
                                  margin: "0 0 12px",
                                  fontSize: "12px",
                                  lineHeight: "18px",
                                  color: colors.muted,
                                  textAlign: isRtl ? "right" : "left",
                                }}
                              >
                                {isRtl ? brand.locationAr : brand.location} ·{" "}
                                <span dir="ltr">{brand.phoneDisplay}</span>
                              </Text>
                              <Text
                                style={{
                                  margin: "0",
                                  fontSize: "12px",
                                  lineHeight: "22px",
                                  color: colors.dim,
                                  textAlign: isRtl ? "right" : "left",
                                }}
                              >
                                <Link
                                  href={brand.portfolioUrl}
                                  style={{
                                    color: colors.text,
                                    textDecoration: "none",
                                    fontWeight: 700,
                                  }}
                                >
                                  {isRtl ? "معرض الأعمال" : "Portfolio"}
                                </Link>
                                &nbsp;&nbsp;·&nbsp;&nbsp;
                                <Link
                                  href={brand.packagesUrl}
                                  style={{
                                    color: colors.accent,
                                    textDecoration: "none",
                                    fontWeight: 700,
                                  }}
                                >
                                  {isRtl ? "الباقات والأسعار" : "Packages"}
                                </Link>
                                &nbsp;&nbsp;·&nbsp;&nbsp;
                                <Link
                                  href={brand.whatsappDirectUrl}
                                  style={{ color: colors.muted, textDecoration: "none" }}
                                >
                                  WhatsApp
                                </Link>
                                &nbsp;&nbsp;·&nbsp;&nbsp;
                                <Link
                                  href={brand.instagramUrl}
                                  style={{ color: colors.muted, textDecoration: "none" }}
                                >
                                  Instagram
                                </Link>
                                &nbsp;&nbsp;·&nbsp;&nbsp;
                                <Link
                                  href={brand.linkedinUrl}
                                  style={{ color: colors.muted, textDecoration: "none" }}
                                >
                                  LinkedIn
                                </Link>
                              </Text>
                            </Column>
                          </Row>
                        </Section>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </Body>
    </Html>
  );
};

export default ArzLayout;

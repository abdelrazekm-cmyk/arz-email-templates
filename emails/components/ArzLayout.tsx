import * as React from "react";
import {
  Body,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
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
  langToggleHref?: string;
  langToggleLabel?: string;
}

export const ArzLayout: React.FC<ArzLayoutProps> = ({
  previewText,
  children,
  dir = "rtl",
  lang = "ar",
  langToggleHref,
  langToggleLabel,
}) => {
  const { fonts, brand } = arzTheme;
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
            .arz-outer {
              padding: 12px 8px !important;
            }
            .arz-shell {
              width: 100% !important;
              max-width: 100% !important;
              border-radius: 16px !important;
            }
            .arz-pad {
              padding: 24px 20px !important;
            }
            .arz-topbar {
              padding: 16px 20px !important;
            }
            .arz-h1 {
              font-size: 24px !important;
              line-height: 34px !important;
            }
            .arz-col-3, .arz-col-2 {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              padding-bottom: 14px !important;
              box-sizing: border-box !important;
            }
            .arz-stat-cell {
              display: inline-block !important;
              width: 48% !important;
              padding: 8px 0 !important;
              vertical-align: top !important;
            }
            .arz-cta {
              display: block !important;
              width: 100% !important;
              box-sizing: border-box !important;
              text-align: center !important;
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
          backgroundColor: "#0C0A08",
          color: "#F5EFE7",
          fontFamily: activeBodyFont,
          margin: "0",
          padding: "0",
          width: "100%",
          direction: dir,
          textAlign: isRtl ? "right" : "left",
        }}
      >
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          style={{ width: "100%", backgroundColor: "#0C0A08" }}
        >
          <tbody>
            <tr>
              <td
                align="center"
                className="arz-outer"
                style={{ padding: "32px 14px" }}
              >
                <table
                  role="presentation"
                  className="arz-shell"
                  width="640"
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  style={{
                    width: "100%",
                    maxWidth: "640px",
                    margin: "0 auto",
                    backgroundColor: "#15110D",
                    border: "1px solid #2A2118",
                    borderRadius: "24px",
                    overflow: "hidden",
                  }}
                >
                  <tbody>
                    {/* Single Minimal Editorial Top Bar */}
                    <tr>
                      <td
                        className="arz-topbar"
                        dir={dir}
                        style={{
                          padding: "20px 32px",
                          backgroundColor: "#120E0B",
                          borderBottom: "1px solid #251D15",
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
                                  style={{ textDecoration: "none" }}
                                >
                                  <Img
                                    src={brand.logoMarkUrl}
                                    alt="ARZ"
                                    width="40"
                                    height="20"
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
                                      fontSize: "15px",
                                      fontWeight: 800,
                                      letterSpacing: "0.08em",
                                      color: "#F5EFE7",
                                    }}
                                  >
                                    ARZ
                                  </span>
                                </Link>
                              </td>
                              <td
                                align={isRtl ? "left" : "right"}
                                style={{ verticalAlign: "middle" }}
                              >
                                {langToggleHref && langToggleLabel ? (
                                  <Link
                                    href={langToggleHref}
                                    style={{
                                      display: "inline-block",
                                      backgroundColor: "#1F1812",
                                      border: "1px solid #3D2E1E",
                                      borderRadius: "999px",
                                      padding: "5px 14px",
                                      fontFamily: fonts.body,
                                      fontSize: "11px",
                                      fontWeight: 700,
                                      color: "#F0B45A",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {langToggleLabel}
                                  </Link>
                                ) : (
                                  <span
                                    style={{
                                      fontFamily: fonts.mono,
                                      fontSize: "11px",
                                      color: "#756A5D",
                                    }}
                                  >
                                    <span style={{ color: "#E5484D" }}>●</span> REC · ARZ
                                  </span>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Main Body */}
                    <tr>
                      <td
                        className="arz-pad"
                        dir={dir}
                        style={{
                          padding: "36px 32px 28px",
                          direction: dir,
                          textAlign: isRtl ? "right" : "left",
                        }}
                      >
                        {children}
                      </td>
                    </tr>

                    {/* Minimal Signature Footer */}
                    <tr>
                      <td style={{ padding: "0 32px" }}>
                        <Hr
                          style={{
                            borderColor: "#251D15",
                            borderTop: "1px solid #251D15",
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
                          padding: "24px 32px 30px",
                          backgroundColor: "#120E0B",
                          direction: dir,
                          textAlign: isRtl ? "right" : "left",
                        }}
                      >
                        <Text
                          style={{
                            margin: "0 0 4px",
                            fontFamily: isRtl ? fonts.arabic : fonts.display,
                            fontSize: "15px",
                            fontWeight: 800,
                            color: "#F5EFE7",
                            textAlign: isRtl ? "right" : "left",
                          }}
                        >
                          {isRtl ? `${brand.ownerAr} — ARZ` : `${brand.owner} — ARZ`}
                        </Text>
                        <Text
                          style={{
                            margin: "0 0 12px",
                            fontSize: "12px",
                            lineHeight: "20px",
                            color: "#A89D8F",
                            textAlign: isRtl ? "right" : "left",
                          }}
                        >
                          {isRtl ? brand.roleAr : brand.role} ·{" "}
                          <span dir="ltr" style={{ color: "#DB9B3E" }}>
                            {brand.phoneDisplay}
                          </span>
                        </Text>
                        <Text
                          style={{
                            margin: "0",
                            fontSize: "12px",
                            lineHeight: "22px",
                            color: "#756A5D",
                            textAlign: isRtl ? "right" : "left",
                          }}
                        >
                          <Link
                            href={brand.portfolioUrl}
                            style={{ color: "#F5EFE7", textDecoration: "none", fontWeight: 700 }}
                          >
                            {isRtl ? "معرض الأعمال" : "Portfolio"}
                          </Link>
                          &nbsp;&nbsp;·&nbsp;&nbsp;
                          <Link
                            href={brand.packagesUrl}
                            style={{ color: "#F0B45A", textDecoration: "none", fontWeight: 700 }}
                          >
                            {isRtl ? "الباقات والأسعار" : "Packages"}
                          </Link>
                          &nbsp;&nbsp;·&nbsp;&nbsp;
                          <Link
                            href={brand.whatsappDirectUrl}
                            style={{ color: "#A89D8F", textDecoration: "none" }}
                          >
                            WhatsApp
                          </Link>
                          &nbsp;&nbsp;·&nbsp;&nbsp;
                          <Link
                            href={brand.instagramUrl}
                            style={{ color: "#A89D8F", textDecoration: "none" }}
                          >
                            Instagram
                          </Link>
                          &nbsp;&nbsp;·&nbsp;&nbsp;
                          <Link
                            href={brand.linkedinUrl}
                            style={{ color: "#A89D8F", textDecoration: "none" }}
                          >
                            LinkedIn
                          </Link>
                        </Text>
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

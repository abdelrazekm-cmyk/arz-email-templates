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
            .arz-outer { padding: 12px 8px !important; }
            .arz-shell { width: 100% !important; max-width: 100% !important; border-radius: 16px !important; }
            .arz-pad { padding: 24px 18px !important; }
            .arz-topbar { padding: 16px 18px !important; }
            .arz-h1 { font-size: 22px !important; line-height: 32px !important; }
            .arz-col-3, .arz-col-2 {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              padding-bottom: 12px !important;
              box-sizing: border-box !important;
            }
            .arz-cta {
              display: block !important;
              width: 100% !important;
              box-sizing: border-box !important;
              text-align: center !important;
              margin-bottom: 10px !important;
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
              <td align="center" className="arz-outer" style={{ padding: "28px 12px" }}>
                <table
                  role="presentation"
                  className="arz-shell"
                  width="620"
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  style={{
                    width: "100%",
                    maxWidth: "620px",
                    margin: "0 auto",
                    backgroundColor: "#15110D",
                    border: "1px solid #2A2118",
                    borderRadius: "22px",
                    overflow: "hidden",
                  }}
                >
                  <tbody>
                    {/* Ultra-Clean Top Bar: Logo ONLY + Subtle Flat EN/AR Text */}
                    <tr>
                      <td
                        className="arz-topbar"
                        dir={dir}
                        style={{
                          padding: "18px 28px",
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
                                  style={{ textDecoration: "none", display: "inline-block" }}
                                >
                                  <Img
                                    src={brand.logoMarkUrl}
                                    alt="ARZ"
                                    width="44"
                                    height="22"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                              <td
                                align={isRtl ? "left" : "right"}
                                style={{ verticalAlign: "middle" }}
                              >
                                {langToggleHref && langToggleLabel && (
                                  <Link
                                    href={langToggleHref}
                                    style={{
                                      fontFamily: fonts.body,
                                      fontSize: "12px",
                                      fontWeight: 600,
                                      letterSpacing: "0.08em",
                                      color: "#A89D8F",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {langToggleLabel}
                                  </Link>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Content */}
                    <tr>
                      <td
                        className="arz-pad"
                        dir={dir}
                        style={{
                          padding: "32px 28px 24px",
                          direction: dir,
                          textAlign: isRtl ? "right" : "left",
                        }}
                      >
                        {children}
                      </td>
                    </tr>

                    {/* Minimal Signature Footer */}
                    <tr>
                      <td style={{ padding: "0 28px" }}>
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
                          padding: "22px 28px 26px",
                          backgroundColor: "#120E0B",
                          direction: dir,
                          textAlign: isRtl ? "right" : "left",
                        }}
                      >
                        <Text
                          style={{
                            margin: "0 0 4px",
                            fontFamily: isRtl ? fonts.arabic : fonts.body,
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#F5EFE7",
                            textAlign: isRtl ? "right" : "left",
                          }}
                        >
                          {isRtl ? brand.ownerAr : brand.owner}
                        </Text>
                        <Text
                          style={{
                            margin: "0 0 10px",
                            fontSize: "12px",
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
                            color: "#756A5D",
                            textAlign: isRtl ? "right" : "left",
                          }}
                        >
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

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
  /** Shows active language indicator cleanly (e.g. EN active | AR jump link) */
  activeLang?: "en" | "ar";
  otherLangHref?: string;
}

export const ArzLayout: React.FC<ArzLayoutProps> = ({
  previewText,
  children,
  dir = "ltr",
  lang = "en",
  activeLang = "en",
  otherLangHref = "#ar-version",
}) => {
  const { fonts, brand } = arzTheme;

  return (
    <Html lang={lang} dir={dir}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
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
          fontFamily="Cairo"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a1Pi.woff2",
            format: "woff2",
          }}
          fontWeight={600}
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
          @media only screen and (max-width: 680px) {
            .arz-outer { padding: 10px 6px !important; }
            .arz-shell { width: 100% !important; max-width: 100% !important; border-radius: 16px !important; }
            .arz-pad { padding: 24px 18px !important; }
            .arz-topbar { padding: 16px 18px !important; }
            .arz-h1 { font-size: 22px !important; line-height: 31px !important; }
            .arz-cta {
              display: block !important;
              width: 100% !important;
              box-sizing: border-box !important;
              text-align: center !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
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
          fontFamily: fonts.body,
          margin: "0",
          padding: "0",
          width: "100%",
        }}
      >
        {/* Full-Width Responsive Outer Table */}
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
              <td align="center" className="arz-outer" style={{ padding: "20px 12px" }}>
                <table
                  role="presentation"
                  className="arz-shell"
                  width="100%"
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  style={{
                    width: "100%",
                    maxWidth: "680px",
                    margin: "0 auto",
                    backgroundColor: "#15110D",
                    border: "1px solid #2A2118",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <tbody>
                    {/* Clean Top Bar: Logo ONLY + Active Language (EN | AR) */}
                    <tr>
                      <td
                        className="arz-topbar"
                        dir="ltr"
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
                              <td align="left" style={{ verticalAlign: "middle" }}>
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
                              <td align="right" style={{ verticalAlign: "middle" }}>
                                <span
                                  style={{
                                    fontFamily: fonts.body,
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    color: activeLang === "en" ? "#F0B45A" : "#756A5D",
                                  }}
                                >
                                  EN
                                </span>
                                <span style={{ color: "#3A2C1E", margin: "0 8px" }}>|</span>
                                <Link
                                  href={otherLangHref}
                                  style={{
                                    fontFamily: fonts.body,
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    color: activeLang === "ar" ? "#F0B45A" : "#A89D8F",
                                    textDecoration: "none",
                                  }}
                                >
                                  AR
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Main Content Slot */}
                    <tr>
                      <td className="arz-pad" style={{ padding: "32px 28px 26px" }}>
                        {children}
                      </td>
                    </tr>

                    {/* Footer — ALWAYS English (LTR) */}
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
                        dir="ltr"
                        style={{
                          padding: "22px 28px 26px",
                          backgroundColor: "#120E0B",
                          direction: "ltr",
                          textAlign: "left",
                        }}
                      >
                        <Text
                          style={{
                            margin: "0 0 4px",
                            fontFamily: fonts.display,
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "#F5EFE7",
                            textAlign: "left",
                          }}
                        >
                          {brand.owner}
                        </Text>
                        <Text
                          style={{
                            margin: "0 0 10px",
                            fontFamily: fonts.body,
                            fontSize: "12px",
                            lineHeight: "19px",
                            color: "#A89D8F",
                            textAlign: "left",
                          }}
                        >
                          {brand.role} ·{" "}
                          <span style={{ color: "#DB9B3E" }}>{brand.phoneDisplay}</span>
                        </Text>
                        <Text
                          style={{
                            margin: "0",
                            fontFamily: fonts.body,
                            fontSize: "12px",
                            color: "#756A5D",
                            textAlign: "left",
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

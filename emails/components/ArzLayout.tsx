import * as React from "react";
import {
  Body,
  Column,
  Container,
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
  /** Optional viewfinder metadata displayed on the top cinema HUD bar */
  timecode?: string;
  formatLabel?: string;
  showAvailability?: boolean;
}

export const ArzLayout: React.FC<ArzLayoutProps> = ({
  previewText,
  children,
  dir = "ltr",
  lang = "en",
  timecode = "00:03:20:18",
  formatLabel = "6K · 24fps · N-Log → Rec.709",
  showAvailability = true,
}) => {
  const { colors, fonts, brand } = arzTheme;
  const activeBodyFont = dir === "rtl" ? fonts.arabic : fonts.body;

  return (
    <Html lang={lang} dir={dir}>
      <Head>
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
      </Head>
      <Preview>{previewText}</Preview>
      <Body
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          fontFamily: activeBodyFont,
          margin: "0",
          padding: "32px 16px",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {/* Cinema Viewfinder Top HUD Bar */}
          <Section
            style={{
              backgroundColor: colors.bgAlt,
              border: `1px solid ${colors.border}`,
              borderBottom: "none",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              padding: "10px 24px",
            }}
          >
            <Row>
              <Column align={dir === "rtl" ? "right" : "left"}>
                <Text
                  style={{
                    margin: "0",
                    fontFamily: fonts.mono,
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    color: colors.muted,
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: colors.recRed }}>●</span> REC&nbsp;&nbsp;
                  <span style={{ color: colors.dim }}>|</span>&nbsp;&nbsp;
                  {timecode}
                </Text>
              </Column>
              <Column align={dir === "rtl" ? "left" : "right"}>
                <Text
                  style={{
                    margin: "0",
                    fontFamily: fonts.mono,
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: colors.dim,
                  }}
                >
                  {formatLabel}
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Main Espresso Card Shell */}
          <Section
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Brand Header */}
            <Section
              style={{
                padding: "24px 28px 20px",
                borderBottom: `1px solid ${colors.border}`,
                backgroundColor: colors.bgAlt,
              }}
            >
              <Row>
                <Column style={{ verticalAlign: "middle" }}>
                  <Link
                    href={brand.portfolioUrl}
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    <Row>
                      <Column style={{ verticalAlign: "middle", paddingRight: "10px" }}>
                        <Img
                          src={brand.logoMarkUrl}
                          alt="ARZ"
                          width="44"
                          height="22"
                          style={{
                            display: "block",
                            border: "0",
                            outline: "none",
                          }}
                        />
                      </Column>
                      <Column style={{ verticalAlign: "middle" }}>
                        <Text
                          style={{
                            margin: "0",
                            fontFamily: fonts.display,
                            fontSize: "16px",
                            fontWeight: 700,
                            color: colors.text,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          Portfolio
                        </Text>
                      </Column>
                    </Row>
                  </Link>
                </Column>
                {showAvailability && (
                  <Column
                    align={dir === "rtl" ? "left" : "right"}
                    style={{ verticalAlign: "middle" }}
                  >
                    <Text
                      style={{
                        margin: "0",
                        display: "inline-block",
                        backgroundColor: colors.surfaceAlt,
                        border: `1px solid ${colors.borderStrong}`,
                        borderRadius: "999px",
                        padding: "5px 12px",
                        fontFamily: fonts.mono,
                        fontSize: "10px",
                        letterSpacing: "0.04em",
                        color: colors.accentBright,
                      }}
                    >
                      <span style={{ color: colors.liveGreen }}>●</span> Available
                      worldwide
                    </Text>
                  </Column>
                )}
              </Row>
            </Section>

            {/* Email Content Slot */}
            <Section style={{ padding: "32px 28px 28px" }}>{children}</Section>

            {/* Honey-Amber Accent Divider */}
            <Hr
              style={{
                borderColor: colors.border,
                borderTop: `1px solid ${colors.border}`,
                margin: "0 28px",
              }}
            />

            {/* Signature Footer */}
            <Section
              style={{
                padding: "24px 28px 28px",
                backgroundColor: colors.bgAlt,
              }}
            >
              <Text
                style={{
                  margin: "0 0 4px",
                  fontFamily: fonts.display,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: colors.text,
                }}
              >
                {brand.owner}
              </Text>
              <Text
                style={{
                  margin: "0 0 6px",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: colors.accent,
                  fontWeight: 600,
                }}
              >
                {brand.role}
              </Text>
              <Text
                style={{
                  margin: "0 0 18px",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: colors.muted,
                }}
              >
                {brand.location}
              </Text>

              {/* Quick Links Row */}
              <Text
                style={{
                  margin: "0 0 16px",
                  fontSize: "12px",
                  lineHeight: "22px",
                  color: colors.dim,
                }}
              >
                <Link
                  href={brand.portfolioUrl}
                  style={{ color: colors.text, textDecoration: "none", fontWeight: 600 }}
                >
                  Portfolio
                </Link>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <Link
                  href={brand.cvUrl}
                  style={{ color: colors.accent, textDecoration: "none", fontWeight: 600 }}
                >
                  Download CV
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
                  href={brand.linkedinUrl}
                  style={{ color: colors.muted, textDecoration: "none" }}
                >
                  LinkedIn
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
                  href={brand.upworkUrl}
                  style={{ color: colors.muted, textDecoration: "none" }}
                >
                  Upwork
                </Link>
              </Text>

              <Text
                style={{
                  margin: "0",
                  fontFamily: fonts.mono,
                  fontSize: "11px",
                  color: colors.dim,
                }}
              >
                © {new Date().getFullYear()} {brand.name} · {brand.owner}. All rights
                reserved.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ArzLayout;

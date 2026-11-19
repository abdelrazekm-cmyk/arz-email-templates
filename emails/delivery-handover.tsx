import * as React from "react";
import {
  Button,
  Column,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { ArzLayout } from "./components/ArzLayout";
import { arzTheme } from "./theme";

export interface DeliveryHandoverProps {
  clientName?: string;
  projectName?: string;
  versionLabel?: string;
  deliveryUrl?: string;
  deliverables?: string[];
  colorSpec?: string;
  deliveryNote?: string;
}

export const DeliveryHandover: React.FC<DeliveryHandoverProps> = ({
  clientName = "Khaled",
  projectName = "Brand Launch Hero Film + Vertical Cutdowns",
  versionLabel = "v1.0 — Review Cut",
  deliveryUrl = "https://arz-portfolio.me/",
  deliverables = [
    "01_Hero_Film_16x9_4K_ProRes_Rec709.mp4",
    "02_Reel_Cutdown_9x16_4K_60s.mp4",
    "03_Teaser_Hook_9x16_4K_15s.mp4",
  ],
  colorSpec = "4K · 24fps · Rec.709 · -14 LUFS",
  deliveryNote = "Please watch with sound on and drop any timecoded notes directly in the review link or reply to this email.",
}) => {
  const { colors, fonts, brand } = arzTheme;

  return (
    <ArzLayout
      previewText={`Ready for review: ${projectName} (${versionLabel})`}
      timecode="00:04:12:09"
      formatLabel={`DELIVERY · ${versionLabel.toUpperCase()}`}
      showAvailability={false}
    >
      {/* Eyebrow */}
      <Text
        style={{
          margin: "0 0 12px",
          fontFamily: fonts.mono,
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: colors.accent,
        }}
      >
        Delivery Ready · {versionLabel}
      </Text>

      {/* Headline */}
      <Heading
        as="h1"
        style={{
          margin: "0 0 16px",
          fontFamily: fonts.display,
          fontSize: "28px",
          lineHeight: "34px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: colors.text,
        }}
      >
        Your cut is ready for review,{" "}
        <span style={{ color: colors.accent }}>{clientName}</span>.
      </Heading>

      <Text
        style={{
          margin: "0 0 24px",
          fontSize: "15px",
          lineHeight: "24px",
          color: colors.muted,
        }}
      >
        I&apos;ve uploaded the latest exports for{" "}
        <strong style={{ color: colors.text }}>{projectName}</strong>. Everything
        is color-graded, audio-leveled, and ready for your feedback.
      </Text>

      {/* Deliverables Frame Card */}
      <Section
        style={{
          backgroundColor: colors.surfaceAlt,
          border: `1px solid ${colors.borderStrong}`,
          borderRadius: "16px",
          padding: "20px 22px",
          marginBottom: "24px",
        }}
      >
        <Row style={{ marginBottom: "14px" }}>
          <Column>
            <Text
              style={{
                margin: "0",
                fontFamily: fonts.mono,
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: colors.accentBright,
              }}
            >
              Included Files ({deliverables.length})
            </Text>
          </Column>
          <Column align="right">
            <Text
              style={{
                margin: "0",
                fontFamily: fonts.mono,
                fontSize: "10px",
                color: colors.dim,
              }}
            >
              {colorSpec}
            </Text>
          </Column>
        </Row>

        {deliverables.map((file, idx) => (
          <Text
            key={file}
            style={{
              margin: idx === deliverables.length - 1 ? "0" : "0 0 8px",
              padding: "10px 12px",
              backgroundColor: colors.bgAlt,
              border: `1px solid ${colors.border}`,
              borderRadius: "10px",
              fontFamily: fonts.mono,
              fontSize: "12px",
              color: colors.text,
            }}
          >
            <span style={{ color: colors.accent, marginRight: "8px" }}>▶</span>
            {file}
          </Text>
        ))}
      </Section>

      {/* Primary CTA */}
      <Section style={{ marginBottom: "22px" }}>
        <Row>
          <Column style={{ paddingRight: "8px", paddingBottom: "8px" }}>
            <Button
              href={deliveryUrl}
              style={{
                backgroundColor: colors.accent,
                color: colors.accentInk,
                fontFamily: fonts.body,
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                padding: "13px 26px",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              Open Review &amp; Download Link →
            </Button>
          </Column>
          <Column style={{ paddingBottom: "8px" }}>
            <Button
              href={brand.whatsappDirectUrl}
              style={{
                backgroundColor: colors.surfaceAlt,
                color: colors.text,
                border: `1px solid ${colors.borderStrong}`,
                fontFamily: fonts.body,
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              Send Notes on WhatsApp
            </Button>
          </Column>
        </Row>
      </Section>

      {/* Review Note */}
      <Section
        style={{
          backgroundColor: colors.bgAlt,
          borderLeft: `3px solid ${colors.accent}`,
          borderRadius: "8px",
          padding: "12px 16px",
        }}
      >
        <Text
          style={{
            margin: "0",
            fontSize: "13px",
            lineHeight: "20px",
            color: colors.muted,
          }}
        >
          <strong style={{ color: colors.text }}>Review Tip:</strong>{" "}
          {deliveryNote}
        </Text>
      </Section>
    </ArzLayout>
  );
};

DeliveryHandover.PreviewProps = {
  clientName: "Khaled",
  projectName: "Q4 Commercial Film + 3 Social Cutdowns",
  versionLabel: "v1.0 — Review Cut",
  deliveryUrl: "https://arz-portfolio.me/",
  deliverables: [
    "01_Q4_Hero_Commercial_16x9_4K.mp4",
    "02_IG_Reel_HookA_9x16_4K.mp4",
    "03_IG_Reel_HookB_9x16_4K.mp4",
  ],
  colorSpec: "4K · 24fps · Rec.709 · -14 LUFS",
  deliveryNote:
    "Please watch with sound on and share any timecoded revision notes directly by replying to this email or on WhatsApp.",
} satisfies DeliveryHandoverProps;

export default DeliveryHandover;

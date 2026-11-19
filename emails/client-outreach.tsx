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

export interface ClientOutreachProps {
  recipientName?: string;
  companyName?: string;
  openingHook?: string;
  customPitch?: string;
}

export const ClientOutreach: React.FC<ClientOutreachProps> = ({
  recipientName = "Sarah",
  companyName = "your team",
  openingHook = "I came across your recent campaign and loved the product positioning — with sharper first-3-second hooks and cinema-grade color, those clips could convert even harder.",
  customPitch = "I handle editing, DaVinci Resolve color grading, sound design, and motion graphics under one roof — so you get consistent brand polish and fast turnarounds without juggling multiple freelancers.",
}) => {
  const { colors, fonts, brand, metrics } = arzTheme;

  const pillars = [
    {
      index: "01",
      title: "High-Retention Reels & Shorts",
      desc: "Scroll-stopping hooks, tight pacing, and crisp captions built for watch time.",
    },
    {
      index: "02",
      title: "DaVinci Resolve Color Grading",
      desc: "Rich, filmic Kodak-inspired looks and natural skin tones across every camera.",
    },
    {
      index: "03",
      title: "Commercials & Motion Design",
      desc: "Launch films, event recaps, and clean kinetic graphics tailored to your brand.",
    },
  ];

  return (
    <ArzLayout
      previewText={`Videos that stop the scroll for ${companyName} — ARZ Portfolio`}
      timecode="00:00:24:00"
      formatLabel="SHOWREEL · 4K · 24fps"
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
        ARZ Studio · Post-Production Partner
      </Text>

      {/* Headline */}
      <Heading
        as="h1"
        style={{
          margin: "0 0 18px",
          fontFamily: fonts.display,
          fontSize: "32px",
          lineHeight: "38px",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          color: colors.text,
        }}
      >
        Videos that <span style={{ color: colors.accent }}>stop the scroll</span>{" "}
        — and sell.
      </Heading>

      <Text
        style={{
          margin: "0 0 16px",
          fontSize: "15px",
          lineHeight: "24px",
          color: colors.text,
        }}
      >
        Hi {recipientName},
      </Text>

      <Text
        style={{
          margin: "0 0 16px",
          fontSize: "15px",
          lineHeight: "24px",
          color: colors.muted,
        }}
      >
        {openingHook}
      </Text>

      <Text
        style={{
          margin: "0 0 24px",
          fontSize: "15px",
          lineHeight: "24px",
          color: colors.muted,
        }}
      >
        {customPitch}
      </Text>

      {/* Service Pillars */}
      <Section style={{ marginBottom: "24px" }}>
        {pillars.map((item) => (
          <Section
            key={item.index}
            style={{
              backgroundColor: colors.surfaceAlt,
              border: `1px solid ${colors.border}`,
              borderRadius: "14px",
              padding: "14px 18px",
              marginBottom: "10px",
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
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: "11px",
                  color: colors.accent,
                  marginRight: "8px",
                }}
              >
                {item.index}
              </span>
              {item.title}
            </Text>
            <Text
              style={{
                margin: "0",
                fontSize: "13px",
                lineHeight: "19px",
                color: colors.muted,
              }}
            >
              {item.desc}
            </Text>
          </Section>
        ))}
      </Section>

      {/* Proof Strip */}
      <Section
        style={{
          backgroundColor: colors.bgAlt,
          border: `1px solid ${colors.borderStrong}`,
          borderRadius: "14px",
          padding: "16px 12px",
          marginBottom: "26px",
        }}
      >
        <Row>
          {metrics.map((metric) => (
            <Column key={metric.label} align="center" style={{ width: "25%" }}>
              <Text
                style={{
                  margin: "0 0 2px",
                  fontFamily: fonts.display,
                  fontSize: "18px",
                  fontWeight: 800,
                  color: colors.accentBright,
                }}
              >
                {metric.value}
              </Text>
              <Text
                style={{
                  margin: "0",
                  fontFamily: fonts.mono,
                  fontSize: "10px",
                  color: colors.muted,
                }}
              >
                {metric.label}
              </Text>
            </Column>
          ))}
        </Row>
      </Section>

      {/* CTAs */}
      <Section style={{ marginBottom: "8px" }}>
        <Row>
          <Column style={{ paddingRight: "8px", paddingBottom: "8px" }}>
            <Button
              href={brand.portfolioUrl}
              style={{
                backgroundColor: colors.accent,
                color: colors.accentInk,
                fontFamily: fonts.body,
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                padding: "13px 24px",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              Explore Portfolio (200+ Videos) →
            </Button>
          </Column>
          <Column style={{ paddingBottom: "8px" }}>
            <Button
              href={brand.cvUrl}
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
              Download CV (PDF)
            </Button>
          </Column>
        </Row>
      </Section>

      <Text
        style={{
          margin: "16px 0 0",
          fontSize: "13px",
          lineHeight: "20px",
          color: colors.muted,
        }}
      >
        Open to a quick 10-minute chat this week if {companyName} has upcoming
        video campaigns. Just reply directly to this email or ping me on
        WhatsApp.
      </Text>
    </ArzLayout>
  );
};

ClientOutreach.PreviewProps = {
  recipientName: "Daniel",
  companyName: "Northstar Creative",
  openingHook:
    "I've been following Northstar Creative's product launches — the storytelling is strong, and I'd love to help push retention and visual polish even further on your Q4 reels.",
  customPitch:
    "Over the last 3+ years I've delivered 500+ videos across Egypt, Saudi Arabia, UAE, and Canada (including reels past 950K+ views) covering editing, DaVinci Resolve color grading, and motion design.",
} satisfies ClientOutreachProps;

export default ClientOutreach;

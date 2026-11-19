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

export interface ProjectInquiryConfirmationProps {
  clientName?: string;
  projectType?: string;
  timeline?: string;
  briefSummary?: string;
  replyWindow?: string;
}

export const ProjectInquiryConfirmation: React.FC<
  ProjectInquiryConfirmationProps
> = ({
  clientName = "Alex",
  projectType = "High-Retention Reels & Color Grading",
  timeline = "Within 7 days",
  briefSummary = "Looking for 8 vertical product reels with Kodak-inspired color grading and crisp motion graphics for our upcoming launch.",
  replyWindow = "within 24 hours",
}) => {
  const { colors, fonts, brand, metrics } = arzTheme;

  return (
    <ArzLayout
      previewText={`Got your brief, ${clientName} — I'll reply ${replyWindow} with scope & next steps.`}
      timecode="00:01:08:12"
      formatLabel="INQUIRY RECEIVED · ARZ STUDIO"
    >
      {/* Eyebrow Kicker */}
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
        01 — Project Inquiry Received
      </Text>

      {/* Editorial Display Headline */}
      <Heading
        as="h1"
        style={{
          margin: "0 0 16px",
          fontFamily: fonts.display,
          fontSize: "30px",
          lineHeight: "36px",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: colors.text,
        }}
      >
        Got your brief, {clientName} — let&apos;s make it{" "}
        <span style={{ color: colors.accent }}>stop the scroll</span>.
      </Heading>

      <Text
        style={{
          margin: "0 0 24px",
          fontSize: "15px",
          lineHeight: "24px",
          color: colors.muted,
        }}
      >
        Thanks for reaching out through{" "}
        <strong style={{ color: colors.text }}>ARZ Portfolio</strong>. I&apos;ve
        received your message and I&apos;m reviewing your project details now.
        Expect a direct reply from me{" "}
        <strong style={{ color: colors.text }}>{replyWindow}</strong> — usually
        much sooner.
      </Text>

      {/* Project Brief Card */}
      <Section
        style={{
          backgroundColor: colors.surfaceAlt,
          border: `1px solid ${colors.borderStrong}`,
          borderRadius: "16px",
          padding: "20px 22px",
          marginBottom: "24px",
        }}
      >
        <Text
          style={{
            margin: "0 0 14px",
            fontFamily: fonts.mono,
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: colors.accentBright,
          }}
        >
          Your Brief Snapshot
        </Text>

        <Row style={{ marginBottom: "12px" }}>
          <Column style={{ width: "50%", paddingRight: "10px", verticalAlign: "top" }}>
            <Text
              style={{
                margin: "0 0 4px",
                fontFamily: fonts.mono,
                fontSize: "10px",
                textTransform: "uppercase",
                color: colors.dim,
              }}
            >
              Project Type
            </Text>
            <Text
              style={{
                margin: "0",
                fontSize: "14px",
                fontWeight: 600,
                color: colors.text,
              }}
            >
              {projectType}
            </Text>
          </Column>
          <Column style={{ width: "50%", paddingLeft: "10px", verticalAlign: "top" }}>
            <Text
              style={{
                margin: "0 0 4px",
                fontFamily: fonts.mono,
                fontSize: "10px",
                textTransform: "uppercase",
                color: colors.dim,
              }}
            >
              Target Timeline
            </Text>
            <Text
              style={{
                margin: "0",
                fontSize: "14px",
                fontWeight: 600,
                color: colors.accentBright,
              }}
            >
              {timeline}
            </Text>
          </Column>
        </Row>

        <Text
          style={{
            margin: "12px 0 4px",
            fontFamily: fonts.mono,
            fontSize: "10px",
            textTransform: "uppercase",
            color: colors.dim,
          }}
        >
          Notes
        </Text>
        <Text
          style={{
            margin: "0",
            fontSize: "13px",
            lineHeight: "20px",
            color: colors.muted,
          }}
        >
          &ldquo;{briefSummary}&rdquo;
        </Text>
      </Section>

      {/* What Happens Next */}
      <Text
        style={{
          margin: "0 0 12px",
          fontFamily: fonts.mono,
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: colors.accent,
        }}
      >
        What Happens Next
      </Text>

      <Section
        style={{
          backgroundColor: colors.bgAlt,
          border: `1px solid ${colors.border}`,
          borderRadius: "14px",
          padding: "16px 20px",
          marginBottom: "26px",
        }}
      >
        <Text style={{ margin: "0 0 10px", fontSize: "13px", lineHeight: "20px", color: colors.text }}>
          <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>01.</strong>{" "}
          <strong>Creative &amp; Scope Review</strong> — I review your footage
          style, references, and pacing goals.
        </Text>
        <Text style={{ margin: "0 0 10px", fontSize: "13px", lineHeight: "20px", color: colors.text }}>
          <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>02.</strong>{" "}
          <strong>Clear Quote &amp; Timeline</strong> — You get a transparent
          turnaround plan (72h rush turnarounds available).
        </Text>
        <Text style={{ margin: "0", fontSize: "13px", lineHeight: "20px", color: colors.text }}>
          <strong style={{ color: colors.accent, fontFamily: fonts.mono }}>03.</strong>{" "}
          <strong>Cut, Grade &amp; Deliver</strong> — One dedicated editor,
          DaVinci colorist, and motion designer from raw footage to final master.
        </Text>
      </Section>

      {/* Dual CTA Row */}
      <Section style={{ marginBottom: "28px" }}>
        <Row>
          <Column style={{ paddingRight: "8px", paddingBottom: "8px" }}>
            <Button
              href={brand.whatsappUrl}
              style={{
                backgroundColor: colors.accent,
                color: colors.accentInk,
                fontFamily: fonts.body,
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                padding: "13px 22px",
                borderRadius: "999px",
                display: "inline-block",
              }}
            >
              Need a faster reply? WhatsApp →
            </Button>
          </Column>
          <Column style={{ paddingBottom: "8px" }}>
            <Button
              href={brand.portfolioUrl}
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
              Watch Latest Work
            </Button>
          </Column>
        </Row>
      </Section>

      {/* Proof Metrics Strip */}
      <Section
        style={{
          backgroundColor: colors.bgAlt,
          border: `1px solid ${colors.border}`,
          borderRadius: "14px",
          padding: "14px 12px",
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
    </ArzLayout>
  );
};

ProjectInquiryConfirmation.PreviewProps = {
  clientName: "Omar",
  projectType: "Commercial Campaign & DaVinci Color Grading",
  timeline: "Launch in 10 days",
  briefSummary:
    "We need a 60-second hero brand film plus 4 vertical cutdowns for Instagram and TikTok with clean sound design and filmic color.",
  replyWindow: "within 24 hours",
} satisfies ProjectInquiryConfirmationProps;

export default ProjectInquiryConfirmation;

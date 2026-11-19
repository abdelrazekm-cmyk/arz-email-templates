# ARZ Email Templates

React Email templates built with [`@react-email/components`](https://react.email/) and styled to match the **Cinematic Espresso & Honey-Amber** design system of [arz-portfolio.me](https://arz-portfolio.me/) (Abdelrazek Mahmoud — Senior Video Editor, DaVinci Resolve Colorist & Motion Designer).

## Design System Parity

| Token | Value | Portfolio Mapping (`styles.css`) |
| --- | --- | --- |
| Background | `#110E0A` | `--bg` (Deep Cinematic Espresso) |
| Background Alt | `#17120D` | `--bg-2` |
| Surface | `#1F1812` | `--surface` |
| Surface Elevated | `#281F17` | `--surface-2` |
| Accent | `#DB9B3E` | `--orange` (Honey-Amber) |
| Accent Highlight | `#EAAD54` | `--orange-2` |
| Accent Ink | `#171005` | `--orange-ink` |
| Primary Text | `#F4EEE6` | `--text` |
| Muted Text | `#A99E90` | `--muted` |
| Display / Body / Mono / AR | `Bricolage Grotesque` / `Inter` / `SF Mono` / `Cairo` | `--font-display`, `--font-body`, `--font-mono`, `--font-ar` |

## Included Templates

- **`emails/project-inquiry-confirmation.tsx`** — Automated confirmation reply when a client submits the contact form on `arz-portfolio.me` (includes brief snapshot, 3-step onboarding timeline, WhatsApp & Portfolio CTAs, and proof metrics).
- **`emails/client-outreach.tsx`** — High-conversion pitch & showreel email for brands, agencies, and creative directors (includes service pillars, proof metrics strip, Portfolio & CV CTAs).
- **`emails/delivery-handover.tsx`** — Clean project delivery & review email for sending final edits/color grades (includes file list, technical specs bar, review link CTA, and feedback tip).
- **`emails/components/ArzLayout.tsx`** — Shared cinema viewfinder HUD header (`● REC | 00:03:20:18 | 6K · 24fps`), ARZ logo header, availability badge, RTL/Arabic (`dir="rtl"`) support, and signature footer.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to preview all templates live in the React Email workbench.

### Export Static HTML

```bash
npm run build
```

Compiled HTML templates will be exported to `dist/`.

### Usage with Resend / Node

```tsx
import { Resend } from "resend";
import { ProjectInquiryConfirmation } from "./emails";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Abdelrazek Mahmoud <hello@arz-portfolio.me>",
  to: "client@example.com",
  subject: "Got your brief — ARZ Portfolio",
  react: (
    <ProjectInquiryConfirmation
      clientName="Omar"
      projectType="Commercial Film & Color Grading"
      timeline="Launch in 10 days"
      briefSummary="60s hero commercial + 4 vertical social cutdowns."
    />
  ),
});
```

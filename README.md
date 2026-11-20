# ARZ Email Templates & Nodemailer Outreach Engine

Responsive **React Email** templates + a one-shot **Node.js & Nodemailer** outreach engine styled to match [arz-portfolio.me](https://arz-portfolio.me/) and [arz-portfolio.me/arz-packages/](https://arz-portfolio.me/#pricing) (**Cinematic Espresso & Honey-Amber** design system).

## What's Inside

### 1. Responsive React Email Templates (`emails/`)
- **`emails/components/ArzLayout.tsx`** — Shared responsive shell with mobile `@media (max-width: 620px)` stacking rules, Cinema Viewfinder HUD top bar, ARZ logo, full Arabic RTL (`dir="rtl"`) & English LTR support, and signature footer.
- **`emails/strategic-client-pitch.tsx`** — Arabic RTL responsive B2B pitch template structured around:
  1. Digital footprint observation (website & social media)
  2. **01 — Scientific Problem Diagnosis** (visual/funnel bottleneck)
  3. **02 — Scientific Production Solution** & expected measurable impact
  4. **Recommended ARZ Package (`P1`–`P8`)** with Standard EGP pricing & 42%–54% Cairo agency savings
  5. Personalized WhatsApp CTA + interactive Packages Calculator CTA
- **`emails/project-inquiry-confirmation.tsx`** — Auto-reply for portfolio contact form submissions.
- **`emails/client-outreach.tsx`** — English international pitch & showreel template.
- **`emails/delivery-handover.tsx`** — Project review & final delivery handover template.

### 2. One-Shot Node.js + Nodemailer Campaign Engine (`scripts/`)
- **`scripts/clients-data.ts`** — 30 email-ready clients from the Mansoura Master CRM across 4 tracks (`agencies`, `quick-cash`, `saas-tech`, `enterprise`), each with bespoke problem/solution copy and matched `P1`–`P8` packages.
- **`scripts/send-client-campaigns.ts`** — Renders each client's responsive React Email to HTML + plain text and dispatches via **Nodemailer** with rate limiting (`3.5s` delay) and an idempotent `campaign-sent-log.json` to prevent duplicate sends.

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Preview all 30 personalized emails in your browser (Safe Dry-Run)
```bash
npm run campaign:preview
```
Open `dist/campaigns/index.html` to visually inspect every client's email on desktop and mobile before sending.

### 3. Configure Gmail / SMTP credentials
Copy `.env.example` to `.env` and add your Gmail App Password:
```bash
cp .env.example .env
```

### 4. Send a live test email to yourself first
```bash
npm run campaign:test
```

### 5. Run the one-shot Nodemailer campaign for all 30 clients
```bash
npm run campaign:send
```

#### Optional Filters
- Send only specific CRM IDs: `npx tsx scripts/send-client-campaigns.ts --send --only=1,2,32,61`
- Send only one sales track (`agencies`, `quick-cash`, `saas-tech`, `enterprise`): `npx tsx scripts/send-client-campaigns.ts --send --track=agencies`
- Live React Email template editor: `npm run dev` (opens `http://localhost:3000`)

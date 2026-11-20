import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import React from "react";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { StrategicClientPitch } from "../emails/strategic-client-pitch";
import { ARZ_PACKAGES } from "../emails/theme";
import { CLIENT_CAMPAIGNS, type ClientCampaignRecord } from "./clients-data";

const OUT_DIR = path.resolve(process.cwd(), "dist", "campaigns");
const SENT_LOG_PATH = path.resolve(process.cwd(), "campaign-sent-log.json");

interface SentLogEntry {
  id: number;
  companyName: string;
  email: string;
  subject: string;
  packageId: string;
  sentAt: string;
  messageId: string;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const mode: "dry-run" | "test" | "send" = args.includes("--send")
    ? "send"
    : args.includes("--test")
      ? "test"
      : "dry-run";

  const onlyArg = args.find((a) => a.startsWith("--only="));
  const onlyIds = onlyArg
    ? onlyArg
        .replace("--only=", "")
        .split(",")
        .map((n) => Number(n.trim()))
        .filter((n) => !Number.isNaN(n))
    : null;

  const trackArg = args.find((a) => a.startsWith("--track="));
  const trackFilter = trackArg ? trackArg.replace("--track=", "").trim() : null;

  const toArg = args.find((a) => a.startsWith("--to="));
  const testRecipient =
    toArg?.replace("--to=", "").trim() ||
    process.env.TEST_RECIPIENT ||
    process.env.SMTP_USER ||
    "abdelrazekwork72@gmail.com";

  const force = args.includes("--force");

  return { mode, onlyIds, trackFilter, testRecipient, force };
}

function loadSentLog(): Record<string, SentLogEntry> {
  if (!fs.existsSync(SENT_LOG_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(SENT_LOG_PATH, "utf-8"));
  } catch {
    return {};
  }
}

function saveSentLog(log: Record<string, SentLogEntry>) {
  fs.writeFileSync(SENT_LOG_PATH, JSON.stringify(log, null, 2), "utf-8");
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function renderClientEmail(client: ClientCampaignRecord) {
  const element = React.createElement(StrategicClientPitch, {
    companyName: client.companyName,
    contactGreeting: client.contactGreeting,
    sector: client.sector,
    trackLabel: client.trackLabel,
    digitalFootprintSummary: client.digitalFootprintSummary,
    scientificProblem: client.scientificProblem,
    scientificSolution: client.scientificSolution,
    expectedImpact: client.expectedImpact,
    packageId: client.packageId,
    secondaryPackageId: client.secondaryPackageId,
  });

  const html = await render(element);
  const text = await render(element, { plainText: true });
  return { html, text };
}

function buildPreviewDashboard(
  items: Array<{ client: ClientCampaignRecord; fileName: string }>
) {
  const rows = items
    .map(({ client, fileName }) => {
      const pkg = ARZ_PACKAGES[client.packageId];
      return `
      <tr>
        <td>#${client.id}</td>
        <td><strong>${client.companyName}</strong><br><small style="color:#A99E90">${client.sector}</small></td>
        <td><code>${client.email}</code><br><small style="color:#A99E90">${client.phone}</small></td>
        <td><span style="color:#EAAD54;font-weight:700">${pkg.id} — ${pkg.nameAr}</span><br><small>${pkg.priceEgp.toLocaleString("en-US")} ج.م (توفير ${pkg.savePct}%)</small></td>
        <td>${client.priority}</td>
        <td><a href="./${fileName}" target="_blank" style="color:#171005;background:#DB9B3E;padding:6px 12px;border-radius:999px;text-decoration:none;font-weight:700;font-size:12px;">معاينة الإيميل</a></td>
      </tr>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ARZ Client Campaigns Preview (${items.length} Clients)</title>
  <style>
    body { background:#110E0A; color:#F4EEE6; font-family: "Cairo", system-ui, sans-serif; margin:0; padding:28px; }
    .wrap { max-width:1100px; margin:0 auto; }
    h1 { color:#DB9B3E; margin:0 0 8px; }
    p { color:#A99E90; margin:0 0 24px; }
    table { width:100%; border-collapse:collapse; background:#1F1812; border:1px solid #332719; border-radius:14px; overflow:hidden; }
    th, td { padding:14px 16px; border-bottom:1px solid #332719; text-align:right; font-size:14px; }
    th { background:#17120D; color:#EAAD54; font-size:13px; }
    tr:hover { background:#281F17; }
    code { color:#F4EEE6; font-size:12px; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>ARZ Studio — لوحة معاينة حملات البريد المخصصة (${items.length} عميل)</h1>
    <p>اضغط على "معاينة الإيميل" لمراجعة التصميم المتجاوب والتحليل العلمي والباقة المقترحة لكل شركة قبل الإرسال الفعلي.</p>
    <table>
      <thead>
        <tr>
          <th>CRM</th>
          <th>الشركة / القطاع</th>
          <th>البريد / الهاتف</th>
          <th>الباقة المقترحة</th>
          <th>الأولوية</th>
          <th>المعاينة</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
</body>
</html>`;
}

function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = (process.env.SMTP_SECURE ?? "true") === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(
      "Missing SMTP_USER or SMTP_PASS in .env file. Copy .env.example to .env and add your Gmail App Password or SMTP credentials."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

async function main() {
  const { mode, onlyIds, trackFilter, testRecipient, force } = parseArgs();

  let targets = [...CLIENT_CAMPAIGNS];
  if (onlyIds && onlyIds.length > 0) {
    targets = targets.filter((c) => onlyIds.includes(c.id));
  }
  if (trackFilter) {
    targets = targets.filter((c) => c.track === trackFilter);
  }

  if (targets.length === 0) {
    console.error("No matching clients found for the given filters.");
    process.exit(1);
  }

  console.log(`\n🎬 ARZ Studio Email Campaign Engine`);
  console.log(`   Mode:    ${mode.toUpperCase()}`);
  console.log(`   Targets: ${targets.length} client(s)\n`);

  // DRY-RUN: Render all personalized HTML emails locally for visual QA
  if (mode === "dry-run") {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    const rendered: Array<{ client: ClientCampaignRecord; fileName: string }> = [];

    for (const client of targets) {
      const { html } = await renderClientEmail(client);
      const fileName = `${String(client.id).padStart(2, "0")}-${client.slug}.html`;
      fs.writeFileSync(path.join(OUT_DIR, fileName), html, "utf-8");
      rendered.push({ client, fileName });
      console.log(
        `  ✓ Rendered #${client.id} ${client.companyName} -> dist/campaigns/${fileName} [${client.packageId}]`
      );
    }

    const indexPath = path.join(OUT_DIR, "index.html");
    fs.writeFileSync(indexPath, buildPreviewDashboard(rendered), "utf-8");
    console.log(`\n✅ Preview dashboard ready: ${indexPath}`);
    console.log(`   Open dist/campaigns/index.html in your browser to review all ${rendered.length} emails.\n`);
    return;
  }

  // LIVE SMTP (TEST OR SEND)
  const transporter = createTransporter();
  await transporter.verify();
  console.log("✓ SMTP connection verified successfully.\n");

  const fromName = process.env.FROM_NAME || "Abdelrazek Mahmoud — ARZ Studio";
  const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER!;
  const replyTo = process.env.REPLY_TO || fromEmail;
  const delayMs = Number(process.env.SEND_DELAY_MS || 3500);

  if (mode === "test") {
    const sample = targets[0];
    const { html, text } = await renderClientEmail(sample);
    const info = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: testRecipient,
      replyTo,
      subject: `[TEST] ${sample.subject}`,
      html,
      text,
    });
    console.log(`✅ Test email sent to ${testRecipient} (Template: #${sample.id} ${sample.companyName})`);
    console.log(`   Message ID: ${info.messageId}\n`);
    return;
  }

  // SEND MODE (ONE-SHOT BATCH WITH IDEMPOTENT LOG + RATE LIMITING)
  const sentLog = loadSentLog();
  let sentCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < targets.length; i++) {
    const client = targets[i];
    const logKey = `${client.id}:${client.email.toLowerCase()}`;

    if (sentLog[logKey] && !force) {
      skippedCount++;
      console.log(
        `  ⏭ Skipping #${client.id} ${client.companyName} (${client.email}) — already sent at ${sentLog[logKey].sentAt}`
      );
      continue;
    }

    try {
      const { html, text } = await renderClientEmail(client);
      const info = await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: client.email,
        cc: client.cc,
        replyTo,
        subject: client.subject,
        html,
        text,
      });

      sentLog[logKey] = {
        id: client.id,
        companyName: client.companyName,
        email: client.email,
        subject: client.subject,
        packageId: client.packageId,
        sentAt: new Date().toISOString(),
        messageId: info.messageId,
      };
      saveSentLog(sentLog);
      sentCount++;

      console.log(
        `  ✅ [${i + 1}/${targets.length}] Sent to #${client.id} ${client.companyName} <${client.email}> (${client.packageId}) — ${info.messageId}`
      );

      if (i < targets.length - 1) {
        await sleep(delayMs);
      }
    } catch (err) {
      failedCount++;
      const message = err instanceof Error ? err.message : String(err);
      console.error(
        `  ❌ [${i + 1}/${targets.length}] Failed #${client.id} ${client.companyName} <${client.email}>: ${message}`
      );
    }
  }

  console.log(`\n📊 Campaign Run Complete:`);
  console.log(`   Sent:    ${sentCount}`);
  console.log(`   Skipped: ${skippedCount}`);
  console.log(`   Failed:  ${failedCount}`);
  console.log(`   Log:     ${SENT_LOG_PATH}\n`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

/**
 * ARZ Email — Final Day Mode Sender (Nodemailer + Gmail SMTP)
 *
 * Usage:
 *   1) Make sure `.env` in `arz-email-templates` has:
 *        GMAIL_USER=abdelrazekwork72@gmail.com
 *        GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
 *   2) Run:
 *        node scripts/send-day-mode.mjs
 *      Or send to a custom recipient / company / contact name:
 *        node scripts/send-day-mode.mjs client@company.com "Namra Tech" "Khaled" "أ. خالد"
 */

import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";

function loadEnvFile() {
  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnvFile();

const GMAIL_USER = process.env.GMAIL_USER || "abdelrazekwork72@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

// True dark (#161412) ARZ logo PNG hosted in this repo — renders cleanly in Gmail Day Mode with zero CSS filter needed
const LOGO_URL =
  process.env.ARZ_LOGO_URL ||
  "https://raw.githubusercontent.com/abdelrazekm-cmyk/arz-email-templates/main/docs/logo-mark-dark.png";

const cliTo = process.argv[2];
const companyName = process.argv[3] || "Namra Tech";
const contactEn = process.argv[4] || "Khaled";
const contactAr = process.argv[5] || "أ. خالد";

const recipients = cliTo
  ? cliTo.split(",").map((s) => s.trim()).filter(Boolean)
  : ["abdelrazekmahmoud628@gmail.com", "maher.aladdin.mansour@gmail.com"];

if (!GMAIL_APP_PASSWORD) {
  console.error(
    "❌ Missing GMAIL_APP_PASSWORD in .env file.\n" +
      "   Add this to .env:\n" +
      "   GMAIL_USER=abdelrazekwork72@gmail.com\n" +
      "   GMAIL_APP_PASSWORD=your-16-char-app-password"
  );
  process.exit(1);
}

function buildEmailHtml({ company, nameEn, nameAr, logoUrl }) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quick video idea for ${company} — ARZ</title>
</head>
<body style="margin:0;padding:0;background-color:#faf7f2;font-family:'Inter','Segoe UI',Arial,sans-serif;color:#161412;">
  <table id="en" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#faf7f2;">
    <tr>
      <td align="center" style="padding:20px 10px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:680px;margin:0 auto;background-color:#ffffff;border:1px solid #ece2d4;border-radius:22px;overflow:hidden;">
          <!-- Header (#en anchor) -->
          <tr>
            <td dir="ltr" style="padding:18px 28px;background-color:#fcfaf6;border-bottom:1px solid #efe5d8;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <a href="https://arz-portfolio.me/" style="text-decoration:none;display:inline-block;">
                      <img src="${logoUrl}" alt="ARZ" height="28" style="display:block;border:0;height:28px;width:auto;" />
                    </a>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <a href="#en" style="display:inline-block;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:800;letter-spacing:0.08em;color:#161412;background-color:#f4e9da;padding:4px 10px;border-radius:999px;text-decoration:none;">EN</a>
                    <span style="color:#d8cbb8;margin:0 4px;">|</span>
                    <a href="#ar" style="display:inline-block;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.08em;color:#786d61;padding:4px 10px;border-radius:999px;text-decoration:none;">AR</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td dir="ltr" style="padding:32px 28px 26px;direction:ltr;text-align:left;background-color:#ffffff;">
              <!-- ================= ENGLISH SECTION (DEFAULT FIRST) ================= -->
              <p style="margin:0 0 10px;font-size:11px;font-weight:800;letter-spacing:0.11em;text-transform:uppercase;color:#c96a10;text-align:left;">VIDEO EDITING · COLOR GRADING · MOTION</p>
              <h1 style="margin:0 0 18px;font-family:'Bricolage Grotesque','Inter',Arial,sans-serif;font-size:27px;line-height:35px;font-weight:800;letter-spacing:-0.02em;color:#161412;text-align:left;">
                Scroll-stopping videos that reflect the real work of <span style="color:#c96a10;white-space:nowrap;display:inline-block;">${company}</span>
              </h1>

              <p style="margin:0 0 8px;font-size:15px;line-height:24px;font-weight:700;color:#161412;text-align:left;">Hi ${nameEn},</p>
              <p style="margin:0 0 22px;font-size:14px;line-height:24px;color:#5c5349;text-align:left;">
                I checked out your work and pages — really liked what you're building. I'm Abdelrazek, a video editor &amp; <strong style="color:#161412;">DaVinci Resolve</strong> colorist, and I noticed one simple thing that could make a big difference:
              </p>

              <!-- Warm Peach Callout Card -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#fdf4e7;border:1px solid #f2d5ad;border-radius:16px;margin-bottom:22px;">
                <tr>
                  <td dir="ltr" style="padding:20px 22px;direction:ltr;text-align:left;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#c96a10;text-align:left;">01 — WHAT I NOTICED</p>
                    <p style="margin:0 0 16px;font-size:14px;line-height:24px;color:#2c2620;text-align:left;">
                      Most people scroll past long text and plain clips before they ever get to see how strong your work really is.
                    </p>
                    <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#c96a10;text-align:left;">02 — HOW WE CAN WORK TOGETHER</p>
                    <p style="margin:0 0 16px;font-size:14px;line-height:24px;color:#2c2620;text-align:left;">
                      We can work together on different styles of videos tailored to what fits your brand best and truly reflects the value you deliver — with flexible packages for every need, backed by experience working with companies across multiple industries in Egypt and abroad.
                    </p>
                    <a href="https://arz-portfolio.me/" style="display:inline-block;background-color:#ffffff;color:#161412;border:1px solid #dfd3c3;font-size:12px;font-weight:700;text-decoration:none;padding:8px 16px;border-radius:999px;">
                      See Companies We've Worked With →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Why We're a Great Fit Card -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#ffffff;border:1px solid #ede3d5;border-radius:16px;margin-bottom:26px;">
                <tr>
                  <td dir="ltr" style="padding:20px 22px;direction:ltr;text-align:left;">
                    <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#c96a10;text-align:left;">03 — PROVEN RESULTS</p>
                    <p style="margin:0 0 14px;font-size:16px;font-weight:800;color:#161412;text-align:left;">Why we're a great fit</p>

                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                      <tr>
                        <td width="32" valign="top"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background-color:#fdeed8;color:#c96a10;font-size:12px;font-weight:800;">✓</span></td>
                        <td style="font-size:13.5px;line-height:22px;color:#3a332b;"><strong style="color:#161412;">500+ delivered videos</strong> for brands across Egypt, Saudi Arabia, UAE, and Canada with a <strong style="color:#161412;">5.0★</strong> client rating.</td>
                      </tr>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                      <tr>
                        <td width="32" valign="top"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background-color:#fdeed8;color:#c96a10;font-size:12px;font-weight:800;">✓</span></td>
                        <td style="font-size:13.5px;line-height:22px;color:#3a332b;"><strong style="color:#161412;">Proven organic reach:</strong> 950K+ views on a single feature, 290K+ on recruitment campaigns, and 100K+ on Dubai real estate promos.</td>
                      </tr>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
                      <tr>
                        <td width="32" valign="top"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background-color:#fdeed8;color:#c96a10;font-size:12px;font-weight:800;">✓</span></td>
                        <td style="font-size:13.5px;line-height:22px;color:#3a332b;"><strong style="color:#161412;">25% faster turnaround</strong> via standardized DaVinci Resolve &amp; After Effects pipelines (48–72h delivery available).</td>
                      </tr>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="32" valign="top"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background-color:#fdeed8;color:#c96a10;font-size:12px;font-weight:800;">✓</span></td>
                        <td style="font-size:13.5px;line-height:22px;color:#3a332b;"><strong style="color:#161412;">One point of contact</strong> covering 6K shooting, editing, DaVinci color grading, motion graphics, and sound design.</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Video Showcase -->
              <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#c96a10;text-align:left;">04 — SELECTED WORK</p>
              <p style="margin:0 0 14px;font-size:16px;font-weight:800;color:#161412;text-align:left;">Quick samples of my work</p>

              <!-- Video 1 -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#ffffff;border:1px solid #ebe1d3;border-radius:16px;overflow:hidden;margin-bottom:16px;">
                <tr>
                  <td>
                    <a href="https://www.youtube.com/watch?v=DiKWeWKRjUU" style="text-decoration:none;display:block;">
                      <img src="https://i.ytimg.com/vi/DiKWeWKRjUU/hqdefault.jpg" alt="Manarat Al-Madinah — Student Story" width="624" style="display:block;width:100%;height:auto;border:0;" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td dir="ltr" style="padding:13px 16px;background-color:#fcfaf6;border-top:1px solid #efe5d8;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="left" style="vertical-align:middle;">
                          <a href="https://www.youtube.com/watch?v=DiKWeWKRjUU" style="display:block;font-size:14px;font-weight:700;color:#161412;text-decoration:none;"><span style="color:#c96a10;margin-right:8px;">▶</span>Manarat Al-Madinah — Student Story</a>
                          <p style="margin:3px 0 0;font-size:11.5px;color:#786d61;text-align:left;">Educational Films &amp; Student Stories</p>
                        </td>
                        <td align="right" style="vertical-align:middle;white-space:nowrap;">
                          <span style="display:inline-block;background-color:#fdf1df;border:1px solid #f3d4a7;border-radius:999px;padding:4px 11px;font-size:11px;font-weight:700;color:#b45309;">950K+ VIEWS</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Video 2 -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#ffffff;border:1px solid #ebe1d3;border-radius:16px;overflow:hidden;margin-bottom:16px;">
                <tr>
                  <td>
                    <a href="https://www.youtube.com/watch?v=wbWJ93mq67s" style="text-decoration:none;display:block;">
                      <img src="https://i.ytimg.com/vi/wbWJ93mq67s/hqdefault.jpg" alt="Tamer Hosny — Coca-Cola Arena Dubai" width="624" style="display:block;width:100%;height:auto;border:0;" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td dir="ltr" style="padding:13px 16px;background-color:#fcfaf6;border-top:1px solid #efe5d8;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="left" style="vertical-align:middle;">
                          <a href="https://www.youtube.com/watch?v=wbWJ93mq67s" style="display:block;font-size:14px;font-weight:700;color:#161412;text-decoration:none;"><span style="color:#c96a10;margin-right:8px;">▶</span>Tamer Hosny — Coca-Cola Arena Dubai</a>
                          <p style="margin:3px 0 0;font-size:11.5px;color:#786d61;text-align:left;">Mega Concerts &amp; Festivals</p>
                        </td>
                        <td align="right" style="vertical-align:middle;white-space:nowrap;">
                          <span style="display:inline-block;background-color:#fdf1df;border:1px solid #f3d4a7;border-radius:999px;padding:4px 11px;font-size:11px;font-weight:700;color:#b45309;">DUBAI · 7-DAY EDIT</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Video 3 -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#ffffff;border:1px solid #ebe1d3;border-radius:16px;overflow:hidden;margin-bottom:24px;">
                <tr>
                  <td>
                    <a href="https://www.youtube.com/watch?v=iUH9WgUy54A" style="text-decoration:none;display:block;">
                      <img src="https://i.ytimg.com/vi/iUH9WgUy54A/hqdefault.jpg" alt="DaVinci Resolve — Before &amp; After" width="624" style="display:block;width:100%;height:auto;border:0;" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td dir="ltr" style="padding:13px 16px;background-color:#fcfaf6;border-top:1px solid #efe5d8;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="left" style="vertical-align:middle;">
                          <a href="https://www.youtube.com/watch?v=iUH9WgUy54A" style="display:block;font-size:14px;font-weight:700;color:#161412;text-decoration:none;"><span style="color:#c96a10;margin-right:8px;">▶</span>DaVinci Resolve — Before &amp; After</a>
                          <p style="margin:3px 0 0;font-size:11.5px;color:#786d61;text-align:left;">Color Grading Breakdowns</p>
                        </td>
                        <td align="right" style="vertical-align:middle;white-space:nowrap;">
                          <span style="display:inline-block;background-color:#fdf1df;border:1px solid #f3d4a7;border-radius:999px;padding:4px 11px;font-size:11px;font-weight:700;color:#b45309;">S-LOG3 → REC.709</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- English CTAs -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-bottom:8px;">
                <tr>
                  <td align="center" style="text-align:center;padding-bottom:12px;">
                    <a href="https://wa.me/201014673393" style="display:inline-block;background-color:#cf6e12;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:13px 28px;border-radius:999px;">WhatsApp Message</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="text-align:center;">
                    <a href="https://arz-portfolio.me/#pricing" style="display:inline-block;background-color:#161412;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 22px;border-radius:999px;margin-right:8px;">View All Packages</a>
                    <a href="https://arz-portfolio.me/" style="display:inline-block;background-color:#ffffff;color:#161412;border:1px solid #dfd3c3;font-size:13px;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:999px;">View All Work</a>
                  </td>
                </tr>
              </table>

              <hr style="border:0;border-top:1px solid #efe5d8;margin:34px 0 28px;" />

              <!-- ================= ARABIC SECTION (#ar anchor) ================= -->
              <div id="ar" dir="rtl" style="direction:rtl;text-align:right;font-family:'Cairo','Segoe UI',Tahoma,Arial,sans-serif;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-bottom:18px;">
                  <tr>
                    <td align="right" style="vertical-align:middle;">
                      <a href="#ar" style="display:inline-block;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:800;letter-spacing:0.08em;color:#161412;background-color:#f4e9da;padding:4px 10px;border-radius:999px;text-decoration:none;">AR</a>
                      <span style="color:#d8cbb8;margin:0 4px;">|</span>
                      <a href="#en" style="display:inline-block;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.08em;color:#786d61;padding:4px 10px;border-radius:999px;text-decoration:none;">EN</a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 10px;font-size:12px;font-weight:800;color:#c96a10;text-align:right;">مونتاج · تلوين سينمائي · موشن جرافيك</p>
                <h2 style="margin:0 0 18px;font-size:26px;line-height:38px;font-weight:800;color:#161412;text-align:right;">
                  فيديوهات تخطف العين — وتعكس شغل <span style="color:#c96a10;white-space:nowrap;display:inline-block;">${company}</span> الحقيقي
                </h2>

                <p style="margin:0 0 8px;font-size:15px;line-height:26px;font-weight:700;color:#161412;text-align:right;">أهلاً ${nameAr}،</p>
                <p style="margin:0 0 22px;font-size:14px;line-height:26px;color:#5c5349;text-align:right;">
                  دخلت على شغلكم وصفحاتكم وعجبني اللي بتقدموه جداً. أنا عبدالرازق، شغال في التصوير والمونتاج وتلوين <strong style="color:#161412;">DaVinci Resolve</strong>، ولفتت نظري حاجة بسيطة تقدر تفرق معاكم:
                </p>

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#fdf4e7;border:1px solid #f2d5ad;border-radius:16px;margin-bottom:22px;">
                  <tr>
                    <td dir="rtl" style="padding:20px 22px;direction:rtl;text-align:right;">
                      <p style="margin:0 0 6px;font-size:12px;font-weight:800;color:#c96a10;text-align:right;">01 — المشكلة اللي لاحظتها</p>
                      <p style="margin:0 0 16px;font-size:14px;line-height:25px;color:#2c2620;text-align:right;">
                        أغلب الناس دلوقتي ما بتقراش كلام طويل على الموقع، والفيديوهات العادية بتخلي العميل يقلب بسرعة قبل ما يفهم قد إيه شغلكم قوي.
                      </p>
                      <p style="margin:0 0 6px;font-size:12px;font-weight:800;color:#c96a10;text-align:right;">02 — إزاي نقدر نشتغل سوا</p>
                      <p style="margin:0 0 16px;font-size:14px;line-height:25px;color:#2c2620;text-align:right;">
                        نقدر نشتغل سوا على أنواع فيديوهات مختلفة حسب اللي يناسب شغلكم ويعكس القيمة الحقيقية اللي بتقدموها — من غير ما نلزمكم بشكل واحد. وعندنا باقات مختلفة تناسب كل احتياج، واشتغلنا مع شركات مختلفة في أكتر من مجال جوة وبره مصر.
                      </p>
                      <a href="https://arz-portfolio.me/" style="display:inline-block;background-color:#ffffff;color:#161412;border:1px solid #dfd3c3;font-size:12px;font-weight:700;text-decoration:none;padding:8px 16px;border-radius:999px;">
                        شوف الشركات اللي اشتغلنا معاها ←
                      </a>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#ffffff;border:1px solid #ede3d5;border-radius:16px;margin-bottom:26px;">
                  <tr>
                    <td dir="rtl" style="padding:20px 22px;direction:rtl;text-align:right;">
                      <p style="margin:0 0 6px;font-size:12px;font-weight:800;color:#c96a10;text-align:right;">03 — نتايج بالأرقام</p>
                      <p style="margin:0 0 14px;font-size:16px;font-weight:800;color:#161412;text-align:right;">ليه إحنا مناسبين ليكم؟</p>
                      <p style="margin:0 0 10px;font-size:13.5px;line-height:23px;color:#3a332b;text-align:right;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background-color:#fdeed8;color:#c96a10;font-size:12px;font-weight:800;margin-left:8px;">✓</span><strong style="color:#161412;">أكتر من 500 فيديو متسلم</strong> لشركات وبراندات في مصر والسعودية والإمارات وكندا بتقييم <strong style="color:#161412;">5.0★</strong>.</p>
                      <p style="margin:0 0 10px;font-size:13.5px;line-height:23px;color:#3a332b;text-align:right;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background-color:#fdeed8;color:#c96a10;font-size:12px;font-weight:800;margin-left:8px;">✓</span><strong style="color:#161412;">نتايج حقيقية بالأرقام:</strong> فيديو وصل لأكتر من 950K مشاهدة عضوية، وحملات تعليمية وعقارية عدّت 290K+ و100K+ مشاهدة.</p>
                      <p style="margin:0 0 10px;font-size:13.5px;line-height:23px;color:#3a332b;text-align:right;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background-color:#fdeed8;color:#c96a10;font-size:12px;font-weight:800;margin-left:8px;">✓</span><strong style="color:#161412;">تقليل وقت التسليم بنسبة 25%</strong> بنظام شغل منظم في DaVinci Resolve وAfter Effects (وتسليم سريع خلال 48–72 ساعة).</p>
                      <p style="margin:0;font-size:13.5px;line-height:23px;color:#3a332b;text-align:right;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;text-align:center;border-radius:7px;background-color:#fdeed8;color:#c96a10;font-size:12px;font-weight:800;margin-left:8px;">✓</span><strong style="color:#161412;">نقطة تواصل واحدة</strong> بتغطي كل حاجة (تصوير 6K، مونتاج، تلوين DaVinci، موشن جرافيك، وصوت) من غير تشتيت بين أكتر من شخص.</p>
                    </td>
                  </tr>
                </table>

                <!-- Arabic CTAs -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-bottom:6px;">
                  <tr>
                    <td align="center" style="text-align:center;padding-bottom:12px;">
                      <a href="https://wa.me/201014673393" style="display:inline-block;background-color:#cf6e12;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:13px 28px;border-radius:999px;">ابدأ مشروعك على واتساب</a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="text-align:center;">
                      <a href="https://arz-portfolio.me/#pricing" style="display:inline-block;background-color:#161412;color:#ffffff;font-size:13px;font-weight:700;text-decoration:none;padding:10px 22px;border-radius:999px;margin-left:8px;">استعرض كل الباقات</a>
                      <a href="https://arz-portfolio.me/" style="display:inline-block;background-color:#ffffff;color:#161412;border:1px solid #dfd3c3;font-size:13px;font-weight:700;text-decoration:none;padding:10px 20px;border-radius:999px;">شوف كل الشغل</a>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- English Footer -->
          <tr>
            <td dir="ltr" style="padding:22px 28px 26px;background-color:#fcfaf6;border-top:1px solid #efe5d8;direction:ltr;text-align:left;font-family:'Inter',Arial,sans-serif;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <p style="margin:0 0 4px;font-size:15px;font-weight:800;color:#161412;text-align:left;">Abdelrazek Mahmoud</p>
                    <p style="margin:0 0 4px;font-size:12.5px;line-height:19px;color:#786d61;text-align:left;">Filmmaker · Video Editor · DaVinci Resolve Colorist · Motion Designer</p>
                    <p style="margin:0;font-size:12.5px;text-align:left;">
                      <a href="tel:+201014673393" style="color:#c96a10;font-weight:700;text-decoration:none;white-space:nowrap;">+201014673393</a>
                    </p>
                  </td>
                  <td align="right" style="vertical-align:middle;white-space:nowrap;padding-left:12px;">
                    <a href="https://wa.me/201014673393" style="display:inline-block;width:36px;height:36px;line-height:36px;text-align:center;background-color:#ffffff;border:1px solid #e2d6c6;border-radius:50%;text-decoration:none;margin-right:6px;">
                      <img src="https://img.icons8.com/ios-filled/36/161412/whatsapp.png" alt="WhatsApp" width="18" height="18" style="display:inline-block;vertical-align:middle;border:0;" />
                    </a>
                    <a href="https://www.instagram.com/abdelrazek730/" style="display:inline-block;width:36px;height:36px;line-height:36px;text-align:center;background-color:#ffffff;border:1px solid #e2d6c6;border-radius:50%;text-decoration:none;margin-right:6px;">
                      <img src="https://img.icons8.com/ios-filled/36/161412/instagram-new.png" alt="Instagram" width="18" height="18" style="display:inline-block;vertical-align:middle;border:0;" />
                    </a>
                    <a href="https://linkedin.com/in/abdelrazek-mahmoud-a8759b308" style="display:inline-block;width:36px;height:36px;line-height:36px;text-align:center;background-color:#ffffff;border:1px solid #e2d6c6;border-radius:50%;text-decoration:none;">
                      <img src="https://img.icons8.com/ios-filled/36/161412/linkedin.png" alt="LinkedIn" width="18" height="18" style="display:inline-block;vertical-align:middle;border:0;" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function main() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const html = buildEmailHtml({
    company: companyName,
    nameEn: contactEn,
    nameAr: contactAr,
    logoUrl: LOGO_URL,
  });

  const info = await transporter.sendMail({
    from: `"Abdelrazek Mahmoud — ARZ" <${GMAIL_USER}>`,
    to: recipients.join(", "),
    subject: `Quick video idea for ${companyName} — ARZ`,
    html,
  });

  console.log(`✅ Sent successfully to: ${recipients.join(", ")}`);
  console.log(`   Message ID: ${info.messageId}`);
}

main().catch((err) => {
  console.error("❌ Failed to send email:", err.message);
  process.exit(1);
});

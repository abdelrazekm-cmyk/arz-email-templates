/**
 * ARZ Portfolio — Design Tokens
 * Mirrored from https://arz-portfolio.me/ (styles.css)
 * Theme: Cinematic Espresso & Honey-Amber · High-End Editorial Portfolio
 */
export const arzTheme = {
  colors: {
    bg: "#110E0A",
    bgAlt: "#17120D",
    surface: "#1F1812",
    surfaceAlt: "#281F17",
    /** Email-safe solid approximations of rgba(219, 155, 62, 0.16 / 0.30) */
    border: "#332719",
    borderStrong: "#4E3A21",
    text: "#F4EEE6",
    muted: "#A99E90",
    dim: "#73685B",
    accent: "#DB9B3E",
    accentBright: "#EAAD54",
    accentInk: "#171005",
    bronze: "#94662D",
    recRed: "#E5484D",
    liveGreen: "#46A758",
  },
  fonts: {
    display:
      '"Bricolage Grotesque", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace',
    arabic: '"Cairo", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  radius: {
    sm: "10px",
    md: "16px",
    lg: "20px",
    pill: "999px",
  },
  brand: {
    name: "ARZ Portfolio",
    studio: "ARZ Studio",
    owner: "Abdelrazek Mahmoud",
    role: "Senior Video Editor · DaVinci Resolve Colorist · Motion Designer",
    location: "Mansoura, Egypt — working worldwide",
    tagline: "Videos that stop the scroll — and sell.",
    logoMarkUrl: "https://arz-portfolio.me/assets/logo-mark.png",
    portfolioUrl: "https://arz-portfolio.me/",
    cvUrl: "https://arz-portfolio.me/ARZ_CV.pdf",
    email: "abdelrazekwork72@gmail.com",
    whatsappUrl:
      "https://wa.me/201014673393?text=Hi%20Abdelrazek%2C%20I%20saw%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20video%20project.",
    whatsappDirectUrl: "https://wa.me/201014673393",
    instagramUrl: "https://www.instagram.com/abdelrazek730/",
    linkedinUrl: "https://linkedin.com/in/abdelrazek-mahmoud-a8759b308",
    upworkUrl: "https://upwork.com/freelancers/abdelrazekmahmoud",
  },
  metrics: [
    { value: "500+", label: "Videos Delivered" },
    { value: "950K+", label: "Peak Reel Views" },
    { value: "72h", label: "Fast Turnaround" },
    { value: "5.0★", label: "Client Rating" },
  ],
} as const;

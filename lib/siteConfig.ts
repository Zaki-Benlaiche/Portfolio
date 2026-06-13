/**
 * Centralized site configuration.
 *
 * Single source of truth for personal data, contact info, and social links.
 * Edit values here only — every component reads from this file, so there is
 * no risk of mismatched emails / URLs across the site.
 */

export const siteConfig = {
  name: "Zaki Benlaiche",
  shortName: "Zaki.dev",
  role: "AI, Full-Stack & Mobile Developer",
  tagline:
    "AI-Focused developer specializing in intelligent multi-agent systems, LLM integrations, scalable web applications, and cross-platform mobile apps with React Native.",
  description:
    "Portfolio of Zaki Benlaiche — AI-Focused Full-Stack & Mobile Developer building intelligent multi-agent systems, LLM integrations, scalable web applications, and cross-platform Android & iOS apps with React Native.",

  // Canonical production URL (used for metadata, sitemap, JSON-LD).
  url: "https://ben-zaki.vercel.app",

  // Public contact email shown on the site AND where the contact form delivers.
  email: "benlaichezakaria1902@gmail.com",

  location: "Algeria",
  ogImage: "/profile.jpg",
  cvPath: "/cv",

  social: {
    github: "https://github.com/zaki-benlaiche",
    linkedin: "https://linkedin.com/in/zaki-benlaiche",
    twitter: "https://twitter.com/zaki_benlaiche",
  },

  twitterHandle: "@zaki_benlaiche",
} as const;

export type SiteConfig = typeof siteConfig;

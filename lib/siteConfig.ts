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
  role: "AI & Full-Stack Developer",
  tagline:
    "AI-Focused Full-Stack Developer specializing in intelligent multi-agent systems, LLM integrations, and scalable web applications.",
  description:
    "Portfolio of Zaki Benlaiche — AI-Focused Full-Stack Developer specializing in intelligent multi-agent systems, LLM integrations, and scalable web applications.",

  // Canonical production URL (used for metadata, sitemap, JSON-LD).
  url: "https://ben-zaki.vercel.app",

  // Public contact email shown on the site AND where the contact form delivers.
  email: "benlaichezakaria1902@gmail.com",

  location: "Algeria",
  ogImage: "/ARZ.jpg",
  cvPath: "/cv.pdf",

  social: {
    github: "https://github.com/zaki-benlaiche",
    linkedin: "https://linkedin.com/in/zaki-benlaiche",
    twitter: "https://twitter.com/zaki_benlaiche",
  },

  twitterHandle: "@zaki_benlaiche",
} as const;

export type SiteConfig = typeof siteConfig;

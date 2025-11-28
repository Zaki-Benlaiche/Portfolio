// src/app/head.tsx
export const metadata = {
  title: "Ben Zaki | Portfolio",
  description:
    "Portfolio of Zaki Benlaiche, showcasing React, Next.js, TailwindCSS projects.",
  keywords: ["Zaki Benlaiche", "Portfolio", "React", "Next.js", "Tailwind CSS", "Frontend Developer"],
  authors: [{ name: "Zaki Benlaiche", url: "https://ben-zaki.vercel.app" }],
  creator: "Zaki Benlaiche",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  icons: {
    icon: "/ARZ.jpg",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Ben Zaki | Portfolio",
    description:
      "Portfolio of Zaki Benlaiche, showcasing React, Next.js, TailwindCSS projects.",
    url: "https://ben-zaki.vercel.app/",
    siteName: "Ben Zaki Portfolio",
    images: [
      {
        url: "/ARZ.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Zaki | Portfolio",
    description:
      "Portfolio of Zaki Benlaiche, showcasing React, Next.js, TailwindCSS projects.",
    creator: "@zaki_benlaiche",
    images: ["/og-image.png"],
  },
};

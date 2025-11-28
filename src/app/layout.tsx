// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaki Benlaiche | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Zaki Benlaiche, Web Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Zaki",
    "Ben Aicha",
    "Developer",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Zaki Benlaiche", url: "https://ben-zaki.vercel.app" }],
  creator: "Zaki Benlaiche",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  icons: {
    icon: "ARZ.jpg",
    shortcut: "ARZ.jpg",
    apple: "ARZ.jpg",
  },
  openGraph: {
    title: "Zaki Benlaiche | Portfolio",
    description:
      "Portfolio of Zaki Benlaiche, Web Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://ben-zaki.vercel.app/",
    siteName: "Zaki Benlaiche Portfolio",
    images: [
      {
        url: "ARZ.jpg",
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
    title: "Zaki Benlaiche | Portfolio",
    description:
      "Portfolio of Zaki Benlaiche, Web Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
    creator: "@zaki_benlaiche",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

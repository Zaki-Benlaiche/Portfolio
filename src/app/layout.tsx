import type { Metadata, Viewport } from "next";
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

const BASE_URL = "https://ben-zaki.vercel.app";

export const metadata: Metadata = {
  title: "Zaki Benlaiche | AI & Full-Stack Developer",
  description:
    "Portfolio of Zaki Benlaiche — AI-Focused Full-Stack Developer specializing in intelligent multi-agent systems, LLM integrations, and scalable web applications.",
  keywords: [
    "Zaki Benlaiche",
    "AI Developer",
    "Full-Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "LangChain",
    "AI Agents",
    "LLM Systems",
  ],
  authors: [{ name: "Zaki Benlaiche", url: BASE_URL }],
  creator: "Zaki Benlaiche",
  icons: {
    icon: "/ARZ.jpg",
    shortcut: "/ARZ.jpg",
    apple: "/ARZ.jpg",
  },
  openGraph: {
    title: "Zaki Benlaiche | AI & Full-Stack Developer",
    description:
      "Portfolio of Zaki Benlaiche — AI-Focused Full-Stack Developer specializing in intelligent multi-agent systems, LLM integrations, and scalable web applications.",
    url: BASE_URL,
    siteName: "Zaki Benlaiche Portfolio",
    images: [
      {
        url: `${BASE_URL}/ARZ.jpg`,
        width: 1200,
        height: 630,
        alt: "Zaki Benlaiche Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaki Benlaiche | AI & Full-Stack Developer",
    description:
      "Portfolio of Zaki Benlaiche — AI-Focused Full-Stack Developer specializing in intelligent multi-agent systems, LLM integrations, and scalable web applications.",
    creator: "@zaki_benlaiche",
    images: [`${BASE_URL}/ARZ.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#020408" },
    { media: "(prefers-color-scheme: dark)",  color: "#020408" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020408]`}>
        {children}
      </body>
    </html>
  );
}

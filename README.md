# Zaki Benlaiche — Portfolio

A modern, AI-themed personal portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**.

🔗 **Live:** [ben-zaki.vercel.app](https://ben-zaki.vercel.app)

---

## ✨ Features

- **AI-inspired design** — custom 3D particle canvas, typewriter roles, glassmorphism, and smooth motion.
- **Sections** — Hero, About, Projects (filterable + modal), Experience timeline, and Contact.
- **Contact form** — server-side validation, input sanitization, rate limiting, and honeypot spam protection via [Resend](https://resend.com).
- **SEO-ready** — metadata, Open Graph / Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`, and a PWA manifest.
- **Accessible** — labelled form fields, skip-to-content link, visible focus rings, and `prefers-reduced-motion` support.
- **Single source of truth** — all personal data lives in [`lib/siteConfig.ts`](lib/siteConfig.ts).

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=your_resend_api_key
```

Get a key at [resend.com/api-keys](https://resend.com/api-keys). Without it, the contact form returns a configuration error.

---

## 🛠️ Customization

| What | Where |
|------|-------|
| Name, email, URL, social links | [`lib/siteConfig.ts`](lib/siteConfig.ts) |
| Projects | [`components/Projects.tsx`](components/Projects.tsx) |
| Experience / timeline | [`components/Experience.tsx`](components/Experience.tsx) |
| Tech stack & services | [`components/About.tsx`](components/About.tsx) |
| CV file | drop your `cv.pdf` into [`public/`](public/) |

> **Note:** The "Download CV" button links to `/cv.pdf`. Add your résumé as `public/cv.pdf` for it to work.

---

## 📦 Scripts

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Run the production build
npm run lint    # Lint the project
```

---

## 🧰 Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend](https://resend.com) for email
- [Lucide](https://lucide.dev) & [React Icons](https://react-icons.github.io/react-icons/)

---

## 🚢 Deployment

Optimized for [Vercel](https://vercel.com). Push to your repo, import the project, set the `RESEND_API_KEY` environment variable, and deploy.

---

© Zaki Benlaiche. All rights reserved.

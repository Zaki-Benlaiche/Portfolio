import type { Metadata } from "next";
import { Mail, MapPin, Globe, Github, Linkedin } from "lucide-react";
import CvActions from "@/components/CvActions";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "CV — Résumé",
  description: `Résumé of ${siteConfig.name}, ${siteConfig.role}.`,
};

const summary =
  "AI-focused Full-Stack & Mobile developer. I design and ship intelligent multi-agent systems, scalable web platforms, and cross-platform Android & iOS apps with React Native. Comfortable owning products end-to-end — from architecture and backend to polished, performant UI.";

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { label: "Mobile", items: ["React Native", "Expo"] },
  { label: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "REST APIs"] },
  { label: "AI / LLM", items: ["LangChain", "OpenAI API", "Multi-Agent Systems", "RAG"] },
  { label: "Tools", items: ["Git", "Docker", "Vercel"] },
];

const experience: { role: string; org: string; period: string; points: string[] }[] = [
  {
    role: "AI, Full-Stack & Mobile Developer",
    org: "Freelance",
    period: "2024 — Present",
    points: [
      "Design and ship cross-platform mobile apps (Android & iOS) with React Native and Expo.",
      "Build scalable web applications with Next.js, TypeScript, and Node.js / FastAPI backends.",
      "Develop AI features — multi-agent systems, LLM integrations, and RAG pipelines.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Independent Projects",
    period: "2023 — 2024",
    points: [
      "Delivered full-stack platforms with type-safe stacks, auth, and payment integrations.",
      "Owned UI/UX, API design, and database modeling with PostgreSQL / Prisma.",
    ],
  },
];

const projects: { name: string; desc: string; link: string; stack: string }[] = [
  {
    name: "NaqlGo",
    desc: "Cross-platform transport & logistics platform (web + React Native mobile) with real-time booking and tracking.",
    link: "https://naql-go.vercel.app/",
    stack: "React Native · Next.js · TypeScript · Node.js",
  },
  {
    name: "Reserve — Delivery App",
    desc: "Online ordering & delivery platform with a fast, app-like interface.",
    link: "https://reserve-vite.vercel.app/",
    stack: "React · Vite · TypeScript · Tailwind CSS",
  },
  {
    name: "Zaguett Family Restaurant",
    desc: "Modern, mobile-first website for the Zaguett Family restaurant.",
    link: "https://zaguet.vercel.app/",
    stack: "Next.js · React · TypeScript · Tailwind CSS",
  },
  {
    name: "Personal Portfolio",
    desc: "AI-themed portfolio with a 3D particle canvas, SEO, and a server-side contact API.",
    link: "https://zaki-benlaiche.vercel.app/",
    stack: "Next.js 15 · React 19 · Tailwind CSS 4 · Framer Motion",
  },
];

// TODO: replace with your real education details.
const education = {
  degree: "Computer Science",
  school: "University",
  period: "",
};

export default function CvPage() {
  return (
    <main className="min-h-screen bg-zinc-100 py-8 px-4 text-zinc-800">
      <CvActions />

      <article className="cv-sheet w-full max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-8 md:p-12 leading-relaxed">
        {/* Header */}
        <header className="border-b border-zinc-200 pb-5 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">{siteConfig.name}</h1>
          <p className="text-blue-700 font-medium mt-1">{siteConfig.role}</p>

          <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 text-sm text-zinc-600">
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-blue-700">
              <Mail size={14} /> {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {siteConfig.location}
            </span>
            <a href={siteConfig.url} className="inline-flex items-center gap-1.5 hover:text-blue-700">
              <Globe size={14} /> {siteConfig.url.replace(/^https?:\/\//, "")}
            </a>
            <a href={siteConfig.social.github} className="inline-flex items-center gap-1.5 hover:text-blue-700">
              <Github size={14} /> {siteConfig.social.github.replace(/^https?:\/\//, "")}
            </a>
            <a href={siteConfig.social.linkedin} className="inline-flex items-center gap-1.5 hover:text-blue-700">
              <Linkedin size={14} /> {siteConfig.social.linkedin.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm text-zinc-700">{summary}</p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {skillGroups.map((g) => (
              <div key={g.label} className="text-sm">
                <span className="font-semibold text-zinc-900">{g.label}: </span>
                <span className="text-zinc-700">{g.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-4">
            {experience.map((e) => (
              <div key={e.role}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-zinc-900 text-sm">
                    {e.role} <span className="font-normal text-zinc-500">· {e.org}</span>
                  </h3>
                  <span className="text-xs text-zinc-500 whitespace-nowrap">{e.period}</span>
                </div>
                <ul className="mt-1.5 ml-4 list-disc text-sm text-zinc-700 space-y-1">
                  {e.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Selected Projects">
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.name} className="text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-zinc-900">{p.name}</h3>
                  <a href={p.link} className="text-xs text-blue-700 hover:underline whitespace-nowrap">
                    {p.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </a>
                </div>
                <p className="text-zinc-700">{p.desc}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{p.stack}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <h3 className="font-semibold text-zinc-900">
              {education.degree} <span className="font-normal text-zinc-500">· {education.school}</span>
            </h3>
            {education.period && <span className="text-xs text-zinc-500">{education.period}</span>}
          </div>
        </Section>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 border-b border-zinc-200 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

import type { Metadata } from "next";
import {
  Mail, Phone, MapPin, Globe, Github, Linkedin,
  Briefcase, FolderGit2, GraduationCap, Wrench, Languages as LanguagesIcon,
  Sparkles, ExternalLink,
} from "lucide-react";
import CvActions from "@/components/CvActions";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "CV — Résumé",
  description: `Résumé of ${siteConfig.name}, ${siteConfig.role}.`,
};

const summary =
  "AI-focused Full-Stack & Mobile developer who designs and ships intelligent multi-agent systems, scalable web platforms, and cross-platform Android & iOS apps with React Native. I own products end-to-end — architecture, backend, and polished, performant UI — turning ideas into fast, real-world products.";

const highlights = [
  { value: "3+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "5+", label: "AI systems" },
];

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { label: "Mobile", items: ["React Native", "Expo"] },
  { label: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "REST APIs"] },
  { label: "AI / LLM", items: ["LangChain", "OpenAI API", "Multi-Agent", "RAG"] },
  { label: "Tools", items: ["Git", "Docker", "Vercel"] },
];

// TODO: adjust proficiency to match yours.
const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Professional" },
  { name: "English", level: "Professional" },
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
      "Owned UI/UX, REST API design, and database modeling with PostgreSQL / Prisma.",
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
    desc: "AI-themed portfolio with a 3D particle canvas, full SEO, and a server-side contact API.",
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
    <main className="min-h-screen bg-zinc-200/70 py-8 px-4 text-zinc-800">
      <CvActions />

      <article className="cv-sheet w-full max-w-[840px] mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header band */}
        <header className="relative bg-slate-900 text-white px-9 md:px-11 py-9">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-[34px] leading-none font-extrabold tracking-tight">
                {siteConfig.name}
              </h1>
              <p className="text-blue-300 font-medium mt-2 tracking-wide">{siteConfig.role}</p>
            </div>
            <div className="flex gap-5">
              {highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <p className="text-2xl font-bold leading-none">{h.value}</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 text-[13px] text-slate-300">
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Mail size={13} /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Phone size={13} /> {siteConfig.phone}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} /> {siteConfig.location}
            </span>
            <a href={siteConfig.url} className="inline-flex items-center gap-1.5 hover:text-white">
              <Globe size={13} /> {siteConfig.url.replace(/^https?:\/\//, "")}
            </a>
            <a href={siteConfig.social.github} className="inline-flex items-center gap-1.5 hover:text-white">
              <Github size={13} /> {siteConfig.social.github.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
            <a href={siteConfig.social.linkedin} className="inline-flex items-center gap-1.5 hover:text-white">
              <Linkedin size={13} /> {siteConfig.social.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          </div>
        </header>

        {/* Body: sidebar + main */}
        <div className="grid md:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="bg-slate-50 border-r border-slate-200 px-7 py-8 space-y-7">
            <Block icon={<Wrench size={14} />} title="Skills">
              <div className="space-y-2.5">
                {skillGroups.map((g) => (
                  <div key={g.label}>
                    <p className="text-[11px] font-bold text-slate-900">{g.label}</p>
                    <p className="text-[12px] text-slate-600 leading-snug">{g.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={<LanguagesIcon size={14} />} title="Languages">
              <div className="space-y-1.5">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-baseline justify-between gap-2 text-[12px]">
                    <span className="font-semibold text-slate-800">{l.name}</span>
                    <span className="text-slate-500">{l.level}</span>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={<GraduationCap size={14} />} title="Education">
              <p className="text-[12.5px] font-semibold text-slate-900">{education.degree}</p>
              <p className="text-[12px] text-slate-600">{education.school}</p>
              {education.period && <p className="text-[11px] text-slate-500 mt-0.5">{education.period}</p>}
            </Block>
          </aside>

          {/* Main */}
          <div className="px-9 py-8 space-y-7">
            <Block icon={<Sparkles size={15} />} title="Profile">
              <p className="text-[13px] text-slate-700 leading-relaxed">{summary}</p>
            </Block>

            <Block icon={<Briefcase size={15} />} title="Experience">
              <div className="space-y-4">
                {experience.map((e) => (
                  <div key={e.role} className="relative pl-4 border-l-2 border-slate-200">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-600" />
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-bold text-slate-900 text-[13.5px]">{e.role}</h3>
                      <span className="text-[11px] text-slate-500 whitespace-nowrap">{e.period}</span>
                    </div>
                    <p className="text-[12px] text-blue-700 font-medium">{e.org}</p>
                    <ul className="mt-1.5 ml-3.5 list-disc text-[12.5px] text-slate-700 space-y-1 marker:text-slate-400">
                      {e.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon={<FolderGit2 size={15} />} title="Selected Projects">
              <div className="space-y-3.5">
                {projects.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-bold text-slate-900 text-[13px]">{p.name}</h3>
                      <a
                        href={p.link}
                        className="inline-flex items-center gap-1 text-[11px] text-blue-700 hover:underline whitespace-nowrap"
                      >
                        {p.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        <ExternalLink size={10} />
                      </a>
                    </div>
                    <p className="text-[12.5px] text-slate-700 leading-snug">{p.desc}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{p.stack}</p>
                  </div>
                ))}
              </div>
            </Block>
          </div>
        </div>
      </article>
    </main>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 mb-3">
        <span className="text-blue-600">{icon}</span>
        {title}
        <span className="flex-1 h-px bg-slate-200 ml-1" />
      </h2>
      {children}
    </section>
  );
}

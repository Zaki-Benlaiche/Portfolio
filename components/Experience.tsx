"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

type EntryType = "work" | "education" | "project";

interface TimelineEntry {
  type: EntryType;
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
}

/**
 * Edit these entries with your real experience.
 * Keep them ordered most-recent first.
 */
const timeline: TimelineEntry[] = [
  {
    type: "work",
    period: "2024 — Present",
    title: "AI, Full-Stack & Mobile Developer",
    org: "Freelance",
    description:
      "Designing and shipping intelligent multi-agent systems, LLM-powered tools, scalable web applications, and cross-platform Android & iOS apps with React Native. Owning projects end-to-end from architecture to deployment.",
    tags: ["React Native", "Expo", "Next.js", "LangChain"],
  },
  {
    type: "project",
    period: "2025",
    title: "Stratos AI — Business Intelligence Agent",
    org: "Personal R&D",
    description:
      "Built a multi-agent analytics platform that autonomously analyzes datasets and generates executive insights through a natural-language interface.",
    tags: ["Multi-Agent", "Python", "PostgreSQL", "Next.js"],
  },
  {
    type: "work",
    period: "2023 — 2024",
    title: "Full-Stack Developer",
    org: "Independent Projects",
    description:
      "Delivered full-stack platforms — clinic management, restaurant booking, and e-commerce systems — with type-safe stacks, role-based access, and payment integrations.",
    tags: ["React", "TypeScript", "Prisma", "Stripe"],
  },
  {
    type: "education",
    period: "Education",
    title: "Computer Science",
    org: "University",
    description:
      "Foundations in algorithms, data structures, software engineering, and machine learning — applied continuously through hands-on project work.",
    tags: ["Algorithms", "ML", "Software Engineering"],
  },
];

const typeMeta: Record<
  EntryType,
  { icon: React.ReactNode; label: string; ring: string; dot: string }
> = {
  work: {
    icon: <Briefcase size={15} />,
    label: "Work",
    ring: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    dot: "bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.7)]",
  },
  project: {
    icon: <Rocket size={15} />,
    label: "Project",
    ring: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    dot: "bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.7)]",
  },
  education: {
    icon: <GraduationCap size={15} />,
    label: "Education",
    ring: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    dot: "bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]",
  },
};

const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 text-zinc-300 overflow-hidden bg-[#040608]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right_center,rgba(168,85,247,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400/60 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            03. Trajectory
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 mb-4">
            Experience &amp; Journey
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((entry, i) => {
              const meta = typeMeta[entry.type];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={`${entry.title}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[19px] md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <span className={`block w-3 h-3 rounded-full ${meta.dot}`} />
                  </div>

                  {/* Spacer for the empty half on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`flex-1 md:w-1/2 ml-12 md:ml-0 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="group relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)]">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${meta.ring}`}
                        >
                          {meta.icon}
                          {meta.label}
                        </span>
                        <span className="text-zinc-600 font-mono text-[11px] tracking-wider shrink-0">
                          {entry.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors leading-tight">
                        {entry.title}
                      </h3>
                      <p className="text-blue-400/70 text-xs font-mono mb-3">{entry.org}</p>

                      <p className="text-zinc-500 text-sm font-light leading-relaxed mb-4">
                        {entry.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-white/5 border border-white/8 text-zinc-400 text-[10px] uppercase tracking-wider font-mono rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

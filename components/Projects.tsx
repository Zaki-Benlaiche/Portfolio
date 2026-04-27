"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { ExternalLink, Code2, Layers, Brain, Globe } from "lucide-react";

type Category = "All" | "AI / LLM" | "Full-Stack" | "Web";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  tech: string[];
  category: Category;
  github: string;
  demo: string;
  year: string;
  status: "Live" | "In Development" | "Completed";
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    shortDesc: "AI-aesthetic personal portfolio with 3D interactive canvas.",
    description:
      "A meticulously crafted personal portfolio built with React 19 and Next.js 15. Features a custom 3D particle canvas rendered via WebGL-style Canvas API, typewriter animations, smooth Framer Motion transitions, and a fully responsive AI-inspired design system. Integrated Resend for contact form handling.",
    image: "/projects/portfolio.jpg",
    tech: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Resend"],
    category: "Web",
    github: "https://github.com/Zaki-Benlaiche/Portfolio",
    demo: "https://zaki-arz.vercel.app/",
    year: "2025",
    status: "Live",
    featured: true,
  },
  {
    id: 2,
    title: "Stratos AI",
    shortDesc: "Strategic Business Intelligence Agent powered by multi-agent architecture.",
    description:
      "Stratos AI is an intelligent business analytics platform powered by a multi-agent architecture. It autonomously analyzes unstructured CSV datasets in real-time to surface actionable insights, generate executive briefs, and create data visualizations — all through a natural language interface. Built with LangChain for agent orchestration and FastAPI as the backend inference layer.",
    image: "/projects/project5.jpg",
    tech: ["Next.js", "Python", "LangChain", "OpenAI API", "FastAPI", "PostgreSQL"],
    category: "AI / LLM",
    github: "#",
    demo: "#",
    year: "2025",
    status: "In Development",
    featured: true,
  },
  {
    id: 3,
    title: "Patient Management System",
    shortDesc: "Clinic and appointment management application.",
    description:
      "A comprehensive full-stack clinic management system enabling efficient patient record management, appointment scheduling, treatment tracking, and billing. Features role-based access control for doctors, nurses, and admins. Built with a type-safe stack using Prisma ORM and PostgreSQL, with a clean dashboard-driven UI.",
    image: "/projects/patients.jpg",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "Full-Stack",
    github: "#",
    demo: "#",
    year: "2024",
    status: "Completed",
  },
  {
    id: 4,
    title: "Restaurant Booking System",
    shortDesc: "Smart table reservation platform with real-time order tracking.",
    description:
      "An intelligent restaurant management platform featuring real-time table reservation, order tracking, automated confirmation emails, and a kitchen dashboard. Supports concurrent multi-table reservations with conflict detection, and integrates a smart availability calendar for high-throughput service environments.",
    image: "/projects/restaurant.jpg",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Nodemailer"],
    category: "Full-Stack",
    github: "#",
    demo: "#",
    year: "2024",
    status: "Completed",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    shortDesc: "Full-featured storefront with Stripe payment integration.",
    description:
      "A performant e-commerce storefront supporting comprehensive product catalog management, dynamic cart synchronization, wishlist functionality, and secure Stripe payment processing. Includes an admin dashboard for order management, inventory control, and sales analytics. Optimized for Core Web Vitals with Next.js image optimization and SSR.",
    image: "/projects/ecommerce.jpg",
    tech: ["Next.js", "React", "TypeScript", "Stripe API", "Tailwind CSS", "PostgreSQL"],
    category: "Full-Stack",
    github: "#",
    demo: "#",
    year: "2024",
    status: "Completed",
  },
];

const CATEGORIES: Category[] = ["All", "AI / LLM", "Full-Stack", "Web"];

const categoryIcon: Record<Category, React.ReactNode> = {
  "All":        <Layers size={13} />,
  "AI / LLM":  <Brain size={13} />,
  "Full-Stack": <Code2 size={13} />,
  "Web":        <Globe size={13} />,
};

const statusColor: Record<Project["status"], string> = {
  "Live":           "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "In Development": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "Completed":      "text-zinc-400 border-zinc-400/30 bg-zinc-400/10",
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = selectedProject ? "hidden" : "unset";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-24 px-6 text-zinc-300 min-h-screen bg-[#050505]">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left_center,rgba(59,130,246,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-blue-400/60 font-mono text-xs tracking-[0.3em] uppercase block text-center mb-4">
            02. Selected Work
          </span>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-blue-500/60 to-transparent mx-auto md:mx-0 mb-6" />
            <p className="text-zinc-500 max-w-2xl text-lg font-light leading-relaxed">
              A curated selection of projects ranging from intelligent AI-agent platforms to scalable full-stack applications.
            </p>
          </div>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-blue-500/20 border-blue-400/40 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.2)]"
                  : "bg-white/5 border-white/10 text-zinc-500 hover:text-zinc-200 hover:border-white/25"
              }`}
            >
              {categoryIcon[cat]}
              {cat}
              {activeCategory === cat && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              )}
            </button>
          ))}
          <span className="ml-auto hidden md:flex items-center text-zinc-700 font-mono text-xs">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex flex-col bg-[#0a0a0a] border border-white/8 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)] cursor-pointer h-full relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600/80 to-purple-600/70 text-[10px] font-mono text-white tracking-widest uppercase border border-blue-400/20">
                    Featured
                  </div>
                )}

                {/* Project number */}
                <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
                  <span className="text-zinc-500 font-mono text-[10px]">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Image */}
                <div className="relative w-full h-52 overflow-hidden border-b border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[40%] group-hover:grayscale-0 brightness-85 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-full transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                      View Details <ExternalLink size={12} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title + status */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <span className={`shrink-0 px-2 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-widest mt-0.5 ${statusColor[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-zinc-500 text-sm font-light leading-relaxed mb-5 flex-grow">
                    {project.shortDesc}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/8 text-zinc-400 text-[10px] uppercase tracking-wider font-mono rounded-md">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 bg-white/5 border border-white/8 text-zinc-600 text-[10px] font-mono rounded-md">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-zinc-600">
                    <span>{project.year}</span>
                    <span className="text-zinc-700">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 z-30 p-2 bg-black/60 hover:bg-white text-zinc-400 hover:text-black rounded-full backdrop-blur-md transition-all duration-200"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={14} />
              </button>

              {/* Left — image */}
              <div className="relative w-full md:w-[45%] h-60 md:h-auto md:min-h-[440px] border-r border-white/5 bg-zinc-950 flex-shrink-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover brightness-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/90 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:hidden" />

                {/* Overlay info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between md:hidden">
                  <span className={`px-2.5 py-1 rounded-full border text-[9px] font-mono uppercase ${statusColor[selectedProject.status]}`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-zinc-500 font-mono text-xs">{selectedProject.year}</span>
                </div>
              </div>

              {/* Right — details */}
              <div className="flex-1 p-8 md:p-10 flex flex-col bg-[#0a0a0a] overflow-y-auto">
                {/* Header */}
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex-1 leading-tight">
                    {selectedProject.title}
                  </h3>
                  <div className="hidden md:flex flex-col items-end gap-1 shrink-0">
                    <span className={`px-2.5 py-1 rounded-full border text-[9px] font-mono uppercase ${statusColor[selectedProject.status]}`}>
                      {selectedProject.status}
                    </span>
                    <span className="text-zinc-600 font-mono text-[10px]">{selectedProject.year}</span>
                  </div>
                </div>

                <div className="w-10 h-px bg-zinc-700 mb-5" />

                <p className="text-zinc-400 text-sm leading-relaxed mb-7 flex-grow font-light">
                  {selectedProject.description}
                </p>

                {/* Tech */}
                <div className="mb-7">
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Code2 size={12} /> Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 text-zinc-200 text-xs font-mono rounded-lg hover:border-blue-500/30 hover:bg-blue-500/5 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-5 border-t border-white/8">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => selectedProject.github === "#" && e.preventDefault()}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      selectedProject.github === "#"
                        ? "bg-zinc-900 border border-zinc-800 text-zinc-600 cursor-not-allowed opacity-50"
                        : "bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white"
                    }`}
                  >
                    <FaGithub size={15} /> View Source
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => selectedProject.demo === "#" && e.preventDefault()}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      selectedProject.demo === "#"
                        ? "bg-zinc-800 text-zinc-600 cursor-not-allowed opacity-50"
                        : "bg-white hover:bg-zinc-200 text-black"
                    }`}
                  >
                    Live Demo <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

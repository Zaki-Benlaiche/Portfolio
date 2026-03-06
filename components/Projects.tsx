"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  details: string;
  github: string;
  demo: string;
  tech: string[];
}

export default function ProjectsSection() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "Professional portfolio showcasing my work and AI aesthetic.",
      image: "/projects/portfolio.jpg",
      details:
        "This is my personal portfolio built with React, Next.js, and Tailwind CSS. It features a meticulously crafted minimalist AI aesthetic, smooth Framer Motion animations, and a fully responsive grid system.",
      github: "https://github.com/Zaki-Benlaiche/Portfolio",
      demo: "https://zaki-arz.vercel.app/",
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Stratos AI",
      description: "Strategic Business Intelligence Agent.",
      image: "/projects/project5.jpg",
      details:
        "Stratos AI is an intelligent business analytics platform powered by an AI agent architecture. It is capable of autonomously analyzing unstructured CSV datasets in real-time to surface actionable insights and executive briefs.",
      github: "#",
      demo: "#",
      tech: ["Next.js", "Python", "LangChain", "OpenAI API", "FastAPI"],
    },
    {
      title: "Patient Management App",
      description: "Modern application for clinic and appointment management.",
      image: "/projects/patients.jpg",
      details:
        "A highly scalable system allowing for efficient management of distinct patient records, appointment scheduling, and treatment tracking using a modernized stack.",
      github: "#",
      demo: "#",
      tech: ["React", "Next.js", "Tailwind CSS", "State Management"],
    },
    {
      title: "Restaurant Booking System",
      description: "Smart table reservation system with dynamic order tracking.",
      image: "/projects/restaurant.jpg",
      details:
        "Provides an intelligent table reservation system, order tracking integration, and automated confirmations designed for high-throughput service environments.",
      github: "#",
      demo: "#",
      tech: ["React", "Tailwind CSS", "Booking Logic"],
    },
    {
      title: "E-commerce Platform",
      description: "Performant e-commerce storefront with integrated payments.",
      image: "/projects/ecommerce.jpg",
      details:
        "Professional online store supporting comprehensive product catalog management, dynamic cart synchronization, and secure Stripe payment gateways.",
      github: "#",
      demo: "#",
      tech: ["Next.js", "React", "Stripe API", "Tailwind CSS"],
    },
  ];

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    // Prevent scrolling when modal is open
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6 text-zinc-300 min-h-[100vh] bg-[#050505]">

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] opacity-20 pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto mb-16"
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-white/50 to-transparent mx-auto md:mx-0 mb-6" />
          <p className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
            A selection of my recent works ranging from intelligent AI-agent integrations to highly scalable full-stack applications.
          </p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer h-full"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden border-b border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[50%] group-hover:grayscale-0 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                {/* Hover overlay indicator */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges (Limited to 3 for clean UI on cards) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-zinc-300 text-[11px] uppercase tracking-wider font-mono rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-zinc-500 text-[11px] font-mono rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Modal / Expanded View */}
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
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white text-zinc-400 hover:text-black rounded-full backdrop-blur-md transition-all duration-300"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes size={16} />
              </button>

              {/* Left side: Image */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto md:min-h-[400px] border-r border-white/5 bg-zinc-900">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/80 md:to-[#0a0a0a] hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:hidden" />
              </div>

              {/* Right side: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col bg-[#0a0a0a] overflow-y-auto">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <div className="w-12 h-px bg-zinc-600 mb-6" />

                <p className="text-zinc-300 text-base font-light leading-relaxed mb-8 flex-grow">
                  {selectedProject.details}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-zinc-200 text-xs font-mono rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/10">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded-lg text-sm font-medium transition-colors w-full sm:w-auto"
                  >
                    <FaGithub size={16} />
                    View Source
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white hover:bg-zinc-200 text-black rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto"
                  >
                    View Demo
                    <FaExternalLinkAlt size={12} className="ml-1" />
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
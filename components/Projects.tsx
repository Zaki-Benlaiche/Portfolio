"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";

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
  const { ref } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "Professional portfolio showcasing my work.",
      image: "/projects/portfolio.jpg",
      details:
        "This is my personal portfolio built with React, TypeScript, and TailwindCSS. It features smooth animations and a fully responsive design.",
      github: "https://github.com/Zaki-Benlaiche/Portfolio",
      demo: "https://zaki-arz.vercel.app/",
      tech: ["React", "Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    },
    {
      title: "Patient Management App",
      description: "Web application for professional patient and appointment management.",
      image: "/projects/patients.jpg",
      details:
        "Allows efficient management of patients, appointments, and treatments. Built using React and Next.js with TailwindCSS.",
      github: "#",
      demo: "#",
      tech: ["React", "Next.js", "TailwindCSS", "State Management"],
    },
    {
      title: "Restaurant Booking System",
      description: "Smart table reservation system with order management.",
      image: "/projects/restaurant.jpg",
      details:
        "Provides a smart reservation system, order tracking, and confirmations. Built with React and TailwindCSS.",
      github: "#",
      demo: "#",
      tech: ["React", "TailwindCSS", "Forms & Booking Logic"],
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce store with shopping cart and online payment.",
      image: "/projects/ecommerce.jpg",
      details:
        "Professional online store supporting product management, cart, and payment gateways. Built using Next.js and React.",
      github: "#",
      demo: "#",
      tech: ["Next.js", "React", "Stripe API", "TailwindCSS"],
    },
    {
      title: "Stratos AI – Strategic Business Intelligence Agent",
      description: "An AI-powered business intelligence platform that analyzes uploaded CSV datasets and generates strategic insights, alerts, and executive reports using an intelligent agent architecture.",
      image: "/projects/project5.jpg",
      details:
        "Stratos AI is an intelligent business analytics platform powered by an AI agent capable of analyzing structured CSV datasets in real-time.",
      github: "#",
      demo: "#",
      tech: ["Next.js","TypeScript","TailwindCSS","Framer Motion","Python","LangChain","OpenAI API","Pandas","FastAPI"],
    },
  ];

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6 text-white min-h-[100vh]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Image src="/image3d.png" alt="3D Background" fill className="object-cover" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Projects</h2>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-blue-600/40 overflow-hidden group border border-gray-700 cursor-pointer"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:brightness-110 transition duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mb-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm transition"
                  >
                    Live Demo
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4 overflow-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 max-w-lg w-full rounded-lg shadow-lg p-6 relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-red-400"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={600}
                height={350}
                className="rounded-lg mb-4"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{selectedProject.details}</p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition"
                >
                  GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition"
                >
                  Live Demo
                </a>
              </div>

              {/* CTA */}
              <p className="text-gray-400 text-sm mt-4">
                Interested in collaborating?{" "}
                <a href="#contact" className="text-blue-400 underline">
                  Contact me
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
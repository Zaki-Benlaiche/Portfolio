"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  details: string;
  github: string;
  demo: string;
}

export default function ProjectsSection() {
  const { ref } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "موقع بورتفوليو احترافي يعرض جميع أعمالي.",
      image: "/projects/portfolio.png",
      details:
        "موقعي الشخصي يعرض مهاراتي في React، TypeScript، TailwindCSS. يحتوي على أنيميشن سلس وتصميم متجاوب.",
      github: "https://github.com/Zaki-Benlaiche/Portfolio",
      demo: "https://zaki-arz.vercel.app/",
    },
    {
      title: "تطبيق إدارة المرضى",
      description: "تطبيق ويب لإدارة المرضى والمواعيد بطريقة احترافية.",
      image: "/projects/patients.png",
      details:
        "يتيح التطبيق إدارة المرضى، المواعيد، والعلاجات بشكل سلس. تم تصميمه باستخدام React وNext.js مع TailwindCSS.",
      github: "#",
      demo: "#",
    },
    {
      title: "تطبيق حجز للمطاعم",
      description: "نظام حجز طاولات للمطاعم مع إدارة الطلبات.",
      image: "/projects/restaurant.png",
      details:
        "يوفر التطبيق نظام حجز ذكي للطاولات، متابعة الطلبات والتأكيدات. مبني باستخدام React وTailwindCSS.",
      github: "#",
      demo: "#",
    },
    {
      title: "متجر إلكتروني",
      description: "متجر إلكتروني كامل مع سلة مشتريات ودفع عبر الإنترنت.",
      image: "/projects/ecommerce.png",
      details:
        "متجر إلكتروني احترافي يدعم إدارة المنتجات، سلة المشتريات، والدفع عبر الإنترنت. تم بناءه باستخدام Next.js وReact.",
      github: "#",
      demo: "#",
    },
    {
      title: "مشروع خامس",
      description: "وصف قصير للمشروع الخامس.",
      image: "/projects/project5.png",
      details:
        "هذا المشروع يقدم مثالاً إضافياً على قدرتي في بناء تطبيقات ويب حديثة، مع تصميم متجاوب وتجربة مستخدم سلسة.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6 text-white min-h-[100vh]"
    >
      {/* خلفية 3D */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Image
          src="/image3d.png"
          alt="3D Background"
          fill
          className="object-cover"
        />
      </div>

      {/* محتوى Projects */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Projects</h2>

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
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex gap-3 mb-4">
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

      {/* Modal محسّن */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4 overflow-auto">
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
          </motion.div>
        </div>
      )}
    </section>
  );
}

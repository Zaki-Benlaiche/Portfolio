"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function AboutSection() {
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const aiSkills = [
    "Autonomous AI Agents",
    "RAG Architectures",
    "LLM Integration",
    "Prompt Engineering",
    "Vector Databases",
    "AI Workflow Automation"
  ];

  const techSkills = [
    "Next.js 15",
    "Python (FastAPI)",
    "TypeScript",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "REST & API Design"
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-[#0a0a0f] text-white overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-32">

        {/* ===== PHASE 1: PROFESSIONAL IDENTITY ===== */}
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 40 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Image */}
          <div className="relative group flex justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-700"></div>

            <div className="relative w-72 h-72 lg:w-[22rem] lg:h-[22rem] rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f1a] shadow-2xl">
              <Image
                src="/about/zaki.jpg"
                alt="Zaki Benlaiche – AI Engineer"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 leading-tight">
              Designing Intelligent Systems, Not Just Websites.
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              I am an <span className="text-blue-400 font-semibold">AI-Focused Full Stack Engineer</span> 
              specializing in building scalable web platforms powered by 
              <span className="italic text-white"> Autonomous AI Agents</span>, 
              advanced <span className="italic text-white">RAG architectures</span>, 
              and production-ready backend systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all">
                <h4 className="text-blue-400 font-bold mb-3">
                  Full-Stack Architecture
                </h4>
                <p className="text-sm text-gray-400">
                  Building complete systems from responsive user interfaces
                  to secure, scalable backend APIs and databases.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all">
                <h4 className="text-cyan-400 font-bold mb-3">
                  AI Systems Engineering
                </h4>
                <p className="text-sm text-gray-400">
                  Designing LLM-powered solutions, intelligent automation workflows,
                  and agent-based architectures for real-world applications.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== PHASE 2: TECHNICAL CAPABILITIES ===== */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-3 tracking-wide">
              Core Capabilities
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* AI Section */}
            <div className="space-y-6">
              <h4 className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">
                // AI & INTELLIGENCE
              </h4>

              <div className="flex flex-wrap gap-3">
                {aiSkills.map((s) => (
                  <span
                    key={s}
                    className="px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-xl text-sm font-semibold text-blue-300 hover:bg-blue-500/20 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Section */}
            <div className="space-y-6">
              <h4 className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] font-bold">
                // ENGINEERING STACK
              </h4>

              <div className="flex flex-wrap gap-3">
                {techSkills.map((s) => (
                  <span
                    key={s}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 hover:border-gray-500 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Subtle CTA */}
          <div className="text-center pt-10">
            <p className="text-gray-500 text-sm tracking-wide">
              Continuously exploring the intersection of AI, system design, and scalable engineering.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
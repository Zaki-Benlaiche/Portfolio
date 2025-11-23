"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const skills = ["HTML","CSS","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Framer Motion","Git & GitHub"];
  const experiences = [
    { date: "2023 - Present", title: "Frontend Developer - Zaki.tech", description: "Built interactive user interfaces using modern web technologies such as React and Next.js." },
    { date: "2022 - 2023", title: "Intern Developer - CodeAcademy", description: "Completed a full stack internship with focus on frontend best practices." },
    { date: "2021 - 2022", title: "Self-Taught Developer", description: "Mastered web fundamentals, Git, and UI/UX through online resources and personal projects." },
  ];

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-28 px-6 bg-gradient-to-b from-[#0f0f1a] via-[#11111e] to-[#0f0f1a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-28">
        {/* Intro */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-[0_0_50px_10px_rgba(59,130,246,0.3)] transition duration-500 hover:scale-105">
            <Image src="/about/photos.jpg" alt="Profile" fill className="object-cover brightness-100 hover:brightness-110 transition duration-500" />
          </div>
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-5xl font-extrabold text-blue-400 mb-4">Who Am I?</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a passionate <span className="text-blue-400 font-semibold">Frontend Developer</span> specialized in building elegant, fast, and responsive user interfaces using modern technologies like <span className="text-blue-400">React</span>, <span className="text-blue-400">Next.js</span>, and <span className="text-blue-400">Tailwind CSS</span>.
            </p>
            <p className="mt-4 text-gray-400">
              My mission is to deliver delightful digital experiences with strong attention to detail, interactivity, and performance.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-blue-400 mb-12">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center px-4">
            {skills.map((skill, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.1, duration: 0.4 }} className="bg-white/5 backdrop-blur-lg border border-white/10 text-white py-3 px-5 rounded-2xl shadow-md hover:shadow-blue-500/40 transition duration-300 font-medium text-sm">
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative my-20">
          <h3 className="text-4xl font-bold text-blue-400 text-center mb-12">Experience Timeline</h3>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500"></div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, scale: 0.9 }} animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.2 }} className={`relative w-full md:w-1/2 mx-auto md:flex ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                {/* Dot */}
                <div className="absolute md:relative top-0 md:top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 border-4 border-white rounded-full shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] animate-pulse"></div>

                {/* Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition duration-300 mt-8 md:mt-0 text-left">
                  <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                  <span className="text-sm text-gray-400">{exp.date}</span>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

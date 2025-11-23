"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  const { ref } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.section
      id="home"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative pt-32 pb-24 min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-b from-black via-[#0a0a23] to-black"
    >
      {/* إضاءة خلفية */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 px-6 max-w-6xl w-full">

        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-md md:mr-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-blue-400">Zaki Benlaiche</span>
          </h1>

          <p className="text-gray-300 mb-6">
            Creative Full Stack Developer crafting modern, aesthetic web interfaces with React, TypeScript, and Tailwind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg"
            >
              📄 Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold shadow"
            >
              📩 Contact Me
            </a>
          </div>

          {/* أيقونات التواصل */}
          <div className="flex gap-4">
            <a
              href="https://github.com/zaki-benlaiche"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/zaki-benlaiche"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://twitter.com/zaki_benlaiche"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition backdrop-blur-md ring-1 ring-white/10 hover:ring-blue-500/50"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>

        {/* صورة البروفايل دائرية 3D + إطار زجاجي + Glow */}
<motion.div
  initial={{ opacity: 0, rotateY: 15, rotateX: 8, scale: 0.9 }}
  animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  whileHover={{ rotateY: 15, rotateX: 6, scale: 1.08 }}
  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
             bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_50px_20px_rgba(0,128,255,0.25)]"
>
  {/* الصورة */}
  <Image
    src="/devlopeur.jpg"
    alt="Zaki Profile"
    fill
    className="object-cover rounded-full"
  />

  {/* Glow داخلي */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr
                  from-blue-500/20 via-purple-500/10 to-transparent
                  mix-blend-screen pointer-events-none"></div>

  {/* انعكاس خفيف لإضفاء عمق 3D */}
  <div className="absolute top-0 left-0 w-full h-full
                  bg-gradient-to-b from-white/10 to-transparent
                  opacity-40 mix-blend-overlay pointer-events-none"></div>
</motion.div>


      </div>
    </motion.section>
  );
}

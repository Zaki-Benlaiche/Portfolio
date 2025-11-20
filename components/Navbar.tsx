"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [animationKey, setAnimationKey] = useState(0);

  const handleLinkClick = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      key={animationKey}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-gray-800"
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* الشعار على اليسار */}
        <div className="text-xl font-bold text-white">Zaki.tech</div>

        {/* روابط في المنتصف */}
        <ul className="flex space-x-10 text-sm md:text-base text-white">
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href={link.href}
                onClick={handleLinkClick}
                className="hover:text-blue-400 transition-colors duration-300"
                whileHover={{ color: "#60a5fa" }}
              >
                {link.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

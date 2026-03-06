"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 5000);
      } else {
        setError("Error sending message. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#050505] py-24 px-6 min-h-screen flex items-center overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.02)] backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-400"></span>
            </span>
            Communication Channel Open
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600 mb-4">
            Initialize Contact
          </h2>
          <div className="w-16 h-px bg-zinc-700 mx-auto mb-6" />
          <p className="text-zinc-500 max-w-lg mx-auto font-light text-lg">
            Ready to integrate intelligence into your next architecture? Initialize a secure connection below.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16">

          {/* Contact Info Side */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">System Status</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                Currently accepting new inquiries for <strong className="text-zinc-200">AI integration</strong>, strategic consulting, and robust full-stack development.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <a href="mailto:benlaiche.zaki2002@gmail.com" className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">Protocol: Mail</span>
                  <span className="font-medium">Direct Message</span>
                </div>
              </a>

              <a href="https://github.com/zaki-benlaiche" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Github size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">Protocol: Git</span>
                  <span className="font-medium">Source Code</span>
                </div>
              </a>

              <a href="https://linkedin.com/in/zaki-benlaiche" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Linkedin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">Protocol: Network</span>
                  <span className="font-medium">Professional Identity</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3 bg-[#0a0a0a] backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,1)] relative overflow-hidden group">
            {/* Form Highlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative flex flex-col gap-6 w-full max-w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="w-full">
                  <label className="block text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Identifier</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Return Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="block text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">Payload</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-zinc-800 text-white placeholder-zinc-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all duration-300 resize-y min-h-[120px]"
                  placeholder="Transmit your message here..."
                  rows={5}
                />
              </div>

              <motion.button
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                type="submit"
                disabled={loading}
                className={`mt-4 flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 ${loading
                    ? "bg-zinc-800 text-zinc-500 border border-zinc-700 cursor-not-allowed"
                    : "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <span>Execute Transmission</span>
                )}
              </motion.button>
            </form>

            {/* Status Messages */}
            <div className="mt-4 h-6 text-center text-sm font-mono flex items-center justify-center w-full">
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-zinc-300 flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Transmission Successful.
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-red-400 flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {error}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

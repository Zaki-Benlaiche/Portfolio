"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    href: "mailto:benlaiche.zaki2002@gmail.com",
    Icon: Mail,
    protocol: "Protocol: Mail",
    label: "benlaiche.zaki2002@gmail.com",
  },
  {
    href: "https://github.com/zaki-benlaiche",
    Icon: FaGithub,
    protocol: "Protocol: Git",
    label: "github.com/zaki-benlaiche",
    external: true,
  },
  {
    href: "https://linkedin.com/in/zaki-benlaiche",
    Icon: FaLinkedin,
    protocol: "Protocol: Network",
    label: "linkedin.com/in/zaki-benlaiche",
    external: true,
  },
];

export default function ContactSection() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

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
        setTimeout(() => setSent(false), 6000);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to send. Please try again.");
      }
    } catch {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#050505] py-24 px-6 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto w-full z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400/60 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
            03. Get In Touch
          </span>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-mono tracking-widest uppercase backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Communication Channel Open
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600 mb-4">
            Initialize Contact
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-blue-500/50 to-transparent mx-auto mb-6" />
          <p className="text-zinc-500 max-w-lg mx-auto font-light text-lg">
            Ready to integrate intelligence into your next project? Let&apos;s build something exceptional.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-12">

          {/* Left — info */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-7">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">System Status</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">
                Currently accepting new inquiries for{" "}
                <strong className="text-zinc-200">AI integration</strong>, strategic consulting, and full-stack development.
              </p>
            </div>

            {/* Status indicators */}
            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-[#0a0a0a] border border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle size={14} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Available for Work</p>
                  <p className="text-zinc-600 text-[10px] font-mono">Freelance & Full-time</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <MapPin size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Algeria</p>
                  <p className="text-zinc-600 text-[10px] font-mono">Open to Remote Worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Clock size={14} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Response Time</p>
                  <p className="text-zinc-600 text-[10px] font-mono">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3 pt-2 border-t border-white/5">
              {contactLinks.map(({ href, Icon, protocol, label, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shrink-0">
                    <Icon size={17} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">{protocol}</span>
                    <span className="text-xs font-medium truncate">{label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3 bg-[#0a0a0a]/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full min-h-[300px] gap-5 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Transmission Successful</h4>
                    <p className="text-zinc-500 text-sm font-light">Your message has been received. I&apos;ll get back to you shortly.</p>
                  </div>
                  <div className="flex gap-1.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="relative flex flex-col gap-5 w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group/field">
                      <label className="block text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/field:text-blue-400 transition-colors">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-zinc-800 text-white placeholder-zinc-700 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all duration-300 text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="group/field">
                      <label className="block text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/field:text-blue-400 transition-colors">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-zinc-800 text-white placeholder-zinc-700 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all duration-300 text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="block text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/field:text-blue-400 transition-colors">
                      Message
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-zinc-800 text-white placeholder-zinc-700 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all duration-300 resize-y min-h-[130px] text-sm"
                      placeholder="Tell me about your project..."
                      rows={5}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: loading ? 1 : 1.015 }}
                    whileTap={{ scale: loading ? 1 : 0.985 }}
                    type="submit"
                    disabled={loading}
                    className={`mt-2 flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 text-sm ${
                      loading
                        ? "bg-zinc-900 text-zinc-600 border border-zinc-800 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]"
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Transmitting...
                      </>
                    ) : (
                      <>Send Message →</>
                    )}
                  </motion.button>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs font-mono text-center"
                    >
                      ⚠ {error}
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

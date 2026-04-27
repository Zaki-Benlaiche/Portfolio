import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Zap } from "lucide-react";

const navLinks = [
  { href: "#about",    label: "About"    },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact"  },
];

const socialLinks = [
  { href: "https://github.com/zaki-benlaiche",    Icon: FaGithub,   label: "GitHub"   },
  { href: "https://linkedin.com/in/zaki-benlaiche", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://twitter.com/zaki_benlaiche",   Icon: FaTwitter,  label: "Twitter"  },
];

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-zinc-900/80 overflow-hidden">
      {/* Top shimmer line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-600/4 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-16">

        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#home" className="group flex items-center gap-2.5 select-none">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/20 blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600/40 to-purple-600/30 border border-blue-500/30 flex items-center justify-center">
                  <Zap size={14} className="text-blue-300" />
                </div>
              </div>
              <span className="text-[15px] font-bold tracking-wide text-white">
                Zaki
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">.dev</span>
              </span>
            </a>
            <p className="text-zinc-600 text-xs font-mono tracking-[0.2em] uppercase text-center md:text-left">
              AI &amp; Full-Stack Architect
            </p>
            <p className="text-zinc-700 text-xs max-w-[220px] leading-relaxed text-center md:text-left font-light">
              Building intelligent systems and scalable web experiences for the AI era.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-1">Navigation</span>
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-zinc-500 hover:text-white text-sm transition-colors duration-200 font-light"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600/70 to-purple-600/60 border border-blue-500/20 text-white text-sm font-semibold hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              Hire Me →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-xs font-mono text-zinc-700 gap-4">
          <span>
            <span className="text-zinc-600">© {year}</span> Zaki Benlaiche — All nodes operational.
          </span>
          <span className="text-zinc-800">
            Built with Next.js · TypeScript · Tailwind · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

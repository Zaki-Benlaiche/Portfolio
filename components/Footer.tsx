import { FC } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#050505] border-t border-zinc-900 overflow-hidden">
            {/* Background Subtle Gradient */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col items-center">

                {/* Logo / Name */}
                <div className="text-center mb-8">
                    <span className="text-lg font-bold tracking-widest text-white uppercase font-mono shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-2 block w-fit mx-auto cursor-default hover:text-zinc-300 transition-colors">
                        Zaki Benlaiche
                    </span>
                    <p className="text-xs font-mono text-zinc-600 tracking-[0.2em] uppercase">
                        AI & Full-Stack Architect
                    </p>
                </div>

                {/* Social Links Grid */}
                <div className="flex items-center gap-6 mb-12">
                    <a
                        href="https://github.com/zaki-benlaiche"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 hover:bg-zinc-800 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/zaki-benlaiche"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 hover:bg-zinc-800 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin size={18} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 hover:bg-zinc-800 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                        aria-label="Twitter Profile"
                    >
                        <FaTwitter size={18} />
                    </a>
                </div>

                {/* Copyright & Terminals */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-zinc-900 text-xs font-mono text-zinc-600 pl-0">
                    <div className="mb-4 md:mb-0">
                        <span className="text-zinc-500">© {currentYear}</span> System Runtime. All nodes operational.
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#about" className="hover:text-zinc-300 transition-colors uppercase tracking-widest">About</a>
                        <span className="w-1 h-1 rounded-full bg-zinc-800" />
                        <a href="#projects" className="hover:text-zinc-300 transition-colors uppercase tracking-widest">Projects</a>
                        <span className="w-1 h-1 rounded-full bg-zinc-800" />
                        <a href="#contact" className="hover:text-zinc-300 transition-colors uppercase tracking-widest">Initialize</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

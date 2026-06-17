import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Laptops");

  const navLinks = ["Laptops", "PCs", "SSDs", "Mobiles", "Accessories"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 rounded-2xl bg-slate-950/40 backdrop-blur-xl border border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-500/20">
      <div className="flex justify-between items-center px-6 md:px-8 py-3.5">
        
        {/* Logo: Kinetic Letter-Spacing & Neon Dot */}
        <div className="flex items-center gap-1.5 font-black text-xl tracking-widest text-white group cursor-pointer">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 group-hover:tracking-[0.2em] transition-all duration-300 ease-out">
            NN TECH
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />
        </div>

        {/* Navigation Links: Magnetic Liquid Capsule Effect */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/[0.02]">
          {navLinks.map((link) => {
            const isActive = activeLink === link;
            return (
              <a
                key={link}
                href="#"
                onClick={() => setActiveLink(link)}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? "text-cyan-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {/* Active Capsule Background */}
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-cyan-500/0 border-t border-cyan-400/30 rounded-lg -z-10 animate-[fadeIn_0.2s_ease-out]" />
                )}
                {link}
              </a>
            );
          })}
        </div>

        {/* Right Actions: Cyberpunk Action Buttons */}
        <div className="flex items-center gap-2">
          
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-slate-400 hover:text-white bg-white/[0.03] border border-white/5 rounded-xl transition-all"
          >
            <span className="material-symbols-outlined text-xl flex items-center justify-center w-5 h-5">
              {isOpen ? "close" : "menu"}
            </span>
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu: Floating Glass Panel */}
      <div
        className={`md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-slate-950/90 backdrop-blur-2xl border border-white/5 rounded-2xl transition-all duration-300 ease-out origin-top ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => {
                setActiveLink(link);
                setIsOpen(false);
              }}
              className={`px-4 py-3 text-sm font-medium tracking-wide rounded-xl transition-all duration-200 ${
                activeLink === link
                  ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
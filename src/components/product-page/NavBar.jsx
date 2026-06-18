import { useState } from "react";

// Props mein empty array default fallback [] set kar diya hai taake 'undefined' ka chance hi khatam ho jaye
export default function Navbar({ selectedCategories = [], setSelectedCategories, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Laptops", "PCs", "SSDs", "Mobiles", "Accessories"];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (!setSelectedCategories || !setCurrentPage) return; // Crash prevention safety guard

    setCurrentPage(1); 
    setIsOpen(false);

    if (link === "All") {
      setSelectedCategories([]); 
    } else {
      // safe check matching
      if (selectedCategories?.includes(link) && selectedCategories?.length === 1) {
        setSelectedCategories([]); 
      } else {
        setSelectedCategories([link]); 
      }
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 rounded-2xl bg-slate-950/40 backdrop-blur-xl border border-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-cyan-500/20">
      <div className="flex justify-between items-center px-4 md:px-8 py-3.5">
        
        {/* Logo Element */}
        <a 
          href="/" 
          onClick={(e) => handleLinkClick(e, "All")}
          className="flex items-center gap-1.5 font-black text-xl tracking-widest text-white group cursor-pointer select-none"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 group-hover:tracking-[0.2em] transition-all duration-300 ease-out">
            NN TECH
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/[0.02]">
          
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "All")}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
              // ?.length lagaya taake undefined ho to crash na ho
              selectedCategories?.length === 0
                ? "text-cyan-400 bg-cyan-500/5 border-t border-cyan-400/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All Products
          </a>

          {navLinks.map((link) => {
            // Optional chaining added here safely
            const isActive = selectedCategories?.length === 1 && selectedCategories[0] === link;
            return (
              <a
                key={link}
                href="#"
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? "text-cyan-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-cyan-500/0 border-t border-cyan-400/30 rounded-lg -z-10" />
                )}
                {link}
              </a>
            );
          })}
        </div>

        {/* Actions Button Structure */}
        <div className="flex items-center gap-2">
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-slate-950/95 backdrop-blur-2xl border border-white/5 rounded-2xl transition-all duration-300 ease-out origin-top ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-3 gap-1">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "All")}
            className={`px-4 py-3 text-sm font-medium tracking-wide rounded-xl transition-all duration-200 ${
              selectedCategories?.length === 0
                ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All Products
          </a>
          {navLinks.map((link) => {
            const isActive = selectedCategories?.length === 1 && selectedCategories[0] === link;
            return (
              <a
                key={link}
                href="#"
                onClick={(e) => handleLinkClick(e, link)}
                className={`px-4 py-3 text-sm font-medium tracking-wide rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
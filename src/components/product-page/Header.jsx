export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121414]/20 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,221,221,0.1)]">

      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 py-4">

        <div className="text-2xl font-extrabold text-cyan-400 tracking-tight">
          NN TECH
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-cyan-400">
            Laptops
          </a>

          <a href="#" className="text-gray-300 hover:text-cyan-400">
            PCs
          </a>

          <a href="#" className="text-gray-300 hover:text-cyan-400">
            SSDs
          </a>

          <a href="#" className="text-gray-300 hover:text-cyan-400">
            Mobiles
          </a>

          <a href="#" className="text-gray-300 hover:text-cyan-400">
            Accessories
          </a>
        </div>

        <div className="flex items-center gap-4">

          <input
            type="text"
            placeholder="Search tech..."
            className="hidden sm:block bg-black/30 border border-white/10 rounded-full px-4 py-2 w-52 outline-none"
          />

          <button>🛒</button>

          <button>👤</button>

        </div>

      </div>
    </nav>
  );
}
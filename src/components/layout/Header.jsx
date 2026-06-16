import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto mt-4 px-6">
        <div className="flex justify-between items-center rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl px-8 py-4 shadow-[0_8px_32px_rgba(0,255,255,0.08)]">

          {/* Logo */}
          <div className="text-2xl font-extrabold cursor-pointer transition-all duration-300 hover:scale-105">
            <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
              NN.
            </span>
            <span className="text-white">Tech</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            {["Laptops", "PCs", "SSDs", "Mobiles", "Accessories"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="relative transition-colors duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/product">
  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
    🛒
  </button>
</Link>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              👤
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}
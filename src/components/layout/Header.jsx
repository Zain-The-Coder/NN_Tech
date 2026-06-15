export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        
        <div className="text-2xl font-extrabold text-cyan-400">
            NN.<span className="text-white">Tech</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#">Laptops</a>
          <a href="#">PCs</a>
          <a href="#">SSDs</a>
          <a href="#">Mobiles</a>
          <a href="#">Accessories</a>
        </div>

        <div className="flex gap-4">
          <button>🛒</button>
          <button>👤</button>
        </div>

      </nav>
    </header>
  );
}
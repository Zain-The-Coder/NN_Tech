export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/20 backdrop-blur-xl dark:bg-surface-container-low/20 border-b border-outline-variant/10 shadow-[0_0_20px_rgba(0,221,221,0.1)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4">
        
        {/* Logo */}
        <div className="font-display-lg text-2xl font-extrabold text-primary-fixed dark:text-primary-fixed-dim tracking-tighter">
          NN TECH
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-sm text-on-surface-variant hover:text-primary-fixed transition-colors duration-300" href="#">Laptops</a>
          <a className="font-body-md text-sm text-on-surface-variant hover:text-primary-fixed transition-colors duration-300" href="#">PCs</a>
          <a className="font-body-md text-sm text-on-surface-variant hover:text-primary-fixed transition-colors duration-300" href="#">SSDs</a>
          <a className="font-body-md text-sm text-on-surface-variant hover:text-primary-fixed transition-colors duration-300" href="#">Mobiles</a>
          <a className="font-body-md text-sm text-on-surface-variant hover:text-primary-fixed transition-colors duration-300" href="#">Accessories</a>
        </div>

        {/* Right Actions (Search & Buttons) */}
        <div className="flex items-center gap-6">
          
          {/* Search Bar */}
          <div className="relative group hidden sm:block">
            <input 
              type="text"
              className="bg-surface-container-highest/20 border border-outline-variant/30 rounded-full px-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary-fixed w-48 transition-all" 
              placeholder="Search tech..." 
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
              search
            </span>
          </div>

          {/* Shopping Cart Button */}
          <button className="text-on-surface-variant hover:text-primary-fixed transition-all active:scale-95 flex items-center">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>

          {/* Profile Button */}
          <button className="text-on-surface-variant hover:text-primary-fixed transition-all active:scale-95 flex items-center">
            <span className="material-symbols-outlined">person</span>
          </button>

        </div>
      </div>
    </nav>
  );
}
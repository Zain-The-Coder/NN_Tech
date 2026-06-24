// Topbar ke props mein onToggleSidebar aur isSidebarOpen ko receive karo
export default function Topbar({ onToggleSidebar, isSidebarOpen }) {
  return (
    <header className="flex items-center p-4 bg-[#10151f] border-b border-white/10">
      
      {/* HAMBURGER BUTTON: Yeh sirf mobile (md:hidden) par dikhega */}
      <button 
        onClick={onToggleSidebar}
        className="p-2 mr-3 text-white rounded-lg md:hidden hover:bg-white/5 focus:outline-none"
      >
        {isSidebarOpen ? (
          // Cross Icon (Jab sidebar khuli ho)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon (Jab sidebar band ho)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Aapka baaki purana Topbar ka jo bhi maal-masala (title, profile pic) hai, woh yahan rahega */}
      <div className="text-xl font-semibold text-white">Dashboard</div>

    </header>
  );
}
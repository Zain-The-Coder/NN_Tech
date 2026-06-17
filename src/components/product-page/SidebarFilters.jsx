import Link from "next/link";

export default function FiltersSidebar({ selectedCategories, setSelectedCategories, setCurrentPage }) {
  const categories = ["Processors", "Motherboards", "Graphics Cards", "Power Supplies"];

  const handleToggle = (e, category) => {
    e.preventDefault(); // Click duplication bug fixed here
    setCurrentPage(1); 
    
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <aside className="w-full md:w-[280px] md:sticky md:top-28 h-fit bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 mb-6 border-b border-white/[0.05] pb-3">
        <span className="h-3 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
          Filter Category
        </h3>
      </div>

      <div className="space-y-2">
        {categories.map((category) => {
          const isChecked = selectedCategories.includes(category);
          return (
            <div
              key={category}
              className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl border cursor-pointer select-none transition-all duration-200 group ${
                isChecked
                  ? "bg-cyan-500/[0.04] border-cyan-500/30 text-cyan-400"
                  : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
              }`}
              onClick={(e) => handleToggle(e, category)}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300 transform group-active:scale-90 ${
                  isChecked ? "bg-cyan-500 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]" : "bg-slate-900 border-slate-700"
                }`}>
                  <svg className={`w-3 h-3 text-slate-950 stroke-[3.5] transition-all duration-200 ${isChecked ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium tracking-wide">{category}</span>
              </div>
            </div>
            
          );
        })}
      </div>
       <Link href="/">
            <button className="border mt-[10%] border-cyan-400 transition-all active:scale-95 px-6 sm:px-8 py-3 sm:py-4 rounded-lg  hover:bg-cyan-400/10">
              Go To Home Page
            </button>
            </Link>
    </aside>
  );
}
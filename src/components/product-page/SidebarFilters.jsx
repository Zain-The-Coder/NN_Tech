import { useState } from "react";

export default function FiltersSidebar() {
  // Static state sirf toggle animation dikhane ke liye (Aap isse real logic se replace kar sakte hain)
  const [selectedCategories, setSelectedCategories] = useState(["Motherboards"]);

  const categories = [
    "Processors",
    "Motherboards",
    "Graphics Cards",
    "Power Supplies"
  ];

  const handleToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <aside className="w-full md:w-[290px] sticky top-28 h-fit bg-slate-950/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-500/10">
      
      {/* Header with Neon Accent */}
      <div className="flex items-center gap-2 mb-6 border-b border-white/[0.05] pb-3">
        <span className="h-3 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
          Filter Category
        </h3>
      </div>

      {/* Categories List */}
      <div className="space-y-2">
        {categories.map((category) => {
          const isChecked = selectedCategories.includes(category);
          
          return (
            <label
              key={category}
              className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl border cursor-pointer select-none transition-all duration-200 group ${
                isChecked
                  ? "bg-cyan-500/[0.04] border-cyan-500/30 text-cyan-400"
                  : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
              }`}
              onClick={() => handleToggle(category)}
            >
              <div className="flex items-center gap-3">
                {/* Hidden Native Checkbox */}
                <input 
                  type="checkbox" 
                  checked={isChecked}
                  onChange={() => {}} // Controlled manually via div
                  className="hidden" 
                />
                
                {/* Custom Cyberpunk Checkbox */}
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-300 transform group-active:scale-90 ${
                  isChecked
                    ? "bg-cyan-500 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                    : "bg-slate-900 border-slate-700 group-hover:border-slate-500"
                }`}>
                  {/* Tick Mark Icon Layer */}
                  <svg 
                    className={`w-3 h-3 text-slate-950 stroke-[3.5] transition-all duration-200 ${
                      isChecked ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 -rotate-12"
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Text Label */}
                <span className="text-sm font-medium tracking-wide transition-colors">
                  {category}
                </span>
              </div>

            </label>
          );
        })}
      </div>

    </aside>
  );
}
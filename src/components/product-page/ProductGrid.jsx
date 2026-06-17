import ProductCard from "./ProductCard";

export default function ProductGrid({ products, totalResults, currentPage, itemsPerPage, sortBy, setSortBy }) {
  const startCount = totalResults === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endCount = Math.min(currentPage * itemsPerPage, totalResults);

  return (
    <div className="w-full">
      {/* Top Filter Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-5 mb-8 shadow-xl">
        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium tracking-wide">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Showing <span className="text-slate-200 font-semibold">{startCount}-{endCount}</span> of <span className="text-slate-200 font-semibold">{totalResults}</span> results
        </div>

        <div className="relative group w-full sm:w-auto">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-auto appearance-none bg-slate-950/60 text-slate-300 font-medium px-5 py-2.5 pr-10 rounded-xl border border-slate-800 cursor-pointer outline-none transition-all duration-200 hover:border-slate-600 focus:border-cyan-500 text-sm"
          >
            <option value="Latest Arrivals">Latest Arrivals</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Grid Elements (Clean 4 Columns responsive array) */}
      {products.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-slate-900/10">
          <p className="text-slate-400 font-medium text-lg">No items match your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-[fadeIn_0.4s_ease-out]">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
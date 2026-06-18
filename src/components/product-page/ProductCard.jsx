
export default function ProductCard({ image, productName, title, price }) {
  const formattedPrice = price ? price.toLocaleString() : "0";
  
  // Safe Fallback agar backend database se direct 'productName' aa raha ho
  const displayTitle = productName || title;

  return (
    <div className="group relative flex flex-col justify-between h-full bg-slate-950/40 backdrop-blur-md border border-cyan-100 rounded-2xl p-4 overflow-hidden shadow-xl transition-all duration-500 hover:border-cyan-500/30 hover:-translate-y-1.5">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-900 mb-4 border border-white/[0.02]">
          <img src={image} alt={displayTitle} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-1" />
        </div>
        <h4 className="text-sm font-medium text-slate-300 group-hover:text-white line-clamp-2 mb-2 tracking-wide min-h-[40px] transition-colors">
          {displayTitle}
        </h4>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-bold text-cyan-500/70 tracking-wider">PKR</span>
          <span className="text-xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
            {formattedPrice}
          </span>
        </div>

        <button className="relative w-full py-3 overflow-hidden rounded-xl bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 active:scale-[0.98] group/btn">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-slate-950 transition-colors">
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
}
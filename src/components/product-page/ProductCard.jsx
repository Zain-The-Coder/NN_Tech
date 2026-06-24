export default function ProductCard({ image, productName, title, price, description }) {
  const formattedPrice = price ? price.toLocaleString() : "0";
  
  // Safe Fallback agar backend database se direct 'productName' aa raha ho
  const displayTitle = productName || title;

  return (
    <div className="max-w-sm w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">

      <div>
        {/* Image Section */}
        <div className="relative group/img overflow-hidden aspect-square bg-slate-800">
          <img
            src={image}
            alt={displayTitle}
            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
          />

          {/* Badge */}
          <span className="absolute top-3 left-3 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </span>
        </div>

        {/* Content Section */}
        <div className="p-5 pb-0">
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">
            {displayTitle}
          </h3>

          {/* Description - 2 se 3 Lines Method (Baki text automatic cut ho jaye ga) */}
          <p className="text-gray-400 text-sm mt-2 line-clamp-3 min-h-[60px] leading-relaxed">
            {description || "High-quality premium product designed for the best experience, ultimate durability, and maximum performance in daily usage."}
          </p>
        </div>
      </div>

      {/* Price & Action Section */}
      <div className="p-5 pt-0 mt-4">
        {/* Price Row */}
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-bold text-cyan-400 tracking-wider">PKR</span>
          <span className="text-cyan-400 font-bold text-xl tracking-tight">
            {formattedPrice}
          </span>
        </div>

        {/* Action Button */}
        <button className="mt-4 w-full bg-cyan-400 text-black font-bold py-3 rounded-xl hover:bg-cyan-300 transition-all active:scale-95 text-xs uppercase tracking-widest">
          Add to Cart
        </button>
      </div>

    </div>
  );
}
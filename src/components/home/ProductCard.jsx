import Link from "next/link";

export default function ProductCard({
  id ,
  title,
  price,
  image,
}) {
  return (
    <div className="max-w-sm w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">

      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <span className="absolute top-3 left-3 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          NEW
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-cyan-400 font-bold text-lg">
            PKR {price}
          </span>
        </div>
        <Link href={`/product/${id}`}>
        <button className="mt-5 w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-all active:scale-95">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
}
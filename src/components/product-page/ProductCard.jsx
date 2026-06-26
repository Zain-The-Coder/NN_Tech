import Link from "next/link";

export default function ProductCard({_id , image, productName, price, description}) {

  return (
    <div className="max-w-sm w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="relative group">
        <img
          src={image}
          alt="Product"
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          NEW
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-lg sm:text-xl font-bold text-white">
          {productName}
        </h3>

<p className="text-gray-400 text-sm mt-2">
  {description?.length > 30
    ? description.slice(0, 30) + "..."
    : description}
</p>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-cyan-400 font-bold text-lg">
            PKR : {price}
          </span>

          <span className="text-xs text-gray-400">
            ⭐ 4.8 Rating
          </span>
        </div>

        {/* Button */}
        <Link href={`product/${_id}`}>
  <button className="w-full bg-cyan-500 py-3 rounded-lg font-semibold">
    View Details
  </button>
</Link>

      </div>
    </div>
  );
}
export default function ProductCard({ product }) {
  return (
    <div className="group bg-[#020b19] border border-outline-variant/10 p-4 hover:scale-[1.02] transition">

      <div className="aspect-square overflow-hidden mb-3">
        <img
          src={product.image}
          className="w-full h-full object-cover group-hover:scale-110 transition"
        />
      </div>

      <div className="flex gap-1 mb-2">
        {"★★★★★".split("").map((s, i) => (
          <span key={i} className="text-primary-fixed">★</span>
        ))}
      </div>

      <h4 className="text-sm font-bold mb-2">{product.title}</h4>

      <div className="mb-3 text-primary-fixed font-bold">
        PKR {product.price}
      </div>

      <button className="w-full py-2 bg-primary-fixed text-black font-bold">
        ADD TO CART
      </button>

    </div>
  );
}
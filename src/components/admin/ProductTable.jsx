export default function ProductTable({ products }) {
  console.log(products)
  return (
    <div className="glass-card rounded-xl overflow-hidden bg-[#10151f]/40 border border-white/10">
      
      {/* Header Container */}
      <div className="p-4 sm:p-6 border-b border-white/10 flex flex-row items-center justify-between gap-2">
        <h2 className="text-lg sm:text-2xl font-bold text-white truncate">
          Product Inventory
        </h2>

        <button className="bg-cyan-400 hover:bg-cyan-500 text-black text-xs sm:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition shrink-0">
          + Add Product
        </button>
      </div>

      {/* 1. DESKTOP VIEW: Badi screens par normal table dikhegi (hidden md:block) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-white/5">
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
            </tr>
          </thead>

          <tbody>
            {products?.map((product) => (
              <tr
                key={product._id}
                className="border-b border-white/5 hover:bg-white/[0.02] transition"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="w-12 h-12 rounded object-cover border border-white/10"
                    />
                    <p className="font-medium text-white">{product.productName}</p>
                  </div>
                </td>

                <td className="p-4">{product.categorey}</td>
                <td className="p-4 text-cyan-400 font-medium">PKR {product.price}</td>
                <td className="p-4">{product.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. MOBILE VIEW: Choti screens par grid/card list dikhegi (block md:hidden) */}
      <div className="block md:hidden divide-y divide-white/10">
        {products?.map((product) => (
          <div key={product._id} className="p-4 flex flex-col gap-3 bg-[#10151f]/20">
            
            {/* Top row: Image + Name */}
            <div className="flex items-center gap-3">
              <img
                src={product.image}
                alt={product.productName}
                className="w-14 h-14 rounded object-cover border border-white/10 shrink-0"
              />
              <div className="min-w-0">
                <p className="font-semibold text-white text-base truncate">{product.productName}</p>
                <span className="inline-block bg-white/5 border border-white/10 text-gray-400 text-xs px-2 py-0.5 rounded mt-1">
                  {product.categorey}
                </span>
              </div>
            </div>

            {/* Bottom row: Price & Stock details */}
            <div className="flex justify-between items-center pt-2 border-t border-white/5 text-sm">
              <div>
                <span className="text-gray-500 text-xs block uppercase tracking-wider">Price</span>
                <span className="text-cyan-400 font-bold">PKR {product.price}</span>
              </div>
              
              <div className="text-right">
                <span className="text-gray-500 text-xs block uppercase tracking-wider">Stock</span>
                <span className={`font-semibold ${Number(product.available) > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  {product.available}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
export default function ProductTable({ products }) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-6 border-b border-white/10 flex justify-between">
        <h2 className="text-2xl font-bold">
          Product Inventory
        </h2>

        <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg">
          + Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
            </tr>
          </thead>

          <tbody>
            {products?.map((product) => (
              <tr
                key={product._id}
                className="border-t border-white/10"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                    />

                    <div>
                      <p>{product.name}</p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4">
                  PKR {product.price}
                </td>

                <td className="p-4">
                  {product.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
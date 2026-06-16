export default function SidebarFilters({ filters, setFilters }) {

  // CATEGORY TOGGLE
  const toggleCategory = (cat) => {
    setFilters((prev) => {
      const exists = prev.category.includes(cat);

      return {
        ...prev,
        category: exists
          ? prev.category.filter((c) => c !== cat)
          : [...prev.category, cat],
      };
    });
  };

  // BRAND TOGGLE
  const toggleBrand = (brand) => {
    setFilters((prev) => {
      const exists = prev.brand.includes(brand);

      return {
        ...prev,
        brand: exists
          ? prev.brand.filter((b) => b !== brand)
          : [...prev.brand, brand],
      };
    });
  };

  return (
    <aside className="w-full md:w-1/4 space-y-8 p-6">

      {/* CATEGORY */}
      <div>
        <h3 className="font-bold mb-3">Category</h3>

        {["Processors", "Motherboards", "Graphics Cards"].map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              checked={filters.category.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            <span className="ml-2">{cat}</span>
          </label>
        ))}
      </div>

      {/* BRAND */}
      <div>
        <h3 className="font-bold mb-3">Brand</h3>

        {["ASUS", "INTEL"].map((b) => (
          <label key={b} className="block">
            <input
              type="checkbox"
              checked={filters.brand.includes(b)}
              onChange={() => toggleBrand(b)}
            />
            <span className="ml-2">{b}</span>
          </label>
        ))}
      </div>

      {/* PRICE */}
      <div>
        <h3 className="font-bold mb-3">Price</h3>

        <input
          type="range"
          min="5000"
          max="500000"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              maxPrice: Number(e.target.value),
            }))
          }
          className="w-full"
        />

        <p className="text-sm mt-2">
          Max: PKR {filters.maxPrice}
        </p>
      </div>

    </aside>
  );
}
import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardCards() {
  const API_URL = "/api/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);

        console.log("API Response:", response.data);

        let productsData = [];

        if (Array.isArray(response.data)) {
          productsData = response.data;
        } else if (Array.isArray(response.data.products)) {
          productsData = response.data.products;
        } else if (Array.isArray(response.data.data)) {
          productsData = response.data.data;
        }

        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load metrics");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-4 text-gray-500 text-sm">
        Loading metrics...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500 text-sm">
        {error}
      </div>
    );
  }

  const totalProducts = products.length;

  const totalInventory = products.reduce(
    (sum, item) => sum + Number(item.stock || item.inventory || 0),
    0
  );

  const totalCategories = new Set(
    products
      .map((item) => item.category)
      .filter(Boolean)
  ).size;

  return (
    /* CHANGED: Mobile par bhi ab yeh teeno cards ek hi line mein (grid-cols-3) aayenge, gap mazeed kam (gap-2) kar diya hai */
    <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-6 sm:mb-12">
      
      {/* Total Products */}
      {/* CHANGED: Padding ko p-2 sm:p-6 kiya aur text ko text-xl sm:text-5xl taake bohot compact lage */}
      <div className="glass-card rounded-lg sm:rounded-xl p-2.5 sm:p-6 shadow-sm border border-white/5 bg-[#10151f]/50 flex flex-col justify-between">
        <h3 className="text-gray-400 font-medium uppercase text-[10px] sm:text-sm tracking-wider truncate">
          Products
        </h3>
        <p className="text-xl sm:text-5xl font-bold mt-0.5 sm:mt-2 text-indigo-400">
          {totalProducts}
        </p>
      </div>

      {/* Total Categories */}
      <div className="glass-card rounded-lg sm:rounded-xl p-2.5 sm:p-6 shadow-sm border border-white/5 bg-[#10151f]/50 flex flex-col justify-between">
        <h3 className="text-gray-400 font-medium uppercase text-[10px] sm:text-sm tracking-wider truncate">
          Categories
        </h3>
        <p className="text-xl sm:text-5xl font-bold mt-0.5 sm:mt-2 text-emerald-400">
          {totalCategories}
        </p>
      </div>

      {/* Total Inventory */}
      <div className="glass-card rounded-lg sm:rounded-xl p-2.5 sm:p-6 shadow-sm border border-white/5 bg-[#10151f]/50 flex flex-col justify-between">
        <h3 className="text-gray-400 font-medium uppercase text-[10px] sm:text-sm tracking-wider truncate">
          Inventory
        </h3>
        <p className="text-xl sm:text-5xl font-bold mt-0.5 sm:mt-2 text-rose-400">
          {totalInventory}
        </p>
      </div>

    </div>
  );
}
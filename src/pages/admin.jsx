import { useEffect, useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import DashboardCards from "@/components/admin/DashboardCards";
import ProductTable from "@/components/admin/ProductTable";
import Footer from "@/components/admin/Footer";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "/api/products";


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(API_URL);
        const data = await res.json();

        const fetchedProducts = Array.isArray(data)
          ? data
          : data.products || [];

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Sidebar />

      <main className="ml-64 min-h-screen">
        <Topbar />

        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <span className="h-10 w-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              <DashboardCards products={products} />
              <ProductTable products={products} />
            </>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
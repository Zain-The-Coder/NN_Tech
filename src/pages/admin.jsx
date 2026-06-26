import { useEffect, useMemo, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import DashboardCards from "@/components/admin/DashboardCards";
import ProductTable from "@/components/admin/ProductTable";
import Footer from "@/components/admin/Footer";
import Pagination from "@/components/product-page/Pagination";
import AddProduct from "@/components/admin/addSectionAdmin/AddProduct";
import axios from "axios";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  
  // FIX: Yeh state missing thi jiski wajah se error aa raha tha aur sidebar hide nahi ho rahi thi
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const itemsPerPage = 8;
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

  // Auto Scroll
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // FIX: Jab mobile par user kisi tab par click karega, toh sidebar auto-hide ho jayegi
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [activeSection]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.productName
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (sortBy === "Price Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, sortBy]);

  const totalPages =
    Math.ceil(filteredProducts.length / itemsPerPage) || 1;

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);


  const handleDelete = async (id) => {
  try {
    await axios.delete(`/api/${id}`);

    setProducts((prev) =>
      prev.filter((product) => product._id !== id)
    );

    alert("Product deleted successfully");
  } catch (error) {
    console.error(error);
    console.log(error.message);
  console.log(error.code);
  console.log(error.response);
    alert("Delete failed");
  }
};

  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-white overflow-x-hidden">
      
      {/* SIDEBAR WRAPPER */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "!translate-x-0" : "!-translate-x-full"}
        md:!translate-x-0 md:w-64
      `}>
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>

      {/* OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT AREA */}
      <main className="ml-0 md:ml-64 min-h-screen flex flex-col justify-between">
        <div>
          {/* FIX: Topbar ke andar toggle handlers pass kiye hain taake mobile button kaam kare */}
          <Topbar 
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
            isSidebarOpen={isSidebarOpen}
          />

          <div className="p-4 md:p-6">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <span className="h-10 w-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <>
                {activeSection === "dashboard" ? (
                  <>
                    <DashboardCards products={products} />

                    <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
                      <input
                        type="text"
                        placeholder="Search Product..."
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setCurrentPage(1);
                        }}
                        className="bg-[#10151f] border border-white/10 px-4 py-3 rounded-lg w-full sm:w-80"
                      />

                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-[#10151f] border border-white/10 px-4 py-3 rounded-lg w-full sm:w-auto"
                      >
                        <option>Latest</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                      </select>
                    </div>

                    <div className="overflow-x-auto w-full">
                      <ProductTable products={paginatedProducts} onDelete={handleDelete} />
                    </div>

                    <div className="mt-8">
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                      />
                    </div>
                  </>
                ) : (
                  <AddProduct />
                )}
              </>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
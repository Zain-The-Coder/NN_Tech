import { useState, useMemo, useEffect } from "react"; // 1. useEffect add kiya
import Header from "@/components/layout/Header";
import FiltersSidebar from "@/components/product-page/SidebarFilters";
import ProductGrid from "@/components/product-page/ProductGrid";
import Pagination from "@/components/product-page/Pagination";
import Navbar from "@/components/product-page/NavBar";
import Footer from "@/components/layout/Footer";

const INITIAL_PRODUCTS = [
  { id: 1, title: "ASUS ROG Strix Z790-E Gaming WiFi II", price: 145000, category: "Motherboards", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7" },
  { id: 2, title: "Intel Core i9-14900K", price: 192500, category: "Processors", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: 3, title: "ASUS TUF Gaming A15", price: 345000, category: "Laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
  { id: 4, title: "Samsung 990 Pro 2TB", price: 58000, category: "Power Supplies", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea" },
  { id: 5, title: "MSI GeForce RTX 4090 Suprim X", price: 620000, category: "Graphics Cards", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704" },
  { id: 6, title: "AMD Ryzen 7 7800X3D Boxed", price: 128000, category: "Processors", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: 7, title: "Gigabyte B650 AORUS Elite AX", price: 72000, category: "Motherboards", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7" },
  { id: 8, title: "Corsair RM850e 850W Gold", price: 38000, category: "Power Supplies", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea" },
  { id: 9, title: "ROG Strix RTX 4080 Super", price: 385000, category: "Graphics Cards", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704" }
];

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("Latest Arrivals");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // ✨ Auto-Scroll Logic: Jab bhi page number change hoga, ye screen ko upar le jayega
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth transition scroll animation ke liye
    });
  }, [currentPage]); // Dependency array mein currentPage daala taake sirf page badalne par trigger ho

  // Filtration and Sorting Logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...INITIAL_PRODUCTS];

    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }

    if (sortBy === "Price Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategories, sortBy]);

  // Pagination Calculations
  const totalResults = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage) || 1;
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage]);

  return (
    <>
      <Header />

      <main className="pt-24 min-h-screen circuit-pattern bg-slate-950 text-white selection:bg-cyan-500/30">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row gap-6 items-start">

          <FiltersSidebar 
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            setCurrentPage={setCurrentPage}
          />

          <section className="flex-1 w-full flex flex-col justify-between min-h-[600px]">
            <ProductGrid 
              products={paginatedProducts}
              totalResults={totalResults}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </section>

        </div>
      </main>

      <Navbar />
      <Footer />
    </>
  );
}
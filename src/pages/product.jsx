"use client"; // Make sure this is at the top if using Next.js App Router

import { useState, useMemo, useEffect } from "react";
import FiltersSidebar from "@/components/product-page/SidebarFilters";
import ProductGrid from "@/components/product-page/ProductGrid";
import Pagination from "@/components/product-page/Pagination";
import Navbar from "@/components/product-page/NavBar";
import Footer from "@/components/product-page/Footer";

export default function Home() {
  const [products, setProducts] = useState([]); // Real products database se yahan aayenge
  const [loading, setLoading] = useState(true); // Loading state handle karne ke liye
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("Latest Arrivals");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Deployed Backend API endpoint
  const API_URL = "/api/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();
        
        // Mongoose schema check: response check karein agar error array wrappers hon ya direct array ho
        // Agar response structure different ho (e.g., { products: [...] }), to data.products use karein
        const fetchedProducts = Array.isArray(data) ? data : data.products || [];
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Auto-Scroll Logic
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  // Filtration and Sorting Logic (Mongoose schema keys handles dynamically)
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        // Backend keys safe-handling (categorey name key matches schema typos)
        selectedCategories.includes(product.categorey || product.category)
      );
    }

    if (sortBy === "Price Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategories, sortBy]);

  // Pagination Calculations
  const totalResults = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage) || 1;
  
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      <Navbar 
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        setCurrentPage={setCurrentPage}
      />

      {/* Main content wrapper */}
      <main className="flex-grow pt-28 pb-16 circuit-pattern">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row gap-8 items-start">

          <div className="hidden sm:block sm:sticky sm:top-32">
            <FiltersSidebar 
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              setCurrentPage={setCurrentPage}
            />
          </div>

          {/* section layout */}
          <section className="flex-1 w-full flex flex-col justify-between gap-12 min-h-[650px]">
            {loading ? (
              // Loading Spinner Element
              <div className="flex flex-col items-center justify-center flex-grow py-32 text-slate-400">
                <span className="h-10 w-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-sm font-medium tracking-widest uppercase text-cyan-400">Loading Products...</p>
              </div>
            ) : (
              <ProductGrid 
                products={paginatedProducts}
                totalResults={totalResults}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            )}
            
            {!loading && (
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                setCurrentPage={setCurrentPage} 
              />
            )}
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
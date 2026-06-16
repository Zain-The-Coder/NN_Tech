import { useState } from "react";
import Layout from "@/components/product-page/Layout";
import SidebarFilters from "@/components/product-page/SidebarFilters";
import ProductGrid from "@/components/product-page/ProductGrid";
import Pagination from "@/components/product-page/Pagination";

const ALL_PRODUCTS = [
  {
    title: "ASUS ROG Strix Z790-E",
    price: 145000,
    brand: "ASUS",
    category: "Motherboards",
    image: "/images/p1.jpg",
  },
  {
    title: "Intel i9-14900K",
    price: 192500,
    brand: "INTEL",
    category: "Processors",
    image: "/images/p2.jpg",
  },
  {
    title: "ASUS TUF RTX 4070",
    price: 288000,
    brand: "ASUS",
    category: "Graphics Cards",
    image: "/images/p3.jpg",
  },
];

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    maxPrice: 500000,
  });

  // FILTER LOGIC
  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    const matchCategory =
      filters.category.length === 0 ||
      filters.category.includes(p.category);

    const matchBrand =
      filters.brand.length === 0 ||
      filters.brand.includes(p.brand);

    const matchPrice = p.price <= filters.maxPrice;

    return matchCategory && matchBrand && matchPrice;
  });

  return (
    <Layout>
      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6">

          <SidebarFilters filters={filters} setFilters={setFilters} />

          <section className="flex-1 space-y-6">
            <ProductGrid products={filteredProducts} />
            <Pagination />
          </section>

        </div>
      </main>
    </Layout>
  );
}
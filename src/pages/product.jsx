import Header from "@/components/layout/Header";
import FiltersSidebar from "@/components/product-page/SidebarFilters";
import ProductGrid from "@/components/product-page/ProductGrid";
import Navbar from "@/components/product-page/NavBar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24 min-h-screen circuit-pattern">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row gap-6">

          <FiltersSidebar />

          <section className="flex-1">
            <ProductGrid />
          </section>

        </div>
      </main>

      <Navbar />
      <Footer />
    </>
  );
}
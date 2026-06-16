import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Location from "@/components/home/Location";

export default function Home() {
  return (
    <>
    <header className="pt-[100px]">
      <Header />
    </header>
      <main>
        <HeroSection />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Location />
      <Footer />
    </>
  );
}
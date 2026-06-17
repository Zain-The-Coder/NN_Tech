import HeroImages from "./HeroImages";
import Link from "next/link";

export default function HeroSection() {
  return (
<section className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 pt-24 w-full">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
        {/* TEXT FIRST (always below header) */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            EXPLORE OUR LATEST
            <span className="text-cyan-400"> GAMING & OFFICE</span>
            <span className="block lg:inline lg:ml-2">TECH</span>
          </h1>

          <ul className="mt-6 sm:mt-8 space-y-3 text-base sm:text-lg">
            <li>✔ Best Prices in Karachi</li>
            <li>✔ Trusted Seller</li>
            <li>✔ Gaming & Office Setup Available</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
            <Link href="/product">
            <button className="bg-cyan-400 text-black transition-all hover:scale-105 active:scale-95 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold">
              SHOP NOW
            </button>
            </Link>
            <Link href="/product">
            <button className="border border-cyan-400 transition-all active:scale-95 px-6 sm:px-8 py-3 sm:py-4 rounded-lg  hover:bg-cyan-400/10">
              VIEW CATALOG
            </button>
            </Link>

          </div>
        </div>

        {/* IMAGE SECOND (always after text on mobile too) */}
        <div className="flex justify-center items-center w-full">
  <HeroImages />
  </div>

      </div>
    </section>
  );
}
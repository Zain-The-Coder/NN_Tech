import HeroImages from "./HeroImages";

export default function HeroSection() {
  return (
    <section className="flex items-center max-w-7xl mx-auto px-4 sm:px-6 pt-24">

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">

        {/* TEXT FIRST (always below header) */}
        <div className="text-center lg:text-left">

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

            <button className="bg-cyan-400 text-black active:scale-95 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition hover:scale-105">
              SHOP NOW
            </button>

            <button className="border border-cyan-400 active:scale-95 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition hover:bg-cyan-400/10">
              VIEW CATALOG
            </button>

          </div>
        </div>

        {/* IMAGE SECOND (always after text on mobile too) */}
        <div className="flex justify-center lg:justify-end">
          <HeroImages />
        </div>

      </div>
    </section>
  );
}
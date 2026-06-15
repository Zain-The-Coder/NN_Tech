import HeroImages from "./HeroImages";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center max-w-7xl mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            EXPLORE OUR LATEST
            <span className="text-cyan-400">
              {" "}GAMING & OFFICE
            </span>
            <br />
            TECH
          </h1>

          <ul className="mt-8 space-y-4 text-lg">
            <li>✔ Best Prices in Karachi</li>
            <li>✔ Trusted Seller</li>
            <li>✔ Gaming & Office Setup Available</li>
          </ul>

          <div className="flex gap-4 mt-10">

            <button className="bg-cyan-400 text-black px-8 py-4 rounded-lg font-bold hover:scale-105 transition">
              SHOP NOW
            </button>

            <button className="border border-cyan-400 px-8 py-4 rounded-lg">
              VIEW CATALOG
            </button>

          </div>

        </div>

        <HeroImages />

      </div>

    </section>
  );
}
export default function HeroImages() {
  return (
    <div className="relative">

      <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="relative grid grid-cols-2 gap-4">

        <div className="col-span-2">
          <img
            src="/images/laptop.jpg"
            alt="Laptop"
            className="rounded-xl h-72 w-full object-cover border border-white/10 hover:scale-105 transition duration-500"
          />
        </div>

        <img
          src="/images/motherboard.jpg"
          alt="Motherboard"
          className="rounded-xl h-52 w-full object-cover border border-white/10 hover:scale-105 transition duration-500"
        />

        <img
          src="/images/mobile.jpg"
          alt="Mobile"
          className="rounded-xl h-52 w-full object-cover border border-white/10 hover:scale-105 transition duration-500"
        />

      </div>
    </div>
  );
}
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const products = [
  {
    id: 1,
    title: "ASUS ROG Strix Z790-E Gaming WiFi II",
    price: "145,000",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 2,
    title: "Intel Core i9-14900K",
    price: "192,500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 3,
    title: "ASUS TUF Gaming A15",
    price: "345,000",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 4,
    title: "Samsung 990 Pro 2TB",
    price: "58,000",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea",
  },
];

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 antialiased selection:bg-cyan-500/30">
      
      {/* Top Filter Bar: Enhanced with glassmorphism, blur, and neon border highlights */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-5 mb-8 shadow-xl shadow-black/10 transition-all duration-300 hover:border-slate-700">
        
        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium tracking-wide">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Showing <span className="text-slate-200 font-semibold">1-16</span> of <span className="text-slate-200 font-semibold">48</span> results
        </div>

        <div className="relative group w-full sm:w-auto">
          <select className="w-full sm:w-auto appearance-none bg-slate-950/60 text-slate-300 font-medium px-5 py-2.5 pr-10 rounded-xl border border-slate-800 cursor-pointer outline-none transition-all duration-200 hover:border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 text-sm">
            <option>Latest Arrivals</option>
            <option>Price Low to High</option>
          </select>
          {/* Custom Dropdown Arrow */}
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500 group-hover:text-slate-300 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

      </div>

      {/* Grid Container: Added fade-in-up subtle animation for the whole grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-[fadeIn_0.5s_ease-out]">
        {products.map((item) => (
          <div 
            key={item.id} 
            className="transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/5"
          >
            <ProductCard {...item} />
          </div>
        ))}
      </div>

      {/* Pagination Wrapper */}
      <div className="mt-12 flex justify-center">
        <Pagination />
      </div>

    </div>
  );
}
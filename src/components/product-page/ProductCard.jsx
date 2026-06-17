// export default function ProductCard({ image, title, price }) {
//   return (
//     <div className="group relative flex flex-col justify-between h-full bg-slate-950/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] hover:-translate-y-1.5">
      
//       {/* Top Subtle Glow Tag (Decorative background glow on hover) */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       <div>
//         {/* Image Container with Smooth Shimmer & Zoom */}
//         <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-900 mb-4 border border-white/[0.02]">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-1"
//             loading="lazy"
//           />
//           {/* Subtle overlay over image on hover */}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//         </div>

//         {/* Product Title with High-end Typography */}
//         <h4 className="text-sm font-medium text-slate-300 group-hover:text-white line-clamp-2 mb-2 tracking-wide min-h-[40px] transition-colors duration-300">
//           {title}
//         </h4>
//       </div>

//       {/* Price & Action Section */}
//       <div className="mt-4 space-y-4">
//         {/* Price Tag with Neon Micro-glow */}
//         <div className="flex items-baseline gap-1">
//           <span className="text-xs font-bold text-cyan-500/70 tracking-wider">PKR</span>
//           <span className="text-xl font-black text-white tracking-tight bg-clip-text group-hover:text-cyan-400 transition-colors duration-300">
//             {price}
//           </span>
//         </div>

//         {/* Premium Cyber-Style Button */}
//         <button className="relative w-full py-3 text-center overflow-hidden rounded-xl bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 active:scale-[0.98] group/btn">
          
//           {/* Background Slide Effect on Hover */}
//           <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
          
//           {/* Button Text Layer (Stays on top) */}
//           <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-slate-950 transition-colors duration-300">
//             Add to Cart
//             <svg 
//               className="w-4 h-4 transform translate-x-1 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 text-blue" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </span>
          
//         </button>
//       </div>

//     </div>
//   );
// }



export default function ProductCard({ image, title, price }) {
  const formattedPrice = price.toLocaleString();

  return (
    <div className="group relative flex flex-col justify-between h-full bg-slate-950/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 overflow-hidden shadow-xl transition-all duration-500 hover:border-cyan-500/30 hover:-translate-y-1.5">
      <div>
        <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-900 mb-4 border border-white/[0.02]">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-1" />
        </div>
        <h4 className="text-sm font-medium text-slate-300 group-hover:text-white line-clamp-2 mb-2 tracking-wide min-h-[40px] transition-colors">
          {title}
        </h4>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-bold text-cyan-500/70 tracking-wider">PKR</span>
          <span className="text-xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
            {formattedPrice}
          </span>
        </div>

        <button className="relative w-full py-3 overflow-hidden rounded-xl bg-white/[0.04] border border-white/10 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 active:scale-[0.98] group/btn">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-slate-950 transition-colors">
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
}
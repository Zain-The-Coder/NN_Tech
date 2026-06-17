export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 pt-12">
      <button 
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:border-cyan-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
      >
        ←
      </button>

      {[...Array(totalPages)].map((_, idx) => {
        const pageNum = idx + 1;
        const isActive = pageNum === currentPage;
        return (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={`w-10 h-10 rounded-xl font-bold transition-all duration-200 text-sm ${
              isActive 
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)] scale-105" 
                : "bg-slate-900 border border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      <button 
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:border-cyan-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
      >
        →
      </button>
    </div>
  );
}
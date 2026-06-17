export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-2 pt-10">

      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a1c1c] border border-white/10 hover:border-cyan-400 transition">
        ←
      </button>

      <button className="w-10 h-10 rounded-lg bg-cyan-400 text-black font-bold">
        1
      </button>

      <button className="w-10 h-10 rounded-lg bg-[#1a1c1c] border border-white/10">
        2
      </button>

      <button className="w-10 h-10 rounded-lg bg-[#1a1c1c] border border-white/10">
        3
      </button>

      <span>...</span>

      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1a1c1c] border border-white/10 hover:border-cyan-400 transition">
        →
      </button>

    </div>
  );
}
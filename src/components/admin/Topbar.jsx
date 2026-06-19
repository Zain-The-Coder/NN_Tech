export default function Topbar() {
  return (
    <header className="sticky top-0 h-16 bg-[#0f1720]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6">

      <input
        type="text"
        placeholder="Search system logs..."
        className="w-full max-w-md bg-[#161c27] rounded-lg px-4 py-2 border border-white/10"
      />

      <div className="flex items-center gap-4">
        <button>🔔</button>
        <button>👤</button>
      </div>

    </header>
  );
}
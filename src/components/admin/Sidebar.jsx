export default function Sidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-[#10151f]/80 backdrop-blur-xl border-r border-white/10 flex flex-col py-6 px-4">

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-white">
          NN TECH SERVICES
        </h1>

        <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mt-1">
          Admin Suite
        </p>
      </div>

      <nav className="flex-1 space-y-2">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-cyan-500/10 border-l-2 border-cyan-400 text-cyan-400">
          Dashboard
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5">
          Inventory Management
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5">
          System Settings
        </button>

      </nav>

      <div className="border-t border-white/10 pt-6">
        <p className="font-bold">Admin User</p>
        <p className="text-sm text-gray-400">
          System Overlord
        </p>
      </div>

    </aside>
  );
}
import Link from "next/link";

export default function Sidebar({
  activeSection,
  setActiveSection,
}) {
  return (
    /* CHANGED: Iski fixed position ko flexible kiya hai taake parent wrapper isko responsive control de sake */
    <aside className="h-full w-full bg-[#10151f]/80 backdrop-blur-xl border-r border-white/10 flex flex-col py-6 px-4">

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-white">
          NN TECH SERVICES
        </h1>

        <p className="text-cyan-400 text-xs uppercase tracking-[0.2em] mt-1">
          Admin Suite
        </p>
      </div>

      <nav className="flex-1 space-y-2">

        <button
          onClick={() => setActiveSection("dashboard")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeSection === "dashboard"
              ? "bg-cyan-500/10 border-l-2 border-cyan-400 text-cyan-400"
              : "hover:bg-white/5 text-white"
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActiveSection("add-product")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            activeSection === "add-product"
              ? "bg-cyan-500/10 border-l-2 border-cyan-400 text-cyan-400"
              : "hover:bg-white/5 text-white"
          }`}
        >
          Add Product
        </button>
          <Link href="/product">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-white">
          Back To Products Page
        </button>
        </Link>

      </nav>

      <div className="border-t border-white/10 pt-6">
        <p className="font-bold text-white">
          Admin User
        </p>

        <p className="text-sm text-gray-400">
          System Overlord
        </p>
      </div>

    </aside>
  );
}
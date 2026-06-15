export default function Sidebar() {
  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 bg-black/50 backdrop-blur-xl p-4 rounded-full">

      <button>QR</button>

      <button>YouTube</button>

      <button className="bg-cyan-400 text-black px-2 py-4 rounded-full">
        Message
      </button>

    </aside>
  );
}
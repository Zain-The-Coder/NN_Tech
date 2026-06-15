export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <div className="bg-slate-900 p-10 rounded-xl text-center">

        <h2 className="text-4xl font-bold mb-4">
          JOIN THE NN TECH COMMUNITY
        </h2>

        <p className="mb-6">
          Get exclusive access to pre-orders,
          tech news and discounts.
        </p>

        <form className="flex gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded bg-black border"
          />

          <button className="bg-cyan-400 text-black px-6 py-3 rounded">
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}
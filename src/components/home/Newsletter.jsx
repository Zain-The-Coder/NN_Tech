export default function Newsletter() {
  const founderNumber = "923182622266";
  const communityLink = "https://www.xyz.community";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-center">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
          JOIN THE NN TECH COMMUNITY
        </h2>

        <p className="mb-8 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
          Get exclusive access to pre-orders, tech news and discounts.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-5">

          {/* Community */}
          <a
            href={communityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold active:scale-95 transition-all hover:scale-105 text-center"
          >
            Join The Community
          </a>

          {/* Founder WhatsApp */}
          <a
            href={`https://wa.me/${founderNumber}?text=Assalamualaikum%20Sir,%20I%20visited%20NN%20Tech%20and%20would%20like%20to%20know%20more.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold active:scale-95 transition-all hover:scale-105 text-center"
          >
            Message Founder
          </a>

          {/* About */}
          <button
            className="w-full sm:w-auto bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold active:scale-95 transition-all hover:scale-105 text-center"
          >
            About Us
          </button>

        </div>
      </div>
    </section>
  );
}
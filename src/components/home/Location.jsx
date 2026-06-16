export default function Location() {
  // Aapke provide kiye huay exact coordinates (North Karachi area)
  const latitude = "24.9797671";
  const longitude = "67.0300345";
  
  // Google Maps embed URL jo exact pin/pointer show karega
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">
          Our Location
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Visit us at our physical store in Sector-11-E
        </p>
      </div>

      {/* Map Container */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all">

        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <iframe
            src={mapSrc}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Physical Store Location Map"
          ></iframe>
        </div>

      </div>

    </section>
  );
}
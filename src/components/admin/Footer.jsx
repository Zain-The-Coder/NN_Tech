
export default function Footer() {
  return (
    <>
    <footer className="border-t border-white/10 mt-[20px] sm:py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Store Info */}
          <div>
            <h2 className="text-cyan-400 text-2xl sm:text-3xl font-bold">
              NN TECH
            </h2>

            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              Empowering your digital journey with premium hardware,
              gaming accessories, office solutions, and cutting-edge technology.
            </p>
          </div>

          {/* Creator Info */}
          <div>
            <h2 className="text-cyan-400 text-2xl sm:text-3xl font-bold">
              Who Created Our Store?
            </h2>

            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Zain Ur Rehman, a MERN Stack Developer, helps businesses build
              modern SaaS platforms and professional e-commerce solutions.
            </p>

            <p className="mt-2 text-gray-400 text-sm sm:text-base">
              Need a website or web application? Feel free to contact him.
            </p>

            <button className="mt-5 w-full sm:w-auto bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95">
              Message Him
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} NN TECH. All Rights Reserved.
        </div>

      </div>

    </footer>
    </>
  );
}
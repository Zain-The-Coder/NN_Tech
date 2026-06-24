
export default function Footer() {
    const handleMessageHim = () => {
  const phoneNumber = "923182622266"; // apna WhatsApp number

  const message = `Hello,

You developed the NN Tech Store website. I found your name and details on their website.

I am interested in having a similar product website/store built for my business.

Would you be able to help me with that?

Thank you.`;

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <>
    <footer className="border-t border-white/10 py-10 sm:py-12">

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

            <div className="text-slate-400 text-sm sm:text-base leading-relaxed space-y-2 font-medium tracking-wide">
              <p>
                <span className="text-cyan-400 font-semibold">Zain Ur Rehman</span>, a MERN Stack Developer, helps businesses build
                modern SaaS platforms and professional e-commerce solutions.
              </p>
              <p className="text-slate-500 text-sm">
                Need a website or web application? Feel free to contact him.
              </p>
            </div>

            <button
  onClick={handleMessageHim}
  className="mt-5 w-full sm:w-auto bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
>
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
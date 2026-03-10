export default function Hero() {
  return (
    <section
      id="vrh"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Deep green-to-purple base gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #071e12 0%, #0f3d28 30%, #1f5c3e 55%, #3b2270 80%, #2a1a5e 100%)",
        }}
      />

      {/* Blueberry orb – top right */}
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full -z-10 opacity-40"
        style={{
          background: "radial-gradient(circle, #7b6bbf 0%, #4a3685 50%, transparent 75%)",
          filter: "blur(60px)",
        }}
      />

      {/* Green orb – bottom left */}
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full -z-10 opacity-30"
        style={{
          background: "radial-gradient(circle, #52b788 0%, #1f5c3e 55%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />

      {/* Blueberry orb – center-bottom accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] -z-10 opacity-20"
        style={{
          background: "radial-gradient(ellipse, #6c5bb8 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="text-center text-white px-6 max-w-3xl">
        <p
          className="uppercase tracking-[0.3em] text-xs font-semibold mb-5"
          style={{ color: "#a89fd8" }}
        >
          Poljoprivredno gazdinstvo
        </p>

        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4 leading-none"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Tarin Raj
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-[#7b6bbf]/60" />
          <div className="w-2 h-2 rounded-full bg-[#7b6bbf]" />
          <div className="h-px w-12 bg-[#7b6bbf]/60" />
        </div>

        <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed">
          Blizu sela Rudna Glava, Majdanpek
          <br />
          <span className="text-white/50 text-base">Istočna Srbija</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#o-nama"
            className="px-7 py-3 rounded-full text-sm font-semibold tracking-wide transition-all"
            style={{
              background: "linear-gradient(135deg, #4a3685, #7b6bbf)",
              color: "#fff",
              boxShadow: "0 4px 24px rgba(74,54,133,0.45)",
            }}
          >
            Saznaj više
          </a>
          <a
            href="#kontakt"
            className="px-7 py-3 rounded-full text-sm font-semibold tracking-wide border border-white/25 text-white/80 hover:border-white/50 hover:text-white transition-all"
          >
            Kontakt
          </a>
        </div>

        {/* Scroll cue */}
        <a
          href="#o-nama"
          aria-label="Skroluji nadole"
          className="inline-block mt-14 text-white/30 hover:text-white/70 transition-colors animate-bounce"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      id="vrh"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/naslovna-mobile.jpg')" }}
      />

      <div
        className="absolute inset-0 -z-10 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: "url('/naslovna.jpg')" }}
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,22,15,0.58) 0%, rgba(8,22,15,0.46) 45%, rgba(8,22,15,0.62) 100%)",
        }}
      />

      {/* Content */}
      <div className="text-center text-white px-6 max-w-3xl">
        <p className="uppercase tracking-[0.3em] text-xs font-semibold mb-5 text-white/80">
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
          <div className="h-px w-12 bg-white/60" />
          <div className="w-2 h-2 rounded-full bg-white/80" />
          <div className="h-px w-12 bg-white/60" />
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
              background: "linear-gradient(135deg, #1f5c3e, #2d7a52)",
              color: "#fff",
              boxShadow: "0 4px 24px rgba(16, 52, 35, 0.45)",
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

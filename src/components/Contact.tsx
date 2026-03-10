"use client";

const contactItems = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.12 2.18 2 2 0 012.1.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.88v2.04z" />
      </svg>
    ),
    label: "Telefon",
    value: "+381 XX XXX XXXX",
    href: "tel:+381XXXXXXXX",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "kontakt@tarinraj.rs",
    href: "mailto:kontakt@tarinraj.rs",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresa",
    value: "Rudna Glava, Majdanpek",
    href: "#mapa",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-[#2d7a52] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Kontakt
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
            Stupite u kontakt
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact details */}
          <div className="flex flex-col gap-6">
            <p className="text-[#6b7280] text-lg font-light leading-relaxed">
              Slobodno nas kontaktirajte za više informacija o imanju, borovnicama
              ili poseti.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-[#fafaf5] hover:bg-[#f0faf4] border border-gray-100 transition-colors group"
                >
                  <span className="text-[#2d7a52] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#9ca3af] font-medium mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[#1a1a1a] font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="ime"
                  className="block text-xs uppercase tracking-wide text-[#6b7280] font-medium mb-2"
                >
                  Ime
                </label>
                <input
                  id="ime"
                  name="ime"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafaf5] text-[#1a1a1a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52b788] focus:border-transparent transition"
                  placeholder="Vaše ime"
                />
              </div>
              <div>
                <label
                  htmlFor="prezime"
                  className="block text-xs uppercase tracking-wide text-[#6b7280] font-medium mb-2"
                >
                  Prezime
                </label>
                <input
                  id="prezime"
                  name="prezime"
                  type="text"
                  autoComplete="family-name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafaf5] text-[#1a1a1a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52b788] focus:border-transparent transition"
                  placeholder="Vaše prezime"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wide text-[#6b7280] font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafaf5] text-[#1a1a1a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52b788] focus:border-transparent transition"
                placeholder="vas@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="poruka"
                className="block text-xs uppercase tracking-wide text-[#6b7280] font-medium mb-2"
              >
                Poruka
              </label>
              <textarea
                id="poruka"
                name="poruka"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#fafaf5] text-[#1a1a1a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52b788] focus:border-transparent transition resize-none"
                placeholder="Vaša poruka..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#1f5c3e] text-white font-medium text-sm hover:bg-[#2d7a52] active:scale-[0.98] transition-all"
            >
              Pošalji poruku
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

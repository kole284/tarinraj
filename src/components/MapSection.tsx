export default function MapSection() {
  // Coordinates for Rudna Glava area, near Majdanpek
  const lat = 44.3113672697946;
  const lon = 22.11864071535719;
  const zoom = 13;

  const googleEmbedUrl =
    `https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`;

  const googleLinkUrl = `https://www.google.com/maps?q=${lat},${lon}`;

  return (
    <section id="mapa" className="py-24 bg-[#fafaf5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-[#2d7a52] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Lokacija
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
            Kako doći
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-[#1a1a1a] mb-1">Adresa</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    Rudna Glava, blizina Majdanpeka
                    <br />
                    Braničevski okrug, Srbija
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🚗</span>
                <div>
                  <p className="font-semibold text-[#1a1a1a] mb-1">Automobil</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    ~3h od Beograda
                    <br />
                    ~20 min od Majdanpeka
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌿</span>
                <div>
                  <p className="font-semibold text-[#1a1a1a] mb-1">Okruženje</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    Homoljske planine
                    <br />
                    Reka Pek u blizini
                  </p>
                </div>
              </div>
            </div>

            <a
              href={googleLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1f5c3e] text-white text-sm font-medium hover:bg-[#2d7a52] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Otvori u Google Maps
            </a>
          </div>

          {/* Map iframe – col-span 2 */}
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-md border border-gray-200 h-[420px]">
            <iframe
              title="Mapa – Tarin raj, Rudna Glava"
              src={googleEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

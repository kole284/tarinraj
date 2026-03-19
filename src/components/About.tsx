const stats = [
  { value: "25", unit: "ha", label: "Ukupna površina" },
  { value: "1", unit: "ha", label: "Plantaža borovnica" },
  { value: "500", unit: "", label: "Sadnica dunja" },
  { value: "5", unit: "ha", label: "Detelina" },
  { value: "2012", unit: "", label: "Godina osnivanja" },
];

export default function About() {
  return (
    <section id="o-nama" className="py-24 bg-[#fafaf5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-16">
          <p className="text-[#2d7a52] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            O nama
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight">
            Imanje u srcu <br />
            <em className="not-italic text-[#1f5c3e] font-normal">
              istočne Srbije
            </em>
          </h2>
        </div>

        {/* Text */}
        <div className="max-w-2xl space-y-5 text-[#374151] text-lg leading-relaxed font-light mb-14">
          <p>
            Tarin raj je porodično poljoprivredno gazdinstvo smešteno u
            neposrednoj blizini sela{" "}
            <strong className="font-medium text-[#1a1a1a]">Rudna Glava</strong>,
            opština Majdanpek, u lepoj i netaknutoj prirodi istočne Srbije.
          </p>
          <p>
            Na imanju od oko{" "}
            <strong className="font-medium text-[#1a1a1a]">25 hektara</strong>{" "}
            kombinujemo voćarstvo i prirodne pašnjake. Poseban ponos nam je
            plantaža{" "}
            <strong className="font-medium text-[#4a3685]">borovnica</strong>,
            kao i{" "}
            <strong className="font-medium text-[#1a1a1a]">500 sadnica dunja</strong>{" "}
            i oko{" "}
            <strong className="font-medium text-[#1f5c3e]">5 hektara detelišta</strong>{" "}
            — uzgajano prirodno, na planinskom tlu istočne Srbije.
          </p>
          <p>
            Blizina reke Pek, šumovite padine Homoljskih planina i čist
            planinski vazduh čine ovo mesto idealnim za uzgoj visokokvalitetnog
            voća bez kompromisa.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm select-none transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-[#52b788] cursor-default"
            >
              <div className="text-3xl font-light text-[#1f5c3e] leading-none whitespace-nowrap mb-1">
                {s.value}
                {s.unit && <span className="text-lg text-[#52b788] ml-0.5">{s.unit}</span>}
              </div>
              <div className="text-xs text-[#6b7280] font-medium uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}

          {/* Highlight box */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col justify-center p-6 rounded-2xl bg-gradient-to-br from-[#4a3685] to-[#1f5c3e] text-white select-none transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-default">
            <div className="text-2xl mb-2">🫐</div>
            <p className="text-xs font-medium leading-snug opacity-90">
              Bez kompromisa u kvalitetu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

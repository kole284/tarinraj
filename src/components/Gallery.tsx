import fs from "fs";
import path from "path";
import Image from "next/image";

function getGalleryImages(): string[] {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  try {
    const files = fs.readdirSync(galleryDir);
    return files
      .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
      .map((f) => `/gallery/${f}`);
  } catch {
    return [];
  }
}

export default function Gallery() {
  const images = getGalleryImages();

  return (
    <section id="galerija" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-[#2d7a52] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
            Galerija
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
            Prizori sa imanja
          </h2>
        </div>

        {images.length === 0 ? (
          /* Empty state – shown before the user adds images */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#e8f5ee] to-[#ede9f8] flex flex-col items-center justify-center gap-2 text-[#9ca3af]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span className="text-xs">Vaša slika ovde</span>
              </div>
            ))}
          </div>
        ) : (
          /* Masonry-style responsive grid */
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((src, i) => (
              <div
                key={src}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={src}
                  alt={`Tarin raj – slika ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 text-center text-sm text-[#9ca3af]">
          Dodajte slike u <code className="font-mono bg-gray-100 px-1 rounded">public/gallery/</code> folder da bi se prikazale ovde.
        </p>
      </div>
    </section>
  );
}

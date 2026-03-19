"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type GalleryLightboxProps = {
  images: string[];
};

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const previewImages = useMemo(() => images.slice(0, 6), [images]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  const openImage = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = () => {
    if (activeIndex === null || images.length === 0) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (activeIndex === null || images.length === 0) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null || activeIndex === null) return;

    const touchEndX = e.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchStartX - touchEndX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        showNext();
      } else {
        showPrev();
      }
    }

    setTouchStartX(null);
  };

  return (
    <section
      id="galerija"
      className="py-24 bg-linear-to-b from-[#f7fbf8] via-[#ffffff] to-[#f5f8f6]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="text-[#2d7a52] uppercase tracking-[0.2em] text-xs font-semibold mb-3">
              Galerija
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
              Prizori sa imanja
            </h2>
          </div>
          {images.length > 0 && (
            <p className="hidden sm:block text-sm text-[#6b7280]">
              {images.length} fotografija
            </p>
          )}
        </div>

        {images.length === 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-4/3 rounded-2xl border border-[#e2e8e3] bg-linear-to-br from-[#eaf6ef] to-[#f4f1e8] flex flex-col items-center justify-center gap-2 text-[#9ca3af]"
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
          <>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {previewImages.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => openImage(i)}
                  className="group relative block w-full break-inside-avoid rounded-2xl overflow-hidden border border-[#e5ebe6] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={src}
                    alt={`Tarin raj – slika ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-linear-to-t from-black/55 to-transparent">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-2.5 py-1 text-white text-xs backdrop-blur-sm">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#8ce6ae]" />
                      Pogledaj
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {images.length > previewImages.length && (
              <p className="mt-5 text-center text-sm text-[#6b7280]">
                Prikazano {previewImages.length} od {images.length} slika. Kliknite na sliku za listanje cele galerije.
              </p>
            )}
          </>
        )}
      </div>

      {isOpen && activeIndex !== null && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 overscroll-none">
          <button
            type="button"
            aria-label="Zatvori pregled"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative z-10 w-full max-w-6xl">
            <div
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="relative h-[52vh] min-h-70 max-h-170 sm:h-[58vh] rounded-2xl border border-white/20 bg-black/25 px-12 sm:px-16 touch-pan-x"
            >
              <Image
                src={images[activeIndex]}
                alt={`Tarin raj – slika ${activeIndex + 1}`}
                fill
                className="rounded-2xl object-contain p-2 sm:p-3"
                sizes="(max-width: 640px) 100vw, 1200px"
              />
            </div>

            <button
              type="button"
              onClick={showPrev}
              aria-label="Prethodna slika"
              className="hidden sm:flex absolute left-2 sm:left-4 top-[26vh] sm:top-[29vh] -translate-y-1/2 h-11 w-11 rounded-full bg-black/40 border border-white/25 text-white items-center justify-center hover:bg-black/60 transition-colors"
            >
              &#10094;
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Sledeća slika"
              className="hidden sm:flex absolute right-2 sm:right-4 top-[26vh] sm:top-[29vh] -translate-y-1/2 h-11 w-11 rounded-full bg-black/40 border border-white/25 text-white items-center justify-center hover:bg-black/60 transition-colors"
            >
              &#10095;
            </button>

            <div className="mt-4 flex items-center justify-between gap-3 text-white">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm backdrop-blur-sm">
                {activeIndex + 1} / {images.length}
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Zatvori pregled"
                className="inline-flex px-4 py-2 rounded-full border border-white/20 bg-black/35 text-white text-sm hover:bg-black/55 transition-colors"
              >
                Zatvori
              </button>
            </div>

            <div className="mx-auto mt-3 w-full max-w-5xl overflow-hidden rounded-xl border border-white/15 bg-black/25 px-2 py-2">
              <div className="flex items-center justify-start gap-2 overflow-x-auto [scrollbar-width:none]">
                {images.slice(0, 12).map((thumbSrc, thumbIndex) => (
                  <button
                    key={`thumb-${thumbSrc}`}
                    type="button"
                    onClick={() => openImage(thumbIndex)}
                    aria-label={`Otvori sliku ${thumbIndex + 1}`}
                    className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition-all ${
                      thumbIndex === activeIndex
                        ? "border-white shadow-lg"
                        : "border-white/30 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={thumbSrc}
                      alt={`Umanjeni prikaz ${thumbIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

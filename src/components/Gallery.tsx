import fs from "fs";
import path from "path";
import GalleryLightbox from "./GalleryLightbox";

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
  return <GalleryLightbox images={images} />;
}

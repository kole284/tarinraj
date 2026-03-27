import fs from "fs";
import path from "path";
import GalleryLightbox from "./GalleryLightbox";

function toPublicGalleryPath(fileName: string): string {
  if (/\.(heif|heic)$/i.test(fileName)) {
    return `/gallery/.converted/${encodeURIComponent(fileName)}.jpg`;
  }

  return `/gallery/${fileName}`;
}

function getGalleryImages(): string[] {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  try {
    const files = fs.readdirSync(galleryDir);
    return files
      .filter((f) => /\.(jpe?g|png|webp|avif|gif|heif|heic)$/i.test(f))
      .map((f) => toPublicGalleryPath(f));
  } catch {
    return [];
  }
}

export default function Gallery() {
  const images = getGalleryImages();
  return <GalleryLightbox images={images} />;
}

import fs from "fs/promises";
import path from "path";
import convert from "heic-convert";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const OUTPUT_DIR = path.join(GALLERY_DIR, ".converted");
const HEIF_EXTENSIONS = new Set([".heif", ".heic"]);

async function ensureOutputDir() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

function toOutputFileName(fileName) {
  return `${fileName}.jpg`;
}

async function shouldConvert(inputPath, outputPath) {
  try {
    const [inputStat, outputStat] = await Promise.all([
      fs.stat(inputPath),
      fs.stat(outputPath),
    ]);

    return inputStat.mtimeMs > outputStat.mtimeMs;
  } catch {
    return true;
  }
}

async function convertOne(fileName) {
  const inputPath = path.join(GALLERY_DIR, fileName);
  const outputFileName = toOutputFileName(fileName);
  const outputPath = path.join(OUTPUT_DIR, outputFileName);

  if (!(await shouldConvert(inputPath, outputPath))) {
    return false;
  }

  const inputBuffer = await fs.readFile(inputPath);
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: "JPEG",
    quality: 0.9,
  });

  await fs.writeFile(outputPath, outputBuffer);
  return true;
}

async function run() {
  await ensureOutputDir();

  const files = await fs.readdir(GALLERY_DIR);
  const heifFiles = files.filter((fileName) =>
    HEIF_EXTENSIONS.has(path.extname(fileName).toLowerCase())
  );

  let convertedCount = 0;

  for (const fileName of heifFiles) {
    if (await convertOne(fileName)) {
      convertedCount += 1;
    }
  }

  console.log(
    `[images:prepare] HEIF scan complete. Found: ${heifFiles.length}, converted: ${convertedCount}`
  );
}

run().catch((error) => {
  console.error("[images:prepare] Failed:", error);
  process.exitCode = 1;
});

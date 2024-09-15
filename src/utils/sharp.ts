import { RawFile } from "types";
import sharp from "sharp";

export async function optimizeImages(
  files: Array<RawFile>,
  config: { format: any; resize?: { width: number; height: number } }
): Promise<Buffer[] | null> {
  try {
    const bufferArray = files.map(async (file) => {
      return await sharp(file.data)
        .resize({ width: config.resize?.width, height: config.resize?.height })
        .toFormat(config.format)
        .toBuffer();
    });

    return Promise.all(bufferArray);
  } catch (err) {
    return null;
  }
}

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./src/app/img";
const outputFolder = "./src/app/img-webp";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
  const ext = path.extname(file).toLowerCase();

  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, file.replace(ext, ".webp"));

    sharp(inputPath)
      .resize({ width: 800 })
      .webp({ quality: 75 })
      .toFile(outputPath)
      .then(() => console.log("Converted:", file))
      .catch(err => console.error(err));
  }
});
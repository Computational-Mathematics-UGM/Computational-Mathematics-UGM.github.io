const fs = require("fs");
const path = require("path");

const bibDir = path.join(__dirname, "_bibliography");
const outputFile = path.join(bibDir, "references.bib");

// Get all .bib files in the folder except references.bib
const bibFiles = fs.readdirSync(bibDir)
  .filter(file => file.endsWith(".bib") && file !== "references.bib");

let merged = "";

bibFiles.forEach(file => {
  const filePath = path.join(bibDir, file);
  const content = fs.readFileSync(filePath, "utf8");
  merged += `% --- ${file} ---\n` + content.trim() + "\n\n";
});

fs.writeFileSync(outputFile, merged);
console.log(`✅ Merged ${bibFiles.length} files into references.bib`);

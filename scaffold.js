const fs = require("node:fs");
const path = require("node:path");

const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

const folderName = `${day}-${month}-${year}`;
const folderPath = path.join(process.cwd(), folderName);

if (fs.existsSync(folderPath)) {
    console.error(`Error: Folder "${folderName}" already exists. Aborting.`);
    process.exit(1);
}

const templatePath = path.join(process.cwd(), "template.md");

if (!fs.existsSync(templatePath)) {
    console.error("Error: template.md was not found. Aborting.");
    process.exit(1);
}

const templateContent = fs.readFileSync(templatePath, "utf8");

fs.mkdirSync(folderPath);

for (let i = 1; i <= 4; i++) {
    const fileName = `${i}-question.md`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFileSync(filePath, templateContent, "utf8");
}

console.log(`Successfully created folder "${folderName}" with 4 question files.`);

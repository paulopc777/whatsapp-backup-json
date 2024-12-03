import * as fs from "fs";
import * as path from "path";

export function saveJsonToFile(jsonData: object): void {
  const outputDir = "./output";
  const filePath = path.join(outputDir, "DateNew.json");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");

  console.log("Arquivo salvo em:", filePath);
}

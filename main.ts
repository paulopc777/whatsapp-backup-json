// Conection whatzap
import "./Client/Zap";
import { saveJsonToFile } from "./data/FileJson";
import { GetChatsMax } from "./Client/GetChats";
//
const readline = require("readline");

async function waitForUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Pressione Enter para continuar...\n", () => {
      rl.close();
      // @ts-expect-error
      resolve();
    });
  });
}

async function save() {
  const d = await GetChatsMax(200, 300); 
  if (d) saveJsonToFile(d); 
  await waitForUserInput();
  save()
}

(async function main() {
  console.log("Aguardando interação do usuário...");
  await waitForUserInput();
  save();
})();

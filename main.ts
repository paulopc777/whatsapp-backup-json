// Conection whatzap
import "./Client/Zap";
import { saveJsonToFile } from "./data/FileJson";
import { GetChatsMax } from "./GetChats";
// 

export async function main() {
  const d = await GetChatsMax(200, 200);
  if (d) saveJsonToFile(d);
}

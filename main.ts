// Conection whatzap
import WAWebJS from "whatsapp-web.js";
import "./Client/Zap";
import { client } from "./Client/Zap";

const FormatMessages = (msg: WAWebJS.Message[]) => {
  return msg.map((m) => ({ from: m.from, fromMe: m.fromMe, body: m.body }));
};

export async function main() {
  const chats = await client.getChats();

  const d = await Promise.all(
    chats.map(async (c) => {
      const msg = await c.fetchMessages({ limit: 10 });
      return { id: c.id.user, mensagens: FormatMessages(msg) };
    })
  );

  return d;
}

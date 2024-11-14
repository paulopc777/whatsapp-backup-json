// Conection whatzap
import WAWebJS from "whatsapp-web.js";
import "./Client/Zap";
import { client } from "./Client/Zap";
import { saveJsonToFile } from "./data/FileJson";

const FormatMessages = (msg: WAWebJS.Message[]) => {
  return msg.map((m) => ({ from: m.from, fromMe: m.fromMe, body: m.body }));
};

async function GetChatsMax(MaxContacts: number, MaxMessages: number) {
  const chats = (await client.getChats()).slice(0, MaxContacts);

  const d = await Promise.all(
    chats.map(async (c) => {
      const msg = await c.fetchMessages({ limit: MaxMessages });
      return { id: c.id.user, mensagens: FormatMessages(msg) };
    })
  );
  saveJsonToFile(d);
  return d;
}

async function GetChatsByPhone(Phone: string, MaxMessages: number) {
  const chat = (await client.getChats()).find((c) => c.id.user === Phone);
  if (chat) {
    const msg = await chat.fetchMessages({ limit: MaxMessages });
    return { id: chat.id.user, mensagens: FormatMessages(msg) };
  }
  console.error(`Not find chat tho number ${Phone}`)
  return false
}

export async function main() {
  const d = await GetChatsMax(30,100);
  if(d)saveJsonToFile(d);
}

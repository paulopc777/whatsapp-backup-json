import WAWebJS from "whatsapp-web.js";
import { client } from "./Client/Zap";
import { saveJsonToFile } from "./data/FileJson";

export const FormatMessages = (msg: WAWebJS.Message[]) => {
  return msg.map((m) => ({
    id: m.id.id,
    from: m.from,
    fromMe: m.fromMe,
    body: m.body,
    date: m.timestamp,
    hasMedia: m.hasMedia,
  }));
};

export async function GetChatsMax(MaxContacts: number, MaxMessages: number) {
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

export async function GetChatsByPhone(Phone: string, MaxMessages: number) {
  const chat = (await client.getChats()).find((c) => c.id.user === Phone);
  if (chat) {
    const msg = await chat.fetchMessages({ limit: MaxMessages });
    return { id: chat.id.user, mensagens: FormatMessages(msg) };
  }
  console.error(`Not find chat tho number ${Phone}`);
  return false;
}

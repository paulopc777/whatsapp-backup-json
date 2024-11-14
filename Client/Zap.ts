import { Client, LocalAuth } from "whatsapp-web.js";
import { main } from "../main";
const qrcode = require("qrcode-terminal");

export const client = new Client({
  authStrategy: new LocalAuth(),
});

client.once("ready", async () => {
  console.log("Client is ready!");
  const data = await main();
  console.log(JSON.stringify(data,null,1));
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.initialize();

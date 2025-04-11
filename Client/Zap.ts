import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

export const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: false, // Define para "false" para exibir o navegador
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.once("ready", async () => {
  console.log("Client is ready!");
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.initialize();

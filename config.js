//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURtWlFmVFFOMS8ybFJ3OHpWL2VCOE5OYmNuek9RZ09VZnhYa3ZBM29Waz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3NqOXZEZU03T3lJT1Q1bks5VE8zU1YvUG9IbFNvN2tiYVV1QTFGS0VTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TklycGdkMjBOb1NuUDFtVFh1dEZhOVZhdnFMREhwWU5TSFZ1K0pqWUVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6NGdoaUowYUphcGQ3d0JrUlVGM3pSczRkcU5KbUFCUGc3ZE00SGlKano4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNSjgwRXNHaEVXWEpCZjYvUldJWG9MaG9wM1duNG1zdWllb0Ywazdwa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBoVlhraVpySDlMNnhTRnF2c2FGV3NEL0QzNFkvWmZocUlnNGpqN3VvV3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1UUEtvSFhhZkNXcHdTOVFiOGNOUEJWWVg4TVBxTXFRcGJIMGdNSjluWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEdkZU1lUU9vbUpPUVltbXg5MkVSOVBPeDlCbGMyZFA1eTV0QjEvVjJoYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdiNXBrTVlzdEU0aEdBUDZyU2JmVU9IbHB6OGRzWm4wNDF2Y1NvZGVGeGw4dE9MdmRKNFJzbmtRSlNXMFMxMmJtNFlmTG9HVitqbmJxT20wTTE3Q2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiL0FObHhPb0VYVGxxTDhHM0QzUTNOT2YyN09TRlNYMXJSeUxuSzArRlJwMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRmVqa1ZLVEVRRVdWdUs4Vm5kVmxVQSIsInBob25lSWQiOiJhNjA0M2ViMi02MDRjLTRjZDEtYjcwOC00ZTExNGRmNjEyNDIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGZxemh5c0M3bC83c3BPTldEbTJhNWRDNjRvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFpMUZqVE4rSGh3UC9Idkh0NGNiS0ZoRHpkYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMUjJWN1Y4RyIsIm1lIjp7ImlkIjoiOTQ3NzA2NTM3MjM6MjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08zaHdnVVFwdG14dVFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhXWkJXZkQwblgvNE94MWtabjlaUU9RbXZSR1V0VEE1cEFyKysxTTZabjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5BZnZhczA1QjVZbTc5cXRXMklIUUp6TGlqSFEzT0ZvRTVTa0diek9RRVg4Z1pGZ2lWL0NtSkpMSGhPSjcvUTBCUGYxWVByUmlrVVJqSlBFNXEvYkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRSjEzTmkySWU1aWg5QldyeFdSSjhGTlQwYi9UZVhMZFZTR2pzRmxHODhCNHhaWUVSZWtGN3lzOXl4c0N6UUhmREMrWlo4ci9YenZjRTR4eVFmbUZnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcwNjUzNzIzOjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNWbVFWbnc5SjEvK0RzZFpHWi9XVURrSnIwUmxMVXdPYVFLL3Z0VE9tWi8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA5NjQ2NjF9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

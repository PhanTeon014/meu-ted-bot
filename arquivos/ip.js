 
import { PREFIX, BASE_API, ZONE_API_KEY  } from "../../config.js";

export default {
  name: "ip",
  description: "Consulta informações de um endereço IP",
  commands: ["ip", "consultaip"],
  usage: `${PREFIX}ip 8.8.8.8`,

  handle: async ({ args, sendReply ) => {
    const ip = args?.[0];

    if (!ip) {
      return sendReply(
        "╭─ ͡┄┄───────ׅ─ׅ─ׅ──ׂ─ׅ──────⟡\n" +
        "┃࣪ ╎『⚠』 ɪɴғᴏʀᴍᴇ ᴜᴍ ɪᴘ.\n" +
        "┃࣪ ╎『⌁』 ᴇxᴇᴍᴘʟᴏ: ${PREFIX}ip 8.8.8.8\n" +
        "╰─ ͡┄┄───────ׂ─ׅ───ׂ─ׅ─ׅ───ׅ───⟡"
      );
    }

    try {
      const url =
        `${BASE_API}/api/consulta/ip?apikey=${ZONE_API_KEY}&query=${encodeURIComponent(ip)}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!data?.status || !data?.resultado) {
        return sendReply(
          "╭─ ͡┄┄───────ׅ─ׅ─ׅ──ׂ─ׅ──────⟡\n" +
          "┃࣪ ╎『✘』 ɪᴘ ɴãᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.\n" +
          "╰─ ͡┄┄───────ׂ─ׅ───ׂ─ׅ─ׅ───ׅ───⟡"
        );
      }

      const r = data.resultado;

      const caixa = [
        "╭─ ͡┄┄───────ׅ─ׅ─ׅ──ׂ─ׅ──────⟡",
        "┃ ┏☆∻∹⋰ ★∻∹⋰ ☆∻∹⋰ ★∻∹⋰┓",
        `┃࣪ ╎『🌐』 ɪᴘ: ${r.ip ?? "N/A"}`,
        `┃࣪ ╎『✓』 sᴛᴀᴛᴜs: ${r.success ? "ᴠáʟɪᴅᴏ" : "ɪɴᴠáʟɪᴅᴏ"}`,
        `┃࣪ ╎『📡』 ᴛɪᴘᴏ: ${r.type ?? "N/A"}`,
        `┃࣪ ╎『🌎』 ᴄᴏɴᴛɪɴᴇɴᴛᴇ: ${r.continent ?? "N/A"}`,
        `┃࣪ ╎『🏳』 ᴘᴀís: ${r.country ?? "N/A"} (${r.country_code ?? "N/A"})`,
        `┃࣪ ╎『🏙』 ʀᴇɢɪãᴏ: ${r.region ?? "N/A"}`,
        `┃࣪ ╎『📍』 ᴄɪᴅᴀᴅᴇ: ${r.city ?? "N/A"}`,
        `┃࣪ ╎『📌』 ʟᴀᴛɪᴛᴜᴅᴇ: ${r.latitude ?? "N/A"}`,
        `┃࣪ ╎『📌』 ʟᴏɴɢɪᴛᴜᴅᴇ: ${r.longitude ?? "N/A"}`,
        `┃࣪ ╎『🔗』 ᴀsɴ: ${r.asn ?? "N/A"}`,
        `┃࣪ ╎『🏢』 ᴏʀɢ: ${r.org ?? "N/A"}`,
        `┃࣪ ╎『📶』 ɪsᴘ: ${r.isp ?? "N/A"}`,
        `┃࣪ ╎『🕐』 ғᴜsᴏ: ${r.timezone ?? "N/A"}`,
        `┃࣪ ╎『💰』 ᴍᴏᴇᴅᴀ: ${r.currency ?? "N/A"} (${r.currency_code ?? "N/A"})`,
        "┃ ┗☆∻∹⋰ ★∻∹⋰ ☆∻∹⋰ ★∻∹⋰┛",
        "╰─ ͡┄┄───────ׂ─ׅ───ׂ─ׅ─ׅ───ׅ───⟡",
      ].join("\n");

      return sendReply(caixa);
    } catch (error) {
      console.error(error);

      return sendReply(
        "╭─ ͡┄┄───────ׅ─ׅ─ׅ──ׂ─ׅ──────⟡\n" +
        "┃࣪ ╎『✘』 ᴇʀʀᴏ ᴀᴏ ᴄᴏɴsᴜʟᴛᴀʀ ᴏ ɪᴘ.\n" +
        "╰─ ͡┄┄───────ׂ─ׅ───ׂ─ׅ─ׅ───ׅ───⟡"
      );
    }
  },
};

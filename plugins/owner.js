const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/vQFfbhn/mrgmax.jpg' }, // Image URL from your request
            caption: `╭━━〔 *G⃗M⃗A⃗X⃗-M⃗D⃗* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *𝐇𝐞𝐫 𝐈𝐬 𝐓𝐡𝐞 𝐎𝐰𝐧𝐞𝐫 𝐃𝐞𝐭𝐚𝐢𝐥𝐬*
┃◈┃• *𝐍𝐚𝐦𝐞* - ${ownerName}
┃◈┃• *𝐍𝐮𝐦𝐛𝐞𝐫* ${ownerNumber}
┃◈┃• *𝐕𝐞𝐫𝐬𝐢𝐨𝐧*: 𝐕.2 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ 𝙶𝙼𝙰𝚇`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363220399229536@newsletter',
                    newsletterName: '𝔤𝔪𝔞𝔵𝔱𝔢𝔠𝔥',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/contact.m4a' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});

const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "stablediffussion",
  'alias': ['sd', "imagine2"],
  'react': '🎉',
  'desc': "Generate an image using AI API.",
  'category': "fun",
  'filename': __filename
}, async (_0x3999d2, _0x57bceb, _0x4380b4, {
  from: _0x3ab621,
  quoted: _0x4a0148,
  body: _0x212e12,
  isCmd: _0x30035f,
  command: _0x5398d7,
  args: _0x2d3bba,
  q: _0xbe974,
  isGroup: _0x1a51ab,
  sender: _0x6e14a8,
  senderNumber: _0x51cc68,
  botNumber2: _0x1496f3,
  botNumber: _0x2b4ee2,
  pushname: _0x1d1f3f,
  isMe: _0x18d1b9,
  isOwner: _0x35b6a4,
  groupMetadata: _0x5cfcce,
  groupName: _0xdb2e29,
  participants: _0x2e0f7c,
  groupAdmins: _0x5af42f,
  isBotAdmins: _0x39a264,
  isAdmins: _0x3fe07e,
  reply: _0x3b85ef
}) => {
  try {
    if (!_0xbe974) {
      return _0x3b85ef("Please provide a prompt for the image.");
    }
    await _0x3b85ef("Generating Imagine...");
    const _0x20203a = await fetchJson("https://api.giftedtech.web.id/api/ai/fluximg?apikey=gifted&prompt=" + _0xbe974);
    const _0xbb45e3 = _0x20203a.result;
    await _0x3999d2.sendMessage(_0x4380b4.chat, {
      'image': {
        'url': _0xbb45e3
      }
    });
  } catch (_0x5f1ad9) {
    console.error(_0x5f1ad9);
    _0x3b85ef("An error occurred: " + _0x5f1ad9.message);
  }
});
cmd({
  'pattern': 'fluxai',
  'alias': ["flux", "imagine"],
  'react': '🚀',
  'desc': "Generate an image using AI.",
  'category': "main",
  'filename': __filename
}, async (_0x5c048d, _0x3c998f, _0x94338a, {
  from: _0x2f1af9,
  quoted: _0x28f263,
  body: _0x948a07,
  isCmd: _0x4c4c8f,
  command: _0x46bd31,
  args: _0x55cbac,
  q: _0x4b45a9,
  isGroup: _0x1bb180,
  sender: _0x44c6a7,
  senderNumber: _0x4af687,
  botNumber2: _0x3cef69,
  botNumber: _0xf24dff,
  pushname: _0x5a5e9c,
  isMe: _0xd4d54e,
  isOwner: _0x3ec213,
  groupMetadata: _0x1f7eb5,
  groupName: _0x7e5a36,
  participants: _0x471700,
  groupAdmins: _0x1939d1,
  isBotAdmins: _0x5e0a3d,
  isAdmins: _0x2b69e8,
  reply: _0x5f22af
}) => {
  try {
    if (!_0x4b45a9) {
      return _0x5f22af("Please provide a prompt for the image.");
    }
    await _0x5f22af("> *GMAX-MD CREATING IMAGINE ...🔥*");
    const _0x58d962 = await fetchJson('https://api.giftedtech.web.id/api/ai/fluximg?apikey=gifted&prompt=' + _0x4b45a9);
    const _0x2de1df = _0x58d962.result;
    await _0x5c048d.sendMessage(_0x94338a.chat, {
      'image': {
        'url': _0x2de1df
      }
    });
  } catch (_0x5d9642) {
    console.error(_0x5d9642);
    _0x5f22af("An error occurred: " + _0x5d9642.message);
  }
});
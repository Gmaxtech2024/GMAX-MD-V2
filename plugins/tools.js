const axios = require("axios");
const fetch = require("node-fetch");
const {
  sleep
} = require("../lib/functions");
const {
  cmd,
  commands
} = require('../command');
cmd({
  'pattern': "ship",
  'alias': ["cup", 'love'],
  'desc': "Randomly pairs the command user with another group member.",
  'react': '❤️',
  'category': 'fun',
  'filename': __filename
}, async (_0x3d26c4, _0x303dfb, _0x1a5dd3, {
  from: _0x28520a,
  isGroup: _0x4d5fa8,
  groupMetadata: _0x409f9c,
  reply: _0x4164bf
}) => {
  try {
    if (!_0x4d5fa8) {
      return _0x4164bf("This command can only be used in groups.");
    }
    const _0x1d8b7d = _0x409f9c.participants.map(_0x22d5fb => _0x22d5fb.id);
    if (_0x1d8b7d.length < 0x2) {
      return _0x4164bf("Not enough members to pair.");
    }
    const _0x409625 = _0x1a5dd3.sender;
    let _0x545b55;
    do {
      _0x545b55 = _0x1d8b7d[Math.floor(Math.random() * _0x1d8b7d.length)];
    } while (_0x545b55 === _0x409625);
    const _0x1c1997 = '@' + _0x409625.split('@')[0x0] + " ❤️ " + ('@' + _0x545b55.split('@')[0x0]) + "\nCongratulations 💖🍻";
    await _0x3d26c4.sendMessage(_0x28520a, {
      'text': _0x1c1997,
      'contextInfo': {
        'mentionedJid': [_0x409625, _0x545b55],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363220399229536@newsletter",
          'newsletterName': "𝔤𝔪𝔞𝔵𝔱𝔢𝔠𝔥",
          'serverMessageId': 0x8f
        }
      }
    });
  } catch (_0x122469) {
    console.error("Error in ship command:", _0x122469);
    _0x4164bf("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': "insult",
  'desc': "Get a random insult",
  'category': 'fun',
  'react': '🤥'
}, async (_0x17ae48, _0x321f08) => {
  try {
    let _0x597939 = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json");
    let _0x1bd32e = _0x597939.data;
    if (!_0x1bd32e || !_0x1bd32e.insult) {
      return _0x321f08.reply("Unable to retrieve an insult. Please try again later.");
    }
    let _0x559edc = _0x1bd32e.insult;
    return _0x321f08.reply("*Insult:* " + _0x559edc);
  } catch (_0x598ca1) {
    _0x321f08.reply("Error: " + (_0x598ca1.message || _0x598ca1));
  }
});
cmd({
  'pattern': "joke",
  'desc': "😂 Get a random joke",
  'react': '🤣',
  'category': "fun",
  'filename': __filename
}, async (_0x3bd32b, _0x31efcf, _0x3ce34e, {
  from: _0x1562e2,
  q: _0x27dea8,
  reply: _0x214eec
}) => {
  try {
    const _0x4e8dcf = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const _0x37597c = _0x4e8dcf.data;
    const _0x35d904 = "\n😂 *Here's a random joke for you!* 😂\n\n*" + _0x37597c.setup + "*\n\n" + _0x37597c.punchline + " 😄\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*";
    return _0x214eec(_0x35d904);
  } catch (_0x15cf66) {
    console.log(_0x15cf66);
    return _0x214eec("⚠️ En Error Appears.");
  }
});
cmd({
  'pattern': "fact",
  'desc': "🧠 Get a random fun fact",
  'react': '🧠',
  'category': "fun",
  'filename': __filename
}, async (_0x539453, _0x3bbb1f, _0x1adfa8, {
  from: _0x3bb4bf,
  q: _0x40d45b,
  reply: _0x5c9d02
}) => {
  try {
    const _0x3bb044 = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
    const _0x9b8e52 = _0x3bb044.data.text;
    const _0xa19c14 = "\n🧠 *Random Fun Fact* 🧠\n\n" + _0x9b8e52 + "\n\nIsn't that interesting? 😄\n";
    return _0x5c9d02(_0xa19c14);
  } catch (_0x52fbb) {
    console.log(_0x52fbb);
    return _0x5c9d02("⚠️ An error occurred while fetching a fun fact. Please try again later.");
  }
});
cmd({
  'pattern': "fancy",
  'alias': ['font', "style"],
  'react': '✍️',
  'desc': "Convert text into various fonts.",
  'category': "tools",
  'filename': __filename
}, async (_0x21e8e2, _0x264a0f, _0xd7ded3, {
  from: _0x228325,
  quoted: _0x3066ab,
  body: _0x395b09,
  args: _0x56b06f,
  q: _0x2205f3,
  reply: _0x690a38
}) => {
  try {
    if (!_0x2205f3) {
      return _0x690a38("Please provide text to convert into fonts.");
    }
    let _0x2f9208 = await axios.get("https://www.dark-yasiya-api.site/other/font?text=" + encodeURIComponent(_0x2205f3));
    let _0x34b634 = _0x2f9208.data;
    if (!_0x34b634.status) {
      return _0x690a38("Error fetching fonts. Please try again later.");
    }
    let _0x439034 = _0x34b634.result.map(_0xaff993 => '*' + _0xaff993.name + ":*\n" + _0xaff993.result).join("\n\n");
    let _0x175604 = "*GMAX FANCY FONTS*:\n\n" + _0x439034 + "\n\n> *Bʏ Mʀ-ɢᴍᴀx*";
    await _0x21e8e2.sendMessage(_0x228325, {
      'text': _0x175604,
      'contextInfo': {
        'mentionedJid': [_0xd7ded3.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363220399229536@newsletter",
          'newsletterName': "𝔤𝔪𝔞𝔵𝔱𝔢𝔠𝔥",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x264a0f
    });
  } catch (_0x1ffd34) {
    console.error(_0x1ffd34);
    _0x690a38("An error occurred while fetching fonts.");
  }
});
cmd({
  'pattern': "pickupline",
  'alias': ["pickup"],
  'desc': "Get a random pickup line from the API.",
  'react': '💬',
  'category': "fun",
  'filename': __filename
}, async (_0x3e59ff, _0x2cef5b, _0x4a2b3d, {
  from: _0x1d4dd4,
  reply: _0x4de4fa
}) => {
  try {
    const _0x9e336b = await fetch("https://api.popcat.xyz/pickuplines");
    if (!_0x9e336b.ok) {
      throw new Error("API request failed with status " + _0x9e336b.status);
    }
    const _0x27a12e = await _0x9e336b.json();
    console.log("JSON response:", _0x27a12e);
    const _0x56313f = "*Here's a pickup line for you:*\n\n\"" + _0x27a12e.pickupline + "\"\n\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mʀ-ɢᴍᴀx*";
    await _0x3e59ff.sendMessage(_0x1d4dd4, {
      'text': _0x56313f
    }, {
      'quoted': _0x4a2b3d
    });
  } catch (_0x6b2bc1) {
    console.error("Error in pickupline command:", _0x6b2bc1);
    _0x4de4fa("Sorry, something went wrong while fetching the pickup line. Please try again later.");
  }
});
cmd({
  'pattern': "character",
  'alias': ["char"],
  'desc': "Check the character of a mentioned user.",
  'react': '🔥',
  'category': "fun",
  'filename': __filename
}, async (_0x4aa068, _0x9034ea, _0x570419, {
  from: _0x4ff36d,
  isGroup: _0x508bb7,
  text: _0x16422e,
  reply: _0x20ce76
}) => {
  try {
    if (!_0x508bb7) {
      return _0x20ce76("This command can only be used in groups.");
    }
    const _0x30f150 = _0x570419.message.extendedTextMessage?.["contextInfo"]?.['mentionedJid']?.[0x0];
    if (!_0x30f150) {
      return _0x20ce76("Please mention a user whose character you want to check.");
    }
    const _0x58c242 = ['Sigma', "Generous", "Grumpy", "Overconfident", "Obedient", 'Good', 'Simp', "Kind", "Patient", "Pervert", "Cool", "Helpful", 'Brilliant', "Sexy", "Hot", "Gorgeous", "Cute"];
    const _0x1a7666 = _0x58c242[Math.floor(Math.random() * _0x58c242.length)];
    const _0xbc5bff = "Character of @" + _0x30f150.split('@')[0x0] + " is *" + _0x1a7666 + "* 🔥⚡";
    await _0x4aa068.sendMessage(_0x4ff36d, {
      'text': _0xbc5bff,
      'mentions': [_0x30f150]
    }, {
      'quoted': _0x570419
    });
  } catch (_0x2ac887) {
    console.error("Error in character command:", _0x2ac887);
    _0x20ce76("An error occurred while processing the command. Please try again.");
  }
});
cmd({
  'pattern': "truth",
  'alias': ['t', "truthquestion"],
  'react': '❔',
  'desc': "Get a random truth question.",
  'category': "fun",
  'use': '.truth',
  'filename': __filename
}, async (_0x19d2cc, _0x181b40, _0x5ea9d6, {
  from: _0x134bb8,
  args: _0x3fc1a3,
  reply: _0x5c2875
}) => {
  try {
    _0x5c2875("*🔍 Fetching a truth question...*");
    const _0x76d99b = await axios.get("https://api.davidcyriltech.my.id/truth");
    if (!_0x76d99b.data || !_0x76d99b.data.success) {
      return _0x5c2875("❌ Failed to fetch a truth question. Please try again later.");
    }
    const _0x4c92c8 = _0x76d99b.data.question;
    if (_0x4c92c8) {
      _0x5c2875("*Truth Question:* " + _0x4c92c8);
    }
  } catch (_0x2ca16a) {
    console.error(_0x2ca16a);
    _0x5c2875("❌ An error occurred while fetching the truth question.");
  }
});
cmd({
  'pattern': "dare",
  'alias': ['d', "darequestion"],
  'react': '🔥',
  'desc': "Get a random dare question.",
  'category': "fun",
  'use': '.dare',
  'filename': __filename
}, async (_0x4c05e3, _0x3b0d66, _0x260cce, {
  from: _0x2a0e10,
  args: _0x190057,
  reply: _0x4db981
}) => {
  try {
    _0x4db981("*🔥 Fetching a dare question...*");
    const _0x2e2163 = await axios.get('https://api.davidcyriltech.my.id/dare');
    if (!_0x2e2163.data || !_0x2e2163.data.success) {
      return _0x4db981("❌ Failed to fetch a dare question. Please try again later.");
    }
    const _0x57dd4f = _0x2e2163.data.question;
    if (_0x57dd4f) {
      _0x4db981("*Dare:* " + _0x57dd4f);
    }
  } catch (_0x3297ce) {
    console.error(_0x3297ce);
    _0x4db981("❌ An error occurred while fetching the dare question.");
  }
});
cmd({
  'pattern': 'readmore',
  'alias': ['rm', "rmore", "readm"],
  'desc': "Generate a Read More message.",
  'category': 'convert',
  'use': ".readmore <text>",
  'react': '📝',
  'filename': __filename
}, async (_0x59b00b, _0x5a27e0, _0x568963, {
  from: _0x2006c5,
  args: _0x1e3737,
  reply: _0x2679a3
}) => {
  try {
    const _0x28873a = _0x1e3737.join(" ") || "No text provided.";
    const _0x496428 = String.fromCharCode(0x200e).repeat(0xfa0);
    const _0x16e1ed = '' + _0x28873a + _0x496428;
    await _0x59b00b.sendMessage(_0x2006c5, {
      'text': _0x16e1ed
    }, {
      'quoted': _0x568963
    });
  } catch (_0x24372a) {
    console.error('Error:', _0x24372a);
    _0x2679a3("❌ An error occurred: " + _0x24372a.message);
  }
});
cmd({
  'pattern': 'ask',
  'alias': ['send', 'sm'],
  'desc': "Send a message multiple times, one by one.",
  'category': "fun",
  'filename': __filename
}, async (_0x4e2cb4, _0x483090, _0x1e6b31, {
  args: _0x3cbeaf,
  reply: _0x2ba8a9,
  senderNumber: _0x38e9f9
}) => {
  try {
    const _0x49c275 = _0x4e2cb4.user.id.split(':')[0x0];
    if (_0x38e9f9 !== _0x49c275) {
      return _0x2ba8a9("❎ Only the bot owner can use this command.");
    }
    if (!_0x3cbeaf[0x0]) {
      return _0x2ba8a9("✳️ Use this command like:\n *Example:* .ask 10,I love you*");
    }
    const [_0x264888, ..._0x54eba9] = _0x3cbeaf.join(" ").split(',');
    const _0x256125 = parseInt(_0x264888.trim());
    const _0x40e384 = _0x54eba9.join(',').trim();
    if (isNaN(_0x256125) || _0x256125 <= 0x0 || _0x256125 > 0x64) {
      return _0x2ba8a9("❎ Please specify a valid number between 1 and 100.");
    }
    if (!_0x40e384) {
      return _0x2ba8a9("❎ Please provide a message to send.");
    }
    _0x2ba8a9("⏳ Sending \"" + _0x40e384 + "\" " + _0x256125 + " times. This may take a while...");
    for (let _0x781a84 = 0x0; _0x781a84 < _0x256125; _0x781a84++) {
      await _0x4e2cb4.sendMessage(_0x1e6b31.chat, {
        'text': _0x40e384
      }, {
        'quoted': _0x483090
      });
      await sleep(0x3e8);
    }
    _0x2ba8a9("✅ Successfully sent the message " + _0x256125 + " times.");
  } catch (_0x14ed73) {
    console.error(_0x14ed73);
    _0x2ba8a9("❎ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "repeat",
  'alias': ['rp', "rpm"],
  'desc': "Repeat a message a specified number of times.",
  'category': "fun",
  'filename': __filename
}, async (_0x5c1cc4, _0x5018df, _0x35256b, {
  args: _0x379d72,
  reply: _0x2a85c3
}) => {
  try {
    if (!_0x379d72[0x0]) {
      return _0x2a85c3("✳️ Use this command like:\n*Example:* .repeat 10,I love you*");
    }
    const [_0x4b5eae, ..._0x35a0ff] = _0x379d72.join(" ").split(',');
    const _0x2f1b02 = parseInt(_0x4b5eae.trim());
    const _0x129df7 = _0x35a0ff.join(',').trim();
    if (isNaN(_0x2f1b02) || _0x2f1b02 <= 0x0 || _0x2f1b02 > 0x12c) {
      return _0x2a85c3("❎ Please specify a valid number between 1 and 300.");
    }
    if (!_0x129df7) {
      return _0x2a85c3("❎ Please provide a message to repeat.");
    }
    const _0x4ae510 = Array(_0x2f1b02).fill(_0x129df7).join("\n");
    _0x2a85c3("🔄 Repeated " + _0x2f1b02 + " times:\n\n" + _0x4ae510);
  } catch (_0x332786) {
    console.error(_0x332786);
    _0x2a85c3("❎ An error occurred while processing your request.");
  }
});
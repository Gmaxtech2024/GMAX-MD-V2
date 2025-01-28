const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "pair",
  'alias': ['getpair', "clone"],
  'react': "🇵🇰",
  'desc': "pair",
  'category': "download",
  'use': ".pair +25575385XXX",
  'filename': __filename
}, async (_0x5c969f, _0x3cd92c, _0x29849e, {
  from: _0x1e7ecb,
  prefix: _0x3dea3d,
  quoted: _0x8c00e8,
  q: _0x2e94b3,
  reply: _0x211cc6,
  isGroup: _0x536ee4
}) => {
  try {
    if (_0x536ee4) {
      return await _0x211cc6("❌ This command is not allowed in group chats. Please use it in my inbox.");
    }
    if (!_0x2e94b3) {
      return await _0x211cc6("*Example - :* .pair +25575385XXX");
    }
    await _0x211cc6("*Getting Pairing Code...*");
    const _0x4d4f2b = await fetchJson("https://sessions12-86cb4755b42a.herokuapp.com/?number=" + _0x2e94b3);
    const _0x217da9 = _0x4d4f2b.code;
    await _0x29849e.reply('' + _0x217da9);
    await _0x29849e.reply("> *Use The Above Pairing Code To Get Your Session Id For GMAX-MD.*");
  } catch (_0x1ac78d) {
    console.error(_0x1ac78d);
    _0x211cc6("An error occurred: " + _0x1ac78d.message);
  }
});
cmd({
  'pattern': "pair2",
  'alias': ["getpair2", "clone2"],
  'react': '🇵🇸',
  'desc': "pair",
  'category': 'download',
  'use': ".pair +25575385XXX",
  'filename': __filename
}, async (_0x10b6ae, _0x4b6fb0, _0x30c276, {
  from: _0x5caf78,
  prefix: _0x2fb7f9,
  quoted: _0x50f970,
  q: _0x39aa27,
  reply: _0x54c103,
  isGroup: _0x266071
}) => {
  try {
    if (_0x266071) {
      return await _0x54c103("❌ This command is not allowed in group chats. Please use it in my inbox.");
    }
    if (!_0x39aa27) {
      return await _0x54c103("*Example - :* .pair2 +25575385XXX");
    }
    await _0x54c103("*Getting Pairing Code...*");
    const _0x2ef939 = await fetchJson('https://sessions12-86cb4755b42a.herokuapp.com/code?number=' + _0x39aa27);
    const _0x66dac4 = _0x2ef939.code;
    await _0x30c276.reply('' + _0x66dac4);
    await _0x30c276.reply("> *Use The Above Pairing Code To Get Your Session Id For GMAX-MD.*");
  } catch (_0x9f2953) {
    console.error(_0x9f2953);
    _0x54c103("An error occurred: " + _0x9f2953.message);
  }
});
cmd({
  'pattern': "pair3",
  'alias': ['getpair3', 'clone3'],
  'react': "🇵🇰",
  'desc': "pair",
  'category': "download",
  'use': ".pair +25575385XXX",
  'filename': __filename
}, async (_0x5138b1, _0x458204, _0x32bf04, {
  from: _0x2ff537,
  prefix: _0x367aaa,
  quoted: _0x5132e3,
  q: _0xa39979,
  reply: _0x3a1756,
  isGroup: _0x4b2572
}) => {
  try {
    if (_0x4b2572) {
      return await _0x3a1756("❌ This command is not allowed in group chats. Please use it in my inbox.");
    }
    if (!_0xa39979) {
      return await _0x3a1756("*Example - :* .pair2 +25575385XXX");
    }
    await _0x3a1756("*Getting Pairing Code...*");
    const _0x387e16 = await fetchJson("https://sessions12-86cb4755b42a.herokuapp.com/pair?phone=" + _0xa39979);
    const _0x10d9c1 = _0x387e16.code;
    await _0x32bf04.reply('' + _0x10d9c1);
    await _0x32bf04.reply("> *Use The Above Pairing Code To Get Your Session Id For GMAX-MD.*");
  } catch (_0x291816) {
    console.error(_0x291816);
    _0x3a1756("An error occurred: " + _0x291816.message);
  }
});
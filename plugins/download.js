const _0x222edd=_0x3728;(function(_0x5e4aca,_0x4f1a0a){const _0x3efed8=_0x3728,_0x50fad6=_0x5e4aca();while(!![]){try{const _0x498c6a=-parseInt(_0x3efed8(0x15c))/0x1+-parseInt(_0x3efed8(0xdd))/0x2+-parseInt(_0x3efed8(0x176))/0x3+-parseInt(_0x3efed8(0xec))/0x4+parseInt(_0x3efed8(0xbf))/0x5+-parseInt(_0x3efed8(0x13d))/0x6*(-parseInt(_0x3efed8(0x18f))/0x7)+-parseInt(_0x3efed8(0x13a))/0x8;if(_0x498c6a===_0x4f1a0a)break;else _0x50fad6['push'](_0x50fad6['shift']());}catch(_0x42a524){_0x50fad6['push'](_0x50fad6['shift']());}}}(_0x1fab,0xe2f40));const {fetchJson}=require(_0x222edd(0x125)),{downloadTiktok}=require(_0x222edd(0xfb)),{facebook}=require(_0x222edd(0xf8)),cheerio=require(_0x222edd(0xdf)),{igdl}=require(_0x222edd(0x10d)),axios=require(_0x222edd(0x132)),{cmd,commands}=require(_0x222edd(0xbd));cmd({'pattern':_0x222edd(0xbe),'alias':['tt'],'react':'🎥','desc':_0x222edd(0x144),'category':'download','filename':__filename},async(_0x52ef74,_0x5ad531,_0x49c11e,{from:_0x21a482,quoted:_0x2077af,body:_0x39b043,isCmd:_0x212dc0,command:_0x806d52,args:_0x1c069a,q:_0x5d0e76,isGroup:_0x11fd0b,sender:_0x45d743,senderNumber:_0x4c57dd,botNumber2:_0x3f52e7,botNumber:_0x5d84c6,pushname:_0x5c5fcf,isMe:_0x282221,isOwner:_0xfcdfa3,groupMetadata:_0xb1625b,groupName:_0xcfce26,participants:_0x2d7786,groupAdmins:_0x1f9a7c,isBotAdmins:_0x3a3173,isAdmins:_0xdf0d9e,reply:_0x936d5d})=>{const _0x58fc03=_0x222edd;try{if(!_0x5d0e76&&!_0x5d0e76[_0x58fc03(0x133)](_0x58fc03(0xd3)))return _0x936d5d(_0x58fc03(0xc6));_0x49c11e[_0x58fc03(0x111)]('⬇️');let _0x11764c=await downloadTiktok(_0x5d0e76),_0x4f6574=_0x58fc03(0x16f)+_0x11764c[_0x58fc03(0x15b)][_0x58fc03(0x110)]+_0x58fc03(0x10e);const _0x2abdc9=await _0x52ef74[_0x58fc03(0x151)](_0x21a482,{'image':{'url':_0x11764c['result'][_0x58fc03(0xc2)]},'caption':_0x4f6574}),_0x252717=_0x2abdc9['key']['id'];_0x52ef74['ev']['on'](_0x58fc03(0x158),async _0x30d4e9=>{const _0x188107=_0x58fc03,_0x557500=_0x30d4e9[_0x188107(0x14b)][0x0];if(!_0x557500['message'])return;const _0x2e7024=_0x557500['message'][_0x188107(0x175)]||_0x557500[_0x188107(0x197)][_0x188107(0x10f)]?.[_0x188107(0xe7)],_0x33a5c0=_0x557500[_0x188107(0x141)][_0x188107(0x116)],_0x1103c6=_0x557500['message']['extendedTextMessage']&&_0x557500[_0x188107(0x197)][_0x188107(0x10f)][_0x188107(0xd9)][_0x188107(0xf0)]===_0x252717;if(_0x1103c6){await _0x52ef74['sendMessage'](_0x33a5c0,{'react':{'text':'⬇️','key':_0x557500[_0x188107(0x141)]}});let _0x1c8e8a=_0x11764c[_0x188107(0x15b)];await _0x52ef74[_0x188107(0x151)](_0x33a5c0,{'react':{'text':'⬆️','key':_0x557500[_0x188107(0x141)]}});if(_0x2e7024==='1')await _0x52ef74[_0x188107(0x151)](_0x33a5c0,{'video':{'url':_0x1c8e8a[_0x188107(0x103)][_0x188107(0x150)]},'caption':_0x188107(0x19a)},{'quoted':_0x557500});else{if(_0x2e7024==='2')await _0x52ef74[_0x188107(0x151)](_0x33a5c0,{'video':{'url':_0x1c8e8a[_0x188107(0x103)][_0x188107(0xc8)]},'caption':'*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ𝙶𝙼𝙰𝚇*'},{'quoted':_0x557500});else _0x2e7024==='3'&&await _0x52ef74[_0x188107(0x151)](_0x33a5c0,{'audio':{'url':_0x1c8e8a[_0x188107(0x103)][_0x188107(0x17a)]},'mimetype':_0x188107(0x117)},{'quoted':_0x557500});}}});}catch(_0x442854){console['log'](_0x442854),_0x936d5d(''+_0x442854);}}),cmd({'pattern':'fb','alias':[_0x222edd(0x17e)],'desc':'Download\x20Facebook\x20videos','category':'download','filename':__filename},async(_0x217ed0,_0x51eeaa,_0x297a7c,{from:_0x40a3c6,quoted:_0x10be4a,body:_0x2847c3,isCmd:_0x4e96ed,command:_0x177d74,args:_0x4ea50c,q:_0x3aa4a9,isGroup:_0x28f62a,sender:_0x123e2d,senderNumber:_0x4c5b80,botNumber2:_0x34ee3b,botNumber:_0x2d3fae,pushname:_0x283c19,isMe:_0x469f16,isOwner:_0x755d44,groupMetadata:_0x1bb06c,groupName:_0x40bddc,participants:_0x59b5e3,groupAdmins:_0x132b6a,isBotAdmins:_0x24dd10,isAdmins:_0x243a1e,reply:_0x4ce973})=>{const _0x216100=_0x222edd;try{if(!_0x3aa4a9||!_0x3aa4a9[_0x216100(0x133)]('https://'))return _0x217ed0['sendMessage'](_0x40a3c6,{'text':_0x216100(0x143)},{'quoted':_0x51eeaa});await _0x217ed0['sendMessage'](_0x40a3c6,{'react':{'text':'⏳','key':_0x51eeaa['key']}});const _0x17007d=await facebook(_0x3aa4a9),_0x148718='╭━━━〔\x20*G⃗M⃗A⃗X⃗-M⃗D⃗*\x20〕━━━┈⊷\x0a┃▸╭───────────\x0a┃▸┃๏\x20*𝔽𝔹\x20𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻𝔼ℝ*\x0a┃▸└───────────···๏\x0a╰────────────────┈⊷\x0a╭━━━❐━⪼\x0a┇๏\x20*Duration*\x20-\x20'+_0x17007d[_0x216100(0x15b)]['duration']+_0x216100(0x12f),_0x383324=await _0x217ed0['sendMessage'](_0x40a3c6,{'image':{'url':_0x17007d[_0x216100(0x15b)][_0x216100(0xc0)]},'caption':_0x148718},{'quoted':_0x51eeaa}),_0x40d327=_0x383324[_0x216100(0x141)]['id'];_0x217ed0['ev']['on'](_0x216100(0x158),async _0x404ee1=>{const _0x497abb=_0x216100,_0x39196=_0x404ee1[_0x497abb(0x14b)][0x0];if(!_0x39196['message'])return;const _0xafb995=_0x39196['message']['conversation']||_0x39196[_0x497abb(0x197)][_0x497abb(0x10f)]?.[_0x497abb(0xe7)],_0x44636a=_0x39196[_0x497abb(0x141)][_0x497abb(0x116)],_0x218107=_0x39196[_0x497abb(0x197)][_0x497abb(0x10f)]&&_0x39196[_0x497abb(0x197)][_0x497abb(0x10f)][_0x497abb(0xd9)][_0x497abb(0xf0)]===_0x40d327;if(_0x218107){await _0x217ed0[_0x497abb(0x151)](_0x44636a,{'react':{'text':'⬇️','key':_0x39196[_0x497abb(0x141)]}});let _0x1bd090=_0x17007d[_0x497abb(0x15b)];await _0x217ed0['sendMessage'](_0x44636a,{'react':{'text':'⬆️','key':_0x39196[_0x497abb(0x141)]}});if(_0xafb995===_0x497abb(0x169))await _0x217ed0[_0x497abb(0x151)](_0x44636a,{'video':{'url':_0x1bd090['links']['SD']},'caption':_0x497abb(0x19a)},{'quoted':_0x39196});else{if(_0xafb995===_0x497abb(0x14a))await _0x217ed0[_0x497abb(0x151)](_0x44636a,{'video':{'url':_0x1bd090[_0x497abb(0x184)]['HD']},'caption':_0x497abb(0xea)},{'quoted':_0x39196});else{if(_0xafb995===_0x497abb(0xf6))await _0x217ed0['sendMessage'](_0x44636a,{'audio':{'url':_0x1bd090[_0x497abb(0x184)]['SD']},'mimetype':_0x497abb(0x117)},{'quoted':_0x39196});else{if(_0xafb995===_0x497abb(0xe9))await _0x217ed0['sendMessage'](_0x44636a,{'document':{'url':_0x1bd090['links']['SD']},'mimetype':_0x497abb(0x117),'fileName':_0x497abb(0xd7),'caption':_0x497abb(0x15e)},{'quoted':_0x39196});else _0xafb995===_0x497abb(0x192)&&await _0x217ed0[_0x497abb(0x151)](_0x44636a,{'audio':{'url':_0x1bd090['links']['SD']},'mimetype':_0x497abb(0x185),'ptt':!![]},{'quoted':_0x39196});}}}}});}catch(_0x53b29f){console[_0x216100(0x153)](_0x53b29f),_0x4ce973(''+_0x53b29f);}}),cmd({'pattern':_0x222edd(0x14f),'alias':[_0x222edd(0x105),_0x222edd(0x145)],'desc':_0x222edd(0x154),'category':_0x222edd(0xc7),'filename':__filename},async(_0x1c074b,_0x4eacab,_0x1546c6,{from:_0x19303e,quoted:_0x19e976,body:_0x11c8ba,isCmd:_0x4c9627,command:_0xa87a2e,args:_0x45c285,q:_0x21d9e7,isGroup:_0x2c2792,sender:_0x40be61,senderNumber:_0x3cf4b2,botNumber2:_0x5eaf4c,botNumber:_0x3d8f77,pushname:_0x4baabb,isMe:_0x17fe9a,isOwner:_0x2e9a15,groupMetadata:_0xe2705f,groupName:_0x640f09,participants:_0x4c0e0c,groupAdmins:_0x11c9fd,isBotAdmins:_0x140926,isAdmins:_0x37f979,reply:_0x139bf5})=>{const _0x4ea0c1=_0x222edd;try{if(!_0x21d9e7||!_0x21d9e7[_0x4ea0c1(0x133)]('https://'))return _0x1c074b['sendMessage'](_0x19303e,{'text':_0x4ea0c1(0xf1)},{'quoted':_0x4eacab});await _0x1c074b['sendMessage'](_0x19303e,{'react':{'text':'⏳','key':_0x4eacab['key']}});const _0x436106=await axios['get'](_0x4ea0c1(0x13c)+_0x21d9e7),_0x28eb63=_0x436106['data'];if(!_0x28eb63||!_0x28eb63[_0x4ea0c1(0x186)]||!_0x28eb63[_0x4ea0c1(0x15b)])return _0x1546c6['reply']('Failed\x20to\x20retrieve\x20Twitter\x20video.\x20Please\x20check\x20the\x20link\x20and\x20try\x20again.');const {desc:_0x3e532b,thumb:_0x235d4a,video_sd:_0x20d834,video_hd:_0x39b359}=_0x28eb63[_0x4ea0c1(0x15b)],_0x596799=await _0x1c074b[_0x4ea0c1(0x151)](_0x19303e,{'image':{'url':_0x235d4a},'caption':_0x4ea0c1(0xdc)},{'quoted':_0x4eacab}),_0x1e2da2=_0x596799[_0x4ea0c1(0x141)]['id'];_0x1c074b['ev']['on'](_0x4ea0c1(0x158),async _0x1bf457=>{const _0x108c6f=_0x4ea0c1,_0x2d1740=_0x1bf457['messages'][0x0];if(!_0x2d1740[_0x108c6f(0x197)])return;const _0x2f59d2=_0x2d1740[_0x108c6f(0x197)][_0x108c6f(0x175)]||_0x2d1740['message'][_0x108c6f(0x10f)]?.[_0x108c6f(0xe7)],_0xa5f5dd=_0x2d1740[_0x108c6f(0x141)][_0x108c6f(0x116)],_0x2fb1d0=_0x2d1740[_0x108c6f(0x197)][_0x108c6f(0x10f)]&&_0x2d1740[_0x108c6f(0x197)][_0x108c6f(0x10f)][_0x108c6f(0xd9)][_0x108c6f(0xf0)]===_0x1e2da2;if(_0x2fb1d0){await _0x1c074b[_0x108c6f(0x151)](_0xa5f5dd,{'react':{'text':'⬇️','key':_0x2d1740[_0x108c6f(0x141)]}});if(_0x2f59d2===_0x108c6f(0x169))await _0x1c074b['sendMessage'](_0xa5f5dd,{'video':{'url':_0x20d834},'caption':_0x108c6f(0x19a)},{'quoted':_0x2d1740});else{if(_0x2f59d2==='1.2')await _0x1c074b[_0x108c6f(0x151)](_0xa5f5dd,{'video':{'url':_0x39b359},'caption':_0x108c6f(0x15e)},{'quoted':_0x2d1740});else{if(_0x2f59d2===_0x108c6f(0xf6))await _0x1c074b['sendMessage'](_0xa5f5dd,{'audio':{'url':_0x20d834},'mimetype':_0x108c6f(0x117)},{'quoted':_0x2d1740});else{if(_0x2f59d2==='2.2')await _0x1c074b['sendMessage'](_0xa5f5dd,{'document':{'url':_0x20d834},'mimetype':_0x108c6f(0x117),'fileName':_0x108c6f(0x137),'caption':_0x108c6f(0x15e)},{'quoted':_0x2d1740});else _0x2f59d2===_0x108c6f(0x192)&&await _0x1c074b['sendMessage'](_0xa5f5dd,{'audio':{'url':_0x20d834},'mimetype':_0x108c6f(0x185),'ptt':!![]},{'quoted':_0x2d1740});}}}}});}catch(_0x2a3d18){console[_0x4ea0c1(0x153)](_0x2a3d18),_0x139bf5(_0x4ea0c1(0x191)+_0x2a3d18);}}),cmd({'pattern':_0x222edd(0x147),'alias':['mfire'],'desc':'To\x20download\x20MediaFire\x20files.','react':'🎥','category':'download','filename':__filename},async(_0x23f99f,_0x40f611,_0xf83096,{from:_0x258a14,quoted:_0x250722,body:_0x3f8e0e,isCmd:_0x4cf2f1,command:_0x5a9c7f,args:_0x456812,q:_0x37e43e,isGroup:_0x1a3032,sender:_0x374234,senderNumber:_0x302969,botNumber2:_0x40157e,botNumber:_0x4ca13d,pushname:_0x550d44,isMe:_0x441cab,isOwner:_0x22de79,groupMetadata:_0xc1123c,groupName:_0x31440f,participants:_0x222d77,groupAdmins:_0x32e513,isBotAdmins:_0x64e38f,isAdmins:_0x51d538,reply:_0x4a5ad9})=>{const _0x366172=_0x222edd;try{if(!_0x37e43e)return _0xf83096[_0x366172(0x182)]('Please\x20provide\x20a\x20valid\x20MediaFire\x20link.');_0xf83096[_0x366172(0x111)]('⬇️');const _0x25ae9c=await axios['get'](_0x366172(0x142)+_0x37e43e),_0x2d5bc6=_0x25ae9c[_0x366172(0xd4)];if(!_0x2d5bc6||!_0x2d5bc6[_0x366172(0x186)]||!_0x2d5bc6['result']||!_0x2d5bc6[_0x366172(0x15b)][_0x366172(0x103)])return _0xf83096[_0x366172(0x182)](_0x366172(0x195));const _0x39a00b=_0x2d5bc6['result'][_0x366172(0x103)],_0x3c108d=_0x2d5bc6['result']['fileName']||_0x366172(0x14c),_0x4c1076=_0x2d5bc6[_0x366172(0x15b)][_0x366172(0xd0)]||_0x366172(0x106);_0xf83096[_0x366172(0x111)]('⬆️');let _0x1507cd=_0x366172(0xbb)+_0x3c108d+_0x366172(0x160)+_0x4c1076+'\x20\x0a╰━━━❐━⪼\x0a>\x20*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ-𝙶𝙼𝙰𝚇\x20♡*';await _0x23f99f[_0x366172(0x151)](_0x258a14,{'document':{'url':_0x39a00b},'mimetype':_0x4c1076,'fileName':_0x3c108d,'caption':_0x1507cd},{'quoted':_0x40f611});}catch(_0x263e6d){console[_0x366172(0x18c)](_0x263e6d),_0x4a5ad9(_0x366172(0x191)+_0x263e6d['message']);}}),cmd({'pattern':'ig','alias':[_0x222edd(0x178),_0x222edd(0x16c)],'desc':_0x222edd(0x124),'react':'🎥','category':_0x222edd(0xc7),'filename':__filename},async(_0x24318d,_0x224a40,_0x3bf143,{from:_0xa434d2,quoted:_0x752d6a,body:_0x39cd88,isCmd:_0x5092bd,command:_0x49cd67,args:_0x397bc5,q:_0x262d4d,isGroup:_0xd34b6e,sender:_0x5dea63,senderNumber:_0x14344e,botNumber2:_0x5c3f90,botNumber:_0x2df938,pushname:_0x6421ff,isMe:_0x1c92fd,isOwner:_0x3286cd,groupMetadata:_0x389268,groupName:_0x24dbff,participants:_0x4a7cf4,groupAdmins:_0x4e6626,isBotAdmins:_0x4924ec,isAdmins:_0x22793c,reply:_0x14ee9e})=>{const _0x3b2f4b=_0x222edd;try{if(!_0x262d4d)return _0x3bf143[_0x3b2f4b(0x182)](_0x3b2f4b(0x180));_0x3bf143[_0x3b2f4b(0x111)]('⬇️');let _0x419ab3=await igdl(_0x262d4d),_0x3c6d94=await _0x419ab3['data'];for(let _0x35ba30=0x0;_0x35ba30<0x14;_0x35ba30++){let _0x56d4be=_0x3c6d94[_0x35ba30],_0x124e73=_0x56d4be['url'];_0x3bf143[_0x3b2f4b(0x111)]('⬆️'),await _0x24318d[_0x3b2f4b(0x151)](_0xa434d2,{'video':{'url':_0x124e73},'mimetype':'video/mp4','caption':_0x3b2f4b(0x135)},{'quoted':_0x224a40}),_0x3bf143[_0x3b2f4b(0x111)]('✅');}}catch(_0x15cefd){console[_0x3b2f4b(0x153)](_0x15cefd);}});async function f2(_0x114a3e){return new Promise((_0x39ba1b,_0x35bb75)=>{const _0x48348b=_0x3728;fetch(''+_0x114a3e,{'method':_0x48348b(0x138)})[_0x48348b(0xf3)](_0x4bfcc1=>_0x4bfcc1[_0x48348b(0xe7)]())['then'](_0x2ebed9=>{const _0x1b868a=_0x48348b,_0x5367b2=cheerio['load'](_0x2ebed9,{'xmlMode':![]}),_0x5159bc=_0x5367b2(_0x1b868a(0x18b))[_0x1b868a(0xf4)](_0x1b868a(0x171)),_0x1d2944=_0x5367b2('meta[property=\x22og:duration\x22]')[_0x1b868a(0xf4)](_0x1b868a(0x171)),_0x1a1f18=_0x5367b2(_0x1b868a(0x102))['attr'](_0x1b868a(0x171)),_0x56d805=_0x5367b2(_0x1b868a(0xfe))[_0x1b868a(0xf4)](_0x1b868a(0x171)),_0x3ef8e8=_0x5367b2('meta[property=\x22og:video:width\x22]')[_0x1b868a(0xf4)](_0x1b868a(0x171)),_0x3e7946=_0x5367b2(_0x1b868a(0xfc))[_0x1b868a(0xf4)](_0x1b868a(0x171)),_0x5f5527=_0x5367b2(_0x1b868a(0xe8))[_0x1b868a(0xe7)](),_0x51255c=_0x5367b2(_0x1b868a(0xfd))[_0x1b868a(0x156)](),_0x356293={'low':(_0x51255c[_0x1b868a(0x166)]('html5player.setVideoUrlLow\x5c(\x27(.*?)\x27\x5c);')||[])[0x1],'high':_0x51255c['match'](_0x1b868a(0x136)||[])[0x1],'HLS':_0x51255c['match'](_0x1b868a(0x13f)||[])[0x1],'thumb':_0x51255c[_0x1b868a(0x166)](_0x1b868a(0xce)||[])[0x1],'thumb69':_0x51255c['match'](_0x1b868a(0x11b)||[])[0x1],'thumbSlide':_0x51255c[_0x1b868a(0x166)](_0x1b868a(0x11d)||[])[0x1],'thumbSlideBig':_0x51255c[_0x1b868a(0x166)]('html5player.setThumbSlideBig\x5c(\x27(.*?)\x27\x5c);'||[])[0x1]};_0x39ba1b({'status':!![],'result':{'title':_0x5159bc,'URL':_0x114a3e,'duration':_0x1d2944,'image':_0x1a1f18,'videoType':_0x56d805,'videoWidth':_0x3ef8e8,'videoHeight':_0x3e7946,'info':_0x5f5527,'files':_0x356293}});})[_0x48348b(0xe3)](_0x1d0220=>_0x35bb75({'status':![],'result':_0x1d0220}));});}cmd({'pattern':'xnxxdown','alias':[_0x222edd(0xeb),_0x222edd(0x109)],'react':'🫣','desc':_0x222edd(0x13e),'category':_0x222edd(0x16a),'use':_0x222edd(0x14e),'filename':__filename},async(_0x56e023,_0x4d4f2e,_0x314260,{from:_0x118799,l:_0x211f42,quoted:_0x32ad4f,body:_0x3a069d,isCmd:_0x52fe57,command:_0x3b4abe,args:_0x21ebe7,q:_0x122ad1,isGroup:_0x5d3e73,sender:_0x340be8,senderNumber:_0x50eef7,botNumber2:_0x24a582,botNumber:_0x5c79b8,pushname:_0x5b9223,isMe:_0x50e7a0,isOwner:_0x306c3c,groupMetadata:_0x3bd487,groupName:_0xc63c91,participants:_0x2ed6a5,groupAdmins:_0x10e84a,isBotAdmins:_0x6b113a,isAdmins:_0x1ed71f,reply:_0x3718b4})=>{const _0x42ab21=_0x222edd;try{if(!_0x122ad1)return _0x3718b4('*Please\x20give\x20me\x20url\x20!!*');let _0x4edb4a=await f2(_0x122ad1),_0x5ca00c=_0x4edb4a[_0x42ab21(0x15b)]['title'];await _0x56e023[_0x42ab21(0x151)](_0x118799,{'video':{'url':_0x4edb4a[_0x42ab21(0x15b)][_0x42ab21(0x193)]['high']},'caption':_0x5ca00c},{'quoted':_0x4d4f2e});}catch(_0x201216){_0x3718b4(_0x42ab21(0x16d)),console[_0x42ab21(0x153)](_0x201216);}}),cmd({'pattern':_0x222edd(0x129),'alias':[_0x222edd(0x119),_0x222edd(0x155)],'react':'🫣','desc':_0x222edd(0x13b),'category':_0x222edd(0x16a),'use':_0x222edd(0x168),'filename':__filename},async(_0x1ff38e,_0x2f00f0,_0x4bf8b2,{from:_0x34eb98,l:_0x223a01,quoted:_0x5dcca7,body:_0x683404,isCmd:_0x28d8c1,command:_0x53068e,args:_0x54b049,q:_0x256097,isGroup:_0x4f3ad1,sender:_0x56bb69,senderNumber:_0x274903,botNumber2:_0x5a9a99,botNumber:_0x364139,pushname:_0x5b90b1,isMe:_0x1c1810,isOwner:_0x1e4e6b,groupMetadata:_0x48d81e,groupName:_0x3fe503,participants:_0x32e6b6,groupAdmins:_0x522f0b,isBotAdmins:_0x393df1,isAdmins:_0xb2c18e,reply:_0x1f4b42})=>{const _0x26b002=_0x222edd;try{if(!_0x256097)return _0x1f4b42(_0x26b002(0x149));let _0x1e41ce=await fetchJson('https://www.dark-yasiya-api.site/download/xvideo?url='+_0x256097);const _0x471900=_0x26b002(0xef)+_0x1e41ce[_0x26b002(0x15b)]['title']+_0x26b002(0x164)+_0x1e41ce[_0x26b002(0x15b)]['views']+_0x26b002(0x163)+_0x1e41ce[_0x26b002(0x15b)][_0x26b002(0x170)]+_0x26b002(0xd8)+_0x1e41ce[_0x26b002(0x15b)][_0x26b002(0xd1)]+_0x26b002(0x194)+_0x1e41ce[_0x26b002(0x15b)]['size'];await _0x1ff38e[_0x26b002(0x151)](_0x34eb98,{'video':{'url':_0x1e41ce[_0x26b002(0x15b)]['dl_link']},'caption':_0x471900},{'quoted':_0x2f00f0});}catch(_0x3b4b52){_0x1f4b42(_0x26b002(0x16d)),console[_0x26b002(0x153)](_0x3b4b52);}});const fs=require('fs'),path=require(_0x222edd(0x12b));function _0x1fab(){const _0x418b14=['imageUrl','ruhend-scraper','\x20\x0a╰━━━❐━⪼\x0a╭━❮\x20*Download\x20Video*\x20❯━┈⊷\x0a┃▸╭─────────────·๏\x0a┃▸┃๏\x20*1*\x20\x20\x20\x20\x20┃\x20\x20*SD\x20Quality*\x0a┃▸┃๏\x20*2*\x20\x20\x20\x20\x20┃\x20\x20*HD\x20Quality*\x0a┃▸└────────────┈⊷\x0a╰━━━━━━━━━━━━━━━⪼\x0a╭━❮\x20*Download\x20Audio*\x20❯━┈⊷\x0a┃▸╭─────────────·๏\x0a┃▸┃๏\x20*3*\x20\x20\x20\x20\x20┃\x20\x20*Audio*\x0a┃▸└────────────┈⊷\x0a╰━━━━━━━━━━━━━━━⪼\x0a>\x20*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ\x20𝙶𝙼𝙰𝚇\x20♡*','extendedTextMessage','title','react','\x0aPowered\x20by\x20SinhalaSub','mimetype','dl_links','h5.elementor-post__title\x20>\x20a','remoteJid','audio/mpeg','ginisisilacartoon.net','dlxv','Please\x20reply\x20with\x20a\x20valid\x20number\x20from\x20the\x20list.','html5player.setThumbUrl169\x5c(\x27(.*?)\x27\x5c);','*\x0a🔗\x20Link:\x20','html5player.setThumbSlide\x5c(\x27(.*?)\x27\x5c);','Error\x20during\x20search:','div.posted-time','📽️\x20*Search\x20Results\x20for*\x20\x22','\x20\x0a┇๏\x20*Size*\x20-\x20','Invalid\x20selection.\x20Please\x20reply\x20with\x20a\x20valid\x20number.','postedTime','To\x20download\x20instagram\x20videos.','../lib/functions','*\x0a\x0a>\x20Sʜᴀʙᴀɴ-MD\x20✻','.elementor-post__thumbnail\x20img','size','xvdown','forEach','path','*Please\x20provide\x20a\x20search\x20query!\x20(e.g.,\x20Garfield)*','\x0a⏳\x20*ᴅᴀᴛᴇ:-*\x20','.*\x20','\x20\x0a╰━━━❐━⪼\x0a╭━❮\x20*Download\x20Video*\x20❯━┈⊷\x0a┃▸╭─────────────·๏\x0a┃▸┃๏\x20*1.1*\x20\x20\x20\x20\x20┃\x20\x20*SD\x20Quality*\x0a┃▸┃๏\x20*1.2*\x20\x20\x20\x20\x20┃\x20\x20*HD\x20Quality*\x0a┃▸└────────────┈⊷\x0a╰━━━━━━━━━━━━━━━⪼\x0a╭━❮\x20*Download\x20Audio*\x20❯━┈⊷\x0a┃▸╭─────────────·๏\x0a┃▸┃๏\x20*2.1*\x20\x20\x20\x20\x20┃\x20\x20*Audio*\x0a┃▸┃๏\x20*2.2*\x20\x20\x20\x20\x20┃\x20\x20*Document*\x0a┃▸┃๏\x20*2.3*\x20\x20\x20\x20\x20┃\x20\x20*Voice*\x0a┃▸└────────────┈⊷\x0a╰━━━━━━━━━━━━━━━⪼\x0a>\x20*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ-𝙶𝙼𝙰𝚇\x20♡*','🎥\x20*','baiscope.lk','axios','startsWith','MB\x20\x0a┇๏\x20*Package*\x20-\x20','>\x20*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ𝙶𝙼𝙰𝚇*','html5player.setVideoUrlHigh\x5c(\x27(.*?)\x27\x5c);','KHANX/TWDL.mp3','get','fileName','6281784vIqpnH','Download\x20xvideos\x20videos','https://www.dark-yasiya-api.site/download/twitter?url=','7976148geBvwT','Download\x20xnxx\x20videos','html5player.setVideoHLS\x5c(\x27(.*?)\x27\x5c);','*\x0a\x0a','key','https://www.dark-yasiya-api.site/download/mfire?url=','*`Need\x20URL`*','download\x20tt\x20videos','twdl','🎬\x20*','mediafire','trim','*Please\x20give\x20me\x20url\x20!!*','1.2','messages','mediafire_download','*Please\x20provide\x20a\x20search\x20query!\x20(e.g.,\x20Avatar)*','.xnxx\x20<xnxx\x20link>','twitter','download_mp4_1','sendMessage','push','log','Download\x20Twitter\x20videos','xvdl','html','pop','messages.upsert','unlinkSync','div.inner-video-thumb-wrapper\x20img','result','122033cbOlyj','*Error\x20occurred\x20while\x20scraping!*','*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ𝙶𝙼𝙰𝚇*','application/vnd.android.package-archive','\x20\x0a┇๏\x20*File\x20Type*\x20-\x20','sinhalasub','\x20\x0a┇๏\x20*Developer*\x20-\x20','\x0a\x0a•\x20*Like*\x20-\x20','\x0a\x0a•\x20*Views*\x20-\x20','https://ginisisilacartoon.net/','match','*Invalid\x20selection.\x20Please\x20choose\x20a\x20valid\x20number.*','.xv\x20<xvideos\x20link>','1.1','nsfw','GET','Instagram','*Error\x20!!*','pipe','╭━━━〔\x20*G⃗M⃗A⃗X⃗-M⃗D⃗*\x20〕━━━┈⊷\x0a┃▸╭───────────\x0a┃▸┃๏\x20*𝕋𝕀𝕂𝕋𝕆𝕂\x20𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻𝔼ℝ*\x0a┃▸└───────────···๏\x0a╰────────────────┈⊷\x0a╭━━━❐━⪼\x0a┇๏\x20*Title*\x20-\x20','like','content','https://api-site-2.vercel.app/api/sinhalasub/movie?url=','length','MR\x20GMAX\x20|\x20','conversation','2746086pUbJPL','ginisisila','insta','*An\x20error\x20occurred\x20while\x20scraping\x20the\x20data.*','download_mp3','src','Error\x20fetching\x20movie\x20details:','\x20\x0a┇๏\x20*Updated\x20On*\x20-\x20','facebook','An\x20error\x20occurred\x20while\x20trying\x20to\x20fetch\x20the\x20download\x20link.','Please\x20Give\x20Me\x20a\x20vaild\x20Link...','search','reply','path_alt','links','audio/mp4','status','📺\x20Search\x20Results\x20for\x20*','link','\x0a🗓️\x20Posted:\x20','https://api.fgmods.xyz/api/downloader/gdrive?url=','meta[property=\x22og:title\x22]','error','downloaded_episode.zip','No\x20results\x20found\x20for:\x20','7khqvuH','&apikey=mnp3grlZ','An\x20error\x20occurred:\x20','2.3','files','\x0a\x0a•\x20*Size*\x20-\x20','Failed\x20to\x20fetch\x20MediaFire\x20download\x20link.\x20Ensure\x20the\x20link\x20is\x20valid\x20and\x20public.','slice','message','Error\x20fetching\x20the\x20download\x20link:','An\x20error\x20occurred\x20while\x20fetching\x20movie\x20details.\x20Please\x20try\x20again.','*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ-𝙶𝙼𝙰𝚇*','list','episodeLink','join','datalist','╭━━━〔\x20*G⃗M⃗A⃗X⃗-M⃗D⃗*\x20〕━━━┈⊷\x0a┃▸╭───────────\x0a┃▸┃๏\x20*𝕄𝔼𝔻𝕀𝔸𝔽𝕀ℝ𝔼\x20𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻𝔼ℝ*\x0a┃▸└───────────···๏\x0a╰────────────────┈⊷\x0a╭━━━❐━⪼\x0a┇๏\x20*File\x20Name*\x20-\x20','article.elementor-post','../command','tiktok','9186505Dqayoi','thumbnail','\x20-\x20','image','*Available\x20PixelDrain\x20Download\x20Links:*\x0a','stream','apk','*`Need\x20url`*','download','download_mp4_2','each','div.video-title\x20>\x20a','movie2','.mp4','video/mp4','html5player.setThumbUrl\x5c(\x27(.*?)\x27\x5c);','*🪄\x20ɴᴀᴍᴇ:-*\x20','fileType','deslike','div.inner-video-cell','https://','data','\x0a🔗\x20Link:\x20','gdrive','KHAN/FBDL.mp3','\x0a\x0a•\x20*Deslike*\x20-\x20','contextInfo','movie','updated','╭━━━〔\x20*G⃗M⃗A⃗X⃗-M⃗D⃗*\x20〕━━━┈⊷\x0a┃▸╭───────────\x0a┃▸┃๏\x20*𝕋𝕎𝕀𝕋𝕋𝔼ℝ\x20𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻𝔼ℝ*\x0a┃▸└───────────···๏\x0a╰────────────────┈⊷\x0a╭━❮\x20*Download\x20Video*\x20❯━┈⊷\x0a┃▸╭─────────────·๏\x0a┃▸┃๏\x20*1.1*\x20\x20\x20\x20\x20┃\x20\x20*SD\x20Quality*\x0a┃▸┃๏\x20*1.2*\x20\x20\x20\x20\x20┃\x20\x20*HD\x20Quality*\x0a┃▸└────────────┈⊷\x0a╰━━━━━━━━━━━━━━━⪼\x0a╭━❮\x20*Download\x20Audio*\x20❯━┈⊷\x0a┃▸╭─────────────·๏\x0a┃▸┃๏\x20*2.1*\x20\x20\x20\x20\x20┃\x20\x20*Audio*\x0a┃▸┃๏\x20*2.2*\x20\x20\x20\x20\x20┃\x20\x20*Document*\x0a┃▸┃๏\x20*2.3*\x20\x20\x20\x20\x20┃\x20\x20*Voice*\x0a┃▸└────────────┈⊷\x0a╰━━━━━━━━━━━━━━━⪼\x0a>\x20*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ-𝙶𝙼𝙰𝚇\x20♡*','584806hnPwdF','quality','cheerio','\x0a📎\x20*ᴇᴘɪꜱᴏᴅᴇ\x20ʟɪɴᴋ*:-\x20','*Download\x20link\x20not\x20found\x20for\x20the\x20selected\x20episode.*','name','catch','.zip','href','load','text','span.metadata','2.2','*©\x20Pᴏᴡᴇʀᴅ\x20Bʏ\x20Mʀ-𝙶𝙼𝙰𝚇*','dlxnxx','488152dAMskx','imgUrl','Search\x20movies\x20on\x20sinhalasub\x20and\x20get\x20download\x20links','\x0a\x20\x20\x20🔞\x20*XVIDEO\x20DOWNLOADER*\x20🔞\x0a\x0a\x20\x20\x20\x20\x20\x0a•\x20*Title*\x20-\x20','stanzaId','❌\x20Please\x20provide\x20a\x20valid\x20Twitter\x20URL.','Failed\x20to\x20retrieve\x20the\x20download\x20link\x20for\x20this\x20episode.','then','attr','*An\x20error\x20occurred\x20while\x20searching!*','2.1','\x22:\x0a\x0a','@mrnima/facebook-downloader','\x20|\x20*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ-𝙶𝙼𝙰𝚇*','createWriteStream','@mrnima/tiktok-downloader','meta[property=\x22og:video:height\x22]','#video-player-bg\x20>\x20script:nth-child(6)','meta[property=\x22og:video:type\x22]','find','finish',':*\x0a\x0a','meta[property=\x22og:image\x22]','dl_link','https://www.baiscope.lk/?s=','tweet','application/octet-stream','No\x20downloadable\x20link\x20found\x20for\x20this\x20episode.','baiscope','xnxxdl','/limit=1','\x0a\x0a☘\x20*We\x20are\x20uploading\x20the\x20Movie/Episode\x20you\x20requested.*'];_0x1fab=function(){return _0x418b14;};return _0x1fab();}cmd({'pattern':_0x222edd(0x108),'alias':[_0x222edd(0xcb)],'react':'📑','category':_0x222edd(0xc7),'desc':_0x222edd(0x131),'filename':__filename},async(_0x7ef5ad,_0x4f1889,_0x2f6155,{from:_0x37a3c0,q:_0x252aa4,isDev:_0x17f989,reply:_0x3c8fab})=>{const _0x3b5aff=_0x222edd;try{if(!_0x252aa4)return await _0x3c8fab(_0x3b5aff(0x14d));const _0x544e4d=_0x3b5aff(0x104)+encodeURIComponent(_0x252aa4),_0x4ef6d9=await axios[_0x3b5aff(0x138)](_0x544e4d),_0x336be0=cheerio['load'](_0x4ef6d9[_0x3b5aff(0xd4)]);let _0x2f6969=[];_0x336be0(_0x3b5aff(0xbc))['each']((_0x5259d0,_0x1135c8)=>{const _0x1b79be=_0x3b5aff,_0x5c750d=_0x336be0(_0x1135c8)[_0x1b79be(0xff)](_0x1b79be(0x115))[_0x1b79be(0xe7)]()[_0x1b79be(0x148)](),_0x1730b9=_0x336be0(_0x1135c8)['find'](_0x1b79be(0x115))[_0x1b79be(0xf4)](_0x1b79be(0xe5)),_0x517f76=_0x336be0(_0x1135c8)[_0x1b79be(0xff)](_0x1b79be(0x127))[_0x1b79be(0xf4)](_0x1b79be(0x17b));_0x5c750d&&_0x1730b9&&_0x517f76&&_0x2f6969[_0x1b79be(0x152)]({'title':_0x5c750d,'episodeLink':_0x1730b9,'imgUrl':_0x517f76});});if(_0x2f6969[_0x3b5aff(0x173)]===0x0)return await _0x3c8fab(_0x3b5aff(0x18e)+_0x252aa4);let _0x57fa42=_0x3b5aff(0x187)+_0x252aa4+_0x3b5aff(0x101);_0x2f6969[_0x3b5aff(0x12a)]((_0x189397,_0x573827)=>{const _0x5ab39d=_0x3b5aff;_0x57fa42+='*'+(_0x573827+0x1)+_0x5ab39d(0x12e)+_0x189397[_0x5ab39d(0x110)]+_0x5ab39d(0xd5)+_0x189397[_0x5ab39d(0xb8)]+'\x0a\x0a';});const _0x21a768=await _0x7ef5ad['sendMessage'](_0x37a3c0,{'text':_0x57fa42},{'quoted':_0x2f6155}),_0x1a5d82=_0x21a768[_0x3b5aff(0x141)]['id'];_0x7ef5ad['ev']['on'](_0x3b5aff(0x158),async _0x2601ce=>{const _0x486aa8=_0x3b5aff,_0x353460=_0x2601ce[_0x486aa8(0x14b)][0x0];if(!_0x353460[_0x486aa8(0x197)])return;const _0x490f91=_0x353460[_0x486aa8(0x197)][_0x486aa8(0x175)]||_0x353460['message'][_0x486aa8(0x10f)]?.[_0x486aa8(0xe7)],_0xb95d4a=_0x353460[_0x486aa8(0x141)][_0x486aa8(0x116)],_0x30edf0=_0x353460[_0x486aa8(0x197)]['extendedTextMessage']&&_0x353460[_0x486aa8(0x197)][_0x486aa8(0x10f)][_0x486aa8(0xd9)][_0x486aa8(0xf0)]===_0x1a5d82;if(_0x30edf0){const _0x4dba94=parseInt(_0x490f91[_0x486aa8(0x148)]());if(!isNaN(_0x4dba94)&&_0x4dba94>0x0&&_0x4dba94<=_0x2f6969[_0x486aa8(0x173)]){const _0x293c60=_0x2f6969[_0x4dba94-0x1],_0x3b4384=await axios[_0x486aa8(0x138)](_0x293c60[_0x486aa8(0xb8)]),_0x1eb505=cheerio['load'](_0x3b4384['data']),_0x22dc0e=_0x1eb505('a.dlm-buttons-button')['attr'](_0x486aa8(0xe5));if(_0x22dc0e){await _0x7ef5ad[_0x486aa8(0x151)](_0xb95d4a,{'image':{'url':_0x293c60[_0x486aa8(0xed)]},'caption':_0x486aa8(0x146)+_0x293c60['title']+_0x486aa8(0x11c)+_0x293c60['episodeLink']+'\x0a⬇️\x20Download\x20will\x20follow.'},{'quoted':_0x353460});const _0x2068f1=path[_0x486aa8(0xb9)](__dirname,_0x486aa8(0x18d)),_0x3163c6=fs[_0x486aa8(0xfa)](_0x2068f1),_0x625c2e=await axios({'url':_0x22dc0e,'method':_0x486aa8(0x16b),'responseType':_0x486aa8(0xc4)});_0x625c2e[_0x486aa8(0xd4)][_0x486aa8(0x16e)](_0x3163c6),_0x3163c6['on'](_0x486aa8(0x100),async()=>{const _0x571186=_0x486aa8;await _0x7ef5ad[_0x571186(0x151)](_0xb95d4a,{'document':{'url':_0x2068f1},'mimetype':'application/zip','fileName':_0x293c60['title']+_0x571186(0xe4),'caption':'*'+_0x293c60[_0x571186(0x110)]+_0x571186(0x126)},{'quoted':_0x353460}),fs[_0x571186(0x159)](_0x2068f1);}),_0x3163c6['on'](_0x486aa8(0x18c),_0x3d035e=>{const _0x32fa43=_0x486aa8;console[_0x32fa43(0x18c)]('Error\x20downloading\x20ZIP\x20file:',_0x3d035e),_0x3c8fab('*Error\x20downloading\x20the\x20episode\x20ZIP\x20file.*');});}else await _0x3c8fab(_0x486aa8(0xe1));}else await _0x3c8fab(_0x486aa8(0x167));}});}catch(_0x2eddfc){console['error'](_0x2eddfc),await _0x3c8fab(_0x3b5aff(0x179));}}),cmd({'pattern':_0x222edd(0x177),'react':'📑','category':'download','desc':_0x222edd(0x118),'filename':__filename},async(_0x4a3187,_0x11fb74,_0x52752c,{from:_0x133d99,q:_0x3a5d47,isDev:_0x106927,reply:_0x405001})=>{const _0x43dfe6=_0x222edd;try{if(!_0x3a5d47)return await _0x405001(_0x43dfe6(0x12c));const _0xa8509f='https://ginisisilacartoon.net/search.php?q='+encodeURIComponent(_0x3a5d47),_0x54c39a=await axios[_0x43dfe6(0x138)](_0xa8509f),_0x2bac36=cheerio[_0x43dfe6(0xe6)](_0x54c39a['data']);let _0x290e8c=[];_0x2bac36(_0x43dfe6(0xd2))[_0x43dfe6(0xc9)]((_0x4c14a5,_0x3aa212)=>{const _0x2622a1=_0x43dfe6,_0x50b203=_0x2bac36(_0x3aa212)['find'](_0x2622a1(0xca))[_0x2622a1(0xf4)]('title'),_0x1b08da=_0x2bac36(_0x3aa212)[_0x2622a1(0xff)](_0x2622a1(0x11f))[_0x2622a1(0xe7)]()[_0x2622a1(0x148)](),_0x48fd26=_0x2bac36(_0x3aa212)[_0x2622a1(0xff)](_0x2622a1(0xca))[_0x2622a1(0xf4)]('href'),_0x112be0=_0x2bac36(_0x3aa212)[_0x2622a1(0xff)](_0x2622a1(0x15a))[_0x2622a1(0xf4)](_0x2622a1(0x17b));_0x50b203&&_0x48fd26&&_0x290e8c[_0x2622a1(0x152)]({'title':_0x50b203,'postedTime':_0x1b08da,'episodeLink':_0x2622a1(0x165)+_0x48fd26,'imageUrl':_0x112be0});});if(_0x290e8c[_0x43dfe6(0x173)]===0x0)return await _0x405001(_0x43dfe6(0x18e)+_0x3a5d47);let _0x3ee380=_0x43dfe6(0x187)+_0x3a5d47+':*\x0a\x0a';_0x290e8c[_0x43dfe6(0x12a)]((_0x2b0ef4,_0x253117)=>{const _0x3d3fe8=_0x43dfe6;_0x3ee380+='*'+(_0x253117+0x1)+_0x3d3fe8(0x12e)+_0x2b0ef4[_0x3d3fe8(0x110)]+_0x3d3fe8(0x189)+_0x2b0ef4[_0x3d3fe8(0x123)]+_0x3d3fe8(0xd5)+_0x2b0ef4[_0x3d3fe8(0xb8)]+'\x0a\x0a';});const _0x1c1e0d=await _0x4a3187[_0x43dfe6(0x151)](_0x133d99,{'text':_0x3ee380},{'quoted':_0x52752c}),_0x10eeb2=_0x1c1e0d[_0x43dfe6(0x141)]['id'];_0x4a3187['ev']['on'](_0x43dfe6(0x158),async _0x3b4edb=>{const _0x3e0cc5=_0x43dfe6,_0x384780=_0x3b4edb[_0x3e0cc5(0x14b)][0x0];if(!_0x384780[_0x3e0cc5(0x197)])return;const _0x4fd82f=_0x384780['message']['conversation']||_0x384780[_0x3e0cc5(0x197)]['extendedTextMessage']?.[_0x3e0cc5(0xe7)],_0x28ed40=_0x384780[_0x3e0cc5(0x141)][_0x3e0cc5(0x116)],_0x41330d=_0x384780['message']['extendedTextMessage']&&_0x384780['message']['extendedTextMessage'][_0x3e0cc5(0xd9)][_0x3e0cc5(0xf0)]===_0x10eeb2;if(_0x41330d){const _0x5b5715=parseInt(_0x4fd82f[_0x3e0cc5(0x148)]());if(!isNaN(_0x5b5715)&&_0x5b5715>0x0&&_0x5b5715<=_0x290e8c[_0x3e0cc5(0x173)]){const _0x58b6a1=_0x290e8c[_0x5b5715-0x1],_0x179041=_0x3e0cc5(0xcf)+_0x58b6a1['title']+_0x3e0cc5(0x12d)+_0x58b6a1[_0x3e0cc5(0x123)]+_0x3e0cc5(0xe0)+_0x58b6a1[_0x3e0cc5(0xb8)]+_0x3e0cc5(0x10b),_0x822d83={'image':{'url':_0x58b6a1[_0x3e0cc5(0x10c)]},'caption':_0x179041};await _0x4a3187['sendMessage'](_0x28ed40,_0x822d83,{'quoted':_0x384780});const _0x302393=await axios[_0x3e0cc5(0x138)](_0x58b6a1[_0x3e0cc5(0xb8)]),_0x2b4022=cheerio[_0x3e0cc5(0xe6)](_0x302393[_0x3e0cc5(0xd4)]),_0x85c02b=_0x2b4022('div#player-holder\x20iframe')[_0x3e0cc5(0xf4)]('src');if(_0x85c02b){const _0x3f5056=_0x3e0cc5(0x18a)+_0x85c02b+_0x3e0cc5(0x190);try{const _0x2552ae=await axios['get'](_0x3f5056),_0x57d00f=_0x2552ae[_0x3e0cc5(0xd4)][_0x3e0cc5(0x15b)]['downloadUrl'];_0x57d00f?await _0x4a3187['sendMessage'](_0x28ed40,{'document':{'url':_0x57d00f},'mimetype':_0x3e0cc5(0xcd),'fileName':_0x3e0cc5(0x174)+_0x58b6a1[_0x3e0cc5(0x110)]+_0x3e0cc5(0xcc),'caption':_0x58b6a1[_0x3e0cc5(0x110)]+_0x3e0cc5(0xf9)},{'quoted':_0x384780}):await _0x405001(_0x3e0cc5(0xf2));}catch(_0x174c13){console['error'](_0x3e0cc5(0x198),_0x174c13),await _0x405001(_0x3e0cc5(0x17f));}}else await _0x405001(_0x3e0cc5(0x107));}else await _0x405001(_0x3e0cc5(0x11a));}});}catch(_0x3344cd){_0x405001(_0x43dfe6(0x15d)),console[_0x43dfe6(0x18c)](_0x3344cd);}}),cmd({'pattern':_0x222edd(0xc5),'desc':'Download\x20apk.','category':_0x222edd(0xc7),'filename':__filename},async(_0xc41093,_0x4670bc,_0xb55d0,{from:_0x2a0896,quoted:_0x115de9,body:_0x1e8d75,isCmd:_0x1e7a11,command:_0x38826c,args:_0x4c3b0b,q:_0x115e93,isGroup:_0x3a0949,sender:_0x2212f0,senderNumber:_0x599a1,botNumber2:_0x34ed74,botNumber:_0x1c0d9e,pushname:_0x3d6fe4,isMe:_0x3e4fef,isOwner:_0x401ef7,groupMetadata:_0x2f33fc,groupName:_0x163297,participants:_0x4a3713,groupAdmins:_0x2b11f3,isBotAdmins:_0x1d3140,isAdmins:_0x4b1120,reply:_0x2cac0e})=>{const _0x2773b0=_0x222edd;try{await _0xb55d0[_0x2773b0(0x111)]('⬇');const _0x23fd8f='http://ws75.aptoide.com/api/7/apps/search/query='+_0x115e93+_0x2773b0(0x10a),_0x51a3fe=await axios[_0x2773b0(0x138)](_0x23fd8f),_0x222116=_0x51a3fe[_0x2773b0(0xd4)];let _0x4d8b1f=_0x222116['datalist'][_0x2773b0(0xb7)][0x0][_0x2773b0(0x128)]%0xf4240,_0x16432d='.'+_0x4d8b1f,_0x3289fa=_0x222116[_0x2773b0(0xba)][_0x2773b0(0xb7)][0x0][_0x2773b0(0x128)]/0xf4240,_0x120e93=_0x3289fa-_0x16432d,_0x1f0dd5='╭━━━〔\x20*G⃗M⃗A⃗X⃗-M⃗D⃗*\x20〕━━━┈⊷\x0a┃▸╭───────────\x0a┃▸┃๏\x20*𝔸ℙ𝕂\x20𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻𝔼ℝ*\x0a┃▸└───────────···๏\x0a╰────────────────┈⊷\x0a╭━━━❐━⪼\x0a┇๏\x20*Name*\x20-\x20'+_0x222116['datalist'][_0x2773b0(0xb7)][0x0][_0x2773b0(0xe2)]+_0x2773b0(0x121)+_0x120e93+_0x2773b0(0x134)+_0x222116['datalist'][_0x2773b0(0xb7)][0x0]['package']+_0x2773b0(0x17d)+_0x222116[_0x2773b0(0xba)][_0x2773b0(0xb7)][0x0][_0x2773b0(0xdb)]+_0x2773b0(0x162)+_0x222116[_0x2773b0(0xba)][_0x2773b0(0xb7)][0x0]['developer'][_0x2773b0(0xe2)]+'\x20\x0a╰━━━❐━⪼\x0a>\x20*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ-𝙶𝙼𝙰𝚇\x20♡*';await _0xb55d0[_0x2773b0(0x111)]('⬆'),await _0xc41093[_0x2773b0(0x151)](_0x2a0896,{'document':{'url':_0x222116['datalist']['list'][0x0]['file'][_0x2773b0(0x183)]},'fileName':_0x222116[_0x2773b0(0xba)]['list'][0x0][_0x2773b0(0xe2)],'mimetype':_0x2773b0(0x15f),'caption':_0x1f0dd5},{'quoted':_0x4670bc}),await _0xb55d0[_0x2773b0(0x111)]('✅');}catch(_0x2dbd04){console[_0x2773b0(0x153)](_0x2dbd04),_0x2cac0e(''+_0x2dbd04);}});function _0x3728(_0x485bfe,_0x16de3b){const _0x1fabca=_0x1fab();return _0x3728=function(_0x3728ef,_0x35a5f0){_0x3728ef=_0x3728ef-0xb7;let _0x557cd2=_0x1fabca[_0x3728ef];return _0x557cd2;},_0x3728(_0x485bfe,_0x16de3b);}const {sinhalaSub}=require('mrnima-moviedl');cmd({'pattern':_0x222edd(0x161),'alias':[_0x222edd(0xda)],'react':'📑','category':_0x222edd(0xc7),'desc':_0x222edd(0xee),'filename':__filename},async(_0x335b0b,_0x297082,_0x5eb92d,{from:_0x3c8b9a,q:_0x431f16,reply:_0x16f066})=>{const _0x83f4e4=_0x222edd;try{if(!_0x431f16)return await _0x16f066('*Please\x20provide\x20a\x20search\x20query!\x20(e.g.,\x20Deadpool)*');var _0x505724=await sinhalaSub();const _0x3955aa=await _0x505724[_0x83f4e4(0x181)](_0x431f16),_0x469172=_0x3955aa['result'][_0x83f4e4(0x196)](0x0,0xa);if(!_0x469172||_0x469172[_0x83f4e4(0x173)]===0x0)return await _0x16f066('No\x20results\x20found\x20for:\x20'+_0x431f16);let _0x424170=_0x83f4e4(0x120)+_0x431f16+_0x83f4e4(0xf7);_0x469172['forEach']((_0x1ce62e,_0x2d5116)=>{const _0x150bd4=_0x83f4e4;_0x424170+='*'+(_0x2d5116+0x1)+'.*\x20'+_0x1ce62e[_0x150bd4(0x110)]+_0x150bd4(0xd5)+_0x1ce62e[_0x150bd4(0x188)]+'\x0a\x0a';});const _0x4e73c3=await _0x335b0b[_0x83f4e4(0x151)](_0x3c8b9a,{'text':_0x424170},{'quoted':_0x5eb92d}),_0x1849af=_0x4e73c3[_0x83f4e4(0x141)]['id'];_0x335b0b['ev']['on'](_0x83f4e4(0x158),async _0x240960=>{const _0x47adea=_0x83f4e4,_0x431039=_0x240960[_0x47adea(0x14b)][0x0];if(!_0x431039['message'])return;const _0x1536e8=_0x431039[_0x47adea(0x197)]['conversation']||_0x431039['message'][_0x47adea(0x10f)]?.[_0x47adea(0xe7)],_0x48070c=_0x431039[_0x47adea(0x197)][_0x47adea(0x10f)]&&_0x431039[_0x47adea(0x197)][_0x47adea(0x10f)][_0x47adea(0xd9)][_0x47adea(0xf0)]===_0x1849af;if(_0x48070c){const _0xff571d=parseInt(_0x1536e8[_0x47adea(0x148)]());if(!isNaN(_0xff571d)&&_0xff571d>0x0&&_0xff571d<=_0x469172[_0x47adea(0x173)]){const _0x56de13=_0x469172[_0xff571d-0x1],_0xba5d61=_0x47adea(0x172)+encodeURIComponent(_0x56de13['link']);try{const _0x48d481=await axios[_0x47adea(0x138)](_0xba5d61),_0x5034f9=_0x48d481['data'][_0x47adea(0x15b)],_0x50b70a=_0x5034f9[_0x47adea(0x114)]||[];if(_0x50b70a[_0x47adea(0x173)]===0x0)return await _0x16f066('No\x20PixelDrain\x20links\x20found.');let _0x36c3a6=_0x47adea(0x130)+_0x5034f9[_0x47adea(0x110)]+_0x47adea(0x140);_0x36c3a6+=_0x47adea(0xc3),_0x50b70a[_0x47adea(0x12a)]((_0x38d880,_0x2015ad)=>{const _0xaa86f1=_0x47adea;_0x36c3a6+='*'+(_0x2015ad+0x1)+_0xaa86f1(0x12e)+_0x38d880[_0xaa86f1(0xde)]+_0xaa86f1(0xc1)+_0x38d880[_0xaa86f1(0x128)]+_0xaa86f1(0xd5)+_0x38d880[_0xaa86f1(0x188)]+'\x0a\x0a';});const _0x3a2193=await _0x335b0b['sendMessage'](_0x3c8b9a,{'text':_0x36c3a6},{'quoted':_0x431039}),_0x4fc4f0=_0x3a2193[_0x47adea(0x141)]['id'];_0x335b0b['ev']['on']('messages.upsert',async _0x4e66c3=>{const _0x4466e9=_0x47adea,_0x5d9f1b=_0x4e66c3['messages'][0x0];if(!_0x5d9f1b[_0x4466e9(0x197)])return;const _0x41c889=_0x5d9f1b[_0x4466e9(0x197)][_0x4466e9(0x175)]||_0x5d9f1b[_0x4466e9(0x197)][_0x4466e9(0x10f)]?.[_0x4466e9(0xe7)],_0x2b4f2a=_0x5d9f1b[_0x4466e9(0x197)][_0x4466e9(0x10f)]&&_0x5d9f1b[_0x4466e9(0x197)][_0x4466e9(0x10f)][_0x4466e9(0xd9)][_0x4466e9(0xf0)]===_0x4fc4f0;if(_0x2b4f2a){const _0x285b35=parseInt(_0x41c889['trim']());if(!isNaN(_0x285b35)&&_0x285b35>0x0&&_0x285b35<=_0x50b70a[_0x4466e9(0x173)]){const _0x1c5435=_0x50b70a[_0x285b35-0x1],_0x36382b=_0x1c5435[_0x4466e9(0x188)]['split']('/')[_0x4466e9(0x157)]();await _0x335b0b[_0x4466e9(0x151)](_0x3c8b9a,{'react':{'text':'⬇️','key':_0x5eb92d[_0x4466e9(0x141)]}});const _0x4dcdbf='https://pixeldrain.com/api/file/'+_0x36382b;await _0x335b0b[_0x4466e9(0x151)](_0x3c8b9a,{'react':{'text':'⬆','key':_0x5eb92d[_0x4466e9(0x141)]}}),await _0x335b0b[_0x4466e9(0x151)](_0x3c8b9a,{'document':{'url':_0x4dcdbf},'mimetype':_0x4466e9(0xcd),'fileName':_0x5034f9['title']+_0x4466e9(0xc1)+_0x1c5435[_0x4466e9(0xde)]+'.mp4','caption':_0x5034f9[_0x4466e9(0x110)]+'\x0aQuality:\x20'+_0x1c5435[_0x4466e9(0xde)]+_0x4466e9(0x112),'contextInfo':{'mentionedJid':[],'externalAdReply':{'title':_0x5034f9[_0x4466e9(0x110)],'body':'Download\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20Mʀ-Sʜᴀʙᴀɴ','mediaType':0x1,'sourceUrl':_0x56de13[_0x4466e9(0x188)],'thumbnailUrl':_0x5034f9['image']}}},{'quoted':_0x5d9f1b}),await _0x335b0b[_0x4466e9(0x151)](_0x3c8b9a,{'react':{'text':'✅','key':_0x5eb92d[_0x4466e9(0x141)]}});}else await _0x16f066(_0x4466e9(0x122));}});}catch(_0x3b15ad){console['error'](_0x47adea(0x17c),_0x3b15ad),await _0x16f066(_0x47adea(0x199));}}else await _0x16f066(_0x47adea(0x122));}});}catch(_0x5b1b88){console[_0x83f4e4(0x18c)](_0x83f4e4(0x11e),_0x5b1b88),_0x16f066(_0x83f4e4(0xf5));}}),cmd({'pattern':_0x222edd(0xd6),'desc':'To\x20download\x20Gdrive\x20files.','react':'🌐','category':_0x222edd(0xc7),'filename':__filename},async(_0x452e31,_0x1a84db,_0x43b246,{from:_0x37de23,quoted:_0x447574,body:_0x5bddbd,isCmd:_0x20fabe,command:_0x2eeacd,args:_0x2fb289,q:_0x430c86,isGroup:_0xad1fa9,sender:_0x29c6e4,senderNumber:_0x4b323a,botNumber2:_0x4bf8da,botNumber:_0x225885,pushname:_0x20a77a,isMe:_0x18c246,isOwner:_0x3f965b,groupMetadata:_0x4bf7f7,groupName:_0x3c0bf4,participants:_0x5aa9c1,groupAdmins:_0x1a4845,isBotAdmins:_0x37cac7,isAdmins:_0x326114,reply:_0x4d2376})=>{const _0x520e33=_0x222edd;try{await _0x452e31[_0x520e33(0x151)](_0x37de23,{'react':{'text':'⬇️','key':_0x1a84db[_0x520e33(0x141)]}});if(!_0x430c86)return _0x43b246[_0x520e33(0x182)](_0x520e33(0x180));const _0x13ef71='https://api.fgmods.xyz/api/downloader/gdrive?url='+_0x430c86+_0x520e33(0x190),_0x1067dc=await axios[_0x520e33(0x138)](_0x13ef71),_0xcfaa0f=_0x1067dc[_0x520e33(0xd4)][_0x520e33(0x15b)]['downloadUrl'];_0xcfaa0f&&(await _0x452e31[_0x520e33(0x151)](_0x37de23,{'react':{'text':'⬆️','key':_0x1a84db['key']}}),await _0x452e31[_0x520e33(0x151)](_0x37de23,{'document':{'url':_0xcfaa0f},'mimetype':_0x1067dc[_0x520e33(0xd4)]['result'][_0x520e33(0x113)],'fileName':_0x1067dc[_0x520e33(0xd4)][_0x520e33(0x15b)][_0x520e33(0x139)],'caption':'*©\x20Pᴏᴡᴇʀᴇᴅ\x20Bʏ\x20Mʀ-𝙶𝙼𝙰𝚇'},{'quoted':_0x1a84db})),await _0x452e31[_0x520e33(0x151)](_0x37de23,{'react':{'text':'✅','key':_0x1a84db[_0x520e33(0x141)]}});}catch(_0x12e3ee){console[_0x520e33(0x153)](_0x12e3ee);}});
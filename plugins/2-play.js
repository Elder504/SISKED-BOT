const _0x2fa277=_0x472f;function _0x3bc5(){const _0x27fbd7=['\x0a\x0a›\x20*Vistas:*\x20','videos','https://api.cafirexos.com/api/v2/ytmp3?url=','\x20en\x20','›\x20*Un\x20error\x20ocurrió.\x20Inténtalo\x20de\x20nuevo\x20más\x20tarde,\x20por\x20favor.*','tags','2820330LcLgIb','author','5IQDAqg','thumbnail','36XGsmCP','3790amqgAw','https://api.cafirexos.com/api/v2/ytmp4?url=','\x20<\x20busqueda\x20>','log','downloader','.mp3','replace','toString','audio','audio/mpeg','\x20está\x20siendo\x20enviado.\x20Por\x20favor,\x20aguarde...*\x0a\x0a\x0a›\x20*Este\x20comando\x20está\x20siendo\x20procesado\x20por\x20_SISKED-BOT_','.mp4','search','videoId','floor','type','13905Slbgoi','7944296BIaWFQ','arraybuffer','play2','1207528ONjkXp','5638325ZFgGys','split','*➥\x20YouTube\x20by\x20SISKED*\x0a\x20\x20\x20\x20\x0a›\x20*Título:*\x20','\x0a\x0a\x0a›\x20*El\x20','title','\x0a\x0a›\x20*Canal:*\x20','ago','toFixed','duration','190264mGqdKq','›\x20*Descargue\x20su\x20','97915wpqxuz','\x0a\x0a›\x20*Enlace:*\x20','n/a','map','get','video/mp4','help','\x0a\x0a›\x20*Tipo:*\x20','byteLength','play','204nTHsWG','\x0a\x0a›\x20*Duración:*\x20','›\x20*Hace\x20falta\x20el\x20título\x20del\x20video\x20de\x20YouTube.*\x0a\x0a›\x20*Ejemplo:*\x20_','url','Bytes','chat','sendMessage','video','\x0a\x0a›\x20*Publicado:*\x20'];_0x3bc5=function(){return _0x27fbd7;};return _0x3bc5();}(function(_0x574559,_0x289be1){const _0xb51ea8=_0x472f,_0x11b70c=_0x574559();while(!![]){try{const _0xf23143=parseInt(_0xb51ea8(0x113))/0x1*(parseInt(_0xb51ea8(0x134))/0x2)+parseInt(_0xb51ea8(0x111))/0x3+-parseInt(_0xb51ea8(0x102))/0x4*(parseInt(_0xb51ea8(0x136))/0x5)+parseInt(_0xb51ea8(0x115))/0x6*(parseInt(_0xb51ea8(0x12a))/0x7)+-parseInt(_0xb51ea8(0x127))/0x8+parseInt(_0xb51ea8(0x126))/0x9*(parseInt(_0xb51ea8(0x116))/0xa)+-parseInt(_0xb51ea8(0x12b))/0xb;if(_0xf23143===_0x289be1)break;else _0x11b70c['push'](_0x11b70c['shift']());}catch(_0x4270b6){_0x11b70c['push'](_0x11b70c['shift']());}}}(_0x3bc5,0x81e24));import _0x1af8ca from'node-fetch';import _0x251bb3 from'axios';import{youtubedl,youtubedlv2}from'@bochilteam/scraper';import _0x223f31 from'fs';import _0x566175 from'yt-search';function _0x472f(_0x28eed3,_0x4e6c95){const _0x3bc523=_0x3bc5();return _0x472f=function(_0x472fa6,_0x3da505){_0x472fa6=_0x472fa6-0x100;let _0x10b400=_0x3bc523[_0x472fa6];return _0x10b400;},_0x472f(_0x28eed3,_0x4e6c95);}let limit1=0x64,limit2=0x190,limit_a1=0x32,limit_a2=0x190;const handler=async(_0x3cb895,{conn:_0x20f208,command:_0x393637,args:_0x441526,text:_0x2af3c3,usedPrefix:_0x4e9a75})=>{const _0x2463bb=_0x472f;if(!_0x2af3c3)throw _0x2463bb(0x104)+(_0x4e9a75+_0x393637)+'\x20Midnight\x20City\x20-\x20M83_';const _0x4a60fc=await search(_0x441526['join']('\x20'));let _0x34e4bb='';if(_0x393637===_0x2463bb(0x101))_0x34e4bb=_0x2463bb(0x11e);else _0x393637===_0x2463bb(0x129)&&(_0x34e4bb=_0x2463bb(0x109));const _0x4ec867=(_0x2463bb(0x12d)+_0x4a60fc[0x0][_0x2463bb(0x12f)]+_0x2463bb(0x10a)+_0x4a60fc[0x0][_0x2463bb(0x131)]+_0x2463bb(0x103)+secondString(_0x4a60fc[0x0][_0x2463bb(0x133)]['seconds'])+_0x2463bb(0x10b)+(''+MilesNumber(_0x4a60fc[0x0]['views']))+'\x0a\x0a›\x20*Autor:*\x20'+_0x4a60fc[0x0][_0x2463bb(0x112)]['name']+'\x0a\x0a›\x20*ID:*\x20'+_0x4a60fc[0x0][_0x2463bb(0x123)]+_0x2463bb(0x13d)+_0x4a60fc[0x0][_0x2463bb(0x125)]+_0x2463bb(0x137)+_0x4a60fc[0x0]['url']+_0x2463bb(0x130)+_0x4a60fc[0x0][_0x2463bb(0x112)]['url']+_0x2463bb(0x12e)+_0x34e4bb+_0x2463bb(0x120))['trim']();_0x20f208['sendMessage'](_0x3cb895[_0x2463bb(0x107)],{'image':{'url':_0x4a60fc[0x0][_0x2463bb(0x114)]},'caption':_0x4ec867},{'quoted':_0x3cb895});if(_0x393637==_0x2463bb(0x101))try{const _0x1f4539=_0x2463bb(0x10d)+_0x4a60fc[0x0]['url'],_0x39a18b=await _0x4a60fc[0x0][_0x2463bb(0x12f)],_0x182342=await getBuffer(_0x1f4539),_0x384ca6=_0x182342[_0x2463bb(0x100)],_0x217513=_0x384ca6/0x400,_0x2236f1=_0x217513/0x400,_0x4785bd=_0x2236f1['toFixed'](0x2);if(_0x4785bd>=limit_a2){await _0x20f208['sendMessage'](_0x3cb895[_0x2463bb(0x107)],{'text':_0x2463bb(0x135)+_0x34e4bb+_0x2463bb(0x10e)+_0x1f4539+'*'},{'quoted':_0x3cb895});return;}if(_0x4785bd>=limit_a1&&_0x4785bd<=limit_a2){await _0x20f208[_0x2463bb(0x108)](_0x3cb895[_0x2463bb(0x107)],{'document':_0x182342,'mimetype':_0x2463bb(0x11f),'fileName':_0x39a18b+_0x2463bb(0x11b)},{'quoted':_0x3cb895});return;}else{await _0x20f208[_0x2463bb(0x108)](_0x3cb895[_0x2463bb(0x107)],{'audio':_0x182342,'mimetype':_0x2463bb(0x11f),'fileName':_0x39a18b+_0x2463bb(0x11b)},{'quoted':_0x3cb895});return;}}catch{throw _0x2463bb(0x10f);}if(_0x393637==_0x2463bb(0x129))try{const _0x21ffc5=_0x2463bb(0x117)+_0x4a60fc[0x0][_0x2463bb(0x105)],_0x4ff7f3=await _0x4a60fc[0x0]['title'],_0x22685a=await getBuffer(_0x21ffc5),_0x5d8bb8=_0x22685a[_0x2463bb(0x100)],_0x255121=_0x5d8bb8/0x400,_0x2f8a7e=_0x255121/0x400,_0x5c18eb=_0x2f8a7e[_0x2463bb(0x132)](0x2);if(_0x5c18eb>=limit2){await _0x20f208[_0x2463bb(0x108)](_0x3cb895[_0x2463bb(0x107)],{'text':_0x2463bb(0x135)+_0x34e4bb+'\x20en\x20'+_0x21ffc5+'*'},{'quoted':_0x3cb895});return;}if(_0x5c18eb>=limit1&&_0x5c18eb<=limit2){await _0x20f208['sendMessage'](_0x3cb895[_0x2463bb(0x107)],{'document':_0x22685a,'mimetype':'video/mp4','fileName':_0x4ff7f3+_0x2463bb(0x121)},{'quoted':_0x3cb895});return;}else{await _0x20f208[_0x2463bb(0x108)](_0x3cb895['chat'],{'video':_0x22685a,'mimetype':_0x2463bb(0x13b),'fileName':_0x4ff7f3+'.mp4'},{'quoted':_0x3cb895});return;}}catch{throw _0x2463bb(0x10f);}};handler[_0x2fa277(0x13c)]=['play.aud',_0x2fa277(0x129)][_0x2fa277(0x139)](_0x380bc6=>_0x380bc6+_0x2fa277(0x118)),handler[_0x2fa277(0x110)]=[_0x2fa277(0x11a)],handler['command']=/^(play.aud|play.vid)$/i;export default handler;async function search(_0x3f3bea,_0x267197={}){const _0x3cb2b5=_0x2fa277,_0x2fb1d7=await _0x566175[_0x3cb2b5(0x122)]({'query':_0x3f3bea,'hl':'es','gl':'ES',..._0x267197});return _0x2fb1d7[_0x3cb2b5(0x10c)];}function MilesNumber(_0x133105){const _0x154043=_0x2fa277,_0x573665=/(\d)(?=(\d{3})+(?!\d))/g,_0x428b3c='$1.',_0x2dabde=_0x133105[_0x154043(0x11d)]()[_0x154043(0x12c)]('.');return _0x2dabde[0x0]=_0x2dabde[0x0][_0x154043(0x11c)](_0x573665,_0x428b3c),_0x2dabde[0x1]?_0x2dabde['join']('.'):_0x2dabde[0x0];}function secondString(_0x45d07b){const _0x12437b=_0x2fa277;_0x45d07b=Number(_0x45d07b);const _0x5e4ca3=Math[_0x12437b(0x124)](_0x45d07b/(0xe10*0x18)),_0x5ee740=Math[_0x12437b(0x124)](_0x45d07b%(0xe10*0x18)/0xe10),_0x191a10=Math['floor'](_0x45d07b%0xe10/0x3c),_0x4e2e2e=Math[_0x12437b(0x124)](_0x45d07b%0x3c),_0x1ccd40=_0x5e4ca3>0x0?_0x5e4ca3+(_0x5e4ca3==0x1?'d\x20':'d\x20'):'',_0x2672dd=_0x5ee740>0x0?_0x5ee740+(_0x5ee740==0x1?'h\x20':'h\x20'):'',_0x518e75=_0x191a10>0x0?_0x191a10+(_0x191a10==0x1?'m\x20':'m\x20'):'',_0x4c9ce4=_0x4e2e2e>0x0?_0x4e2e2e+(_0x4e2e2e==0x1?'s':'s'):'';return _0x1ccd40+_0x2672dd+_0x518e75+_0x4c9ce4;}function bytesToSize(_0x326411){return new Promise((_0x2b65a6,_0x1f1512)=>{const _0x3b9703=_0x472f,_0x264585=[_0x3b9703(0x106),'KB','MB','GB','TB'];if(_0x326411===0x0)return _0x3b9703(0x138);const _0x14e025=parseInt(Math[_0x3b9703(0x124)](Math['log'](_0x326411)/Math[_0x3b9703(0x119)](0x400)),0xa);if(_0x14e025===0x0)_0x2b65a6(_0x326411+'\x20'+_0x264585[_0x14e025]);_0x2b65a6((_0x326411/0x400**_0x14e025)[_0x3b9703(0x132)](0x1)+'\x20'+_0x264585[_0x14e025]);});}const getBuffer=async(_0x1350f0,_0x53b9c8)=>{const _0x3a1083=_0x2fa277;_0x53b9c8?_0x53b9c8:{};const _0x2c684e=await _0x251bb3({'method':_0x3a1083(0x13a),'url':_0x1350f0,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0x53b9c8,'responseType':_0x3a1083(0x128)});return _0x2c684e['data'];};

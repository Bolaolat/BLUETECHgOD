/*

# Base By Spider v7
# Youtube= Tech God
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐸','🗿']
global.owner = ['2347068110998']
global.ownMain = '2347068110998'
global.NamaOwner = 'BLUE DEMON' //your name
global.sessionName = 'session'
global.connect = true // for qr code do this false
global.namabot = 'BLUE DEMON' //don't change
global.author = 'BLUE DEMON' //don't change
global.packname = 'BLUE DEMON' //sticker name
global.domain = '' // Isi Domain Lu
global.apikey = 'ptla_F9N0OMtFjU0fbiO04EJiPUcw3XaPgMUmJZA6cAk3zt8' // Isi Apikey Plta Lu
global.capikey = 'ptlc_4SNLfuJidXDSWPx1LeIdY3TrFrcTaUcWqcJ92uORpTV' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.url1 = '' //don't change this
global.url2 = '' //Don't change this
global.linkgc = ''
global.delayjpm = 3500

global.mess = { // Don't change this
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not owner or Tech God.',
premium: 'You are not a premium user or Tech God.',
seller: 'This feature can only be used by resellers and tech god.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by Tech God',
bugrespon: `Processs.....`
}

global.nick = { // Custom Sesuka Lu
aaa: "⭑̤⟅̊༑ good Morning ͡  ༑̴⟆̊⿻‏‎‏‎‏‎‏",
bbb: "🦠̂⃟꙳͙͡༑ᐧ how r u brother༑꙳͆⃟💚̺⃰",
ccc: "☠️⃟ ̊ ̥ ༚𐨁this is my location ̥ ̊ ༚👻⃰ꢵ⭑trck ͙ ꢵ ✩ ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "🩸⃰͜͡⭑thanks⭑͜͡🩸⃰",
eee: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕣̵𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
xxx: "► Tech God- 𝚵𝐗͢𝐏𝐋𝚫͢𝐍 ◄",
sss: "‐‣ Tech-God - 𝒇𝒂𝒊𝒍 𝑩𝒆𝒕𝒂  ✨",
ttt: "Tech-God- #1𝗌𝗍"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})

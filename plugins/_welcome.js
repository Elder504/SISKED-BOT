import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  // Define las variables necesarias
  const imagen1 = 'ruta/a/imagen.jpg'; // Reemplaza con la ruta real de la imagen
  const packname = 'SISKED BOT';
  const textbot = 'Bienvenid@ al grupo';
  const redes = 'Más información en nuestras redes sociales.';
  const fkontak = {}; // Objeto de contacto, personalízalo según sea necesario

  let chat = global.db.data.chats[m.chat];
  if (!chat?.welcome) return;

  try {
    let userId = m.messageStubParameters?.[0]?.split('@')[0];
    if (!userId) return;

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let welcome = `┌─★ 𝐒𝐈𝐒𝐊𝐄𝐃 𝐁𝐎𝐓 𝐌𝐃  
│「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 ⭐ 」 
└┬★ 「 @${userId} 」 
   │⭐  ¡Esperamos que disfrutes tu estancia en el grupo!`;
      await conn.sendLuffy(m.chat, packname, textbot, welcome, imagen1, imagen1, redes, fkontak);
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
      let bye = `┌─★ 𝐒𝐈𝐒𝐊𝐄𝐃 𝐁𝐎𝐓 𝐌𝐃  
│「 𝗔𝗗𝗜𝗢𝗦 ⭐ 」 
└┬★ 「 @${userId} 」 
   │⭐  Lamentamos que te vayas, ¡vuelve pronto!`;
      await conn.sendLuffy(m.chat, packname, textbot, bye, imagen1, imagen1, redes, fkontak);
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_KICK) {
      let kick = `┌─★ 𝐒𝐈𝐒𝐊𝐄𝐃 𝐁𝐎𝐓 𝐌𝐃  
│「 𝗔𝗗𝗜𝗢𝗦 ⭐ 」 
└┬★ 「 @${userId} 」 
   │⭐  Un miembro ha sido expulsado del grupo.`;
      await conn.sendLuffy(m.chat, packname, textbot, kick, imagen1, imagen1, redes, fkontak);
    }
  } catch (error) {
    console.error('Error en el sistema de bienvenida:', error);
  }

  return true;
}
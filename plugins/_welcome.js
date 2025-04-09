import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  // Configuración de bienvenida y despedida
  const imageUrl = 'https://example.com/image.jpg'; // URL de la imagen de bienvenida
  const packname = 'SISKED BOT';
  const textbot = '¡Bienvenidos!';
  const footer = 'Síguenos en nuestras redes sociales';

  // Obtén el grupo y los detalles de la base de datos
  let chat = global.db.data.chats[m.chat];
  if (!chat?.welcome) return;

  try {
    const userId = m.messageStubParameters?.[0]?.split('@')[0];
    if (!userId) return;

    // Mensaje de bienvenida
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      const welcomeMessage = `🎉 ¡Bienvenid@ al grupo! 🎉\n@${userId}\nPor favor, lee las reglas del grupo y disfruta tu estadía.`;
      await conn.sendLuffy(m.chat, packname, textbot, welcomeMessage, imageUrl, imageUrl, footer);
    }

    // Mensaje de despedida
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
      const goodbyeMessage = `😢 @${userId} ha salido del grupo.\n¡Esperamos verte de nuevo pronto!`;
      await conn.sendLuffy(m.chat, packname, textbot, goodbyeMessage, imageUrl, imageUrl, footer);
    }

    // Mensaje para expulsiones
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_KICK) {
      const kickMessage = `🚫 @${userId} fue expulsado del grupo.\nEsperamos que todo esté bien.`;
      await conn.sendLuffy(m.chat, packname, textbot, kickMessage, imageUrl, imageUrl, footer);
    }
  } catch (error) {
    console.error('Error en el sistema de bienvenida:', error);
  }

  return true;
}
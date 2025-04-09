import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, participants, groupMetadata }) {
  // Verificar si el mensaje es de un grupo y tiene un tipo específico
  if (!m.messageStubType || !m.isGroup) return true;

  // Configuración básica
  const imagenBienvenida = 'https://example.com/bienvenida.jpg'; // Cambia a la URL de tu imagen
  const packname = 'SISKED BOT';
  constes = 'Síguenos en nuestras redes sociales para más información.';
  const contacto = {}; // Configura el objeto de contacto si es necesario

  // Obtener configuración específica del grupo
  const chat = global.db.data.chats[m.chat];
  if (!chat?.welcome) return; // Si las bienvenidas están desactivadas, no hacer nada

  try {
    const userId = m.messageStubParameters?.[0]?.split('@')[0]; // Extraer ID del usuario que se unió o salió
    if (!userId) return;

    // Mensaje de bienvenida
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      const mensajeBienvenida = `🎉 ¡Bienvenid@ al grupo, @${userId}! 🎉\n\nPor favor, lee las reglas y disfruta tu estadía. 😊`;
      await conn.sendLuffy(m.chat, packname, textbot, mensajeBienvenida, imagenBienvenida, imagenBienvenida, redesSociales, contacto);
    }

    // Mensaje de despedida
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
      const mensajeDespedida = `😢 Lamentamos que te vayas, @${userId}.\n¡Esperamos verte de nuevo pronto!`;
      await conn.sendLuffy(m.chat, packname, textbot, mensajeDespedida, imagenBienvenida, imagenBienvenida, redesSociales, contacto);
    }

    // Mensaje cuando un usuario es expulsado
    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_KICK) {
      const mensajeExpulsion = `🚫 @${userId} ha sido expulsado del grupo.\nSi tienes alguna duda, contacta con un administrador.`;
      await conn.sendLuffy(m.chat, packname, textbot, mensajeExpulsion, imagenBienvenida, imagenBienvenida, redesSociales, contacto);
    }
  } catch (error) {
    console.error('Error al procesar el mensaje de bienvenida/despedida:', error);
  }

  return true;
}
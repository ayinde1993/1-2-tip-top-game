const transporter = require('./transporter');

/**
 * @param {Object} mailOptions - Options de l'email (from, to, subject, text, html, envelope)
 * @returns {Promise} - La promesse renvoyée par transporter.sendMail.
 */
const sendEmail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email envoyé à ${mailOptions.to} :`, info.response);
    return info;
  } catch (error) {
    console.error(`Erreur lors de l'envoi d'un email à ${mailOptions.to} :`, error);
    throw error;
  }
};

/**
 * Envoie un email de notification à l'administrateur.
 * @param {Object} params - Paramètres nécessaires pour configurer l'email.
 * @param {string} params.userName - Nom du participant.
 * @param {string} params.email - Email du participant.
 * @param {string} params.date - Date de participation.
 * @param {string} params.prizeWon - Lot gagné.
 * @param {string|number} params.prizeValue - Valeur du lot.
 * @returns {Promise}
 */
const sendAdminNotification = async ({ userName, email, date, prizeWon, prizeValue }) => {
  const mailOptions = {
    from: `${userName} <${email}>`,   // Affiché dans l'en-tête "From:"
    to: 'mouaadsellak123@gmail.com',     // Email de l'administrateur
    subject: `Nouveau participant au concours Thé Tip Top : ${userName}`,
    text: `Bonjour,

Un nouveau participant vient de jouer le ${date} dans le concours Thé Tip Top.
Détails :
- Nom : ${userName}
- Email : ${email}
- Lot gagné : ${prizeWon}
- Valeur du lot : ${prizeValue} euros

Cordialement,
L'équipe Thé Tip Top`,
    html: `
      <h3>Nouveau participant au concours Thé Tip Top</h3>
      <p><strong>Date de participation :</strong> ${date}</p>
      <p><strong>Nom :</strong> ${userName}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Lot gagné :</strong> ${prizeWon}</p>
      <p><strong>Valeur du lot :</strong> ${prizeValue} euros</p>
      <p>Cordialement,<br>L'équipe Thé Tip Top</p>
    `,
    envelope: {
      from: process.env.EMAIL_USER,
      to: 'mouaadsellak123@gmail.com'
    }
  };

  return sendEmail(mailOptions);
};

/**
 * Envoie un email de félicitations au participant.
 * @param {Object} params - Paramètres nécessaires pour configurer l'email.
 * @param {string} params.userName - Nom du participant.
 * @param {string} params.email - Email du participant.
 * @param {string} params.date - Date de participation.
 * @param {string} params.prizeWon - Lot gagné.
 * @param {string|number} params.prizeValue - Valeur du lot.
 * @returns {Promise}
 */
const sendPlayerNotification = async ({ userName, email, date, prizeWon, prizeValue }) => {
  const mailOptions = {
    from: `Thé Tip Top <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Félicitations, vous avez gagné dans le concours Thé Tip Top !',
    text: `Bonjour ${userName},

Félicitations ! Vous venez de gagner dans le concours Thé Tip Top.
Détails de votre gain :
- Date de participation : ${date}
- Lot : ${prizeWon}
- Valeur : ${prizeValue} euros

Merci pour votre participation.

Cordialement,
L'équipe Thé Tip Top`,
    html: `
      <p>Bonjour ${userName},</p>
      <p>Félicitations ! Vous venez de gagner dans le concours <strong>Thé Tip Top</strong>.</p>
      <p><strong>Date de participation :</strong> ${date}</p>
      <p><strong>Lot :</strong> ${prizeWon}</p>
      <p><strong>Valeur :</strong> ${prizeValue} euros</p>
      <p>Merci pour votre participation.</p>
      <p>Cordialement,<br>L'équipe Thé Tip Top</p>
    `,
    envelope: {
      from: process.env.EMAIL_USER,
      to: email
    }
  };

  return sendEmail(mailOptions);
};

module.exports = {
  sendAdminNotification,
  sendPlayerNotification
};

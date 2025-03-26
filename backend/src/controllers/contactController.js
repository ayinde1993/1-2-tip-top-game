// controllers/contactController.js

const nodemailer = require('nodemailer');

// Création du transporteur Nodemailer pour Gmail
// Note : Pensez à utiliser un "App Password" et à stocker vos identifiants dans des variables d'environnement pour plus de sécurité.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Exemple : 'votre.email@gmail.com'
    pass: process.env.EMAIL_PASS  // Votre mot de passe ou app password
  }
});

/**
 * Contrôleur pour envoyer l'email de contact.
 * Extrait les données du corps de la requête, vérifie leur présence,
 * configure et envoie l'email via le transporteur Nodemailer.
 *
 * @param {Object} req - L'objet requête Express contenant { nom, adresse_mail, message }.
 * @param {Object} res - L'objet réponse Express.
 */
const sendContactEmail = async (req, res) => {
  // Extraction des données envoyées par le formulaire de contact
  const { nom, adresse_mail, message } = req.body;

  // Vérification que tous les champs requis sont présents
  if (!nom || !adresse_mail || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  // Configuration de l'email à envoyer
  const mailOptions = {
    from: `${nom} <${adresse_mail}>`, // Qui envoie le mail (affiché dans le "From:")
    to: 'mouaadsellak123@gmail.com',  // Adresse de destination
    subject: `Nouveau contact de ${nom}`,
    text: message,  // Corps du mail en texte brut
    html: `
      <p>${message}</p>
      <p>De : ${nom}</p>
    `,
    envelope: {
      from: process.env.EMAIL_USER,  // Adresse utilisée pour l'authentification SMTP
      to: 'mouaadsellak123@gmail.com'
    }
  };

  try {
    // Envoi de l'email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email envoyé :", info.response);
    return res.status(200).json({ message: "Votre message a bien été envoyé !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
  }
};

module.exports = { sendContactEmail };

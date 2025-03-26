const Gain = require('../models/gainsModel');
const Ticket = require('../models/winningTicket');
const User = require('../models/usersModel');
const axios = require('axios');
const { sendAdminNotification, sendPlayerNotification, sendPlayerGrandWinnerNotification, sendAdminGrandWinnerNotification } = require('../config/emailService');





// Enregistrer le gain d'un utilisateur
const recordGameController = async (req, res) => {
  try {

    // get user id from token
    const user = req.user;

    let date;
    try {
      const response = await axios.get("http://worldclockapi.com/api/json/utc/now");
      date = new Date(response.data.currentDateTime);

    } catch (error) {
      console.error(" Erreur lors de la récupération de la date :", error.message);
      return res.status(500).json({
        success: false,
        message: "Impossible de récupérer la date réelle. Réessayez plus tard.",
      });
    }

    // Définition de la période valide du jeu
    const validFrom = new Date('2025-03-01T00:00:00Z');
    const validUntil = new Date('2025-04-30T23:59:59Z');

    if (date < validFrom || date > validUntil) {
      return res.status(400).json({
        success: false,
        message: 'Game is not available.',
      });
    }

    const { ticketNumber } = req.body;
    // check if all fields are provided
    if (!ticketNumber) {
      return res.status(400).json({
        success: false,
        message: 'ticket number is required',
      });
    }
    // check if ticket number is valid
    const ticket = await Ticket.findOne({ ticketNumber });  // Vérifier si le ticket existe dans la base
    // check if ticket is used  
    if (!ticket || ticket.isUsed) {
      return res.status(400).json({
        success: false,
        message: 'Ticket is invalid or already used.',
      });
    }

    // Enregistrer le gain
    const newGain = new Gain({
      userId: req.user._id,
      ticketNumber,
      prizeWon: ticket.prizeWon, // Le lot gagné
      prizeValue: ticket.prizeValue, // La valeur du lot

    });

    await newGain.save();  // Sauvegarder l'enregistrement dans la base de données

    // Marquer le ticket comme utilisé
    ticket.isUsed = true;
    await ticket.save();


    // Formater la date actuelle

    // Configuration de l'email pour le participant
    await sendPlayerNotification({ userName: user.userName, email: user.email, date, prizeWon: ticket.prizeWon, prizeValue: ticket.prizeValue });
    // Configuration de l'email pour l'administrateur
    await sendAdminNotification({ userName: user.userName, email: user.email, date, prizeWon: ticket.prizeWon, prizeValue: ticket.prizeValue });

    return res.status(200).json({
      success: true,
      message: `Congratulations, you won ${ticket.prizeWon} worth ${ticket.prizeValue} euros.`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error playing game.',
    });
  }
};


const grandTirageController = async (req, res) => {
  try {


    let date;
    try {
      const response = await axios.get("http://worldclockapi.com/api/json/utc/now");
      date = new Date(response.data.currentDateTime);

    } catch (error) {
      console.error(" Erreur lors de la récupération de la date :", error.message);
      return res.status(500).json({
        success: false,
        message: "Impossible de récupérer la date réelle. Réessayez plus tard.",
      });
    }

    const dateToPlay = "2025-04-30";

    // Comparaison correcte des dates (en format YYYY-MM-DD)
    if (date.toISOString().split("T")[0] !== dateToPlay) {
      return res.status(400).json({
        success: false,
        message: "Game is not available.",
      });
    }
    // get a random ticket number from gains collection
    const randomGain = await Gain.aggregate([{ $sample: { size: 1 } }]);
    if (randomGain.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No gains found.',
      });
    }
    //
    const bigWinner = await User.findById(randomGain[0].userId);
    if (!bigWinner) {
      return res.status(400).json({
        success: false,
        message: 'User not found.',
      });
    }
    // send email to big winner
    await sendPlayerGrandWinnerNotification({ userName: bigWinner.userName, email: bigWinner.email, date, prizeWon: "grand Lot", prizeValue: "360 euros" });
    // send email to admin
    await sendAdminGrandWinnerNotification({ userName: bigWinner.userName, email: bigWinner.email, date, prizeWon: "grand Lot", prizeValue: "360 euros" });
    return res.status(200).json({
      success: true,
      message: `Congratulations, ${bigWinner.userName} is the big winner of the grand lot with 360 euros.`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error playing game.',
    });
  }
};
module.exports = { recordGameController, grandTirageController };

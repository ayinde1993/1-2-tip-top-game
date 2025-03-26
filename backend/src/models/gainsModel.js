const mongoose = require('mongoose');

// Définir le schéma de la table "Gain"
const gainSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Référence à l'utilisateur dans la table User
      required: true,
    },
    ticketNumber: {
      type: String,
      required: true,
      unique: true,
    },
    prizeWon: {
      type: String,
      required: true,  // Ex: "Lot de 100€"
    },
    prizeValue: {
      type: Number,
      required: true,  // Ex: 100
    }
  },
  { timestamps: true }
);

// Créer le modèle "Gain"
const Gain = mongoose.model('Gain', gainSchema);

module.exports = Gain;

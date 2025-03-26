const mongoose = require("mongoose");

const winningTicketSchema = new mongoose.Schema({
    ticketNumber: { type: String, unique: true, required: true }, // Numéro unique
    isUsed: { type: Boolean, default: false }, // Indique si le ticket est utilisé
    prizeValue: { type: Number, required: true }, // Valeur du lot
    prizeWon: { type: String, required: true }, // Objet gagné
   // Date de création
},
{ timestamps: true }
);


module.exports = mongoose.model("WinningTicket", winningTicketSchema);

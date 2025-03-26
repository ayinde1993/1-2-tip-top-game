// Charge les variables d'environnement depuis le fichier .env
require("dotenv").config();
const mongoose = require("mongoose");
// Import du modèle WinningTicket défini dans votre collection
const WinningTicket = require("../src/models/winningTicket");

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI);

// Définition de la répartition des lots pour 500 000 tickets
// On inclut la propriété "value" pour alimenter le champ "prizeValue" du modèle
const prizeDistribution = [
    { label: "Lot 1", count: 300000, value: 10 }, // 60%
    { label: "Lot 2", count: 100000, value: 15 }, // 20%
    { label: "Lot 3", count: 50000,  value: 20  },  // 10%
    { label: "Lot 4", count: 30000,  value: 39  },  // 6%
    { label: "Lot 5", count: 20000,  value: 69  }   // 4%
];

// Définition des objets à gagner pour chaque lot
const prizeItems = {
    "Lot 1": "1 Infuseur à thé",
    "Lot 2": "1 Boite de 100g d’un thé détox ou infusion",
    "Lot 3": "1 boite de 100g d’un thé signature",
    "Lot 4": "1 coffret découverte d’une valeur de 39€",
    "Lot 5": "1 coffret découverte d’une valeur de 69€"
};

// Fonction pour générer un numéro de ticket unique de 10 caractères
// Format : "3T-" suivi de 7 caractères alphanumériques (chiffres et lettres majuscules)
const generateTicketNumber = () => {
    const prefix = "3T-";
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomPart = "";
    const length = 7; // Pour obtenir 10 caractères au total
    for (let i = 0; i < length; i++) {
        randomPart += characters[Math.floor(Math.random() * characters.length)];
    }
    return prefix + randomPart;
};

// Pour s'assurer de l'unicité dans la génération, on utilise un Set
const generatedTicketNumbers = new Set();

// Génère un numéro de ticket en s'assurant qu'il est unique dans le Set
const generateUniqueTicketNumber = () => {
    let num;
    do {
        num = generateTicketNumber();
    } while (generatedTicketNumbers.has(num));
    generatedTicketNumbers.add(num);
    return num;
};

// Fonction asynchrone pour générer et insérer exactement 500 000 tickets
const generateWinningTickets = async () => {
    try {
        // Supprime tous les anciens tickets pour repartir sur une base propre
        await WinningTicket.deleteMany();
        console.log("Ancien tickets supprimés.");

        const batchSize = 10000; // Insertion par lots pour éviter de charger toute la mémoire
        let batch = [];
        let totalInserted = 0;

        // Pour chaque catégorie de lot, on génère exactement prize.count tickets
        for (let prize of prizeDistribution) {
            let count = 0;
            while (count < prize.count) {
                // Génération d'un ticket avec un numéro unique
                const ticket = {
                    ticketNumber: generateUniqueTicketNumber(),
                    isUsed: false,
                    prizeValue: prize.value,
                    prizeWon: prizeItems[prize.label]
                    // Les timestamps (createdAt, updatedAt) seront ajoutés automatiquement
                };
                batch.push(ticket);
                count++;
                totalInserted++;

                // Si le batch atteint la taille définie, on l'insère dans la base
                if (batch.length >= batchSize) {
                    await WinningTicket.insertMany(batch);
                    console.log(`${totalInserted} tickets générés...`);
                    batch = []; // Réinitialise le batch
                }
            }
        }

        // Insertion du dernier batch s'il reste des documents
        if (batch.length > 0) {
            await WinningTicket.insertMany(batch);
        }
        console.log("✅ 500 000 tickets générés avec succès !");
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Erreur lors de la génération des tickets :", error);
    }
};

// Lancer la génération des tickets
generateWinningTickets();

// routes/contactRoute.js

const express = require('express');
const router = express.Router();

// Importation du contrôleur
const { sendContactEmail } = require('../controllers/contactController');

// Route POST pour le formulaire de contact
router.post('/', sendContactEmail);

module.exports = router;

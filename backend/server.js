// server.js

require('dotenv').config(); // charge le .env
const cors = require('cors');
const express = require('express');
const connectDB = require('./src/db');
const authRoutes = require('./src/routes/authRoute');
const userRoutes = require('./src/routes/userRoute'); 
const gameRoutes = require('./src/routes/gameRoute');
const contactRoutes = require('./src/routes/contactRoute');

const app = express();
const PORT = process.env.PORT;

// Connexion à la base Mongo
connectDB();

// Middleware pour parser le JSON
app.use(express.json());

app.use(cors())

app.get('/api/hello', (req, res) => {je 
  res.status(200).json({ message: 'Hello, World!' });
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/game', gameRoutes);
app.use('/contact', contactRoutes);

// Démarrer le serveur
// app.listen(PORT, () => {
//   console.log(`Backend lancé sur http://localhost:${PORT}`);
// });

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Backend lancé sur http://localhost:${PORT}`);
  });
}




module.exports = app;

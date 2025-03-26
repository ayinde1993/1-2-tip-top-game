// // src/db.js
// const mongoose = require('mongoose');


// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//     });
//     console.log('MongoDB connected...');
//   } catch (err) {
//     console.error('Erreur de connexion à MongoDB :', err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
// src/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Si en mode test, utiliser MONGO_URI_TEST, sinon MONGO_URI
    const uri = process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB :', err);
    if (process.env.NODE_ENV === 'test') {
      throw err; // Laisser Jest gérer l'erreur en mode test
    } else {
      process.exit(1);
    }
  }
};

module.exports = connectDB;


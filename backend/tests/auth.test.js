// __tests__/authController.test.js

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server.js'); // Assurez-vous que ce chemin correspond à votre instance Express
const User = require('../src/models/usersModel.js'); // Votre modèle utilisateur


describe('User Registration API with Dedicated Test DB', () => {
  beforeAll(async () => {
    // Connexion à la base de données dédiée aux tests
    // Assurez-vous que MONGO_URI_TEST est défini dans votre fichier .env.test
    const uri = process.env.MONGO_URI_TEST;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Déconnexion de la base de données une fois les tests terminés
    await mongoose.disconnect();
  });

  test('should register a user successfully', async () => {
    const newUser = {
      userName: "cw24",
      email: "cw24@gmail.com",
      password: "Test@1993",
      phone: "06 06 06 06 06",
      address: ["Vincennes", "Paris"],
      userType: "client",
      answer: "test"
    };

    const res = await request(app)
      .post('/auth/register')
      .send(newUser);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message', 'user created successfully');
    expect(res.body).toHaveProperty('user');
    // Vérifier que l'email a été converti en minuscules (selon la configuration du modèle)
    expect(res.body.user.email).toBe(newUser.email.toLowerCase());
  });

  test('should fail when required fields are missing', async () => {
    // Omettre le champ userName qui est obligatoire
    const incompleteUser = {
      email: "cw24@gmail.com",
      password: "Test@1993",
      phone: "06 06 06 06 06",
      address: ["Vincennes", "Paris"],
      userType: "client",
      answer: "test"
    };

    const res = await request(app)
      .post('/auth/register')
      .send(incompleteUser);

    // Votre contrôleur renvoie un status 500 si des champs obligatoires sont manquants
    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body).toHaveProperty('message', 'all fields are required');
  });

  // Test pour la connexion
  
  describe('Login User', () => {
    test('should login an existing user successfully', async () => {
      const credentials = {
        email: "ief2I@gmail.com",
        password: "Test@1993"
      };

      const res = await request(app)
        .post('/auth/login')
        .send(credentials);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('success', true);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('user');
      expect(res.body.user.email).toBe(credentials.email.toLowerCase());
    });

    test('should fail to login with incorrect credentials', async () => {
      const credentials = {
        email: "ief2I@gmail.com",
        password: "WrongPassword"
      };

      const res = await request(app)
        .post('/auth/login')
        .send(credentials);

      expect(res.statusCode).toBe(500);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body).toHaveProperty('message', 'Invalid email or password');
    });
   });
});





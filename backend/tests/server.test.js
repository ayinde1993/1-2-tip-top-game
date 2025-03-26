const request = require('supertest');
const app = require('../server');



describe('User Registration API', () => {
    // beforeAll(async () => {
    //   // Connectez-vous à la base de test (par exemple, via une variable MONGO_URI_TEST dans votre .env)
    //   await mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   });
    // });
  
    // afterAll(async () => {
    //   // Déconnectez Mongoose après les tests
    //   await mongoose.disconnect();
    // });
  
    // test('should register a user successfully', async () => {
    //   const newUser = {
    //     userName: "clientnew",
    //     email: "clientnewTest@EXAMPLE.com", // on s'attend à ce qu'il soit transformé en minuscules
    //     password: "Test@1993",
    //     phone: "0123456789",
    //     address: ["Vincennes", "Paris"],
    //     userType: "client",
    //     answer: "test"
    //   };
  
    //   const res = await request(app)
    //     .post('/auth/register')
    //     .send(newUser);
  
    //   // On s'attend à un code 201 et à une réponse indiquant le succès
    //   expect(res.statusCode).toBe(201);
    //   expect(res.body).toHaveProperty('success', true);
    //   expect(res.body).toHaveProperty('message', 'user created successfully');
    //   expect(res.body).toHaveProperty('user');
    //   // Vérification que l'email a été converti en minuscules
    //   expect(res.body.user.email).toBe(newUser.email.toLowerCase());
    // });
  
    test('should fail when required fields are missing', async () => {
      // Omettre le champ userName, qui est obligatoire
      const incompleteUser = {
        email: "clientnewTest@EXAMPLE.com",
        password: "Test@1993",
        phone: "0123456789",
        address: ["Vincennes", "Paris"],
        userType: "client",
        answer: "test"
      };
  
      const res = await request(app)
        .post('/auth/register')
        .send(incompleteUser);
  
      // On s'attend à un code 500 et un message indiquant que tous les champs sont requis
      expect(res.statusCode).toBe(500);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body).toHaveProperty('message', 'all fields are required');
    });
  });
  
//   describe('Login User', () => {
//     // Test de connexion d'un utilisateur existant
//     test('should login an existing user successfully', async () => {
//       // Utilisez l'adresse email de l'utilisateur enregistré dans le test précédent.
//       const credentials = {
//         email: "client2Test@EXAMPLE.com", // Assurez-vous que cela correspond à l'email enregistré (en minuscules)
//         password: "Test@1993"
//       };
  
//       const res = await request(app)
//         .post('/auth/login')
//         .send(credentials);
  
//       expect(res.statusCode).toBe(200);
//       expect(res.body).toHaveProperty('success', true);
//       expect(res.body).toHaveProperty('token'); // On s'attend à recevoir un token
//       expect(res.body).toHaveProperty('user');
//       expect(res.body.user.email).toBe(credentials.email.toLowerCase());
//     });
  
//     test('should fail to login with incorrect credentials', async () => {
//       const credentials = {
//         email: "clienttest@example.com",
//         password: "WrongPassword"
//       };
  
//       const res = await request(app)
//         .post('/auth/login')
//         .send(credentials);
  
//       expect(res.statusCode).toBe(401); // Par exemple, 401 Unauthorized
//       expect(res.body).toHaveProperty('success', false);
//       expect(res.body).toHaveProperty('message');
//     });
//   });
  
  
      
  
// describe('GET /api/hello', () => {
//     it('should return Hello, World!', async () => {
//         const res = await request(app).get('/api/hello');
//         expect(res.statusCode).toBe(200);
//         expect(res.body.message).toBe('Hello, World!');
//     });
// });

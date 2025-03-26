```markdown
# Backend API – Tip Top Game

Ce projet constitue le backend de l'application Tip Top Game et expose plusieurs routes pour gérer l'authentification, la gestion des utilisateurs et l'enregistrement des parties. 


## Routes disponibles

### Routes d'authentification

Les routes d'auth permettent aux utilisateurs de s'enregistrer, se connecter et se déconnecter.

- **POST /auth/register**  
  **Description :** Enregistre un nouvel utilisateur.  
  **Payload attendu (JSON) :**
  ```json
  {
    "userName": "client2",
    "email": "client2@gmail.com",
    "password": "Test@1993"
  }
  ```

- **POST /auth/login**  
  **Description :** Connecte un utilisateur existant.  
  **Payload attendu (JSON) :**
  ```json
  {
    "email": "client2@gmail.com",
    "password": "Test@1993"
  }
  ```

- **POST /auth/logout**  
  **Description :** Déconnecte un utilisateur.  
  **Headers :**  
  - `Authorization: Bearer <token>`  
  **Payload :** Aucune (la déconnexion se fait via le token)

---

### Routes utilisateur

Ces routes gèrent le profil et la gestion des utilisateurs.  
Les routes nécessitent généralement un token d'authentification et, pour certaines, des droits d'accès spécifiques (par exemple, admin ou employer).

- **GET /user/userprofile**  
  **Description :** Récupère les informations du profil de l'utilisateur connecté.  
  **Headers :**
  - `Authorization: Bearer <token>`

- **PUT /user/updateprofile**  
  **Description :** Met à jour les informations du profil de l'utilisateur connecté.  
  **Headers :**
  - `Authorization: Bearer <token>`  
  **Payload attendu (JSON) :**
  ```json
  {
    "userName": "nouveauNom",
    "email": "nouveau.email@example.com"
  }
  ```

- **POST /user/resetpassword**  
  **Description :** Lance la procédure de réinitialisation du mot de passe.  
  **Headers :**
  - `Authorization: Bearer <token>`  
  **Payload attendu (JSON) :** Selon votre implémentation (ex: email ou autres informations)

- **PUT /user/updatepassword**  
  **Description :** Met à jour le mot de passe de l'utilisateur.  
  **Headers :**
  - `Authorization: Bearer <token>`  
  **Payload attendu (JSON) :**
  ```json
  {
    "oldPassword": "ancienMotDePasse",
    "newPassword": "Nouveau@1993"
  }
  ```

- **GET /user/allusers**  
  **Description :** Récupère la liste de tous les utilisateurs (accessible uniquement par les administrateurs).  
  **Headers :**
  - `Authorization: Bearer <token>`

- **GET /user/allclients**  
  **Description :** Récupère la liste de tous les clients (accessible par admin et employer).  
  **Headers :**
  - `Authorization: Bearer <token>`

- **GET /user/allemployers**  
  **Description :** Récupère la liste de tous les employeurs (accessible uniquement par les administrateurs).  
  **Headers :**
  - `Authorization: Bearer <token>`

- **PUT /user/updateuser/:id**  
  **Description :** Met à jour les informations d'un utilisateur (accessible par admin et employer).  
  **Headers :**
  - `Authorization: Bearer <token>`  
  **Payload attendu (JSON) :** Selon les champs modifiables, par exemple :
  ```json
  {
    "userName": "nouveauNom",
    "email": "nouveau.email@example.com"
  }
  ```

- **POST /user/logoutuser/:id**  
  **Description :** Déconnecte un utilisateur spécifique (accessible par admin et employer).  
  **Headers :**
  - `Authorization: Bearer <token>`

---

### Routes de jeu

Ces routes permettent aux utilisateurs de jouer et d'enregistrer leurs parties.

- **POST /recordGame/playGame**  
  **Description :** Enregistre une partie jouée par un client.  
  **Headers :**
  - `Authorization: Bearer <token>`  
  **Payload attendu (JSON) :**
  ```json

  {
    "ticketNumber": "3T-XEMVMF3"
}
  ```


```
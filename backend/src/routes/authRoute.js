const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const { registerUserController, loginUserController, logoutController} = require("../controllers/authController");


//register user
router.post('/register', registerUserController);

//login user
router.post('/login', loginUserController); 

//logout user
router.post('/logout', authMiddleware, logoutController);

module.exports = router;
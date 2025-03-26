const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const { userTypeMiddleware } = require("../middlewares/userTypeMiddleware");
const { recordGameController , grandTirageController} = require("../controllers/gameController");


//register user
router.post('/play', authMiddleware,userTypeMiddleware("client"), recordGameController);

// grand tirage
router.post('/big-game', authMiddleware,userTypeMiddleware("admin"), grandTirageController);



module.exports = router;
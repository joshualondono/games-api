const express = require('express');
//create a router
const router = express.Router();
//games array
const games = require('../models/gamesArray');
const { getAllGames, getSingleGame, createGame, updateGame, deleteGame } = require('../controller/appController')

router.get('/all-games', getAllGames);
router.get('/single-game/:id', getSingleGame);
router.post('/create-game', createGame);
router.put('/update-game/:id', updateGame);
router.delete('/delete-game/:id', deleteGame);

module.exports = router;

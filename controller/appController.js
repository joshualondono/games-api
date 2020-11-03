let games = require('../models/gamesArray');

module.exports = {
    getAllGames: (req, res) => {
        return res.status(200).json({ confirmation: 'success', games });
      },

    getSingleGame: (req, res) => {
        let foundGame = games.filter((game) => {
          if (game.id === req.params.id) {
            return res.status(200).json({ confirmation: 'success', game });
          }
        });
        if (!foundGame.length)
          return res
            .status(400)
            .json({ confirmation: 'fail', message: 'Game Does Not Exist' });
      }, 

    createGame: (req, res) => {
        //validate inputs
        if (!req.body.name || !req.body.email || !req.body.password) {
          return res
            .status(400)
            .json({ confirmation: 'fail', message: 'All Inputs Must Be filled' });
        }
      
        //check if game exists
        let existingGame = games.filter(
          (foundGame) => foundGame.email === req.body.email
        );
        if (existingGame.length) {
          return res.status(400).send('Game Already Exists');
        }
      
        //create a new game object
        const newGame = {};
      
        //values for newGame based on req.body inputs in postman
        newGame.name = req.body.name;
        newGame.description = req.body.email;
        newGame.yearReleased = req.body.password;
        newGame.playtime = req.body.password;
        newGame.id = String(games.length + 1);
        // add game to array
        games.push(newGame);
        //return the new game
        return res.status(200).json({ confirmation: 'sucess', newGame });
      },

    updateGame: (req, res) => {
        //grab the inputted information
        let updatedGame = req.body;
      
        //search the games array
        games.filter((foundGame) => {
          //find the game
          if (foundGame.id === req.params.id) {
            //change values for game if inputted
            foundGame.name = updatedGame.name ? updatedGame.name : foundGame.name;
            foundGame.description = updatedGame.description ? updatedGame.description : foundGame.description;
            foundGame.playtime = updatedGame.playtime ? updatedGame.playtime : foundGame.playtime;
            foundGame.yearReleased = updatedGame.yearReleased ? updatedGame.yearReleased : foundGame.yearReleased;
      
          }
        });
        //return array of games
        return res.status(200).json({ message: 'Game Updates', games });
      },
    deleteGame: (req, res) => {
        //filter game based on id parameter in address
        let removeGame = games.filter((foundGame) => {
          return foundGame.id !== req.params.id;
        });
        //mutate games array and replace with removeGame array
        games = removeGame;
        //return results
        return res.status(200).json({ confirmation: 'success', games });
      }
    }
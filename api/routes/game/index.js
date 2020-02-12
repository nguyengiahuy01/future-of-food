const express = require('express');
const router = express.Router();
//
const joinGame = require('./joinGame')
const questions = require('./questions')
module.exports = (config, models) => {
  // Router for Player
  router.post('/join-game', async (req, res) => {
    await joinGame(req, res, models)
  })
  router.patch('/questions', async (req, res) => {
    await questions(req, res, models)
  })
  return router
}

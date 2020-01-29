const express = require('express');
const router = express.Router();
//
const joinGame = require('./joinGame')
const myself = require('./myself')
module.exports = (config, models) => {
  // Router for Player
  router.post('/join-game', async (req, res) => {
    await joinGame(req, res, models)
  })
  router.patch('/myself', async (req, res) => {
    await myself(req, res, models)
  })

  return router
}

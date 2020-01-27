const express = require('express');
const router = express.Router();
//
const joinGame = require('./joinGame')
const myself = require('./myself')
// Routes for System
const create = require('./sys-create')
module.exports = (config, models) => {
  // Router for Player
  router.post('/join-game', async (req, res) => {
    await joinGame(req, res, models)
  })
  router.patch('/myself', async (req, res) => {
    await myself(req, res, models)
  })
  // Router for system
  // Create
  router.post('/create-role', async (req, res) => {
    await create.role(req, res, models)
  })

  return router
}

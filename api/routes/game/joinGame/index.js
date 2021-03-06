const bcrypt = require('bcryptjs')
const checkEmptyBoard = require('./checkEmptyBoard')
async function main (req, res, models) {
  try {
    const name = req.body.name
    const time = new Date().toLocaleString()
    const id = await bcrypt.hash(name + time, 5)// 5 -> config.security.saltRounds
    const boardId = await checkEmptyBoard(models) // Check empty board
    // Create new Player
    await models.game.player.create({
      id,
      name,
      ready: false,
      online: true,
      onGame: true,
      joinBoard: false,
      boardId
    })
    res.end(JSON.stringify({ id }))
  } catch (error) {
    res.status(400).end()
  }
}
module.exports = main

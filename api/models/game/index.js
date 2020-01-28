const board = require('./board')
const player = require('./players')
player.belongsTo(board, {
  as: 'board',
  foreignKey: 'boardId'
})
module.exports = {
  board,
  player
}

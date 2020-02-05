const board = require('./board')
const player = require('./players')
const question = require('./questions')
player.belongsTo(board, {
  as: 'board',
  foreignKey: 'boardId'
})
question.belongsTo(board, {
  as: 'board',
  foreignKey: 'boardId'
})
module.exports = {
  board,
  player,
  question
}

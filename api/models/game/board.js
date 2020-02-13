const Sequelize = require('sequelize')
const config = require('../../config/')
const sequelize = config.db.sequelize
//
const board = sequelize.define(`board`, {
    playersTotal: Sequelize.INTEGER,
    start: Sequelize.BOOLEAN,
    round: Sequelize.INTEGER, // round 1, 2, 3, 4
    closed: Sequelize.BOOLEAN
}/* , {
    schema: 'game'
} */)
module.exports = board

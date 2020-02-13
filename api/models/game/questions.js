const Sequelize = require('sequelize')
const config = require('../../config/')
const sequelize = config.db.sequelize
//
module.exports = sequelize.define(`question`, {
    questionid: Sequelize.INTEGER,
    positiv: Sequelize.INTEGER,
    neutral: Sequelize.INTEGER,
    negativ: Sequelize.INTEGER,
    group: Sequelize.INTEGER, // Thema of question
    gefragt: Sequelize.BOOLEAN
}/* , {
    schema: 'game'
} */)
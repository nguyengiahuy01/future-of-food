const Sequelize = require('sequelize')
const config = require('../../config/')
const sequelize = config.db.sequelize
//
const favorite = sequelize.define(`favorite`, {
    abkz: Sequelize.STRING(100),
    address: { type: Sequelize.STRING(225) },
    description: Sequelize.STRING(225),
    content: Sequelize.TEXT
})
module.exports = favorite
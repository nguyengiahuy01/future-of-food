const Sequelize = require('sequelize')
const config = require('../../config/')
const sequelize = config.db.sequelize
//
const personal = sequelize.define(`users`, {
    name: { type: Sequelize.STRING(225) },
    email: { type: Sequelize.STRING(225), unique: true },
    password: Sequelize.STRING(225)
})
module.exports = personal
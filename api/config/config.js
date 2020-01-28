require('dotenv').config() // Dòng lệnh này để chạy .env
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  logging: process.env.DB_LOGGING ? console.log : false,
  dialectOptions: {
    charset: 'utf8'
  }
})
module.exports = {
  // Config of Database
  db: {
    sequelize
  },
  security: {
    saltRounds: 12,
    secretKey: 'maivinamCom'
  }
}
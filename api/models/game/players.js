const Sequelize = require('sequelize')
const config = require('../../config/')
const sequelize = config.db.sequelize
//
const player = sequelize.define(`player`, {
    id: {
      type: Sequelize.STRING(255),
      primaryKey: true
    },
    name: Sequelize.STRING(255),
    ready: Sequelize.BOOLEAN,
    online: Sequelize.BOOLEAN, // Ob der Nutzer noch bleibt
    onGame: Sequelize.BOOLEAN, // Ob der Nutzer noch nicht gewählt wird
    joinBoard: Sequelize.BOOLEAN // Player is waiting or has joined board ?
}, {
    schema: 'game'
})  
module.exports = player

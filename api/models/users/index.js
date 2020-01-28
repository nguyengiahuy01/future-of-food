const personal = require('./personal')
const favorite = require('./favorite')
/*
personal.findOne( include: [{ model: favorite }] )
*/
personal.hasMany(favorite)
favorite.belongsTo(personal)
module.exports = {
  personal,
  favorite
}
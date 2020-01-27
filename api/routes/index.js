const express = require('express');
const router = express.Router();

// Route nay chi duoc su dung cho viec test
module.exports = (config, models) => {
  router.post('/', async (req, res, next) => {
    console.log(req.headers)
    console.log(req.get('content-type'))
    return res.status(200).end()
  })
  router.post('/define', async (req, res, next) => {
    try {
      // await models.users.personal
      // await models.users.favorite
      config.db.sequelize.sync()
      return res.status(200).end()
    } catch (error) {
      return res.status(400)
    }
  })
  return router
}
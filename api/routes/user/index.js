const express = require('express');
const router = express.Router();
const _models = require('../../models/')
const _create = require('./create')
const _config = require('../../config/')
//
router.post('/sign-up', async (req, res, next) => {
  await _create.newUser(req, res, _models, _config)
})
router.post('/email', async (req, res, next) => {
  await _create.checkUserEmail(req, res, _models, _config)
})
router.post('/test', async (req, res) => {
  const response = await _models.users.personal.findOne({
    where: {
      id: 1
    },
    include: [{ model: _models.users.favorite }],
    raw: true
  })
  res.status(200).end()
})
module.exports = router;

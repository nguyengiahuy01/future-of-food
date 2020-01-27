const express = require('express');
const router = express.Router();
const brain = require('brain.js')
const docNatural = require('./natural')
const sequelizeStream = require('sequelize-stream')

module.exports = (models, config) => {
  // Retrieve __________________________________
  router.post('/redict', function (req, res) {
    const data = req.body.input
    const net = new brain.NeuralNetwork({ hiddenLayers: [8] })
    const trainData = [
     { input: { r: 1 }, output: { black: 1 } },
     { input: { r: 2 }, output: { black: 1 } },
     { input: { r: 3 }, output: { black: 1 } },
     { input: { r: 5 }, output: { white: 1 } },
     { input: { r: 6 }, output: { white: 1 } }
    ]
    net.train(trainData)
    const output = net.run(data)
    res.end(JSON.stringify(output))
  })
  router.post('/natural', function (req, res) {
    const natural = require('natural');
    const source = 'The RainCoat BookStore';
    const target = 'All the best books are here at the Rain Coats Book Store';
    console.log(natural.LevenshteinDistance(source, target, {search: true}));
    res.status(200).end()
  })
  // Documentation Natural
  router.post('/jaro-winkler', function (req, res) {
    docNatural.jaroWinkler(req, res)
  })
  router.post('/bayes', function (req, res) {
    docNatural.bayes(req, res)
  })
  router.post('/stream', function (req, res) {
    const sequelize = config.db.sequelize
    const stream = sequelizeStream(sequelize)
    stream.on('data', ({instance, event}) => console.log(event, instance.toJSON()))
    console.log(models.users.personal)
    res.status(200).end()
  })
  return router
}
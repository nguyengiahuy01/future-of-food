const natural = require('natural')
function jaroWinkler(req, res) {
  const inputA = req.body.inputA
  const inputB = req.body.inputB
  const output = natural.JaroWinklerDistance(inputA, inputB)
  return res.end(JSON.stringify(output))
}
module.exports = jaroWinkler
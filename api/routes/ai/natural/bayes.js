const natural = require('natural')
function bayes (req,res) {
  const classifier = new natural.BayesClassifier();
  classifier.addDocument('i am long qqqq', 'buy');
  classifier.addDocument('buy the q\'s', 'buy');
  classifier.addDocument('short gold', 'sell');
  classifier.addDocument('sell gold', 'sell');
  classifier.train();
  const output = classifier.classify('i am long copper')
  return res.end(JSON.stringify(output))
}
module.exports = bayes

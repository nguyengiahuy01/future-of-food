const Fragen = require('../../database/questions')
const Themen = require('../../database/themen')
module.exports = async function (req, res, models) {
  try {
    const boardId = req.body.boardId
    const questions = await models.game.question.findAll({
      where: { boardId },
      raw: true
    })
    // Add content
    for (const question of questions) {
      const index = Fragen.findIndex(x => x.id === question.questionid)
      Fragen[index]['thema'] = Themen[Fragen[index].group]
      question['value'] = Fragen[index]
    }
    res.end(JSON.stringify(questions))
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
}
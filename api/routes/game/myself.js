async function myself (req, res, models) {
  try {
    const boardId = req.body.boardId
    const response = await models.game.questions.findAll({
      where: { boardId },
      raw: true
    })
    res.end(JSON.stringify(response))
  } catch (error) {
    res.status(400).end()
  }
}
module.exports = myself

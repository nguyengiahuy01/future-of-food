async function myself (req, res, models) {
  try {
    const id = req.body.id
    const response = await models.game.player.findOne({
      where: { id },
      raw: true
    })
    res.end(JSON.stringify(response))
  } catch (error) {
    res.status(400).end()
  }
}
module.exports = myself

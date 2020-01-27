async function role (req, res, models) {
  const name = req.body.name
  const description = req.body.description
  await models.game.role.create({
    name, description
  })
  res.status(200).end()
}
module.exports = role

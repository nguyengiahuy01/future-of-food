module.exports = async function inRoom (socket, models, playerId, boardId) {
  // Update that Player is ready
  await models.game.player.update(
    { ready: true },
    { where: { id: playerId }}
  )
  const ready = await models.game.player.findAll({
    where: {
      ready: true,
      boardId
    },
    raw: true
  })
  const readyNumber = ready.length
  if (readyNumber === 5) {
    socket.emit(`next`)
    socket.broadcast.emit(`next`)
    await models.game.player.update(
      { ready: false },
      { where: { boardId }}
    )
  } else {
    socket.emit(`ready`, readyNumber)
    socket.broadcast.emit(`ready`, readyNumber)
  }
}
  
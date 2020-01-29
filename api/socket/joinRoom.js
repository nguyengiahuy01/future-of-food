module.exports = async function joinRoom (socket, models, id) {
  // When someone come into game, he bringt id
  // 1. Get Player 's Information
  const player = await models.game.player.findOne({
    where: { id },
    raw: true
  })
  const boardId = player.boardId
  // 2. Find All Players in his Board
  const players = await models.game.player.findAll({
    where: { boardId },
    attributes: ['name', 'id'],
    raw: true
  })
  socket.emit('join-room/update-myself', players) // Phai dat ten de tranh nham lan voi in-game
  socket.broadcast.emit('join-room/update-friend', players)
  // 3. When All Player are there
  if (players.length === 5) {
    for (const player of players) {
      // Give Players roles, and set onGame to true
      await models.game.player.update(
        { onGame: true },
        { where: { boardId, id: player.id }}
      )
    }
    socket.emit('join-room/ready', boardId)
    socket.broadcast.emit('join-room/ready', boardId)
  }
}
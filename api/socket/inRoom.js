async function inRoom (socket, models, id) {
  // 1. Get Players information, to know in which board is he
  const player = await models.game.player.findOne({
    where: { id },
    raw: true
  })
  const boardId = player.boardId
  // 2. Check if board was closed
  const board = await models.game.board.findOne({
    where: { id: boardId },
    raw: true
  })
  // 3. If board was closed
  if (board.closed) {
    socket.emit('go-home')
    socket.broadcast.emit('go-home')
  } else {
  // 4. If not
    const players = await models.game.player.findAll({
        where: { boardId },
        attributes: ['name', 'id'],
        raw: true
    })
    socket.emit(`in-room/${boardId}/self`, players)
    socket.broadcast.emit(`in-room/${boardId}/friend`, players)
  }
}
module.exports = inRoom

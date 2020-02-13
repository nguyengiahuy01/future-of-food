module.exports = async function (socket, models, boardId) {
    // Update that Player is ready
    const round = (await models.game.board.findOne({
      where: { boardId },
      raw: true
    })).round
    await models.game.board.update(
      { round },
      { where: { boardId }}
    )
    socket.emit(`add-new-round`, round)
    socket.broadcast.emit(`add-new-round`, round)
  }

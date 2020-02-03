async function checkEmptyBoard (models) {
  const model = models.game.board
  const checkEmptyBoard = await model.findOne({
    where: {
      start: false // Just find board, die noch nicht gestartet hat
    }, raw: true
  })
  if (checkEmptyBoard === null) {
    // If there 's no empty board (start = false), create new board
    const response = await model.create({
      playersTotal: 1,
      start: false,
      round: 0,
      closed: false
    })
    return response.id
  } else {
    // If there 's an empty board
    const id = checkEmptyBoard.id
    let start = false // Default value
    const playersTotal = checkEmptyBoard.playersTotal + 1 // Add new value into summe
    if (playersTotal === 5) {
      // If there 're enough players, ser value start = true
      start = true
    }
    // Update Total PlayersTotal, set start
    await model.update(
      { playersTotal, start },
      { where: {
        id
      }}
    )
    return id
  }
  // Return boardId to send User into Board
}
module.exports = checkEmptyBoard

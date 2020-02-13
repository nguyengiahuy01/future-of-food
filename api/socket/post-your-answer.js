module.exports = async function (socket, models, data) {
    const answer = data.answer
    const where = {
      boardId: data.boardId,
      questionid: data.questionid
    }
    const question = (await models.game.question.findOne({
      where,
      raw: true
    }))
    if (answer === 1) {
      const neutral = question.neutral + 1
      await models.game.question.update( { neutral }, { where } )
    } else if (answer === 2) {
      const positiv = question.positiv + 1
      await models.game.question.update( { positiv }, { where } )
    } else {
      const negativ = question.negativ + 1
      await models.game.question.update( { negativ }, { where } )
    }
    const result = (await models.game.question.findOne({
        where,
        raw: true
    }))
    console.log(result)
    socket.emit(`see-answer`, result)
    socket.broadcast.emit(`see-answer`, result)
}

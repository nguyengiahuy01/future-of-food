const joinRoom = require('./joinRoom')
const inRoom = require('./inRoom')
const confirm = require('./confirm')
const postYourAnswer = require('./post-your-answer')
//
const socket = function (io, models) {
  io.on('connection', (socket) => {
    socket.on('join-room', id => {
      joinRoom(socket, models, id)
    })
    socket.on('in-room', id => {
      inRoom(socket, models, id)
    })
    socket.on('confirm', (playerId, boardId) => {
      confirm(socket, models, playerId, boardId)
    })
    socket.on('add-new-round', (boardId) => {
      addNewRound(socket, models, boardId)
    })
    socket.on('post-your-answer', (data) => {
      postYourAnswer(socket, models, data)
    })
  })
}
module.exports = socket

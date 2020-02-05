const joinRoom = require('./joinRoom')
const inRoom = require('./inRoom')
const confirm = require('./confirm')
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
  })
}
module.exports = socket

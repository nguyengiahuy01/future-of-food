const joinRoom = require('./joinRoom')
const inRoom = require('./inRoom')
const socket = function (io, models) {
  io.on('connection', (socket) => {
    socket.on('join-room', id => {
      joinRoom(socket, models, id)
    })
    socket.on('in-room', id => {
      inRoom(socket, models, id)
    })
  })
}
module.exports = socket

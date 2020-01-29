// Maivinam backends
const PORT = process.env.PORT || 8085;
const express = require('express');
const app = express();
const http = require('http');
// Express middleware
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
//
const createError = require('http-errors');
const server = http.Server(app);
const io = require('socket.io')(server);
// Customize modules _____________________________
const config = require('./config')
const models = require('./models')
const socket = require('./socket/')
// 
app.use(express.static('client')); // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // parse application/json
app.use(bodyParser.json());
app.use(cors())
app.use(cookieParser())
// app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
// Middleware _____________________________________
config.db.sequelize.sync()
// refresh, tạo ra tables for models mà ko phải sử dụng await
// ________________________________________________

// Public requests_________________________________
app.use('/game', require('./routes/game/')(config, models))
app.use('/user', require('./routes/user/'))
app.use('/', require('./routes/')(config, models))
// Authorization __________________________________

// Step for Authorization
app.use(require('./routes/auth')(config, models))

// catch 404 and forward to error handler__________
app.use(function(req, res, next) {
  next(createError(404));
});
// Socket
socket(io, models)
//
server.listen(PORT, function() {
  console.log(`Server running on Port ${PORT}`);
});

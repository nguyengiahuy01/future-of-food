const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
module.exports = (config, models) => {
    // _________________________________________________________
    // 1.
    // Verify authorization
    router.post('/api/token', async (req, res) => {
      const email = req.body.email
      const password = req.body.password
      const model = await models.users.personal
      const response = await model.findOne({ where: { email }, raw: true })
      // a. Không tìm thấy Email trong Database, break
      if (response == null) { return res.status(400).end() }
      // b. So sách mật khẩu, và hồi đáp Token
      const hashPass = response.password
      const id = response.id
      await bcrypt.compare(password, hashPass, function(err, result) {
        if (result) {
          const accessToken = jwt.sign({ user: { email, password, id } },
                                         config.security.secretKey,
                                         { expiresIn: 60 * 60 * 24 })
          return res.end(JSON.stringify({ accessToken }))
        } else {
          return res.status(400).end()
        }
      })
    })
    // _________________________________________________________
    // 2.
    // Tất cả mọi request phải qua cái này, xác nhận là đúng người sử dụng, mới cho thực hiện Request
    router.all('*', async (req, res, next) => {
      try {
        const authorization = req.get('authorization')
        const authorizationTokens = authorization.split(' ')
        const token = authorizationTokens[1]
        const decodedToken = await jwt.verify(token, config.security.secretKey)
        req.user = decodedToken.user.id
        return next()
      } catch (error) {
        res.status(400).end()
      }
    })
    // _________________________________________________________
    return router
  }
  
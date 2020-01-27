const bcrypt = require('bcryptjs')
async function newUser (req, res, models, config) {
  try {
    const model = models.users.personal
    const email = req.body.email
    const password = await bcrypt.hash(req.body.password, config.security.saltRounds)
    // 1. Tạo dữ liệu.
    // Chú thích: Vì trong model đã xác nhận email không được trùng lập
    // Nên nếu trùng lập, request sẽ tự động trả về status 400 cho frontend
    await model.create({
      email, password
    })
    return res.status(200).end()
  } catch (error) {
    return res.status(400).end()
  }
}
async function checkUserEmail (req, res, models) {
  const email = req.body.email
  // 1. Kiểm tra trong database Email đã có chưa
  const model = await models.users.personal
  const existEmail = await model.findOne({
    where: {
      email
    }
  })
  if (existEmail == null ){
    return res.status(200).end()
  } else {
    return res.status(500).end('All')
  }
}
module.exports = {
  newUser,
  checkUserEmail
};

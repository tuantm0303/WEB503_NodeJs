import User from "../models/user";

export const signup = async (req, res) => {
  const { email } = req.body
  try {
    const exitUser = await User.findOne({ email }).exec()
    if (exitUser) {
      res.status(400).json({
        message: "Email đã tồn tại"
      })
    }
    const user = await new User(req.body).save()
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi anh êi"
    })
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email }).exec()
    if (!user) {
      res.status(400).json({
        message: "Email không tồn tại"
      })
    }
    if (!user.authenticate(password)) {
      res.status(400).json({
        message: "Sai mật khẩu"
      })
    }
    res.json({
      user: {
        _id: user._id,
        email: user.email,
        name: user.name
      }
    })
  } catch (error) {
    res.status(400).json({
      message: "Lỗi rồi anh êi"
    })
  }
}

// export const signout = (req, res) => {
//   res.clearCookie('token');
//   res.json({
//     message: "Signout Successfully"
//   })
// }
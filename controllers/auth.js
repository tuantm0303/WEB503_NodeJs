import User from "../models/user";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const exitUser = await User.findOne({ email }).exec()
    if (exitUser) {
      res.status(400).json({
        message: "Email đã tồn tại"
      })
    }
    const user = await new User({ name, email, password }).save()
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

    const token = jwt.sign({ _id: user._id }, '123456', { expiresIn: '1h' })

    res.json({
      token,
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

export const list = async (req, res) => {
  try {
    const user = await User.find({}).exec()
    res.json(user)
  } catch (error) {
    res.status(400).json({
      message: "Không có người dùng nào"
    })
  }
}

export const remove = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id }).exec()
    res.json(user)
  } catch (error) {
    res.status(400).json({
      message: "Không xóa được!"
    })
  }
}

export const signout = (req, res) => {
  res.clearCookie('token');
  // localStorage.removeItem(data)
  res.json({
    message: "Signout Successfully"
  })
}
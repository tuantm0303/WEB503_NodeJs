import User from '../models/user';
// import expressJwt from 'express-jwt';

export const signup = async (req, res) => {
  const { email, name, password } = req.body
  try {
    const existUser = await User.findOne({ email }).exec()
    if (existUser) {
      res.status(400).json({
        message: "Email đã tồn tại"
      })
    }
    const user = await new User({ name, email, password }).save()
    res.json({
      user: {
        _id: user._id,
        email: user.email,
        name: user.name
      }
    })
  } catch (error) {
    res.status(400).json({
      message: "Lỗi"
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

  }
}

// export const signout = (req, res) => {
//   res.clearCookie('token');
//   res.json({
//     message: "Signout Successfully"
//   })
// }

// export const requireSignin = expressJwt({ // decode
//   // Mã bảo mật
//   secret: '123456',
//   // Thuật toán để decode token
//   algorithms: ["HS256"],
//   // Sau khi decode xong thì tạo ra 1 thuộc tính req.auth và gán thông tin decode
//   userProperty: "auth" // req.auth
// });
// export const isAuth = (req, res, next) => {
//   // Kiểm tra điều kiện trả về true hoặc false
//   let user = req.profile && req.auth && req.profile._id == req.auth._id;

//   // Nếu false ( không phải thành viên hệ thống)
//   if (!user) {
//     res.json({
//       msg: "Access Denined"
//     })
//   }
//   next();
// }
// export const isAdmin = (req, res, next) => {
//   console.log(req.profile.role);
//   // nếu role == 0 ( nghĩa là quyền là member thì thông báo)
//   if (req.profile.role === 0) {
//     return res.status(403).json({
//       msg: "Bạn không có quyền truy cập"
//     })
//   }
//   next();
// }
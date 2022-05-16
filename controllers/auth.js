import User from "../models/user";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exitUser = await User.findOne({ email }).exec();
    if (exitUser) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const user = await new User({ name, email, password }).save();
    return res.status(200).json({
      message: "Đăng kí thành công!",
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi anh êi",
    });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        message: "Sai mật khẩu",
      });
    }

    const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: "1h" });

    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Lỗi rồi anh êi",
    });
  }
};

export const list = async (req, res) => {
  try {
    const user = await User.find({}).exec();
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: "Không có người dùng nào",
    });
  }
};

export const read = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).exec();
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      error: "Không có người dùng",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id }).exec();
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được!",
    });
  }
};

export const update = async (req, res) => {
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const user = await User.findOneAndUpdate(condition, doc, option);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được!",
    });
  }
};

export const signout = (req, res) => {
  res.clearCookie("token");
  res.status(400).json({
    message: "Signout Successfully",
  });
};

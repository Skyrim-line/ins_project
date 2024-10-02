const User = require("../models/User");
const jwt = require("jsonwebtoken"); // 生成token加密密码
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      userID: username,
    });
    console.log("user", user);
    await user.save();
    res
      .status(201)
      .json({ message: "User created successfully", userID: username });
    // console.log(req.body);
    // res.send(req.body); // 返回请求的数据给postman
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 登陆模块
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password); // 比较密码是否正确
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // 如果密码正确，生成token
    const token = jwt.sign({ userID: user._id }, "secretKey");
    return res.status(200).json({ token, userID: username });
  } catch (error) {
    console.log("Error log in", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };

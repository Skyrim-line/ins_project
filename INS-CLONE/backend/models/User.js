const mongoose = require("mongoose");
// 创建数据库的模型
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  userID: {
    type: String,
    required: true,
    unique: true,
  },
});

// static method to find a user by username
UserSchema.statics.findByUsername = async function (username) {
  return this.findOne({ username });
};

const User = mongoose.model("User", UserSchema); // 创建集合对象

module.exports = User;

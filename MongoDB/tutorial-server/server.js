// 连接mongodb数据库
// 使用postman测试接口
const mongoose = require("mongoose");
const db =
  "mongodb+srv://Skyrim:Skyandhang1314@cluster0.l3r7w.mongodb.net/mongoDB-tutorial";
const express = require("express");

const app = express();
const PORT = 3004;
const bodyParser = require("body-parser");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB connection failed");
    console.log(err);
    process.exit(1);
  }
};

connectDB();

app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", UserSchema);

// TODO: 添加检查字段的中间件，确保只传递正确的Schema字段
app.post("/users", async (req, res) => {
  try {
    const users = new User(req.body);
    await users.save();
    res.status(201).send(users);
  } catch (err) {
    res.status(500).send(err); // 500 服务器错误
  }
});

// TODO: 获取所有用户
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err); // 500 服务器内部错误
  }
});

// TODO: get 获取指定用户id,并检查当前用户是否存在
app.get("/users/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id); //req.params.id是url中的参数
    if (!users) {
      return res.status(404).send("User not found"); // 没找到用户返回404
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

//TODO: 用Put 更新用户具体信息,在postman中使用put方法,body里填写需要改变的信息
app.put("/users/:id", async (req, res) => {
  const userID = req.params.id;
  try {
    const users = await User.findByIdAndUpdate(userID, req.body, {
      new: true,
    });
    if (!users) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(users); // 如果成果找到返回200 OK
  } catch (err) {
    res.status(500).send(err);
  }
});

// TODO: 删除用户
app.delete("/users/:id", async (req, res) => {
  const userID = req.params.id;
  try {
    const users = await User.findByIdAndDelete(userID);
    if (!users) {
      return res.status(404).send("User not found");
    }
    res.status(200).send({ message: "User deleted successfully", users });
  } catch (err) {
    res.status(500).send(err);
  }
});

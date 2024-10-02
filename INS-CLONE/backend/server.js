const express = require("express");
const authRoutes = require("./routes/autoRoutes");
const connectDB = require("./config/db");
const cors = require("cors");

//create a web server
const app = express();
//connect to the database
connectDB();
app.use(cors());
app.use(express.json()); // 解析请求体中的json格式数据
app.use("/api/auth", authRoutes); // 注册路由

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:" + PORT);
});

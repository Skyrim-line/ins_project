// 此文件创建一个路由对象
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser); // 注册路由
router.post("/login", loginUser); // 登录路由

module.exports = router; // 导出路由对象

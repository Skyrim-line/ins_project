//npm init
//npm i express
//npm i nodemon -D
const express = require('express');//导入express模块
const cors=require('cors');//导入cors模块
const app = express();
const port = 4000;  


app.use(cors()); // Enable CORS for all requests 跨域问题得在API路由之前配置好解决
app.use(express.json()); // Middleware to parse JSON bodies


// 下面是一个简单的后端login查询示例
const users = [
    { name: "John", ps: "12345" },
    { name: "Alice", ps: "123" },
    { name: "Bob", ps: "456" }
    // 可以继续添加更多用户
];

app.post("/login", (req, res) => {
    const { name, ps } = req.body;
    
    // 使用 find 方法来查找匹配的用户
    const user = users.find(u => u.name === name && u.ps === ps);

    if (user) {
        res.status(200).json({
            msg: `${name} Login success`,
        });
        console.log(`${name} Login success`); // 在后端控制台输出登录成功的消息
    } else {
        res.status(400).json({
            msg: 'Username or password is wrong',
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//npm init
//npm i express
//npm i nodemon -D


const express = require('express');//导入express模块
const app = express();
const port = 4000;  

app.use(express.json()); // Middleware to parse JSON bodies

// 下面是一个简单的后端login查询示例
const user = { name: "John", ps: "12345" };
app.post("/login", (req, res) => {
    const { name, ps } = req.body;
    if (name === user.name && ps === user.ps) {
        res.status(200).json({
            msg: `${name} Login success`,
        });
    } else {
        res.status(400).json({
            msg: 'Username or password is wrong',
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
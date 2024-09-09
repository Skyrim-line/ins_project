//npm init
//npm i express
//npm i nodemon -D


const express = require('express');//导入express模块
const app = express();
const port = 3000;

//监听客户端get请求
//http://localhost:3000/user
app.get('/user', (req, res) => {
    res.send('Hello this step is to listen to the get request from the client');
 });

app.post('/user', (req, res) => {
    res.send('This is post api response');
 });

app.get('/', (req, res) => {
    //使用req.query方法来查询参数
    const { name, age } = req.query;
    console.log(name, age);
    res.send(req.query);
});

// req.params实现动态匹配名字和年龄
// 使用方法：http://localhost:3000/user/John/25
app.get('/user/:name/:age', (req, res) => {
    const { name, age } = req.params;
    console.log(name, age);
    res.send(req.params);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
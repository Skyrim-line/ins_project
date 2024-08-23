//npm init
//npm install express
//npm i nodemon -D

// 导入express模块
const express = require('express');
const path = require('path');//获取根目录的路径
// 创建web服务器
const app = express();
//define the path to the public folder
const publicPath = path.join(__dirname, "public");
// console.log("_dirname", __dirname);
// console.log("publicPath", publicPath);
app.use(express.static(publicPath)); //会自动找到public文件夹下的index.html文件然后返回给浏览器
//自定义url尝试
//http://localhost:8080/static-files/index.html
app.use('/static-files', express.static(publicPath, { index: false }));//如果没加html则不会访问
//http://localhost:8080/images/
app.use('/images', express.static(publicPath));

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

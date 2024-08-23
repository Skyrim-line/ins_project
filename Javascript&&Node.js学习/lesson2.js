const { HttpRequest, SecretsManager } = require("aws-sdk");
//create a web server
const { Console } = require("console");
const http = require("http");
const server = http.createServer();

//同一个url返回不同的内容

server.on("request", (req, res) => {
    console.log("someone is visiting the server");
    const url = req.url;
    const method = req.method;
    const str = `url is ${url} and request method is ${method}`;
    res.end(str);
});

//根据不同的url返回不同的内容,在浏览器显示
server.on("request", (req, res) => {
    const url = req.url;
    let content = '<h1>404 not found</h1>';
    if (url === "/" || url === "/home") {
        content = "<h1>Welcome to the home page</h1>";
    } else if (url === "/about") {
        content = "<h1>Welcome to the about page</h1>";
    }
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end(content);
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log("Server is running on http://localhost:8080");
});

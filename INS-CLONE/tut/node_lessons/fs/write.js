const fs = require('fs');

// 参数顺序为：文件路径，写入的数据，编码格式（如果是字符串的话可以是 'utf8'），回调函数
fs.writeFile("./file/2.txt", "Hello World", "utf8", (err)=>{
    if (err) {
        // 如果有错误，打印错误并做适当处理
        console.error(err);
    } else {
        // 没有错误，打印成功信息
        console.log("File written successfully");
    }
});
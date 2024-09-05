require('./test5.js'); // 导入test5.js文件



let text = "We are learning export modules from test2.js";
console.log(text);
module.exports = text;
console.log("my fruits", global.myFruits);
console.log("appliences list:", global.myApp);
## JavaScript Notes



## DOM

（文档对象类型）是针对XML但经过扩展用于HTML的应用程序编程接口（API）。

DOM把整个页面映射为一个多层次节点结构。HTML或者XML页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据。

## BOM

BOM（Browser Object Model，浏览器对象模型）是 JavaScript 与浏览器进行交互的接口。它提供了访问和操作浏览器窗口和文档的对象和方法。BOM 并不是一个标准，但它在所有现代浏览器中都被实现，用于处理浏览器窗口、导航、显示内容等功能。

1. **window 对象**：
   - `window` 是 BOM 的顶级对象，表示浏览器窗口。
   - 它是全局对象，所有的全局变量和函数实际上都是 `window` 对象的属性和方法。
   - 例如：`window.alert("Hello")` 或简写为 `alert("Hello")`。

2. **navigator 对象**：
   - 提供有关浏览器的信息，例如浏览器的名称、版本、操作系统等。
   - 常用属性包括 `navigator.userAgent`（用户代理字符串）和 `navigator.platform`（操作系统平台）。

3. **location 对象**：
   - 允许访问和修改当前页面的 URL 信息。
   - 常用属性和方法包括 `location.href`（获取或设置当前 URL）、`location.reload()`（重新加载当前页面）、`location.assign(url)`（跳转到指定的 URL）。

4. **history 对象**：
   - 提供对浏览器历史记录的访问，允许在用户的浏览历史中前进或后退。
   - 常用方法包括 `history.back()`（后退）、`history.forward()`（前进）、`history.go(n)`（前进或后退 n 步）。

5. **screen 对象**：
   - 提供有关用户屏幕的信息，如屏幕分辨率和颜色深度。
   - 常用属性包括 `screen.width` 和 `screen.height`。

```html
<!DOCTYPE html>
<html>
<head>
    <title>BOM 示例</title>
</head>
<body>
    <button onclick="showLocation()">显示当前URL</button>
    <button onclick="goBack()">后退</button>
    
    <script>
        function showLocation() {
            alert("当前页面的URL是：" + window.location.href);
        }

        function goBack() {
            window.history.back();
        }
    </script>
</body>
</html>
```

在这个示例中，点击“显示当前URL”按钮会弹出一个警告框，显示当前页面的 URL；点击“后退”按钮会让浏览器返回到上一个页面。

你的总结已经很好了，下面我将进一步完善并扩展各个数据类型的内容。

## JS 数据类型

### 原始类型

#### 数值类型（Number）

JavaScript 中只有一种数值类型：`Number`。它既可以表示整数，也可以表示浮点数（小数）。

- **整数（int）**：
  - 在 JavaScript 中，整数没有专门的 `int` 类型，所有的数值都是 `Number` 类型。
  - 例如：`let a = 42;`

- **浮点数（float）**：
  - `Number` 类型也可以表示浮点数。
  - 例如：`let b = 3.14;`

- **双精度（double）**：
  - JavaScript 的数值类型是基于双精度 64 位的 IEEE 754 标准的浮点数。
  - 所以，所有 `Number` 类型的数值都是双精度浮点数。
  - 例如：`let c = 1.7976931348623157E+308;` // 这是 JavaScript 中能表示的最大数值。

#### 字符串类型（String）

- 字符串用单引号 `'`、双引号 `"` 或反引号 `` ` `` 包围。
- 可以用 `+` 进行字符串连接。
- 例如：
  ```javascript
  let str1 = "Hello";
  let str2 = 'World';
  let str3 = `Hello, ${str2}`;  // 模板字符串
  ```

#### 布尔类型（Boolean）

- 布尔类型只有两个值：`true` 和 `false`。
- 通常用于条件判断。
- 例如：
  ```javascript
  let isTrue = true;
  let isFalse = false;
  ```

#### 数组类型（Array）

- 数组是一个有序的数据集合，可以存放多个值。
- 数组的元素可以是任意类型，包括其他数组或对象。
- 数组通过索引（从 0 开始）访问。
- 例如：
  ```javascript
  let arr = [1, 2, 3, "four", true];
  let nestedArr = [[1, 2], [3, 4]];  // 嵌套数组
  console.log(arr[0]);  // 输出：1
  ```

#### 未定义类型（Undefined）

- 如果一个变量被声明但未赋值，那么它的值就是 `undefined`。
- 例如：
  ```javascript
  let x;
  console.log(x);  // 输出：undefined
  ```

#### 空类型（Null）

- `null` 是一个特殊的关键字，表示空值或不存在的对象。
- `null` 与 `undefined` 是不同的，虽然它们都表示“无”或“缺少”某个值。
- 例如：
  ```javascript
  let y = null;
  console.log(y);  // 输出：null
  ```

#### 符号类型（Symbol）

- `Symbol` 是一种原始数据类型，表示独一无二的值。
- 它常用于对象的属性名称，以避免属性冲突。
- 例如：
  ```javascript
  let sym1 = Symbol("description");
  let sym2 = Symbol("description");
  console.log(sym1 === sym2);  // 输出：false
  ```

#### 大整数类型（BigInt）

- `BigInt` 是一种可以表示任意精度整数的数据类型，用于处理超过 `Number` 类型范围的大数。
- 例如：

### 引用类型

#### 对象类型（Object）

- 对象是一组键值对的集合，键是字符串（或符号），值可以是任何类型。

- 对象用于存储各种数据和复杂实体。

- 例如：

  ```javascript
  let person = {
      name: "Alice",
      age: 30,
      isStudent: false,
      hobbies: ["reading", "sports"]
  };
  console.log(person.name);  // 输出：Alice
  console.log(person["age"]);  // 输出：30
  ```

#### 

## 条件语句

```javascript
let age = 20;

if (age < 18) {
    console.log("未成年");
} else if (age >= 18 && age < 65) {
    console.log("成年");
} else {
    console.log("老年人");
}
```

在这个示例中，根据 `age` 的值不同，会输出相应的结果。

## While循环

```javascript
javascript
Copy code
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

在这个示例中，`console.log(i)` 将输出从 `0` 到 `4` 的值，因为循环会在 `i` 变为 `5` 时停止。

## For循环

```javascript
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

在这个示例中，`console.log(i)` 也将输出从 `0` 到 `4` 的值，和 `while` 语句的功能类似，但 `for` 语句的循环控制集中在一行代码里，更加紧凑。



## 箭头函数

箭头函数在 JavaScript 中的 `this` 绑定方式与普通函数有所不同，这是它们的一大特点。理解箭头函数的 `this` 绑定方式对于编写和调试代码非常重要。

### 箭头函数中的 `this`

箭头函数没有自己的 `this`，它会捕获**定义时**所在上下文中的 `this`，即箭头函数的 `this` 值是由**它被定义时**外层非箭头函数的 `this` 决定的，而不是调用时决定的。

**示例：**

```javascript
const obj = {
    name: "Alice",
    regularFunction: function() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
};

obj.regularFunction();  // 输出 "Alice"
obj.arrowFunction();    // 输出 undefined（因为 this 绑定的是全局对象或 undefined，取决于严格模式）
```

在这个示例中，`regularFunction` 中的 `this` 指向调用它的对象 `obj`，所以输出 `"Alice"`。而 `arrowFunction` 的 `this` 是在定义时绑定的，这里绑定到的是全局对象（浏览器中是 `window`），但由于全局对象中没有 `name` 属性，所以输出 `undefined`。

### `this` 在回调函数中的使用

箭头函数特别适合在回调函数中使用，因为它们不改变 `this` 的指向：

**示例：**

```javascript
function Timer() {
    this.seconds = 0;

    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}

const timer = new Timer();
```

在这个例子中，`setInterval` 内的箭头函数继承了 `Timer` 构造函数中的 `this`，所以 `this.seconds` 正确地指向了 `timer` 对象。如果用普通函数来实现，在 `setInterval` 中的 `this` 就会指向 `setInterval` 本身，而不是 `Timer` 对象，需要使用 `bind` 来手动绑定 `this`。

### 总结

- **普通函数**：`this` 取决于调用时的上下文，可以在调用时动态绑定。
- **箭头函数**：`this` 取决于定义时的上下文，不能在调用时改变。适合在回调函数和需要保持上下文 `this` 的地方使用。

箭头函数的 `this` 绑定机制使得代码在某些场景下更容易编写和理解，特别是在需要将 `this` 保持一致时。



## 4 ways to display

JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML`.
- Writing into the HTML output using `document.write()`.
- Writing into an alert box, using `window.alert()`.
- Writing into the browser console, using `console.log()`.

### innerHTML

To access an HTML element, JavaScript can use the `document.getElementById(id)`method. 

The `id` attribute defines the HTML element. The `innerHTML` property defines the HTML content:

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
```

### document.write()

For testing purposes, it is convenient to use `document.write()`:

```html
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<p>Never call document.write after the document has finished loading.
It will overwrite the whole document.</p>

<script>
document.write(5 + 6);// 会直接显示最终结果为：11
</script>

</body>
</html> 
```

### window.alert()

Window.alert()调用之后会弹出一个窗口（和下载文件的时候弹出的窗口类型一致）

```html
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
```

### console.log()

可以用console.log() 的方法来debugging

```html
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
```

## JavaScript Print

Javascript中没有任何的print类似python和C的方法，如果调用了window.print() 则表示的是打印当前页面的内容

```html
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>
```

JavaScript statements are composed of:

**Values, Operators, Expressions, Keywords, and Comments.**

JavaScript uses the keywords `var`, `let` and `const` to **declare** variables. 每个语句要以分号结尾

一般定义变量用 `var` and `let` 

`let` : let用于定义一个变量

```html
<script>
let x;
x = 6;
document.getElementById("demo").innerHTML = x;
</script>
```

## var let const

1. Always declare variables

2. Always use `const` if the value should not be changed

3. Always use `const` if the type should not be changed (Arrays and Objects) 对象为数组和字典的时候使用const 命名常量

4. Only use `let` if you can't use `const`

5. Only use `var` if you MUST support old browsers.

例子：

```javascript
let x = "John" + " " + "Doe";
let x = "5" + 2 + 3;  //output : 523//
//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
```

### const

JavaScript `const` variables must be assigned a value when they are declared: 

`const`在JavaScript中一旦声明就必须要调用

一般用于定义：

- A new Array
- A new Object
- A new Function
- A new RegExp

```javascript
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```





## Dollar Sign $

- $ are valid variable names:
- In the JavaScript library jQuery, for instance, **the main function** `$` is used to select HTML elements. 
- In jQuery `$("p");` means "select all p elements".

```html
<script>
let $$$ = 2;
let $myMoney = 5;
document.getElementById("demo").innerHTML = $$$ + $myMoney;
  //output: 7 //
</script>
```



# Node.js Notes

**ES module（ESM）和 CommonJS module** 

这是两种 JavaScript 模块化的标准和实现方式，它们有一些显著的区别和特点：

## ES module (ESM)

1. **语法**：

   - 使用 `import` 和 `export` 关键字来导入和导出模块。
   - 导入：`import { something } from 'module'`
   - 导出：`export { something }`

2. **异步加载**：

   - 支持异步加载模块，可以动态地导入模块。

   - 示例：

     ```javascript
     import('./module.js').then(module => {
       // 使用 module
     }).catch(error => {
       // 处理错误
     });
     ```

3. **静态解析**：

   - 模块的依赖关系在编译时静态解析，有利于工具进行静态分析和优化。

4. **作用域**：

   - 模块的作用域是静态的，模块内部的变量不会暴露到全局作用域。

5. **浏览器兼容性**：

   - 现代浏览器和 Node.js 12+ 支持 ES module。

6. **默认导出**：

   - 支持默认导出和命名导出。

## CommonJS module (CJS)

### require()

1. **语法**：
   - 使用 `require()` 函数来引入模块。
   - 导入：`const something = require('module')`
   - 导出：`module.exports = something`

2. **同步加载**：
   - 采用同步加载模块的方式，不支持动态导入。

3. **动态模块路径**：
   - 可以使用动态计算的模块路径，例如 `require('./' + fileName)`。

4. **作用域**：
   - 模块的作用域是运行时动态确定的，模块内部变量可能会污染全局作用域。

5. **浏览器兼容性**：
   - 浏览器不原生支持 CommonJS 模块，需要使用打包工具（如 Browserify 或 webpack）进行转换。

6. **默认导出**：
   - 只支持默认导出，不支持命名导出。

**主要区别总结：**

- **语法和导入方式**：ES module 使用 `import/export`，CommonJS 使用 `require/module.exports`。
- **加载方式**：ES module 支持异步加载和静态解析，CommonJS 是同步加载和动态解析。
- **作用域**：ES module 的作用域是静态的，不会污染全局作用域；CommonJS 的作用域是运行时动态确定的，可能会影响全局作用域。
- **浏览器兼容性**：ES module 直接在现代浏览器中支持，CommonJS 需要通过工具转换才能在浏览器中使用。

在 Node.js 中，默认的模块系统是 CommonJS，但是 Node.js 也支持 ES module，可以通过文件扩展名 `.mjs` 或者在 `package.json` 中指定 `"type": "module"` 来启用 ES module。

## charAt(xxx)

在你提供的代码中，`.charAt()` 是一个 JavaScript 字符串方法，用于获取字符串中指定位置的字符。

**解释代码：**

```javascript
const lines = content.split('\n'); // 使用换行符分割文本内容，得到一个行数组
console.log('Lines:', lines); // 打印分割后的行数组
const initials = lines.map(line => {
    const words = line.split(' '); // 使用空格分割每一行，得到一个单词数组
    const firstLetters = words.map(word => word.charAt(0)); // 获取每个单词的第一个字母组成的数组
    return firstLetters.join(''); // 将数组中的字母连接成一个字符串
});
```

## `.charAt()` 

- `.charAt()` 方法用于获取字符串中指定位置（索引）的字符。
- 索引从 0 开始，即字符串的第一个字符索引为 0，第二个为 1，依此类推。
- 如果指定的索引超出了字符串的长度，则返回一个空字符串 `''`。
- 例如，`word.charAt(0)` 就是获取字符串 `word` 的第一个字符。

**示例：**

假设有一个字符串：

```javascript
const word = "Hello";
const firstLetter = word.charAt(0); // 获取第一个字符
console.log(firstLetter); // 输出 "H"
```

在你的代码中，`word.charAt(0)` 被用来获取每个单词 `word` 的第一个字母，然后将这些字母组成一个新的字符串，最终构成了 `initials` 数组中的每个元素。

## node -v

用于查看已装版本号

## Express

### 初始化项目要做的步骤

```js
//npm init
//npm i express
//npm i nodemon -D
```



### 响应同一个url不同内容

```js
server.on("request", (req, res) => {
    console.log("someone is visiting the server");
    const url = req.url;
    const method = req.method;
    const str = `url is ${url} and request method is ${method}`;
    res.end(str);
});
```

### 响应不同url不同内容

```js
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
```

### 控制不同文件路径的访问

```js
app.use(express.static(publicPath)); //会自动找到public文件夹下的index.html文件然后返回给浏览器
//自定义url尝试
//http://localhost:8080/static-files/index.html
app.use('/static-files', express.static(publicPath, { index: false }));//如果没加html则不会访问
//http://localhost:8080/images/
app.use('/images', express.static(publicPath));
```

### nodemon

使用这个模块可以实时更新代码不用每次手动关闭调整

### express.static()

可以创建一个静态资源服务器

### login登陆判断

```js
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
```



## API

**例子：天气应用**

你可能经常使用手机上的天气应用来查看今天或未来几天的天气情况。这个过程背后其实是依赖API来获取数据的。

**具体流程：**

1. **用户请求**：你打开天气应用，选择查看你所在城市的天气信息。

2. **API请求**：天气应用程序不会自己去收集天气数据，而是会向一个专门的天气服务（比如WeatherAPI或OpenWeatherMap）发出一个API请求。这个请求包括了你所在城市的信息。

3. **服务处理**：天气服务接收到API请求后，会在他们的数据库中查找相关城市的天气数据。

4. **API响应**：一旦找到数据，天气服务会通过API把天气信息发送回你的应用。这些信息可能包括温度、湿度、风速、降雨量等。

5. **显示结果**：你的天气应用收到这些数据后，会把它们显示在界面上，供你查看。

**总结**：在这个例子中，API就像是你和天气服务之间的桥梁。它帮助你的应用程序从天气服务那里获取数据，而你不需要知道天气数据是如何生成或存储的。这让应用开发者能够专注于用户体验，而不是重新开发获取天气数据的整个流程。




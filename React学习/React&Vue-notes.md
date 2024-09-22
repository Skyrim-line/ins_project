# React Notes

## 配置react环境

配置react 环境，创建文件夹

![image-20240312171039593](/Users/skyrim/Library/Application Support/typora-user-images/image-20240312171039593.png)

启动react ：

`npm start`

检查当前node js 的版本

`nvm ls`

`nvm use <version>`

### Package.jon

查看一个项目如果是package.json文件则用 npm start 来启动项目，如果是package-lock.json的话用 `npm yarm start`来启动项目

## useState

useState 是 React 的一个 Hook，用于在函数组件中添加状态。以下是它的基本用法：

1. 导入：

   ```js
   import React, { useState } from 'react';
   ```

2. 基本语法：

   ```js
   const [state, setState] = useState(initialValue);
   ```

3. 使用状态：

   - 读取：直接使用 `state`
   - 更新：调用 `setState(newValue)`

4. 特点：

   - 可以存储任何类型的值（数字、字符串、布尔值、数组、对象等）
   - 更新状态会触发组件重新渲染

例子：

```js
  const [todolist, setTodolist] = useState(['hello', 'world']);
  const [task, setTask] = useState('');
```

`todolist` 用于存储和管理整个 TODO 列表。当用户添加、编辑或删除任务时，我们会使用 `setTodolist` 来更新这个数组。

`task` 用于管理输入框的内容。当用户在输入框中键入内容时，`task` 会随之更新。当用户点击 "Add" 按钮时，`task` 的内容会被添加到 `todolist` 中，然后 `task` 会被重置为空字符串。

## uuid

生成独一无二的id用于制作checkbox的时候当元素的下标用

`nom i uuid`

## Reat Router 

```
npm i -D react-router-dom
```

Example:



```react
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```



# Vue Notes



## 用vite来配置前端环境

`$ npx create-vite@latest frontend --template react`

Vite 也是用来搭建前端的框架的

# Vite Notes




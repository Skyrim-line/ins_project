// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'

// function App() {
//   const [todolist, setTools] = useState(['hello', 'world']);
//   const [task, setTask] = useState('');
//   return (
//     <div className="App">
//       <div>TODO List</div>
//       <input
//         type="text"
//         value={task}
//         placeholder="Input your TODO List here"
//         onChange={(e) => setTask(e.target.value)} />
//       {/*1. 添加todo到todolist里面
//       2.清空原来的input*/}
//       <button onClick={() => {
//         setTools([...todolist, task]);
//         setTask('');
//       }}
//       >
//         Add
//       </button>
//       {/*ES6 里面将一个数组里的每一个item都变成另外一个东西 */}
//       {todolist.map((index,todo) => (
//         <div style={{marginBottom : '20px'}}>
//           <div>{todo}</div>
//           <button onClick={() => {
//             // 1. 从todolist里面删除这个todo
//             // 2. 重新设置todolist
//             const newTools = tools
//             // splice 语法为从index开始删除1个元素, 并且会修改原数组
//             newTools.splice(index, 1);
//             //setTools作用是将删掉todo之后的todolist重新设置
//             setTools(newTools);
//           } }>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState(['hello', 'world']);
  const [task, setTask] = useState('');
  return (
    <div className='App'>
      <div >
        TODO List
      </div>
      <input
        type='text'
        value={task}
        placeholder='Input your TODO List here'
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTodolist([...todolist, task]);
          setTask('');
        }}
      >Add</button>
      {/* 点击Add button 后下面todolist列表中相对应展示添加的内容*/}
      {todolist.map((todo, index) => (
        <div style={{ marginBottom: '20px' }}>
          <div>
            {todo}
          </div>
          {/* 点击Delete button 后删除对应的todo */}
          <button
            onClick={() => {
              const newTodolist = todolist;
              // splice 语法为从index开始删除1个元素, 并且会修改原数组，这里是删除一个todo
              newTodolist.splice(index, 1);
              setTodolist([...newTodolist]);
            }}
          >Delete</button>
        </div>
      ))}


    </div>
  );
}
 
export default App;
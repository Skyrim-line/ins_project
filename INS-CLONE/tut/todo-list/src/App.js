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
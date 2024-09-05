import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';

function App(){
  const [todolist, setTodolist] = useState([]);
  const [task, setTask] = useState('');
  //有了uuid 后todolist {id : 'asdfx', text: 'sleep', completed: false} 是这样的形式
  return (
    <div className='App'>
      <div >
        <h1>TODO List</h1>
      </div>
      <input
        type='text'
        value={task}
        placeholder='Input your TODO List here'
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          if (task) {
            // 输入非空的时候，添加到todolist中
            setTodolist([...todolist, { text: task, completed: false, id: uuidv4() }]);
            setTask('');
          }
        }}
      >
        Add
      </button>

      {/* 未完成的任务 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{width: '50%'}}>
          {/* Not finished tasks */}
          {/* 点击Add button 后下面todolist列表中相对应展示添加的内容，并附带checkbox*/}
          {todolist.map((todo, index) => (
            <div style={{ marginBottom: '20px' }}>
              <div style={{margin: '10px'}}>
                {/* checkbox */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                  setTodolist(
                      todolist.map((curTodo) =>
                      curTodo === todo ? { ...curTodo, completed: !curTodo.completed } : curTodo)
                    );
                  }} />
                
                <span style={{
                  // css样式，当todo完成时，显示删除线
                  textDecoration: todo.completed ? 'line-through' : 'unset',
                }}>
                  {todo.text}
                </span>
              </div>

              {/* 点击Delete button 后删除对应的todo */}

              <button
                // 删除当前todolist中的todo
                style={{ marginLeft: '10px' }}
                onClick={() => {
                  const newTodolist = [...todolist];
                  // splice 语法为从index开始删除1个元素, 并且会修改原数组，这里是删除一个todo
                  newTodolist.splice(index, 1);
                  setTodolist([...newTodolist]);
                  
                }}
              >Delete
              </button>

              {/* 点击Edit button 后弹出对话框，显示todo内容 */}

              <button onClick={
                () => {
                  const editContent = window.prompt('Edit your TODO List here', todo); // 弹出一个对话框，显示todo内容,使用propmt方法
                  if (editContent) {
                    setTodolist(
                      todolist.map((item, i) => {
                        return i === index ? editContent : item;
                      }),
                    );
                  }
                }
              }
              >Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
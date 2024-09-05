import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// var 不要用 let 后面需要修改这个值的时候用
function App() {
  const [todos, setTodos] = useState(['Wash dishes', 'Sleep well']);
  // const [todos] = useState(['Wash dishes', 'Sleep well']);
  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input
          value={text}
          placeholder="input your todo"
          onChange={(event) => setText(event.target.value)}
        />
        {/* 1. 添加todo到todos里面
        2. 清空原来的input */}
        <button
          onClick={() => {
            // spread operator, ...todos 在这里等价于 'Wash dishes', 'Sleep well'
            setTodos([...todos, text]);
            setText('');
          }}
        >
          Add
        </button>
      </div>

      {/* ES6 里面 将一个数组里的每一个item都变成另外一个东西 */}
      {todos.map((todo, index) => (
        <div style={{ marginBottom: '20px' }}>
          <div>{todo}</div>
          <button
            // 删除当前todos里面 对应index的这个todo
            onClick={() => {
              const newTodos = [...todos];
              // 删掉todo
              newTodos.splice(index, 1);
              // 将新的 已经删掉不想要的那个todo 之后的todos
              setTodos(newTodos);

              // 🚫的，因为todos是一个state, 需要通过setState来改 setTodos
              // todos.splice(index, 1);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;

 import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [todolist, setTools] = useState(['hello', 'world']);
  const [task, setTask] = useState('');
  return (
    <div className="App">
      <div>TODO List</div>
      <input
        type="text"
        value={task}
        placeholder="Input your TODO List here"
        onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => setTools([...todolist, task])}>Add</button>
      {todolist.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => { 
    if (!username || !password) {
      setMessage('Please enter username and password');
      setTimeout(() => {
        setMessage('');
      }, 3000); 
      return;
    }
    const body = {
      name: username,
      ps: password,
    };
    const url = 'http://localhost:4000/login';
    console.log(username, password);
    axios // 了解axios的使用方法  
      .post(url, body)
      .then((res) => { // 如果成功，显示消息，然后清空用户名和密码
        setMessage(res.data.msg);
        setTimeout(() => {
          setUsername('');
          setPassword('');
        }) 
      })
      .catch((err) => { // 如果失败，重新设置用户名和密码
        setMessage(err.response.data.msg);
        setUsername('');
        setPassword('');
      });
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };
  
  return (
    <div className='box'>
      <h1>Welcome to Login Page</h1>
      <h2>{`Let's get started`}</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          style={{ 
            marginBottom: '10px',
          }}
          value={username}
          autoComplete='email'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          style={{ 
            marginBottom: '10px',
          }}
          value={password}
          autoComplete='email'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* onClick 挂载handleLogin 函数*/}
      <input type="submit" value="Login" onClick={handleLogin} />
      {/* 通过setMessage更新*/}
      <p id="message">{message}</p>
    </div>  
  )
}

export default App;

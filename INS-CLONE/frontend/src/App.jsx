import './App.css';
import Profile from './components/Profile/Profile';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

// 查看他人的个人主页是否存在该用户
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:id" element={<Profile />} /> 
      </Routes>
    </Router>
  );
}

export default App;
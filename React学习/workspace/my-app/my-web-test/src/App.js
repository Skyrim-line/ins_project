import React from "react";
import PostList from "./components/post-list";
import HotPost from "./components/hot-post";
import Navbar from "./components/Nav-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import PostDetail from "./components/post-detail";
import Manage from "./components/manage/post-manage";
import WritePost from "./components/write-post";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid main-area">
        <div className="row">
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<PostList page={1} />} />
              <Route path="/hot" element={<HotPost />} />
              <Route path="/post-detail/:id" element={<PostDetail />} />
              <Route path="/manage" element={<Manage />} />
              {/* 可以添加更多的路由，如 /posts/:id 显示具体帖子 */}
              <Route path="/write-post" element={<WritePost/>} />   
            </Routes>
          </div>
          <div className="col-md-3">
            <HotPost />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

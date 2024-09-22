import React from "react";
import PostList from "./components/post-list";
import HotPost from "./components/hot-post";
import Navbar from "./components/Nav-bar";
import Footer from "./components/footer";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="main-area">
          {/* row-column 这个行列布局工具样式，是 Bootstrap 里面使用频率最高的工具样式 */}
          <div className="row">
            <div className="col-md-9">
              <PostList page={1}></PostList>
            </div>
            <div className="col-md-3">
              <HotPost></HotPost>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

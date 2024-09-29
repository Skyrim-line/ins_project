import React, { useEffect, useState } from "react";
import postListMock from "./post-list.mock.json";
import { useNavigate } from "react-router-dom";

function PostList(props) {
  const [postList, setPostList] = useState([]);

  const navigate = useNavigate(); // 用于路由跳转

  useEffect(() => {
    setPostList(postListMock);
  }, []);

  return (
    <div className="row">
      {postList.map((post) => (
        <div className="col-sm-6 col-md-4" key={post.id}>
          <div className="thumbnail">
            <img
              // 插入图片
              src="https://raw.githubusercontent.com/Skyrim-line/ins_project/main/images/7-11.jpg?token=GHSAT0AAAAAACUDBMDGPINNVKDRYTDQ6BU2ZWHKT6A"
              alt="7-11 convenience store"
              style={{ height: "auto", width: "100%", objectFit: "cover" }}
              data-holder-rendered="true"
            />
            <div className="caption">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={() => {
                    window.localStorage.setItem(
                      "postDetail",
                      JSON.stringify(post)
                    );
                    navigate("/post-detail/" + post.id);
                  }}
                  role="button"
                >
                  Button
                </a>
                <a href="#" className="btn btn-default" role="button">
                  Button
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;

import React, { useEffect, useState } from "react";
import postListMock from "./post-list.mock.json";

function PostList(props) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostList(postListMock);
    }, []);

    return (
        <div className="row">
            {
                postList.map(post => (
                    <div className="col-sm-6 col-md-4" key={post.id}>
                        <div className="thumbnail">
                            <img
                                src="https://raw.githubusercontent.com/Skyrim-line/ins_project/main/images/7-11.jpg?token=GHSAT0AAAAAACUDBMDGPINNVKDRYTDQ6BU2ZWHKT6A"
                                alt="7-11 convenience store"
                                style={{ height: '200px', width: '100%', display: 'block' }}
                                data-holder-rendered="true"
                            />
                            <div className="caption">
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default PostList;

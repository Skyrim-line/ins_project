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
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="thumbnail">
                                <img
                                    src="https://www.instagram.com/p/C76iK7vpAV5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                                    alt="Description"
                                    style={{ height: '200px', width: '100%', display: 'block' }}
                                    data-holder-rendered="true"
                                />
                                <div class="caption">
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default PostList;
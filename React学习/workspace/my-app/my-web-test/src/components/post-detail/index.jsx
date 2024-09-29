import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import postDetailMock from "../mock-data/post-detail-mock.json";

export default (props) => {
  // let { id } = useParams();
  const [postDetail, setPostDetail] = useState({});

  // side effect, usesEffect is a hook to run functional components side effect
  // 3 个生命周期钩子合在一起:
  useEffect(() => {
    const tempStr = window.localStorage.getItem("postDetail");
    const temObj = JSON.parse(tempStr);
  }, []);

  return (
    <>
      <h3>{postDetail.title}</h3>
      <p>{postDetail.content}</p>
    </>
  );
};

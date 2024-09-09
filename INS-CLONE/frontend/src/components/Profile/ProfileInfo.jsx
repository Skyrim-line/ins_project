import { InfoContainer, Info, Status, Bio } from "./Profile.styles";
import { useParams } from "react-router-dom";
import { initialState as profileData } from "../../Redux/ProfileData";
import { initialState as postData } from "../../Redux/PostData";
import CheckCircle from "@mui/icons-material/CheckCircle";

const ProfileInfo = () => {
  const { id } = useParams();
  console.log("id", id);
  {
    /* 定义posts使其能在个人主业上进行显示具体Posts的数量 */
  }
  let filteredPosts = postData.filter((post) => {
    return post.userID === id;
  });
  return (
    <>
      {profileData[id] ? (
        <InfoContainer>
          {/* 导入图片，补全图片的样式style.js设置图片样式,每个模块在style.js里面已经被定义过 */}
          <img 
            src={profileData[id].profilePic} 
            alt="Profile picture" 
            style={{
              width: '100px',  // 设置所需的宽度
              height: '100px', // 高度与宽度相等
              borderRadius: '50%', // 使图片变为圆形
              objectFit: 'cover', // 确保图片填满容器而不拉伸
              objectPosition: 'center' // 居中图片
            }}
          />
          <Info>
            <p className="owner-ID">
              {profileData[id].userID}
              {profileData[id].verified ? (
                <CheckCircle className="verified" />
              ) : null}
            </p>
            <Status>
              <p>
                <strong>{filteredPosts.length}</strong> Posts
              </p>
              <p>
                <strong>{profileData[id].followers}</strong> Followers
              </p>
              <p>
                <strong>{profileData[id].followers}</strong> Following
              </p>
            </Status>
            <Bio>
              <p className="name">
                <strong>{profileData[id].name}</strong>
              </p>
              <p className="category">{profileData[id].category}</p>
              <p className="bio">{profileData[id].bio}</p>
            </Bio>
          </Info>
        </InfoContainer>
      ) : (
        <InfoContainer>
          <h2>
            Sorry, User with id <span>{id}</span> Does not Exitst!
          </h2>
        </InfoContainer>
      )}
      {/*       
      <InfoContainer>
        <h2>
          Sorry, User with id <span>{id}</span> Does not Exitst!
        </h2>
      </InfoContainer> */}
    </>
  );
};

export default ProfileInfo;

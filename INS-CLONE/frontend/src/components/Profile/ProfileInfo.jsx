import { InfoContainer } from "./Profile.styles";
import { useParams } from "react-router-dom";
import { initialState as profileData } from "../../Redux/ProfileData";
import { initialState as postData } from "../../Redux/PostData";

const ProfileInfo = () => {
  const { id } = useParams();
  console.log("id", id);
  return (
    <>
      {profileData[id] ? (
        <InfoContainer>Has Profile</InfoContainer>
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

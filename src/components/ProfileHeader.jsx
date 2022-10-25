import profilePicDefault from "../assets/profile-pic-default.png";
import shareButtonDefault from "../assets/share-button-default.png";
import classes from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
    <div className={classes["profile-header"]}>
      <div className={classes["share-button"]}>
        <img src={shareButtonDefault} alt="share button" />
      </div>
      <div className={`${classes["profile-header-content"]}`}>
        <img src={profilePicDefault} alt="profile pic" />
        <p>Annette Black</p>
      </div>
    </div>
  );
};

export default ProfileHeader;

import React from "react";

const Profile = () => {
  return (
    <div className="profile-wrap">
      <div className="profile-share-wrap">
        <img src="/img/Tooltip.png" alt="img" className="share-hover" />
        <img src="/img/share-default.png" className="shareIcon" alt="img" />
        <img className="mobileMore" src="/img/mobile-more.png" alt="img" />
      </div>
      <div className="profileImg-wrap">
        <img src="/img/icon.svg" alt="img" className="profile-icon" />
        <img id="profile_img" src="./img/myimg1.jpg" alt="img" />
      </div>
      <p>Samuel Adeniyi</p>
      <h2 style={{ display: "none" }}>Samuel Adeniyi</h2>
    </div>
  );
};
export default Profile;

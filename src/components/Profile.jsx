import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div className="content__picture">
        <img className="content__img" src="https://picsum.photos/1027/768?random" alt=""/>
      </div>

      <div className="content__about">
        <div className="content__avatar">
          <img className="content__avatar-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" alt=""/>
        </div>

        <div className="content__bio bio">
          <div className="bio__name"></div>
        </div>
      </div>


    </div>
  )
}

export default Profile;
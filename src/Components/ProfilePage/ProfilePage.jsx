import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import Avatar from "@mui/material/Avatar";
import chefprofilepic from '../../../public/chefprofilepic.png'


const ProfilePage = ({ handleLogout }) => {
  const avatarImageSrc = chefprofilepic;
  const userName = useSelector((state) => state.userData.userName);
  return (
    <div className="ProfilePage">
      <h1 className="profileTitle">Profile</h1>
      <div className="imgContainer">
        <div className="ProfilePicWrapper">
          <Avatar
            src={avatarImageSrc}
            alt="Profile"
            sx={{ width: 250, height: 250, backgroundColor: "yellow" }}
          />
        </div>
        <h2 className="name">
          Chef {userName}
          {/* Chef {userData.firstname} */}
        </h2>
        {/* <h3 className="fullname">
          Full Name : {userName} */}
          {/* Full Name: {userData.firstname} {userData.lastname} */}
        {/* </h3> */}
        {/* <h3 className="email">Email: {user.email}</h3> */}
        <h5>
          <Link className="logout" to="/" onClick={handleLogout}>
            Logout
          </Link>
        </h5>
      </div>

      <div>
        <ul>
          <p>
            <Link className="extras" to="/recipe-book">
              {" "}
              📖 Recipe Book
            </Link>
          </p>
          <p>
            <Link className="extras" to="/grocery-list">
              {" "}
              🛒 Grocery List
            </Link>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;

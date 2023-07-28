import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

import defaultProfilePic from "../defaultProfilePic/defaultProfilePic.jpg";
const ProfilePage = () => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic); // Set the default profile picture

  const handlePictureUpload = (event) => {
    const file = event.target.files[0]; // Use "files" instead of "value" to get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <> 
    <section className="full">
      <h1>Profile</h1>
      <div className="img">
        {profilePic && (
          <img src={profilePic} className="ProfilePicImage" alt="Profile" />
        )}
        <h1> Chef BEF </h1>
        {/* <label htmlFor="file-upload" className="custom-file-upload">
            Upload Profile Picture
          </label> */}
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          capture="camera"
          onChange={handlePictureUpload}
          />
          </div>
      </section>

      <section className="fullInfo">
        <div className="userInfo">
          <h2> Full Name: </h2>
          <h2> Nickname: </h2>
          <h2> Email: </h2>
        </div>
        {/* <h2>Navigation</h2> */}
        <container className="links">
          <p>
            <Link to="/favorites"> ❤️ Favorites</Link>
          </p>
          <p>
            <Link to="/recipe-book"> 📖 Recipe Book</Link>
          </p>
          <p>
            <Link to="/grocery-list"> 🛒 Grocery List</Link>
          </p>
        </container>
      </section>
    </>
  );
};

export default ProfilePage;

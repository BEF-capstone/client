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
    <div>
      <h1>Profile</h1>
      <div className="img">
        <input
          type="file"
          accept="image/*"
          capture="camera"
          onChange={handlePictureUpload}
        />
        {profilePic && <img src={profilePic} alt="Profile" />}
      </div>
      <div>
        {/* <h2>Navigation</h2> */}
        <ul>
          <p>
            <Link to="/favorites">Favorites</Link>
          </p>
          <p>
            <Link to="/recipe-book">Recipe Book</Link>
          </p>
          <p>
            <Link to="/grocery-list">Grocery List</Link>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;

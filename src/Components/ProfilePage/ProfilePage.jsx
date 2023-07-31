import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import defaultProfilePic from "../defaultProfilePic/defaultProfilePic.jpg";

const ProfilePage = ({ handleLogout }) => {
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
    <div className="ProfilePage">
      <h1>Profile</h1>
      <div className="imgContainer">
        <div className="ProfilePicWrapper">
          {profilePic && (
            <img className="ProfilePicImage" src={profilePic} alt="Profile" />
          )}
        </div>
        <h2 className="name">Chef BEF</h2>
        <label htmlFor="fileUpload" className="customFileUpload">
          Upload Profile Picture
        </label>
        <h3 className="fullname">Full Name: </h3>
        <h3 className="email">Email: </h3>
        <h5>
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </h5>

        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          capture="camera"
          onChange={handlePictureUpload}
          style={{ display: "none" }} // hide the default input
        />
      </div>

      <div>
        <ul>
          <p>
            <Link to="/favorites"> ❤️ Favorites</Link>
          </p>
          <p>
            <Link to="/recipe-book"> 📖 Recipe Book</Link>
          </p>
          <p>
            <Link to="/grocery-list"> 🛒 Grocery List</Link>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;

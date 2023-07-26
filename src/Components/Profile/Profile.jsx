import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import defaultProfilePic from "../defaultProfilePic/defaultProfilePic.jpg"
import "../Profile/Profile.css"
const Profile = () => {
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
      <div className='ProfilePic'>
        <input type="file" accept="image/*" capture="camera" onChange={handlePictureUpload} />
        {profilePic && <img className= "ProfilePicImage" src={profilePic} alt="Profile" />}
      </div>
      <div className='links'>
            <img className="icon" src="https://i.fbcd.co/products/original/4cb3dfa788bdb2c97db08616a58304e4b6dd72d374e551cc419a77c4af6ec16e.jpg  "></img>

            <Link to="/favorites">Favorites</Link>
          
  
          <img className="icon" src="  "></img>

            <Link to="/recipe-book">Recipe Book</Link>
  
          <img className="icon" src="  "></img>
            <Link to="/grocery-list">Grocery List</Link>
      </div>
    </div>
  );
};

export default Profile;
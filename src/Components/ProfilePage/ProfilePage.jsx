// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./ProfilePage.css";
// import defaultProfilePic from "../defaultProfilePic/defaultProfilePic.jpg";

// const ProfilePage = ({ handleLogout }) => {
//   const [profilePic, setProfilePic] = useState(defaultProfilePic); // Set the default profile picture

//   const handlePictureUpload = async (event) => {
//     const file = event.target.files[0]; // Use "files" instead of "value" to get the uploaded file
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);
//         console.log(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="ProfilePage">
//       <h1>Profile</h1>
//       <div className="imgContainer">
//         <div className="ProfilePicWrapper">
//           {profilePic && (
//             <img className="ProfilePicImage" src={profilePic} alt="Profile" />
//           )}
//         </div>
//         <h2 className="name">Chef BEF</h2>
//         <label htmlFor="fileUpload" className="customFileUpload">
//           Upload Profile Picture
//         </label>
//         <h3 className="fullname">Full Name: </h3>
//         <h3 className="email">Email: </h3>
//         <h5>
//           <Link to="/" onClick={handleLogout}>
//             Logout
//           </Link>
//         </h5>

//         <input
//           id="fileUpload"
//           type="file"
//           accept="image/*"
//           capture="camera"
//           onChange={handlePictureUpload}
//           style={{ display: "none" }} // hide the default input
//         />
//       </div>

//       <div>
//         <ul>
//           <p>
//             <Link to="/favorites"> ❤️ Favorites</Link>
//           </p>
//           <p>
//             <Link to="/recipe-book"> 📖 Recipe Book</Link>
//           </p>
//           <p>
//             <Link to="/grocery-list"> 🛒 Grocery List</Link>
//           </p>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import defaultProfilePic from "../defaultProfilePic/defaultProfilePic.jpg";
// import "../ProfilePics"
// Functional component to display the user's profile picture
const ProfilePicture = ({ imageUrls }) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(
    imageUrls[0] || defaultProfilePic
  ); // Set the first image as the default selected image

  const handleChangeImage = (event) => {
    setSelectedImageUrl(event.target.value);
  };

  return (
    <div>
      <img
        className="ProfilePicImage"
        src={selectedImageUrl}
        alt="Profile"
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
      <select value={selectedImageUrl} onChange={handleChangeImage}>
        {imageUrls.map((imageUrl, index) => (
          <option key={index} value={imageUrl}>
            Image {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

const ProfilePage = ({ handleLogout }) => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic); // Set the default profile picture

  const handlePictureUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const userImageUrls = [
    defaultProfilePic, // The default profile picture should be included in the list
    "client/src/Components/ProfilePics/diverse_people_girl_ponytails_skin2.png",
    "client/src/Components/ProfilePics/diverse_people_man_cornrows_short_hair_skin5.png",
    "client/src/Components/ProfilePics/diverse_people_man_jewish_yamaka_skin3.png",
    // Add more image URLs as needed
  ];

  return (
    <div className="ProfilePage">
      <h1 className="profileTitle">Profile</h1>
      <div className="imgContainer">
        <div className="ProfilePicWrapper">
          {/* Replace the image rendering with the ProfilePicture component */}
          <ProfilePicture imageUrls={userImageUrls} />
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
          style={{ display: "none" }}
        />
      </div>

      <div>
        <ul>
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
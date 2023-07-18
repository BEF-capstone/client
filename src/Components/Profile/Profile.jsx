import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Profile = () => {
  const [profilePic, setProfilePic]= useState(null)



    const handlePictureUpload = (event)=>{

      const file = event.target.value[0]
      setProfilePic(file)
    }
  return (

    <div>
         <h1>Profile</h1>

         <div>

            <h2>Profile Picture</h2>
                    <input type="file" accept="image/*" capture="camera" onChange={handlePictureUpload} />

                      {profilePic && (
                        <img src={URL.createObjectURL(profilePic)} alt="Profile" />
                      )}
                          {/* <h2>Profile Picture</h2>
                          <input type="file" onChange={handlePictureUpload} />

                          {profilePic && (
                            <img src={URL.createObjectURL(profilePic)} alt="Profile" />
                          )}
                        </div> */}

                  <div>
                  
                  
                      <h2>Navigation</h2>


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
    </div>

  );
};


export default Profile


//Profile with user name favorites grocery list and etc
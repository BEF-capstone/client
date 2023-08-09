import React from "react";
import LandingVideo from "../../../public/LandingVIdeo.mp4";
import "./Landing.css"; 
import Info from "../Info/Info"
import Creators from '../Creators/Creators'

const Landing = ({loggedIn}) => {
  return (
    <>
        <video autoPlay muted loop playsInline>
          <source src={LandingVideo} type="video/mp4" />
        </video>
        <div name="/" className="typewriter-text">
          <div className="titles">
            <h1 className="typewriter-animation">Chef Compass </h1>
            <p className="erasing-animation">More Eating. Less thinking.</p>
          </div>
        </div>
        <Info isLoggedIn={loggedIn}/>
        <Creators />



    </>
  );
};

export default Landing;

import React from "react";
import LandingVideo from "../LandingVideo/LandingVideo.mp4";
import "./Landing.css"; // Import the CSS file for styling
import About from "../About/About";
import HowTo from "../HowTo/HowTo";

const Landing = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={LandingVideo} type="video/mp4" />
        </video>
        {/* <div className="typewriter-text">

            <div className='titles'>
                  <h1 className="typewriter-animation">Chef? </h1>
                  <h1 className="typewriter-animation"> Parent? </h1>
                    <h1 className="typewriter-animation"> Just starting out?</h1>
                    <h1 className="typewriter-animation">Chef Compass</h1>

            </div>

            <div className='titles'>
                <p erasing-animation>Everyone's welcome in this kitchen</p>
                <p erasing-animation> Stirring The Way</p>
            </div>

        </div> */}
      </div>
      <div className="Pages">
        <About />
        <HowTo />
      </div>
    </>
  );
};

export default Landing;

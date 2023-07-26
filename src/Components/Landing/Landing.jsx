import React from "react";
import LandingVideo from "../LandingVideo/LandingVideo.mp4";
import "./Landing.css"; // Import the CSS file for styling
import About from "../About/About";
import HowTo from "../HowTo/HowTo";
import Hero from "../Hero/Hero"
import Pics from "../Pics/Bowl";

const Landing = () => {
  return (
    <>
      {/* <div className="video-container"> */}
        <video autoPlay muted loop>
          <source src={LandingVideo} type="video/mp4" />
        </video>
        <div name="/" className="typewriter-text">

            <div className='titles'>
              {/* <br>
              </br>
              <br>
              </br>
              <br>
              </br>
              <br>
              </br> */}
                   <h1 className="typewriter-animation">Chef Compass </h1>
        
                <p className="erasing-animation">More Eating.  Less thinking.</p>
                {/* <p erasing-animation> Stirring The Way</p> */}
            </div>

        </div>
      {/* </div> */}
      <div className="scroll">Scroll</div>
      {/* <div className="Hero">
        <Hero />
      </div> */}
      <div className="Pages">
        <About />
      </div>
      <div className="Pages">
        <HowTo />
      </div>
      <div className="Bowl">
        <Pics />
      </div>
    </>
  );
};

export default Landing;

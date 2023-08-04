import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import LandingVideo from "../LandingVideo/LandingVideo.mp4";
import "./Landing.css"; // Import the CSS file for styling
import Info from "../Info/Info";
import Creators from "../Creators/Creators";

const Landing = () => {
  return (
    <>
      {/* <div className="landing"> */} {/* This is the common parent */}
      <video autoPlay muted loop>
        <source src={LandingVideo} type="video/mp4" />
      </video>
      <div name="/" className="typewriter-text">
        <div className="titles">
          <h1 className="typewriter-animation">Chef Compass </h1>
          <p className="erasing-animation">More Eating. Less thinking.</p>
        </div>
      </div>
      <Info />
      <Creators />
      {/* <div className="scroll">Scroll</div> */}
      {/* </div> */}
      {/* <div className="Hero">
        <Hero />
      </div>
      <div className="Pages">
        <About />
      </div>
      <div className="Pages">
        <HowTo />
      </div> */}
      {/* <div className="Bowl">
        <Pics />
      </div> */}
    </>
  );
};

export default Landing;

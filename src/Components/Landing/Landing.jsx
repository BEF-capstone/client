// import React from "react";
// import "./Landing.css";
// import { Container, Typography } from "@mui/material";
// import { Image } from "mui-image";

// const Landing = () => {
//   return (
//     <Container sx={{ backgroundColor: "primary.main" }}>
//       <Hero />
//     </Container>
//   );
// };

// export const Hero = () => {
//   return (
//     <Container>
//       <Typography variant="h1">Explore your Inner Chef!</Typography>
//       <Typography variant="h2">
//         With Chef Compass an AI powered recipe book
//       </Typography>
//       <Image src="./images/logo.webp" />
//     </Container>
//   );
// };

// export default Landing;

//Landing Page for the website


import React from 'react';
import LandingVideo from "../LandingVideo/LandingVideo.mp4"
import './Landing.css'; // Import the CSS file for styling
import About from "../About/About"
import HowTo from '../HowTo/HowTo';

const Landing = () => {
  // useEffect(() => {
  //   document.body.style.backgroundColor = "white";
  // }, []);


  return (
    <div className="video-container">
      <video autoPlay muted loop>
        <source src={LandingVideo} type="video/mp4" />
      </video>
      <div className="typewriter-text">

        <div className='titles'>
          <h1>Chef? </h1>
          <h1> Parent? </h1>
          <h1> Just starting out?</h1>
          <h1>Chef Compass</h1>

        </div>

        <div className='titles'>
            <p>Everyone's welcome in this kitchen</p>
            <p>Stirring The Way</p>
         </div>

      </div>

      <div className='Pages'>

      <About/>
      <HowTo/> 

      </div>
    </div>
  );
};

export default Landing;

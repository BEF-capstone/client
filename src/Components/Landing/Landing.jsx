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

import React from "react";
import LandingVideo from "../LandingVideo/LandingVideo.mp4";
import "./Landing.css"; // Import the CSS file for styling

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
        <span>Chef? </span>

        <span> Parent? </span>

        <span> Just starting out?</span>

        <span>Everyone's welcome in this kitchen</span>

        <span>Chef Compass</span>

        <span>Stirring The Way</span>
      </div>
    </div>
  );
};

export default Landing;

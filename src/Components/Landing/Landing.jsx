import React, { useEffect } from "react";
import "./Landing.css";
import { Container, Typography } from "@mui/material";
import { Image } from "mui-image";
const Landing = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <Container sx={{ backgroundColor: "white" }}>
      <Hero />
    </Container>
  );
};

export const Hero = () => {
  return (
    <Container>
      <Typography variant="h1">Explore your Inner Chef!</Typography>
      <Typography variant="h2">
        With Chef Compass an AI powered recipe book
      </Typography>
      <Image src="./images/logo.webp" />
    </Container>
  );
};

export default Landing;

//Landing Page for the website

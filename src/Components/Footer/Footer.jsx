import React from "react";
import "./Footer.css";
import { Container, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: "secondary.main",
        color: "secondary.text",
        padding: "20px",
      }}
    >
      <Typography variant="p">
        Created By: Blessing Adomakoh, Faaizah Afoda, Efren Mendoza
      </Typography>
    </Container>
  );
};

export default Footer;

//Socials and Contact info

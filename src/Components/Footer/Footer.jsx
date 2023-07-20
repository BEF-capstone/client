import React from "react";
import "./Footer.css";
import { Container, Typography, Box } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "secondary.text",
        padding: "20px",
        width: "100vw",
      }}
    >
      <Typography variant="p">
        Created By: Blessing Adomakoh, Faaizah Afoda, Efren Mendoza
      </Typography>
    </Box>
  );
};

export default Footer;

//Socials and Contact info

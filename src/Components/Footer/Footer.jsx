import React from "react";
import "./Footer.css";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#B23850",
        color: "secondary.text",
        padding: "20px",
        width: "100%",
        margin: 0,
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

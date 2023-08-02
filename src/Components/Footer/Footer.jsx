import React from "react";
import "./Footer.css";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#241023",
        color: "secondary.text",
        padding: "20px",
        width: "100%",
        margin: 0,
        minHeight: "5vh"

      }}
    >
      <Typography name="contact" variant="p">
        Created By: Blessing Adomakoh, Efren Mendoza, Faaizah Afoda
      </Typography>
    </Box>
  );
};

export default Footer;



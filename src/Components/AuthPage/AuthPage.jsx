import React from "react";
/* MUI IMPORTS */
import { Grid, Box, Container, useMediaQuery, useTheme } from "@mui/material";
/* COMPONENT IMPORTS */
import Registration from "../Registration/Registration";
import Login from "../Login/Login";

const AuthPage = ({ navigate, handleLogin, handleRegistration }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSuccessfulLoginOrRegistration = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", padding: "0 20px" }}
    >
      <Grid
        item
        xs={12}
        sm={5}
        style={{ boxSizing: "border-box", padding: "20px" }}
      >
        <Login handleLogin={handleLogin} />
      </Grid>
      {!isSmallScreen && (
        <Grid
          item
          xs={12}
          sm={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "200px",
              borderLeft: "1px solid gray",
              maxWidth: "1px",
              marginBottom: "10px",
            }}
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "50%",
                background: "#FFF",
                padding: "0 10px",
                transform: "translateX(-50%)",
              }}
            >
              OR
            </span>
          </div>
          <div
            style={{
              height: "250px",
              borderLeft: "1px solid gray",
              maxWidth: "1px",
              marginTop: "10px",
            }}
          />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={5}
        style={{ boxSizing: "border-box", padding: "20px" }}
      >
        <Registration handleRegistration={handleRegistration} />
      </Grid>
    </Grid>
  );
};

export default AuthPage;

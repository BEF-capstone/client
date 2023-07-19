import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import Registration from "../Registration/Registration";
import { Grid, Box, Container } from "@mui/material";
import Login from "../Login/Login";

const AuthPage = ({ onRegister }, { handleLogin }) => {
  return (
    // <div className="AuthPage">
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Login />
          </Grid>
          <Grid item xs={6}>
            <Registration />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AuthPage;

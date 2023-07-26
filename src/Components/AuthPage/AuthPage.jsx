import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import Registration from "../Registration/Registration";
import { Grid, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";


const AuthPage = ({ navigate, onRegister , handleLogin }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSuccessfulLoginOrRegistration = () => {
    navigate('/');
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ minHeight: '100vh', padding: '0 20px' }}>
      <Grid item xs={12} sm={5} style={{ boxSizing: 'border-box', padding: '20px' }}>
        <Login />
      </Grid>
      {!isSmallScreen && 
        <Grid item xs={12} sm={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ height: '200px', borderLeft: '1px solid gray', maxWidth: '1px', marginBottom: '10px' }} />
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '50%', background: '#FFF', padding: '0 10px', transform: 'translateX(-50%)' }}>OR</span>
          </div>
          <div style={{ height: '250px', borderLeft: '1px solid gray', maxWidth: '1px', marginTop: '10px' }} />
        </Grid>
      }
      <Grid item xs={12} sm={5} style={{ boxSizing: 'border-box', padding: '20px' }}>
        <Registration />
      </Grid>
    </Grid>
  );
}

export default AuthPage;

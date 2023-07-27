import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const Login = ({ handleLogin }) => {
  const handleSubmit = () => {};

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/');
  //   }
  // }, [isLoggedIn, navigate]);

  return (
    <Container>
      <Box
        sx={{
          marginTop: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          sx={{ ml: 0, mb: 5, color: "#A3320B" }}
        >
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          handleLogin={handleLogin}
          noValidate
        >
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              "& .MuiInput-underline:after": {
                // This selector targets the underline in the "after" pseudo-element (which is active during focus)
                borderBottom: "1px solid black", // Change this color to the color you want for the underline
              },
              "& .MuiInput-underline:before": {
                // This selector targets the underline in the "before" pseudo-element (which is the default state)
                borderBottom: "1px solid black", // Change this color to the color you want for the underline
              },
            }}
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            sx={{
              "& .MuiInput-underline:after": {
                // This selector targets the underline in the "after" pseudo-element (which is active during focus)
                borderBottom: "1px solid black", // Change this color to the color you want for the underline
              },
              "& .MuiInput-underline:before": {
                // This selector targets the underline in the "before" pseudo-element (which is the default state)
                borderBottom: "1px solid black", // Change this color to the color you want for the underline
              },
            }}
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "white" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

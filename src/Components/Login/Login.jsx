import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import apiClient from "../../services/apiClient";

const Login = ({ handleLogin }) => {
  const nav = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataInput = new FormData(e.currentTarget);

    const { data, error } = await apiClient.login({
      email: dataInput.get("email"),
      password: dataInput.get("password"),
    });

    if (error) {
      console.error(error);
      setError(error);
    } else {
      setError("");
      handleLogin(data);
      nav("/create-recipe");
    }
  };

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
        <Box component="form" onSubmit={handleSubmit} noValidate>
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
                borderBottom: "1px solid black", 
              },
              "& .MuiInput-underline:before": {
                // This selector targets the underline in the "before" pseudo-element (which is the default state)
                borderBottom: "1px solid black", 
              },
            }}
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            id="password"
            type="password"
            label="Enter Password"
            name="password"
            autoComplete="password"
            sx={{
              "& .MuiInput-underline:after": {
                borderBottom: "1px solid black", 
              },
              "& .MuiInput-underline:before": {
                borderBottom: "1px solid black", 
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

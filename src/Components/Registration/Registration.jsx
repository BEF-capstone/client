import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient";

const Registration = ({ handleRegistration }) => {
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get data from apiClient: POST /registration
    console.log("HERE");
    const dataInput = new FormData(e.currentTarget);

    const { data, error } = await apiClient.register({
      firstname: dataInput.get("firstname"),
      lastname: dataInput.get("lastname"),
      email: dataInput.get("email"),
      password: dataInput.get("password"),
    });
    console.log("API REQ SUCCESFUL");
    // handle registration
    if (error) {
      console.error("error registering user");
    } else {
      handleRegistration(data);
      nav("/create-recipe");
    }
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 5,
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
          Create Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                variant="standard"
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                variant="standard"
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
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
            </Grid>
          </Grid>

          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            type="password"
            label="Enter Password"
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
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            autoComplete="confirmPassword"
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
            Create
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;

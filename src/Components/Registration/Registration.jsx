import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Button,
} from "@mui/material";

const Registration = () => {
  const handleSubmit = () => {};
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h2" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
                autofocus
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
              ></TextField>
            </Grid>
          </Grid>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          ></TextField>

          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            type="password"
            label="Enter Password"
            name="password"
            autoComplete="password"
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            autoComplete="confirmPassword"
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;

import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const Login = () => {
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
        {/* <Typography component="h2" variant="h5" sx={{color: 'white'}}>
          Sign In
        </Typography> */}
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
            sx={{'& .MuiInput-underline:after': { // This selector targets the underline in the "after" pseudo-element (which is active during focus)
              borderBottom: '1px solid black', // Change this color to the color you want for the underline
            },
            '& .MuiInput-underline:before': { // This selector targets the underline in the "before" pseudo-element (which is the default state)
              borderBottom: '1px solid black', // Change this color to the color you want for the underline
            },}}
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
            sx={{'& .MuiInput-underline:after': { // This selector targets the underline in the "after" pseudo-element (which is active during focus)
              borderBottom: '1px solid black', // Change this color to the color you want for the underline
            },
            '& .MuiInput-underline:before': { // This selector targets the underline in the "before" pseudo-element (which is the default state)
              borderBottom: '1px solid black', // Change this color to the color you want for the underline
            },}}
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2, backgroundColor: 'black', color: 'white'
          }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;


import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '',
  height: '100vh',
  opacity: 0.7,
}));

// Testing merge

const Hero = () => {
  return (
    <StyledBox>
      <Container>
        <Typography variant="h1" sx={{fontFamily: 'cursive', fontSize: 80, color: "#474b4f", mt: 50, fontWeight: 'bold'}}>Welcome to Chef Compass!</Typography>
        <Typography variant="h3" sx={{fontFamily: 'Italiana', fontSize: 30, color: '#bc4639', mt: 3}}> Embark on a flavorful journey with us as we </Typography>
        <Typography variant="h3" sx={{fontFamily: 'Italiana', fontSize: 30, color: '#bc4639'}}>  share our love for culinary delights with you!</Typography>
      </Container>
    </StyledBox>
  );
};

export default Hero;



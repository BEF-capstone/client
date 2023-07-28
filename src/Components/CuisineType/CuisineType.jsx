import React from 'react';
import { Button, Card, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const CuisineType = ({ cuisines, selectedCuisine, handleCuisineSelection, handleLoadMore }) => {
  if (cuisines.length === 0) {
    return <p>Loading cuisines...</p>;
  }

  const handleCuisineClick = (cuisine) => {
    handleCuisineSelection(cuisine);
  };

  return (
    <Box sx={{ padding: "0 15%", mt: 10 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {cuisines.filter(Boolean).map((cuisine) => (
          <RouterLink
            key={cuisine.name}
            to={`/ingredients?cuisine=${cuisine.name}`}
          >
            <Card
              key={cuisine.name}
              onClick={() => handleCuisineClick(cuisine.name)}
              sx={{
                cursor: "pointer",
                padding: 2,
                height: '250px',
                boxShadow: 10,
                backgroundImage: `url(${cuisine.image})`, // add the image as a background
                backgroundSize: 'cover', // make sure it covers the whole card
                opacity: 0.8,
                backgroundColor: selectedCuisine === cuisine.name ? "#8D8741" : "transparent",
                transition: 'transform 0.15s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                display: 'flex', // align the text vertically and horizontally
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative', // relative to the card
              }}
            >
            <Typography 
                variant="h6" 
                align="center" 
                sx={{ 
                    fontFamily: 'Italiana',
                    fontSize: 30,
                    color: '#fff', 
                    fontWeight: 'bold', // Change fontWeight to 'bold' or 700
                    position: 'absolute', 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                }}
            >
                {cuisine.name}
            </Typography>

            </Card>
          </RouterLink>
        ))}
      </Box>

      <Button variant="contained" color="primary" onClick={handleLoadMore} sx={{ mt: 4, mb: 4, fontFamily: 'Italiana' }}>
        See More
      </Button>
    </Box>
  );
};

export default CuisineType;


import React from 'react';
import { Button, Card, CardMedia, Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CuisineType = ({ cuisines, selectedCuisine, handleCuisineSelection, handleLoadMore }) => {
  const handleCuisineClick = (cuisine) => {
    handleCuisineSelection(cuisine);
  };

  return (

    <Box sx={{ padding: '0 15%', mt: 10 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}> 
        {cuisines.map((cuisine) => (
          <RouterLink to={`/ingredients?cuisine=${cuisine.name}`}>
            <Card
              key={cuisine.name}
              onClick={() => handleCuisineClick(cuisine.name)}
              sx={{
                cursor: 'pointer',
                padding: 2,
                height: '300px', 
                backgroundColor: selectedCuisine === cuisine.name ? "#8D8741" : "transparent",
                transition: 'transform 0.15s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={cuisine.image}
                alt={cuisine.name}
              />
              <Typography variant="h6" align="center" sx= {{fontFamily: 'Italiana'}}>{cuisine.name}</Typography>
            </Card>
          </RouterLink>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={handleLoadMore} sx={{ mt: 4, mb: 4,  fontFamily: 'Italiana' }}>
        See More
      </Button>
    </Box>
  );

};

export default CuisineType;


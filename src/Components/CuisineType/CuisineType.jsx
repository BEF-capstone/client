// Import necessary dependencies
import React from 'react';
import { Button, Card, CardMedia, Box, Typography } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';

// import './CuisineType.css'; // Import the CSS file for styling

// Define the CuisineType component
const CuisineType = ({ cuisines, selectedCuisine, handleCuisineSelection, handleLoadMore }) => {
  // Event handler for cuisine click
  const handleCuisineClick = (cuisine) => {
    handleCuisineSelection(cuisine);
  };

  // Render the JSX content
  return (
    <Box>
      <Typography variant="h4" gutterBottom >Select Cuisine:</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mt: 10}}>
        {cuisines.map((cuisine) => (
          <Card
  key={cuisine.name}
  onClick={() => handleCuisineClick(cuisine.name)}
  sx={{ 
    cursor: 'pointer', 
    padding: 2, 
    backgroundColor: selectedCuisine === cuisine.name ? "#8D8741" : "transparent",
    // borderColor: selectedCuisine === cuisine.name ? "green" : "transparent", 
    // borderWidth: 2, 
    // borderStyle: "solid" 
  }}
>
  <CardMedia
    component="img"
    height="200"
    image={cuisine.image}
    alt={cuisine.name}
  />
  <Typography variant="h6" align="center">{cuisine.name}</Typography>
  {selectedCuisine === cuisine.name && <Typography align="center" color="black">Selected</Typography>}
</Card>

  
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={handleLoadMore} sx={{ mt: 2 }}>
        Load More
      </Button>

      <Button variant="contained" color="secondary" component={RouterLink} to="/ingredients" sx={{ mt: 2 }}>
        Next
      </Button>
    </Box>
);
};

export default CuisineType;
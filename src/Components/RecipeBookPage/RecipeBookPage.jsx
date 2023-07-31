import React, { useState } from "react";
import { Container, Typography, Box, TextField, Select, MenuItem, InputLabel, FormControl, Grid, Card } from "@mui/material";
import { styled } from '@mui/system';

// Define a styled component for the main container with specific styles
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(https://images.pexels.com/photos/5965947/pexels-photo-5965947.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

// Function to format date in MM-DD-YYYY format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;  // Months in JavaScript start from 0 (0 = January)
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
};

const RecipeBookPage = () => {
  // Define state for search term
  const [search, setSearch] = useState("");

  // Define state for sorting option
  const [sortBy, setSortBy] = useState("default");

  // Dummy data
  const [recipes, setRecipes] = useState([
    { title: 'Chicken Biryani', difficulty: 'Medium', date: '2022-01-01' },
    { title: 'Pizza', difficulty: 'Easy', date: '2021-12-01' },
    { title: 'Tiramisu', difficulty: 'Hard', date: '2022-06-15' }, 
    // add more recipes as needed
  ]);

  // Event handler for updating search term state
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  // Event handler for updating sorting option state
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  }

// Filter and sort the recipes based on search and sortBy states
// Filter and sort the recipes based on search and sortBy states
const displayedRecipes = [...recipes]
  .filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()))
  .sort((a, b) => {
    if (a.title.toLowerCase() === search.toLowerCase()) return -1;
    if (b.title.toLowerCase() === search.toLowerCase()) return 1;

    if (sortBy === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'easyToDifficult') {
      return ['Easy', 'Medium', 'Hard'].indexOf(a.difficulty) - ['Easy', 'Medium', 'Hard'].indexOf(b.difficulty);
    } else if (sortBy === 'difficultToEasy') {
      return ['Easy', 'Medium', 'Hard'].indexOf(b.difficulty) - ['Easy', 'Medium', 'Hard'].indexOf(a.difficulty);
    }

    return 0;
  });


  return (
    <StyledBox>
      <Container>
          <Typography variant="h1" sx={{fontFamily: 'cursive', fontSize: { xs: 40, md: 60 }, color: "white", mt: 8, fontWeight: 'bold'}}>Recipes</Typography>
          
          {/* Grid container for search and sort features */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', width: '100%', mt: 7 }}>
            {/* Search bar that updates search state on change */}
            <Box sx={{ mb: { xs: 2, sm: 0 }, mr: { sm: 2 }, maxWidth: '350px' }}>
              <TextField
                fullWidth
                label="Search Recipes"
                variant="outlined"
                value={search}
                onChange={handleSearchChange}
                InputProps={{
                  style: { color: '#fff' },
                }}
              />
            </Box>

            {/* Sorting selector that updates sortBy state on change */}
            <Box sx={{ maxWidth: '350px'}}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="sort-label">Sort By</InputLabel>
                <Select
                  labelId="sort-label"
                  value={sortBy}
                  onChange={handleSortChange}
                  label="Sort By"
                >
                  <MenuItem value="default">Default</MenuItem>
                  <MenuItem value="latest">Latest</MenuItem>
                  <MenuItem value="oldest">Oldest</MenuItem>
                  <MenuItem value="easyToDifficult">Easy to Difficult</MenuItem>
                  <MenuItem value="difficultToEasy">Difficult to Easy</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

        {/* Begin Grid for recipes */}
        <Grid container spacing={3} justifyContent="center">
        {displayedRecipes.length > 0 ? (
      displayedRecipes.map(recipe => (
        <Grid item xs={12} sm={6} md={4} key={recipe.title}>
        <Card sx={{ my: 5, p: 2, borderRadius: 2, backgroundColor: "#49B265", boxShadow: 10, height: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ color: 'white' }}>{recipe.title}</Typography>
          <Typography sx={{ color: 'white' }}>{recipe.difficulty}</Typography>
          <Typography sx={{ color: 'white' }}>{formatDate(recipe.date)}</Typography>
        </Card>
      </Grid>
      
      ))
    ) : (
      <Typography variant="h5" sx={{ my: 2, color: "white" }}>No recipe found</Typography>
    )}
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default RecipeBookPage;






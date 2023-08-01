import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Card,
} from "@mui/material";
// import { styled } from "@mui/system";
import apiClient from "../../services/apiClient";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

// Define a styled component for the main container with specific styles
// const StyledBox = styled(Box)(({ theme }) => ({
//   backgroundImage: `url(https://images.pexels.com/photos/5965947/pexels-photo-5965947.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
// }));

// Function to format date in MM-DD-YYYY format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // Months in JavaScript start from 0 (0 = January)
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}-${year}`;
};

const RecipeBookPage = ({ userIdProp }) => {
  // Define state for search term
  const [search, setSearch] = useState("");

  // Define state for sorting option
  const [sortBy, setSortBy] = useState("default");

  // Define state for fetching database
  const [dataLoaded, setDataLoaded] = useState(false);

  // Dummy data
  const [recipes, setRecipes] = useState([
    {
      recipe_name: "Chicken Biryani",
      difficulty: "Medium",
      createdAt: "2022-01-01",
    },
    { recipe_name: "Pizza", difficulty: "Easy", createdAt: "2021-12-01" },
    { recipe_name: "Tiramisu", difficulty: "Hard", createdAt: "2022-06-15" },
    // add more recipes as needed
  ]);

  const [userId, setUserId] = useState(userIdProp);

  // Fetch recipes from backend and append to recipes array
  useEffect(() => {
    if (!dataLoaded) {
      const token = Cookies.get("token");
      if (token) {
        const decodeToken = jwtDecode(token);
        setUserId(decodeToken.userID);
      }
      const fetchRecipes = async () => {
        try {
          const data = await apiClient.getUserRecipes({ userId: userId });
          const recipeArray = data.data.recipe;
          setRecipes(recipes.concat(recipeArray));
          setDataLoaded(true);
        } catch (e) {
          console.error(`error: ${e}`);
        }
      };
      fetchRecipes();
    }
  }, [dataLoaded]);

  // Event handler for updating search term state
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Event handler for updating sorting option state
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Filter and sort the recipes based on search and sortBy states
  // Filter and sort the recipes based on search and sortBy states
  const displayedRecipes = [...recipes]
    .filter((recipe) =>
      recipe.recipe_name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (a.recipe_name.toLowerCase() === search.toLowerCase()) return -1;
      if (b.recipe_name.toLowerCase() === search.toLowerCase()) return 1;

      if (sortBy === "latest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === "easyToDifficult") {
        return (
          ["Easy", "Medium", "Hard"].indexOf(a.difficulty) -
          ["Easy", "Medium", "Hard"].indexOf(b.difficulty)
        );
      } else if (sortBy === "difficultToEasy") {
        return (
          ["Easy", "Medium", "Hard"].indexOf(b.difficulty) -
          ["Easy", "Medium", "Hard"].indexOf(a.difficulty)
        );
      }

      return 0;
    });

  return (
    <Box sx={{backgroundColor: "#C98C93", height: '100vh'}}>
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "cursive",
            fontSize: { xs: 40, md: 60 },
            color: "white",
            mt: 8,
            fontWeight: "bold",
          }}
        >
          Recipes
        </Typography>

        {/* Grid container for search and sort features */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: 7,
          }}
        >
          {/* Search bar that updates search state on change */}
          <Box sx={{ mb: { xs: 2, sm: 0 }, mr: { sm: 2 }, maxWidth: "350px" }}>
            <TextField
              fullWidth
              label="Search Recipes"
              variant="outlined"
              value={search}
              onChange={handleSearchChange}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
          </Box>

          {/* Sorting selector that updates sortBy state on change */}
          <Box sx={{ maxWidth: "350px" }}>
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
            displayedRecipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.recipe_name}>
                <Card
                  sx={{
                    my: 5,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "#5e0b15",
                    boxShadow: 10,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ color: "white" }}>
                    {recipe.recipe_name}
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    {recipe.difficulty}
                  </Typography>
                  <Typography sx={{ color: "white" }}>
                    {formatDate(recipe.createdAt)}
                  </Typography>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h5" sx={{ my: 2, color: "white" }}>
              No recipe found
            </Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecipeBookPage;

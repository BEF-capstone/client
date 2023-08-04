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
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
// import { styled } from "@mui/system";
import apiClient from "../../services/apiClient";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeData } from "../../redux/recipeDataSlice";
import { useNavigate } from "react-router-dom";

import recipeDataSlice from "../../redux/recipeDataSlice";

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

const RecipeBookPage = ({ LoggedIn }) => {
  const userId = useSelector((state) => state.userData.userId);

  /* Redux Dispatch */
  const dispatch = useDispatch();
  /* React Router Dom */
  const nav = useNavigate();

  // Define state for search term
  const [search, setSearch] = useState("");

  // Define state for sorting option
  const [sortBy, setSortBy] = useState("default");

  // Define state for fetching database
  const [dataLoaded, setDataLoaded] = useState(false);

  // Chef's Faves
  const [recipes, setRecipes] = useState([
    {
      recipe_name: "Waakye",
      description:
        "Waakye is a beloved Ghanaian dish known for its distinctive red color and rich flavor. This recipe combines rice and black-eyed beans with waakye leaves, creating a delightful and nutritious meal that is cherished in Ghanaian cuisine.",
      prep_time: "1 hour 15 minutes",
      difficulty: "Hard",
      servings: "6",
      instructions: [
        "Rinse the rice and millet (if using) under cold water until the water runs clear. Drain and set aside.",
        "In a large pot, heat the red palm oil over medium heat. Add the chopped onions and sauté until they become translucent.",
        "Stir in the minced garlic and cook for another minute until fragrant.",
        "Add the chopped tomatoes, ground ginger, ground paprika, ground dried shrimp (if using), and a pinch of salt. Cook the tomato mixture until it softens and the oil starts to separate.",
        "Add the soaked black-eyed beans to the pot and stir well to coat them with the tomato mixture.",
        "Pour in the water, cover the pot, and let it simmer for about 20 minutes or until the beans are partially cooked.",
        "Add the waakye leaves to the pot and gently stir to combine with the beans and tomato mixture.",
        "Now, add the rinsed rice and millet (if using) to the pot and carefully mix them with the other ingredients. Add more water if needed, making sure the rice is submerged in the liquid.",
        "Cover the pot again and let the waakye rice cook over low heat for about 30-35 minutes or until the rice is fully cooked and the waakye leaves are tender.",
        "Check the seasoning and add more salt if necessary.",
        "Once the waakye rice is cooked, remove the pot from the heat and let it rest for a few minutes before fluffing the rice with a fork.",
        "Serve the Ghanaian Waakye Rice with Black Eyed Beans hot, and enjoy this flavorful and nutritious Ghanaian delicacy!",
      ],
      ingredients: [
        "2 cups rice (preferably a mix of white rice and millet)",
        "1 cup black-eyed beans, soaked overnight and drained",
        "2 cups waakye leaves (substitute with sorghum leaves if waakye leaves are unavailable)",
        "1 medium onion, finely chopped",
        "2-3 cloves of garlic, minced",
        "2 ripe tomatoes, chopped",
        "2 tablespoons red palm oil (substitute with vegetable oil if palm oil is unavailable)",
        "1 teaspoon ground ginger",
        "1 teaspoon ground paprika",
        "1 teaspoon ground dried shrimp (optional, but adds traditional flavor)",
        "Salt to taste",
        "4 cups water",
      ],
      createdAt: "12-22-2002",
    },
    {
      recipe_name: "Green Chile Enchiladas",
      description:
        "Green Chile Chicken Enchiladas are a delectable Mexican dish featuring tender taco-seasoned shredded chicken and a flavorful green chile enchilada sauce, all wrapped in soft tortillas and topped with a blend of creamy mozzarella and Jack cheese. These enchiladas offer a perfect balance of spice and cheese, making them a delightful treat for any occasion.",
      prep_time: "55 minutes",
      difficulty: "Hard",
      servings: "4-6",
      instructions: [
        "Preheat your oven to 375°F (190°C).",
        "In a large mixing bowl, combine the shredded chicken, half of the mozzarella cheese, half of the Jack cheese, and half of the sour cream. Mix well until all the ingredients are evenly distributed.",
        "Warm the tortillas in a microwave or on a hot skillet for a few seconds to make them pliable.",
        "Take one tortilla and spoon a generous amount of the chicken and cheese mixture onto the center of the tortilla. Roll the tortilla tightly around the filling and place it seam-side down in a greased baking dish. Repeat this process with the remaining tortillas and filling.",
        "In a separate bowl, mix the green enchilada sauce with the diced green chilies.",
        "Pour the green enchilada sauce mixture over the rolled tortillas, making sure they are well covered with the sauce.",
        "Sprinkle the remaining mozzarella and Jack cheese over the top of the enchiladas.",
        "Cover the baking dish with aluminum foil and bake in the preheated oven for 20 minutes.",
        "After 20 minutes, remove the foil and continue baking for an additional 10 minutes or until the cheese is bubbly and golden brown.",
        "Remove the enchiladas from the oven and let them cool slightly.",
        "Drizzle the remaining sour cream over the top of the baked enchiladas.",
        "Garnish with fresh cilantro leaves and sliced jalapeños, if desired.",
        "Serve the Green Chile Chicken Enchiladas hot, and savor the tantalizing blend of flavors!",
      ],
      ingredients: [
        "2 cups cooked and shredded chicken (seasoned with taco seasoning)",
        "1 cup mozzarella cheese, shredded",
        "1 cup Jack cheese, shredded",
        "1 cup sour cream",
        "1 (28-ounce) can green enchilada sauce",
        "1 (4-ounce) can diced green chilies",
        "8-10 soft corn or flour tortillas",
        "1 tablespoon vegetable oil",
        "Fresh cilantro leaves, for garnish (optional)",
        "Sliced jalapeños, for garnish (optional)",
      ],
      createdAt: "11-17-2002",
    },
    {
      recipe_name: "Peanut Stew",
      description:
        "Togolese Peanut Stew is a hearty and flavorful dish that combines the rich taste of peanuts with the spiciness of ashanti pepper and the aromatic essence of ginger and bay leaves. This traditional Togolese recipe is a delightful and comforting meal that will take your taste buds on a journey to West Africa.",
      prep_time: "1 hour",
      difficulty: "Hard",
      servings: "4-6",
      instructions: [
        "Start by roasting the peanuts. Preheat your oven to 350°F (175°C). Spread the peanuts on a baking sheet and roast them in the oven for about 10-12 minutes or until they turn golden brown. Be sure to keep an eye on them to prevent burning. Once roasted, let the peanuts cool, and then grind them in a food processor or blender until you get a fine powder. Set aside.",
        "In a large pot or Dutch oven, heat the vegetable oil over medium heat.",
        "Add the chopped onion and sauté until it becomes translucent.",
        "Stir in the minced garlic, grated ginger, chopped ashanti pepper, and bay leaves. Cook for a couple of minutes until the mixture becomes fragrant.",
        "Add the peanut butter to the pot and stir well to combine it with the onion and spice mixture.",
        "Slowly pour in the vegetable or chicken broth while stirring continuously to avoid lumps.",
        "Bring the mixture to a simmer and add the diced sweet potatoes and sliced carrots.",
        "Reduce the heat to low, cover the pot, and let it cook for about 20-25 minutes or until the sweet potatoes and carrots are tender.",
        "Stir in the ground roasted peanuts to thicken the stew and add a rich peanut flavor. Let the stew simmer for an additional 5 minutes.",
        "Season with salt to taste.",
        "Remove the bay leaves before serving",
        "Serve the Togolese Peanut Stew hot over a bed of cooked rice, and enjoy the authentic taste of West African cuisine!",
      ],
      ingredients: [
        "1 cup unsalted peanuts",
        "2 tablespoons vegetable oil",
        "1 large onion, finely chopped",
        "2 cloves of garlic, minced",
        "1 tablespoon grated fresh ginger",
        "1-2 ashanti peppers (or substitute with other hot peppers), chopped (adjust to your spice preference)",
        "2 bay leaves",
        "1/2 cup natural peanut butter",
        "4 cups vegetable or chicken broth",
        "2 large sweet potatoes, peeled and diced",
        "2 medium carrots, peeled and sliced",
        "Salt to taste",
        "Cooked rice, for serving",
      ],
      createdAt: "08-15-2003",
    },
  ]);

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

  useEffect(() => {
    console.log(`userID: ${userId}`);
    if (userId) {
      console.log(`userID: ${userId}`);
      fetchRecipes();
      console.log(recipes);
    }
  }, [userId]);

  // Event handler for updating search term state
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Event handler for updating sorting option state
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const checkRecipeData = () => {
    const recipeDataState = useSelector((state) => state.recipeData.data);
    return recipeDataState;
  };

  // Handle submitting recipe to recipe result page
  const handleSubmitRecipe = async (recipe) => {
    try {
      dispatch(setRecipeData(recipe));
      console.log(`dispatched data to recipe slice`);
      nav("/recipe-result");
    } catch (e) {
      console.error(`error fetching recipe data: ${e}`);
    }
  };

  const handleDeleteRecipe = async (recipe) => {
    try {
      const body = {
        userId: userId,
        recipeId: recipe.id,
      };
      await apiClient.deleteRecipeFromRecipeBook(body);
      // Update the state to remove the deleted recipe
      setRecipes((prevRecipes) =>
        prevRecipes.filter((r) => r.id !== recipe.id)
      );
      console.log(`deleted recipe from recipe book`);
      // fetchRecipes();
      console.log(`fetched new recipes`);
      console.log(recipes);
    } catch (e) {
      console.error(`error deleting recipe: ${e}`);
    }
  };

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
    <Box sx={{ backgroundColor: "#C98C93", minHeight: "100vh" }}>
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "cursive",
            fontSize: { xs: 40, md: 60 },
            color: "white",
            mt: 8,
            fontWeight: "bold",
            textShadow: "3px 3px #999, 5px 5px #555, 7px 7px #333",
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

        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 4, mb: 2, fontFamily: "Italiana" }}
        >
          Chef's Favorites
        </Typography>

        {/* Begin Grid for recipes */}
        <Grid sx={{ mb: 10 }} container spacing={3} justifyContent="center">
          {console.log(displayedRecipes)}
          {displayedRecipes.slice(0, 3).map((recipe) => (
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
                  "&:hover": {
                    // Adding hover effect
                    transform: "scale(1.05)",
                    transition: "transform .3s ease-in-out",
                  },
                }}
                onClick={() => handleSubmitRecipe(recipe)}
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
          ))}
        </Grid>

        {LoggedIn && (
          // Title for Your Recipes
          <Typography
            variant="h4"
            align="center"
            sx={{ mt: 4, mb: 2, fontFamily: "Italiana" }}
          >
            Your Recipes
          </Typography>
        )}

        {LoggedIn && (
          // Begin Grid for recipes
          <Grid sx={{ mb: 10 }} container spacing={3} justifyContent="center">
            {console.log(displayedRecipes)}
            {displayedRecipes.length > 0 ? (
              displayedRecipes.slice(3).map((recipe) => (
                <Grid
                  item
                  sx={{ display: "flex", flexDirection: "column" }}
                  xs={12}
                  sm={6}
                  md={4}
                  key={recipe}
                >
                  <Card
                    sx={{
                      // my: 5,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#5e0b15",
                      boxShadow: 10,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        // Adding hover effect
                        transform: "scale(1.05)",
                        transition: "transform .3s ease-in-out",
                      },
                    }}
                    onClick={() => handleSubmitRecipe(recipe)} // Call handleSubmitRecipe with recipe name
                  >
                    <CardActionArea>
                      <Typography variant="h5" sx={{ color: "white" }}>
                        {recipe.recipe_name}
                      </Typography>
                      <Typography sx={{ color: "white" }}>
                        {recipe.difficulty}
                      </Typography>
                      <Typography sx={{ color: "white" }}>
                        {formatDate(recipe.createdAt)}
                      </Typography>
                    </CardActionArea>
                    <CardActions>
                      {/* <Button
                        onClick={() => handleDeleteRecipe(recipe)}
                        variant="contained"
                        sx={{ mt: 3, backgroundColor: "white", color: "black" }}
                      >
                        x
                      </Button> */}
                    </CardActions>
                  </Card>
                  <Button
                    onClick={() => handleDeleteRecipe(recipe)}
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    x
                  </Button>
                </Grid>
              ))
            ) : (
              <Typography variant="h5" sx={{ my: 10, color: "white" }}>
                No recipe found
              </Typography>
            )}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default RecipeBookPage;

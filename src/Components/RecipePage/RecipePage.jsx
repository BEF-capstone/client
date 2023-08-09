import React from "react";
import RecipeResult from "../RecipeResult/RecipeResult";
import LoadingAnimation from "../LoadingAnimations";
/* Redux Imports */
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import "./RecipePage.css";

const RecipePage = () => {
  /* Redux Data */
  const recipeData = useSelector((state) => state.recipeData.recipeData);
  if (!recipeData) {
    return (
      <Box
        sx={{ minHeight: "95vh", display: "flex", justifyContent: "center" }}
      >
        <LoadingAnimation />
      </Box>
    );
  }
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#241023" }}>
      <Typography variant="h2" sx={{ mt: 2, mb: 2, color: "white" }}>
        Yes Chef!
      </Typography>
      <div className="recipe-display">
        <RecipeResult className="recipe_card" recipe={recipeData} />
      </div>
    </Box>
  );
};

export default RecipePage;

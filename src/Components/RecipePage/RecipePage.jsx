import React from "react";
import { useEffect } from "react";
import RecipeResult from "../RecipeResult/RecipeResult";
import LoadingAnimation from "../LoadingAnimations";


/* Redux Imports */
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import "./RecipePage.css";

const RecipePage = () => {
  /* Redux Data */
  const dispatch = useDispatch();

  const recipeData = useSelector((state) => state.recipeData.recipeData);

  // useEffect(() => {
  //   dispatch(fetchRecipeData());
  // }, [dispatch]);

  console.log(`recipeData: ${recipeData}`);

  if (!recipeData) {
    return (
      <Box sx={{ mt: 2, mb: 5 }}>
        <LoadingAnimation />
      </Box>
    );
  }

  return (
    <div className="recipe-page">
      <h1>Recipe Page</h1>

      <h2 className="chef">Yes Chef!</h2>
      <div className="recipe-display">
        <RecipeResult className="recipe_card" recipe={recipeData} />
      </div>
    </div>
  );
};

export default RecipePage;

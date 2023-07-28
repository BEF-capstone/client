import React from "react";

import RecipeResult from "../RecipeResult/RecipeResult";

import RecipeCard from "../RecipeCard/RecipeCard";
import WorldMap from "../WorldMap/WorldMap";

/* Redux Imports */
import { useSelector } from "react-redux";

import "./RecipePage.css";

const RecipePage = () => {
  const recipes = [
    {
      title: "Spaghetti with Tomato, Garlic, and Bacon",
      servings: 4,
      ingredients: [
        "300g spaghetti",
        "4 slices of bacon, diced",
        "4 cloves of garlic, minced",
        "4 ripe tomatoes, diced",
        "2 tablespoons olive oil",
        "Salt and pepper to taste",
        "Fresh parsley, chopped (for garnish)",
      ],
      instructions: [
        "Bring a large pot of salted water to a boil and cook the spaghetti according to package instructions. Drain and set aside.",
        "In a large skillet, heat the olive oil over medium heat. Add the diced bacon and cook until crispy. Remove the bacon from the skillet and set aside on a paper towel-lined plate.",
        "In the same skillet with the bacon grease, add the minced garlic and cook for 1-2 minutes until fragrant.",
        "Add the diced tomatoes to the skillet and cook for 5-7 minutes, until they start to soften and release their juices.",
        "Return the cooked bacon to the skillet and stir to combine with the tomatoes and garlic. Cook for an additional 2-3 minutes.",
        "Add the cooked spaghetti to the skillet and toss everything together until well combined. Season with salt and pepper to taste.",
        "Serve the spaghetti with a sprinkle of fresh parsley on top.",
        "Enjoy your delicious Spaghetti with Tomato, Garlic, and Bacon!",
      ],
    },
    {
      title: "Simple Salad",
      servings: 2,
      ingredients: [
        "4 cups mixed salad greens",
        "1 cup cherry tomatoes, halved",
        "1/2 cucumber, sliced",
        "1/4 red onion, thinly sliced",
        "1/4 cup olives, pitted",
        "2 tablespoons extra virgin olive oil",
        "1 tablespoon balsamic vinegar",
        "Salt and pepper to taste",
      ],
      instructions: [
        "In a large bowl, combine the salad greens, cherry tomatoes, cucumber, red onion, and olives.",
        "In a small bowl, whisk together the olive oil, balsamic vinegar, salt, and pepper to make the dressing.",
        "Drizzle the dressing over the salad and toss to coat all the ingredients.",
        "Serve the salad immediately and enjoy!",
      ],
    },
  ];

  const user = "Efren";

  const recipeData = useSelector((state) => state.data);
  console.log(recipeData);

  return (
    <div className="recipe-page">
      <h1>Recipe Page</h1>

      <h2>Yes Chef {user}!</h2>
      <div className="recipe-display">
        <RecipeResult
          className="recipe_card"
          // recipe={JSON.stringify(recipes[1])}
          recipe={recipeData}
        />
      </div>
    </div>
  );
};

export default RecipePage;

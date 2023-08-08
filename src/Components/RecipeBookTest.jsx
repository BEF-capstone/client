import React from "react";
import { useEffect, useState } from "react";

const RecipeBookTest = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const loadRecipes = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const response = await fetch(
          "http://localhost:3001/api/recipes/read-recipes",
          options
        );
        const data = await response.json();
        let recipes = data.recipes;
        setRecipes(recipes);
      } catch (e) {
        console.error(e);
      }
    };
    loadRecipes();
  });

  console.log(recipes);

  return (
    <div>
      {recipes &&
        recipes.map((recipe) => {
          return <h1>{recipe.recipe_name}</h1>;
        })}
    </div>
  );
};

export default RecipeBookTest;

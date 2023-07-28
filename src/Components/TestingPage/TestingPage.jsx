import React from "react";
import { useState } from "react";
import RecipeResult from "../RecipeResult/RecipeResult";

const TestingPage = () => {
  const [recipe, setRecipe] = React.useState({});
  const [recipeName, setRecipeName] = React.useState();
  const [madeQuery, setMadeQuery] = React.useState(false);

  // ingredients array from Ingredients page
  const [ingredients, setIngredients] = useState([
    "onions, green pepper, tomatoes, ground beef",
  ]);

  // cuisine selection from Cuisine page
  const [cuisine, setCuisine] = useState("mexican");

  // POST request to openAI routes
  const createRecipe = async () => {
    // pass ingredients arr and cuisine string
    const options = {
      method: "POST",
      body: JSON.stringify({
        cuisine: cuisine,
        ingredients: ingredients,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Make post request
    try {
      const response = await fetch(
        "http://localhost:3001/api/openAi/create_recipe",
        options
      );
      const data = await response.json();
      let content = await data.choices[0].message.content;
      console.log(content);
      console.log(typeof content);
      content = JSON.parse(content);
      setRecipe(content);
      setRecipeName(content.recipeName);
      console.log("recipe Name: ", recipeName);
      setMadeQuery(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <button onClick={createRecipe}>PROMPT GPT</button>
      {madeQuery && <RecipeResult recipe={recipe} />}
    </div>
  );
};

export default TestingPage;

import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeResult from "../RecipeResult/RecipeResult";
import { useState } from "react";

const TestingPage = () => {
  const [recipe, setRecipe] = React.useState({});
  const [recipeName, setRecipeName] = React.useState();
  const [madeQuery, setMadeQuery] = React.useState(false);

  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const maxIngredients = 5;

  const createRecipe = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
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
      setRecipeName(content.recipe_name);
      console.log("recipe Name: ", recipeName);
      setMadeQuery(true);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      HandleAddIngredient();
    }
  };

  const HandleAddIngredient = (e) => {
    if (ingredients.length >= maxIngredients) {
      alert("You cannot enter more than 5 ingredients.");
      return;
    }
    if (ingredients.length < 5 && inputValue.trim() !== "") {
      setIngredients([...ingredients, inputValue]);
      setInputValue("");
    }
  };

  console.log(ingredients);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        onKeyDown={handleKeyPress}
        placeholder="Enter an ingredient"
        // Hide the default input box styling
        style={{
          border: "none",
          outline: "none",
          fontSize: "16px",
          color: "black",
          width: "100%",
          borderBottom: "1px solid #412020", // Add this
          background: "transparent", // Add this
        }}
      />
      <button
        onClick={HandleAddIngredient}
        // Transparent background for the "STIR" button
        style={{
          padding: "8px 16px",
          background: "transparent",
          color: "#3B945E",
          border: "3px solid #3B945E",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: 20,
        }}
      >
        STIR
      </button>
      <div className="ingredients-list">
        <ul>
          {ingredients.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </ul>
      </div>
      <button onClick={createRecipe}> PROMPT GPT </button>

      {/* <p>{recipe.recipe_name}</p> */}
      {/* <RecipeResult
        recipe_name={recipe.recipe_name}
        difficulty={recipe.difficulty}
        servings={recipe.servings}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
      /> */}
      {madeQuery && <RecipeResult recipe={recipe} />}
      {/* <p>{JSON.stringify(recipe)}</p> */}
    </div>
  );
};

export default TestingPage;

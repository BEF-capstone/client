import React from "react";
import RecipeResult from "../RecipeResult/RecipeResult";

const TestingPage = () => {
  return (
    <div>
      <button onClick={createRecipe}>PROMPT GPT</button>
      {madeQuery && <RecipeResult recipe={recipe} />}
    </div>
  );
};

export default TestingPage;

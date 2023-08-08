import React from "react";
import RecipeResult from "../RecipeResult/RecipeResult";
import apiClient from "../../Services/apiClient";

const TestingPage = () => {
  const addItemToGroceryList = async () => {
    const groceryList = await apiClient.addToGroceryList({
      userId: 2,
      newItem: "tomato",
    });

    console.log("added item to grocery list");
    // const groceryList = await apiClient.getGroceryList(2);
    console.log(groceryList);
  };

  return (
    <div>
      {/* <button onClick={createRecipe}>PROMPT GPT</button> */}
      {/* {madeQuery && <RecipeResult recipe={recipe} />} */}

      <button onClick={addItemToGroceryList}>ADD ITEM TO GROCERY LIST</button>
    </div>
  );
};

export default TestingPage;

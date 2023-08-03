import React from "react";
import { useState } from "react";
import RecipeResult from "../RecipeResult/RecipeResult";
import RecipeCard from "../RecipeCard/RecipeCard";

const TestingPage = () => {
  // const recipe = {
  //   id: 19,
  //   createdAt: 2023-08-02T20:49:05.434Z,
  //   recipe_name: 'Togolese Broccoli Salad',
  //   description: 'A refreshing and nutritious salad with a Togolese twist',
  //   prep_time: '10 minutes',
  //   difficulty: 'Easy',
  //   servings: '4',
  //   instructions: [
  //     '1. Cut the broccoli florets into bite-sized pieces and blanch them in boiling water for 2 minutes. Drain and transfer to a bowl.',
  //     '2. Finely chop the red onion and add it to the bowl with the broccoli.',
  //     '3. In a separate bowl, combine the lemon juice, olive oil, salt, and pepper. Mix well.',
  //     '4. Pour the dressing over the broccoli and red onion. Toss to coat evenly.',
  //     '5. Add the roasted peanuts, cilantro leaves, and dried currants to the bowl. Mix gently to combine.',
  //     '6. Let the salad sit in the refrigerator for at least 30 minutes to allow the flavors to meld together.',
  //     '7. Serve chilled and enjoy!'
  //   ],
  //   ingredients: [
  //     '2 heads of broccoli',
  //     '1 red onion',
  //     '1/2 cup roasted peanuts',
  //     '1/4 cup fresh cilantro leaves',
  //     '1/4 cup dried currants',
  //     '2 tablespoons lemon juice',
  //     '2 tablespoons olive oil',
  //     'Salt and pepper to taste'
  //   ]
  // }

  return (
    <div>
      {/* <RecipeCard recipe={recipe} /> */}
      <button onClick={createRecipe}>PROMPT GPT</button>
      {madeQuery && <RecipeResult recipe={recipe} />}
    </div>
  );
};

export default TestingPage;

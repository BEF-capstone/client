import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import { DateTime } from "luxon";

const RecipeCard = ({ recipe }) => {
  const recipePasta = {
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
  };
  return (
    <div>
      <Card>
        <CardHeader
          title={recipePasta.title}
          subheader={DateTime.now().toLocaleString()}
        />
        <CardContent>
          <Typography align="left" variant="h6">
            Ingredients:{" "}
          </Typography>
          {/* LIST INGREDIENTS */}
          <List>
            {recipePasta.ingredients.map((ingredient, index) => {
              return (
                <ListItem
                  key={ingredient}
                  secondaryAction={<Checkbox edge="end"></Checkbox>}
                >
                  <ListItemText primary={ingredient} />
                </ListItem>
              );
            })}
          </List>

          <Typography align="left" variant="h6">
            Method:{" "}
          </Typography>
          {/* LIST INSTRUCTIONS */}
          <List>
            {recipePasta.instructions.map((instr, index) => {
              return (
                <ListItem key={instr}>
                  <ListItemText primary={`${index + 1}. ${instr}`} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeCard;

// Recipes with Cook Time and instructions

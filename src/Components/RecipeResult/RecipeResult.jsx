import React from "react";

import Loading from "../Loading/Loading";

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

import LoadingAnimation from "../LoadingAnimations";

import { DateTime } from "luxon";

const RecipeResult = ({ recipe }) => {
  return (
    <div>
      {recipe ? (
        <Card>
          <CardHeader
            title={recipe.recipeName}
            subheader={DateTime.now().toLocaleString()}
          />
          <CardContent>
            <Typography align="left" variant="h6">
              Ingredients:{" "}
            </Typography>
            {/* LIST INGREDIENTS */}
            <List>
              {recipe.ingredients.map((ingredient, index) => {
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
              {recipe.instructions.map((instr, index) => {
                return (
                  <ListItem key={instr}>
                    <ListItemText primary={`${index + 1}. ${instr}`} />
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
};

export default RecipeResult;

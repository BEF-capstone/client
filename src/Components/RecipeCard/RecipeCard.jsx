import React from "react";
import {
  Button,
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
  return (
    <div>
      <Card>
        <CardHeader
          title={recipe.title}
          subheader={DateTime.now().toLocaleString()}
        />
        <CardContent>
          <Typography>{recipe.description}</Typography>

          <Typography align="left" variant="h6">
            Ingredients:
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
            Method:
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
        <Button variant="contained" color="red"></Button>
      </Card>
    </div>
  );
};

export default RecipeCard;

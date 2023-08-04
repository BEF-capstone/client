import React from "react";

import Loading from "../Loading/Loading";
import { Box } from "@mui/material";

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

const RecipeResult = ({ recipe }) => {
  return (
    <div>
      <Card>
        <CardHeader title={recipe.recipe_name} subheader={recipe.createdAt} />
        <CardContent>
          <Typography align="left" variant="h6">
            Ingredients:
            <Typography align="right" variant="7">
              Add To Grocery List
            </Typography>
          </Typography>

          {/* LIST INGREDIENTS */}
          <List>
            {recipe.ingredients.map((ingredient, index) => {
              return (
                <ListItem
                  key={ingredient}
                  secondaryAction={
                    <Button sx={{ backgroundColor: "black", color: "white" }}>
                      Add
                    </Button>
                  }
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
      </Card>
    </div>
  );
};

export default RecipeResult;

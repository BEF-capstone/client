import React from "react";
import Loading from "../Loading/Loading";
import apiClient from "../../services/apiClient";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const RecipeResult = ({ recipe }) => {
  const [addedItems, setAddedItems] = React.useState([]);
  const userId = useSelector((state) => state.userData.userId);

  // check if ingredient is already added to grocery list
  // in order to disable add button
  const isIngredientAdded = (ingredient) => {
    return addedItems.includes(ingredient);
  };

  // add item to grocery list db
  // add item to addedItems array
  const handleAddItem = async (ingredient) => {
    const newArray = await apiClient.addToGroceryList({
      userId: userId,
      newItem: ingredient,
    });
    setAddedItems((prevIngredients) => [...prevIngredients, ingredient]);
  };

  return (
    <div>
      {/* Resipe Result Card */}
      <Card>
        <CardHeader
          title={
            <Typography sx={{ fontSize: "2.5rem" }}>
              {recipe.recipe_name ? recipe.recipe_name : <Loading />}
            </Typography>
          }
          subheader={
            <Typography sx={{ fontSize: "1.1rem" }}>
              {recipe.createdAt ? recipe.createdAt : <Loading />}
            </Typography>
          }
        />
        <CardContent>
          <Typography sx={{ fontSize: "1.3rem", mb: "20px" }}>
            <span style={{ fontWeight: "bold", margin: "20px" }}>
              Difficulty:
            </span>
            {recipe.difficulty ? recipe.difficulty : <Loading />}
            <span style={{ fontWeight: "bold", margin: "20px" }}>
              Prep Time:
            </span>
            {recipe.prep_time ? recipe.prep_time : <Loading />}
            <span style={{ fontWeight: "bold", margin: "20px" }}>
              Servings:
            </span>
            {recipe.servings ? recipe.servings : <Loading />}
          </Typography>
          <Box
            sx={{
              maxWidth: "65%",
              margin: "auto",
              mb: "30px",
            }}
          >
            <Typography
              align="center"
              sx={{
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "1rem",
              }}
            >
              {recipe.description ? recipe.description : <Loading />}
            </Typography>
          </Box>

          <Typography
            align="left"
            sx={{ fontSize: "1.3rem" }}
            style={{ fontWeight: "bold" }}
          >
            Ingredients:
            <Typography align="right" sx={{ fontSize: "1.2rem" }}>
              Add To Grocery List
            </Typography>
          </Typography>

          {/* LIST INGREDIENTS */}
          <List>
            {recipe.ingredients ? (
              recipe.ingredients.map((ingredient, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <Button
                      onClick={() => {
                        handleAddItem(ingredient);
                      }}
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#5e0b15",
                          color: "white",
                        },
                      }}
                      disabled={isIngredientAdded(ingredient)}
                    >
                      Add
                    </Button>
                  }
                >
                  <ListItemText primary={ingredient} />
                </ListItem>
              ))
            ) : (
              <Loading />
            )}
          </List>

          <Typography
            align="left"
            sx={{ fontSize: "1.3rem" }}
            style={{ fontWeight: "bold" }}
          >
            Method:
          </Typography>
          {/* LIST INSTRUCTIONS */}
          <List>
            {recipe.instructions ? (
              recipe.instructions.map((instr, index) => {
                return (
                  <ListItem key={instr}>
                    <ListItemText primary={`${index + 1}. ${instr}`} />
                  </ListItem>
                );
              })
            ) : (
              <Loading />
            )}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeResult;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./IngredientsPage.css";
import { Box, Grid, TextField, Typography } from "@mui/material";
import queryString from "query-string";
import IngredientsCarousel from "../IngredientsCarousel/IngredientsCarousel";
import IngredientsList from "../IngredientsList/IngredientsList";
/* REDUX IMPORTS */
import { useDispatch } from "react-redux";
import { setRecipeData } from "../../redux/recipeDataSlice";
/* ApiClient */
import apiClient from "../../services/apiClient";


import axios from "axios"; // HTTP client library
import "./IngredientsPage.css";
import Info from "../Info/Info";


const IngredientsPage = ({ userId }) => {
  // setting limitation to the amount of ingredients added
  const maxIngredients = 5;
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  // handling the update of the inputvalue when the user types in the input field
  const [inputValue, setInputValue] = useState("");
  // in order to make sure the selected cuisine renders
  const [selectedCuisine, setSelectedCuisine] = useState("");
  // handling the update of the inputvalue when the user types in the input field
  const [recipe, setRecipe] = useState({});
  // state to prompt loading screen
  const [madeQuery, setMadeQuery] = useState(false);
  // redux dispatch
  const dispatch = useDispatch();

  //Error message
  const [errorMessage, setErrorMessage] = useState(null);

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
  };

  // Use useEffect to parse the query string whenever the location changes
  useEffect(() => {
    const values = queryString.parse(location.search);
    setSelectedCuisine(values.cuisine);
    console.log(selectedCuisine);
    console.log(selectedIngredients);
  }, [location]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding a new ingredient to the selected ingredient list
  const handleAddIngredient = (ingredient) => {
    if (selectedIngredients.length >= maxIngredients) {
      setErrorMessage("You have enter the max number of ingredients.");
      return;
    }
    if (selectedIngredients.length < 5 && inputValue.trim() !== "" )
    {
      setErrorMessage(null);
      setSelectedIngredients([...selectedIngredients, inputValue]);
      setInputValue("");
      console.log("incrementing the listtt???");
    }
  };

  // handing drag event on an ingredient in the caroseul

  // const handleDragIngredient = (carouselIngredient) => {
  //   setSelectedIngredients([...selectedIngredients, carouselIngredient.name]);
  // };

  const handleSubmit = async () => {
    try {
      // pass cuisine and ingredients array as body parameters
      console.log(`in handle submit`);
      let body = JSON.stringify({
        cuisine: selectedCuisine,
        ingredients: selectedIngredients,
      });
      dispatch(setRecipeData(null));
      // make POST req to openAI endpoint
      console.log(`request to apiClient`);
      const response = await apiClient.createNewRecipe(body);
      console.log(`request to success`);
      // get data
      const data = await response.data;
      // recipe info
      let content = await data.choices[0].message.content;
      content = JSON.parse(content);
      console.log(content);
      // send recipe to redux, to render in recipe card
      dispatch(setRecipeData(content));
      setRecipe(content);
      setMadeQuery(true);
      // POST recipe to recipe book table
      body = JSON.stringify({
        recipe_name: content.recipe_name,
        description: content.description,
        prep_time: content.prep_time,
        difficulty: content.difficulty,
        servings: content.servings.toString(),
        instructions: content.instructions,
        ingredients: content.ingredients,
        createdBy: userId,
      });

      console.log(`trying to make req to recipe book`);
      if (content) {
        console.log(`first if statement`);
        apiClient.addToRecipeBook(body);
        console.log(`add to recipe book success`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Ingredients carousel and related functions

  const [carouselIngredients, setCarouselIngredients] = useState([

    {
      id: "1",
      name: "Broccoli",
      image:
        "https://chatelaine.com/wp-content/uploads/2009/06/jamie-oliver-broccoli-salad-square.jpg",
    },
    {
      id: "2",
      name: "Pasta",
      image:
        "https://www.allrecipes.com/thmb/fclPUtUAfb-SvePj3o4crWTsFcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241920-easy-homemade-pasta-dough-ddmfs-4x3-c7172fe3104e43868f928c077d3a3397.jpg",
    },
    {
      id: "3",
      name: "Tomato",
      image:
        "https://post.healthline.com/wp-content/uploads/2020/09/tomatoes-1200x628-facebook-1200x628.jpg",
    },
    {
      id: "4",
      name: "Potato",
      image:
        "https://www.lovefoodhatewaste.com/sites/default/files/styles/twitter_card_image/public/2022-08/Potatoes-shutterstock-1721688538.jpg?h=1dd3cf61&itok=1oEGDr7w",
    },
    {
      id: "5",
      name: "Oil",
      image:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321246/olive-oil-in-a-bottle-which-may-be-used-on-the-face.jpg",
    },
    {
      id: "6",
      name: "Bread",
      image:
        "https://www.backerhausveit.com/wp-content/uploads/2021/03/17783-1.jpg",
    },
    {
      id: "7",
      name: "Onion",
      image:
        "https://hosstools.com/wp-content/uploads/2021/01/yellow-sweet-spanish-utah-onion.jpg",
    },
    {
      id: "8",
      name: "Eggs",
      image:
        "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-eggs-732x549-thumbnail-732x549.jpg",
    },
    {
      id: "9",
      name: "Rice",
      image:
        "https://cf-images.us-east-1.prod.boltdns.net/v1/static/507936866/f936391e-9328-4690-887e-d327ffc0a433/29040a0e-90c3-4c63-9705-387fdb7384d8/1800x1012/match/image.jpg",
    },
    {
      id: "10",
      name: "Flour",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMGLiGUi7KqUtI9z-Gn-btmq_U-R4qzaOIA&usqp=CAU",
    },
    {
      id: "11",
      name: "Milk",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg",
    },
    {
      id: "12",
      name: "Green Onion",
      image:
        "https://www.thedailymeal.com/img/gallery/whats-the-difference-between-scallions-and-green-onions/l-intro-1672833580.jpg",
    },
    {
      id: "13",
      name: "Apples",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1.00xw:0.631xh;0.00160xw,0.206xh&resize=1200:*",
    },
    {
      id: "14",
      name: "Ranch",
      image: "https://images.heb.com/is/image/HEBGrocery/000163630-1",
    },
    {
      id: "15",
      name: "Honey",
      image:
        "https://www.jessicagavin.com/wp-content/uploads/2019/02/honey-pin.jpg",
    },
  ]);
  // Add more ingredients with their names and image paths here

  return (
    <Box sx={{ minHeight: "90vh", backgroundColor: "#C98C93" }}>
      {/* <div className="Page"> */}
      <div className="banner">
        <h1 className="StirTime">Time To Stir!</h1>

        <p className="commoners">
          Choose up to 5 ingredients or click/drag from common items from the
          carsouel into the textbox!{" "}
        </p>
      </div>
      {/* seperation banner */}
      <div className="ChosenCusine">
        Chosen Cuisine: {selectedCuisine || ""}
      </div>

      {/* renders the ingredientcarousel components by passing its props   */}
      <IngredientsList
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        onAddIngredient={handleAddIngredient}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setErrorMessage={handleErrorMessage}
      />

      <IngredientsCarousel
        setCarouselIngredients={setCarouselIngredients}
        carouselIngredients={carouselIngredients}
        // onDragIngredient={handleDragIngredient}
        onAddIngredient={handleAddIngredient}
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        setErrorMessage={handleErrorMessage}
        errorMessage={errorMessage}
      />
      <div className="butttons">
        <Link to="/create-recipe" onClick={handleSubmit}>
          <button className="BACKbutton">BACK</button>
        </Link>
        <Link to="/recipe-result" onClick={handleSubmit}>
          <button className="MIXbutton">MIX</button>
        </Link>
      </div>

      {/* {madeQuery && <RecipeResult recipe={recipe} />} */}
      {/* </div> */}
    </Box>
  );
};

export default IngredientsPage;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import IngredientsCarousel from "../IngredientsCarousel/IngredientsCarousel";
import IngredientsList from "../IngredientsList/IngredientsList";

const IngredientsPage = () => {
  // setting limitation to the amount of ingredients added
  const maxIngredients = 5;
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const [selectedCuisine, setSelectedCuisine] = useState("");
  // Get the location object
  const location = useLocation();
  // Use useEffect to parse the query string whenever the location changes
  useEffect(() => {
    const values = queryString.parse(location.search);
    setSelectedCuisine(values.cuisine);
  }, [location]);

  const [inputValue, setInputValue] = useState("");

  // handling the update of the inputvalue when the user types in the input field

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // adding a new ingredient to the selected ingredient list
  const handleAddIngredient = () => {
    if (selectedIngredients.length >= maxIngredients) {
      alert("You cannot enter more than 5 ingredients.");
      return;
    }
    if (selectedIngredients.length < 5 && inputValue.trim() !== "") {
      setSelectedIngredients([...selectedIngredients, inputValue]);
      setInputValue("");
    }
  };

  // Ingredients carousel and related functions
  const carouselIngredients = [
    {
      id: "1",
      name: "broccoli",
      image:
        "https://chefsmandala.com/wp-content/uploads/2018/03/Broccoli-600x338.jpg",
    },
    {
      id: "2",
      name: "pasta",
      image:
        "https://www.allrecipes.com/thmb/fclPUtUAfb-SvePj3o4crWTsFcM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241920-easy-homemade-pasta-dough-ddmfs-4x3-c7172fe3104e43868f928c077d3a3397.jpg",
    },
    {
      id: "3",
      name: "tomato",
      image:
        "https://post.healthline.com/wp-content/uploads/2020/09/tomatoes-1200x628-facebook-1200x628.jpg",
    },
    // Add more ingredients with their names and image paths here
  ];

  // handing drag event on an ingredient in the caroseul
  const handleDragIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  return (
    <div>
      <div className="ChosenCusine">Chosen Cuisine: {selectedCuisine || ""}</div>
      {/* renders the ingredientcarousel components by passing its props   */}
      <IngredientsCarousel
        carouselIngredients={carouselIngredients}
        onDragIngredient={handleDragIngredient}
      />
      <IngredientsList
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        onAddIngredient={handleAddIngredient}
        inputValue={inputValue}
        setInputValue={setInputValue}
        // Pass the handleDeleteIngredient function to IngredientsList
      />
    </div>
  );
};

export default IngredientsPage;

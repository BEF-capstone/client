import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import IngredientsCarousel from "../IngredientsCarousel/IngredientsCarousel";
import IngredientsList from "../IngredientsList/IngredientsList";
import RecipeResult from "../RecipeResult/RecipeResult";
/* REDUX IMPORTS */
import { useDispatch } from "react-redux";
import { setData } from "../../redux/store";
import axios from "axios"; // HTTP client library
import "./IngredientsPage.css";


const IngredientsPage = () => {
  // setting limitation to the amount of ingredients added
  const maxIngredients = 5;
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  // in order to make sure the selected cuisine renders
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [madeQuery, setMadeQuery] = useState(false);
  // redux dispatch
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(""); // New state to store error message
  const [inputValue, setInputValue] = useState("");
  // handling the update of the inputvalue when the user types in the input field

  
/////////////////////////////////////////////////////////
// in order to make sure the selected cuisine renders 

  const [selectedCuisine, setSelectedCuisine] = useState("");

  // Get the location object
  const location = useLocation();

  // Use useEffect to parse the query string whenever the location changes
  useEffect(() => {
    const values = queryString.parse(location.search);
    setSelectedCuisine(values.cuisine);
  }, [location]);
/////////////////////////////////////////////////////////



  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");

  };
  
  // adding a new ingredient to the selected ingredient list
  const handleAddIngredient = () => {
    if (selectedIngredients.length >= maxIngredients) {
      setErrorMessage("You cannot enter more than 5 ingredients.");
      console.log("this is an error")
      return;
    }
    if (selectedIngredients.length < 5 && inputValue.trim() !== "") {
      setSelectedIngredients([...selectedIngredients, inputValue]);
      setInputValue("");
      setErrorMessage("");

    }
  };


  const handleSubmit = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        cuisine: selectedCuisine,
        ingredients: selectedIngredients,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Make post request
    try {
      const response = await fetch(
        "http://localhost:3001/api/openAi/create_recipe",
        options
      );
      const data = await response.json();
      let content = await data.choices[0].message.content;
      console.log(content);
      console.log(typeof content);
      content = JSON.parse(content);

      dispatch(setData(content));
      setRecipe(content);
      // setRecipeName(content.recipe_name);
      // console.log("recipe Name: ", recipeName);
      //
      setMadeQuery(true);
      // when madeQuery, render recipe card
    } catch (e) {
      console.error(e);
    }
  }
  // handing drag event on an ingredient in the caroseul
  const handleDragIngredient = (carouselIngredients) => {
    setSelectedIngredients([...selectedIngredients, carouselIngredients]);
  };


  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...selectedIngredients];
    updatedIngredients.splice(index, 1);
    setSelectedIngredients(updatedIngredients);
    setErrorMessage(""); // Clear the error message when an ingredient is removed
  };
  // Ingredients carousel and related functions


  const carouselIngredients = [
    {
      id: "1",
      name: "broccoli",
      image:
"https://chatelaine.com/wp-content/uploads/2009/06/jamie-oliver-broccoli-salad-square.jpg",    },
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
    {
      id: "4",
      name: "potato",
      image:
        "https://www.lovefoodhatewaste.com/sites/default/files/styles/twitter_card_image/public/2022-08/Potatoes-shutterstock-1721688538.jpg?h=1dd3cf61&itok=1oEGDr7w",
    },
    {
      id: "5",
      name: "oil",
      image:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321246/olive-oil-in-a-bottle-which-may-be-used-on-the-face.jpg",
    },
    {
      id: "6",
      name: "bread",
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
    // Add more ingredients with their names and image paths here
  ];


  return (
    <>

 <div className="Page">
           {/* seperation banner  */}
      <div className="banner">
        <h1 classsname= "words">Let's Get Cooking!</h1>
     
      </div>
      <div className="back">
      <Link to="/create-recipe">
        <button >Back</button>
      </Link> 
      </div>
      
      {/* seperation banner */}
      <div className="ChosenCusine">
        Chosen Cuisine: {selectedCuisine || ""}
      </div>

      <div className="banner2">

<p className="words"> Add 5 ingredients or click/drag from the carsouel into the textbox! </p>

</div>
      
      {/* renders the ingredientcarousel components by passing its props   */}
      <IngredientsList
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        onAddIngredient={handleAddIngredient}
        inputValue={inputValue}
        handleDeleteIngredient={handleDeleteIngredient} // Pass the updated handleDeleteIngredient function to IngredientsList

        setInputValue={setInputValue}
      />
        {errorMessage && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {errorMessage}
                </Typography>
              )}
      <IngredientsCarousel
        carouselIngredients={carouselIngredients}
        onDragIngredient={handleDragIngredient}
        selectedIngredients={selectedIngredients}

        setSelectedIngredients={setSelectedIngredients}
        handleAddIngredient={handleAddIngredient}
      />

      <Link to="/recipe-result" onClick={handleSubmit}>
        <button>MIX</button>
      </Link>

      {/* {madeQuery && <RecipeResult recipe={recipe} />} */}
        setSelectedIngredients= {setSelectedIngredients}
        
      />


      <Link to="/recipe-result">
        <button className="MIX">MIX</button>
      </Link>
    </div>
    </>

  );
};

export default IngredientsPage;

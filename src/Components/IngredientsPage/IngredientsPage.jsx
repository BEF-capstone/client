import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./IngredientsPage.css";
import queryString from "query-string";
import IngredientsCarousel from "../IngredientsCarousel/IngredientsCarousel";
import IngredientsList from "../IngredientsList/IngredientsList";
/* REDUX IMPORTS */
import { useDispatch } from "react-redux";
import { setData } from "../../redux/store";
/* ApiClient */
import apiClient from "../../services/apiClient";

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

  // Use useEffect to parse the query string whenever the location changes
  useEffect(() => {
    const values = queryString.parse(location.search);
    setSelectedCuisine(values.cuisine);
    console.log(selectedCuisine);
    console.log(selectedIngredients);
  }, [location]);

  // Handle search input
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding a new ingredient to the selected ingredient list
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

  // handing drag event on an ingredient in the carousel
  const handleDragIngredient = (carouselIngredient) => {
    setSelectedIngredients([...selectedIngredients, carouselIngredient.name]);
  };

  // make a POST request to fetch a new recipe from openAI api
  const handleSubmit = async () => {
    try {
      // pass cuisine and ingredients array as body parameters
      let body = JSON.stringify({
        cuisine: selectedCuisine,
        ingredients: selectedIngredients,
      });
      // make POST req to openAI endpoint
      const response = await apiClient.createNewRecipe(body);
      // get data
      const data = await response.data;
      // recipe info
      let content = await data.choices[0].message.content;
      content = JSON.parse(content);
      console.log(content);
      // send recipe to redux, to render in recipe card
      dispatch(setData(content));
      setRecipe(content);
      setMadeQuery(true);
      // POST recipe to recipe book table
      body = JSON.stringify({
        recipe_name: content.recipeName,
        description: content.recipeDescription,
        prep_time: content.prepTime,
        difficulty: content.difficulty,
        servings: content.servings.toString(),
        instructions: content.instructions,
        ingredients: content.ingredients,
        createdBy: userId,
      });
      if (content) {
        apiClient.addToRecipeBook(body);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Ingredients carousel and related functions
  const carouselIngredients = [
    {
      id: "1",
      name: "broccoli",
      image:
        "https://chatelaine.com/wp-content/uploads/2009/06/jamie-oliver-broccoli-salad-square.jpg",
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
    <div className="Page">
      {/* seperation banner  */}
      <div className="banner">
        <h1>Let's Get Cooking!</h1>
        <p>
          To get started, input 5 ingredients or click/drag from common items
          from the carsouel into the textbox!{" "}
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
        // Pass the handleDeleteIngredient function to IngredientsList
      />
      <IngredientsCarousel
        carouselIngredients={carouselIngredients}
        onDragIngredient={handleDragIngredient}
        onAddIngredient={handleAddIngredient}
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        handleAddIngredient={handleAddIngredient}
      />

      <Link to="/recipe-result" onClick={handleSubmit}>
        <button>MIX</button>
      </Link>
    </div>
  );
};

export default IngredientsPage;

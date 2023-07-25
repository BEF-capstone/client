import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import "./IngredientsPage.css"


const IngredientsPage = () => {
// using State to handle the changing values of ingredients and the input box
  const [ingredients, setIngredients]= useState([]);
  const [inputValue, setInputValue]= useState("");
  // Initialize state for the selected cuisine
  const [selectedCuisine, setSelectedCuisine] = useState("");
  // Get the location object
  const location = useLocation();
  // Use useEffect to parse the query string whenever the location changes
  useEffect(() => {
    const values = queryString.parse(location.search);
    setSelectedCuisine(values.cuisine);
  }, [location]);
  const maxIngredients = 5;
  //changes value (inputValue) of the input field when a user puts in something different
  const handleInputValue = (e)=>{
    setInputValue(e.target.value);
  }
  //using spreader so that the previous ingredient entered in the array and populated
  //while the field input is set back to an empty string
  const HandleAddIngredient = (e)=>{
    if (ingredients.length >= maxIngredients) {
      alert("You cannot enter more than 5 ingredients.");
      return;
    }
    if (ingredients.length < 5 && inputValue.trim() !== "")
    { setIngredients([...ingredients, inputValue]);
    setInputValue('')};
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      HandleAddIngredient();
    }
  };

  return (
    <div>
      <img src="../images/ceramic bowl.png" className="bowl-image" alt="Bowl" />
      <img 
        src="../images/ladle.png" 
        className="ladle-image" 
        alt="Ladle stirring" 
        style={{animationPlayState: ingredients.length > 0 ? 'running' : 'paused'}}
      />

      <Box sx={{ position: 'absolute', top: '150px', left: '150px' }}>
        <Typography variant="h5" sx={{ color: 'darkslategray', fontFamily: 'Italiana', fontSize: '30px' }}>
          {`Chosen Cuisine: ${selectedCuisine || ''}`}
        </Typography>
      </Box>
      <div className="return">
        <div className="form-container">
          {/* Input field with a horizontal line */}
          <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          onKeyDown={handleKeyPress}
          placeholder="Enter an ingredient"
          // Hide the default input box styling
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: 'black',
            width: '100%',
            borderBottom: '1px solid #412020', // Add this
            background: 'transparent', // Add this
          }}
        />
          {/* after button is clicked user can put another ingredient  */}
          <button
            onClick={HandleAddIngredient}
            // Transparent background for the "STIR" button
            style={{
              padding: '8px 16px',
              background: 'transparent',
              color: '#3B945E',
              border: '3px solid #3B945E',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: 20,
            }}
          >
            STIR
          </button>
        </div>
        <h5 className="ingredient_title">Ingredients</h5>
        <Link to="/recipe-result">
          <button>MIX</button>
        </Link>
        <div className="ingredients-list">
          <ul>
            {ingredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default IngredientsPage;
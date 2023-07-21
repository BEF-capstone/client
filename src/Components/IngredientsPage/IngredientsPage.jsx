import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Typography, Box } from '@mui/material';
import "./IngredientsPage.css"



const IngredientsPage = () => {

// using State to handle the changing values of ingredients and the input box 
  const [ingredients, setIngredients]= useState([]);
  const [inputValue, setInputValue]= useState(" ");


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
      <Box sx={{ position: 'fixed', top: '150px', left: '150px' }}>
        <Typography variant="h5" sx={{ color: 'darkslategray', fontFamily: 'Italiana' }}>
          {`Chosen Cuisine: ${selectedCuisine || ''}`}
        </Typography>
      </Box>


     

        <div className="return"> 
 
    <div className="form-container"> 

        <input 

          type= "type"
          value= {inputValue}
          onChange= {handleInputValue}
          onKeyDown={handleKeyPress}
          placeholder="Enter an Ingredient"
          />

{/* after button is clicked user can put another ingredient  */}
          <button onClick={HandleAddIngredient}> 
          Enter Ingredient
          </button>
          </div>

          <div className="ingredients-list"> 

{/*  */}
          <ul>
            {ingredients.map((ingredients, index) =>(
            <p key ={index}> {ingredients} </p> ))}
          </ul>
          </div>
</div>
    </div>
  )
}

export default IngredientsPage;


//the ingredients that the user lsits that they need 



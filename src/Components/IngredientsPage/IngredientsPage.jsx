import { useState } from "react"
import React from 'react'
import "./IngredientsPage.css"


const IngredientsPage = () => {

// using State to handle the changing values of ingredients and the input box 
  const [ingredients, setIngredients]= useState([]);
  const [inputValue, setInputValue]= useState(" ");
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
  );
};

export default IngredientsPage


//the ingredients that the user lsits that they need 



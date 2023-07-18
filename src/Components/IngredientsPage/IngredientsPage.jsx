import { useState } from "react"
import React from 'react'

const IngredientsPage = () => {

// using State to handle the changing values of ingredients and the input box 
  const [ingredients, setIngredients]= useState([]);
  const [inputValue, setInputValue]= useState(" ");



  //changes value (inputValue) of the input field when a user puts in something different 
  const handleInputValue = (e)=>{
    setInputValue(e.target.value);
  }

  //using spreader so that the previous ingredient entered in the array and populated 
  //while the field input is set back to an empty string 
  const HandleAddIngredient = (e)=>{
    setIngredients([...ingredients, inputValue]);
    setInputValue('');

  }
  return (
    <div> IngredientsPage
          <input 
          type= "type"
          value= {inputValue}
          onChange= {handleInputValue}
          placeholder="Enter an Ingredient"
          />

{/* after button is clicked user can put another ingredient  */}
          <button onClick={HandleAddIngredient}> 
          Please enter another Ingredient
          </button>

{/*  */}
          <ul>
            {ingredients.map((ingredients, index) =>(
            <p key ={index}> {ingredients} </p> ))}
          </ul>
    </div>
  );
};

export default IngredientsPage


//the ingredients that the user lsits that they need 



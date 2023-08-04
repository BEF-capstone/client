import React from "react";
import { Link } from "react-router-dom";
import "../IngredientsList/IngredientsList.css"

const IngredientsList = ({
  selectedIngredients,
  setSelectedIngredients,
  onAddIngredient,
  inputValue,
  setInputValue,
  setErrorMessage

}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAddIngredient();
    }
  };

  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...selectedIngredients];
    updatedIngredients.splice(index, 1);
    setSelectedIngredients(updatedIngredients);
    setErrorMessage(null)
    console.log("done deleting ingredient")
    }

  return (
    <div className="ingredient-textbox">
   
      <h2>Ingredients List:</h2>
      <ul className="INList">
        {selectedIngredients.map((ingredient, index) => (
          
          <div className="results" key={index} > 
            <p className="list"  >{ingredient}</p>

            <button className="Delete-button" onClick={() => handleDeleteIngredient(index)}>
              <p > x </p>
            </button>
            </div>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center" }}>

     
      <input
        type="text"
        className="Text-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter an ingredient"
        style={{
          border: "none",
          outline: "black",
          fontSize: "16px",
          color: "black",
          width: "55vw",
          borderBottom: "1px solid white",
          background: "transparent",
        }}
      />
      <button
        onClick={onAddIngredient}
        style={{
          padding: "8px 16px",
          background: "transparent",
          color: "black",
          border: "3px solid #white",
          borderRadius: "5px",
          borderColor: "white",
          fontSize: "16px",
          cursor: "pointer" ,
          marginLeft: "10px",
        }}
      >
        STIR
      </button>
      </div>
    </div>
  );
};

export default IngredientsList;

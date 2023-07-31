import React from "react";
import { Link } from "react-router-dom";
import "../IngredientsList/IngredientsList.css"

const IngredientsList = ({
  selectedIngredients,
  setSelectedIngredients,
  onAddIngredient,
  inputValue,
  setInputValue,
  handleDeleteIngredient
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAddIngredient();
    }
  };


  return (
    <div className="ingredient-textbox">
   
      <h2>Ingredients List:</h2>
      {/*  */}

      <ul>
        {selectedIngredients.map((ingredient, index) => (
          <>
            <p className="list" key={index}>{ingredient}</p>

            <button className="Delete-button" onClick={() => handleDeleteIngredient(index)}>
              <p> x </p>
            </button>
          </>
        ))}
      </ul>
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
          width: "100%",
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
          marginTop: 20,
        }}
      >
        STIR
      </button>
   
    </div>
  );
};

export default IngredientsList;

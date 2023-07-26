import React from "react";
import { Link } from "react-router-dom";
import "../IngredientsList/IngredientsList.css"

const IngredientsList = ({
  selectedIngredients,
  setSelectedIngredients,
  onAddIngredient,
  inputValue,
  setInputValue,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAddIngredient();
    }
  };

  //structuring the delte function when an ingredient is added
  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...selectedIngredients];
    updatedIngredients.splice(index, 1);
    setSelectedIngredients(updatedIngredients);
  };

  return (
    <div className="ingredient-textbox">
        {/* seperation banner  */}
      <div className="banner">
        <h1>Let's Get Started</h1>
      </div>
      {/* seperation banner */}
      <h2>Ingredients List:</h2>

      <ul>
        {selectedIngredients.map((ingredient, index) => (
          <>
            <p key={index}>{ingredient}</p>

            <button onClick={() => handleDeleteIngredient(index)}>
              Remove
            </button>
          </>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter an ingredient"
        style={{
          border: "none",
          outline: "none",
          fontSize: "16px",
          color: "black",
          width: "100%",
          borderBottom: "1px solid #412020",
          background: "transparent",
        }}
      />
      <button
        onClick={onAddIngredient}
        style={{
          padding: "8px 16px",
          background: "transparent",
          color: "#3B945E",
          border: "3px solid #3B945E",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: 20,
        }}
      >
        STIR
      </button>
      <Link to="/recipe-result">
        <button>MIX</button>
      </Link>
    </div>
  );
};

export default IngredientsList;
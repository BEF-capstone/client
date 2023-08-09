//this file purpose is to render the ingredients within a carousel
import React, { useState, useEffect } from "react";
import "./IngredientsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IngredientsCarousel = ({
  carouselIngredients,
  setCarouselIngredients,
  selectedIngredients,
  setSelectedIngredients,
  setErrorMessage,
  errorMessage,
}) => {
  const maxIngredients = 5;
  const [currentSlide, setCurrentSlide] = useState(0);

  //Ingredientnmae
  const [selectedIngredientNames, setSelectedIngredientNames] = useState([]);

  ///Handling click:
  const handleIngredientClick = (ingredient) => {
    if (selectedIngredients.length >= maxIngredients) {
      setErrorMessage("You have entered the max number of ingredients.");
      return;
    }
    const ingredientName = ingredient.name;
    if (selectedIngredientNames.includes(ingredientName)) {
      // If the ingredient is already in the list, remove it
      setSelectedIngredients((selectedIngredients) =>
        selectedIngredients.filter(
          (ingredient) => ingredient.name !== ingredientName
        )
      );
    } else {
      // remove the selectedingredients from carouselIngredients
      setCarouselIngredients((carouselIngredients) =>
      carouselIngredients.filter(
        (carouselIngredient) => carouselIngredient.name !== ingredientName
        ))}
    
    setSelectedIngredients((prevIngredients) => [
      ...prevIngredients,
      ingredient.name,
    ]);
  };

  useEffect(() => {
    setSelectedIngredientNames([
      selectedIngredients.map((ingredient) => ingredient.name),
    ]);
  }, [carouselIngredients]);

  // The Drag const account so passing the information from dragging to putting it in the text box
  const handleDragStart = (event, ingredient) =>
    event.dataTransfer.setData("text/plain", ingredient.name);

  // Function to handle the drag over event on the carousel
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to handle the drop event on the carousel
  const handleDrop = (event) => {
    event.preventDefault();

    const ingredientName = event.dataTransfer.getData("text/plain");

    setSelectedIngredients((prevIngredients) => {
      if (
        prevIngredients.length >= maxIngredients ||
        prevIngredients.includes(ingredientName)
      ) {
        return prevIngredients;
      }
      return [...prevIngredients, { ingredientName }];
    });
  };

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 3, 0));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      Math.min(prevSlide + 3, carouselIngredients.length - 1)
    );
  };
  const totalPages = Math.ceil(carouselIngredients.length / 3); // Calculate total number of pages

  return (
    <>
      <div className="ingredient-containment">
        <p className="commoner"> Common Ingredients</p>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
        {/* Render the error message */}
        <div className="MOVE">
          <div className="images-wrapper">
            <button
              className="Pagnation"
              onClick={handlePrevious}
              disabled={currentSlide === 0}
            >
              ←
            </button>
            {carouselIngredients
              .slice(currentSlide, currentSlide + 3)
              .map((carouselIngredients, index) => (
                <div
                  key={carouselIngredients.id}
                  className="ingredient-slide"
                  onDragOver={(e) => handleDragOver(e)} // Attach handleDragOver as an event handler
                  onDrop={(e) => handleDrop(e, carouselIngredients)} // Attach handleDrop as an event handler
                  onClick={() => handleIngredientClick(carouselIngredients)} // onClick handler for the ingredient slide
                >
                  <img
                    src={carouselIngredients.image}
                    alt={`Ingredient: ${carouselIngredients.name}`}
                    className="ingredient-image"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, carouselIngredients)}
                  />
                   <p className="ingredient-name">{carouselIngredients.name}</p> {/* Display the ingredient name here */}

                </div>
              ))}

            <button
              onClick={handleNext}
              className="Pagnation"
              disabled={currentSlide === carouselIngredients.length - 3}
            >
              →
            </button>
          </div>
        </div>
        <p className="page-count">
          Page {Math.floor(currentSlide / 3) + 1} of {totalPages}
        </p>
      </div>
    </>
  );
};

export default IngredientsCarousel;

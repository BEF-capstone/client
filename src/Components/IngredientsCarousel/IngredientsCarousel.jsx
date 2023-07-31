//this file purpose is to render the ingredients within a carousel
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./IngredientsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IngredientsCarousel = ({ carouselIngredients, selectedIngredients, setSelectedIngredients}) => {
    const maxIngredients = 5;
    const [currentSlide, setCurrentSlide] = useState(0);

  /// The Drag const account so passing the information from dragging to putting it in the text box
  const handleDragStart = (event, ingredient) =>
    event.dataTransfer.setData("text/plain", ingredient.name);

  // Function to handle the drag over event on the carousel
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to handle the drop event on the carousel
// git push --set-upstream origin ingredients

const handleDrop = (event, ingredient) => {
    event.preventDefault();

    const ingredientName = event.dataTransfer.getData("text/plain");
    onDragIngredient(ingredientName);

    setSelectedIngredients((prevIngredients) => {
      if (prevIngredients.length >= maxIngredients || prevIngredients.includes(ingredientName)) {
        return prevIngredients;
      }
      return [...prevIngredients, ingredientName];
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
  ///Handling click:
  const handleIngredientClick = (ingredient) => {
      if (selectedIngredients.length >= maxIngredients) {
          alert("You cannot add more than 5 ingredients.");
          return;
        }
        
        console.log("success")
        setSelectedIngredients((prevIngredients) => [
            ...prevIngredients,
        ingredient.name,
      ]);

  };

 
  return (
    <>
    {/* <h1 classname= "words">Ingredient Carousel</h1> */}
    <div className="ingredient-containment">

       <div className="MOVE"> 
              <div className="images-wrapper">
        <button className="Pagnation" onClick={handlePrevious} disabled={currentSlide === 0}>
          Previous
        </button>
                {carouselIngredients
                  .slice(currentSlide, currentSlide + 3)
                  .map((carouselIngredients, index) => (
                    // <div key={index} className="image-slide">
                    <div
                      key={carouselIngredients.id}
                      className="ingredient-slide"
                      onDragOver={(e) => handleDragOver(e)} // Attach handleDragOver as an event handler
                      onDrop={(e) => handleDrop(e, carouselIngredients)} // Attach handleDrop as an event handler
                      onClick={() => handleIngredientClick(carouselIngredients)
                      } // Added the onClick handler for the ingredient slide
                    >
                      <img
                        src={carouselIngredients.image}
                        alt={`Ingredient: ${carouselIngredients.name}`}
                        className="ingredient-image"
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, carouselIngredients)}
                      />{" "}
                      
                    </div>
              
            ))}

        <button
          onClick={handleNext}
          className="Pagnation"
          
          disabled={currentSlide === carouselIngredients.length - 3}
          >
          Next
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

// 

export default IngredientsCarousel;

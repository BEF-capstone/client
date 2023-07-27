//this file purpose is to render the ingredients within a carousel
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./IngredientsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IngredientsCarousel = ({ carouselIngredients, onDragIngredient, setSelectedIngredients, onAddIngredient, handleAddIngredient}) => {
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
    // Call the onDragIngredient function passed as a prop with the clicked ingredient name
    console.log("success")
    
    onDragIngredient(ingredient.name);


    // if (carouselIngredients.length >= maxIngredients) {
    //     alert("You cannot enter more than 5 ingredients.");
    //     return;
    //   }
    //   if (carouselIngredients.length < 5 && inputValue.trim() !== "") {
    //     setSelectedIngredients([...carouselIngredients, inputValue]);
    //     setInputValue("");
    //   }
    
    

  };

  useEffect(() => {
    // Function to automatically scroll to the next slide after a specific interval
    const autoScroll = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 3 < carouselIngredients.length ? prevSlide + 3 : 0
      );
    }, 3000);
    return () => clearInterval(autoScroll);
  }, [carouselIngredients.length]);

  return (
    <div className="ingredient-containment">
      <>
        <h1>Ingredient Carousel</h1>

        {/*  */}
        <button onClick={handlePrevious} disabled={currentSlide === 0}>
          Previous
        </button>
        <div className="images-wrapper">
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
        </div>
        <button
          onClick={handleNext}

          disabled={currentSlide === carouselIngredients.length - 3}
        >
          Next
        </button>
        <p className="page-count">
          Page {Math.floor(currentSlide / 3) + 1} of {totalPages}
        </p>
       
      </>
    </div>
  );
};

export default IngredientsCarousel;

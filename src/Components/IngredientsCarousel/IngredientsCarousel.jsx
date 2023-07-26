//this file purpose is to render the ingredients within a carousel

import React from "react";
import Slider from "react-slick";
import "./IngredientsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IngredientsCarousel = ({ carouselIngredients, onDragIngredient }) => {
  //settings for the carousel movement
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /// The Drag const account so passing the information from dragging to putting it in the text box
  const handleDragStart = (event, ingredient) =>
    event.dataTransfer.setData("text/plain", ingredient.name);

  // Function to handle the drag over event on the carousel
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to handle the drop event on the carousel
  const handleDrop = (event, ingredient) => {
    event.preventDefault();
    // Get the ingredient name from the data transferred during the drag operation

    const ingredientName = event.dataTransfer.getData(
      "text/plain",
      ingredient.name
    );
    // Call the onDragIngredient function passed as a prop with the dropped ingredient name

    onDragIngredient(ingredientName);
  };

  return (
    <div className="ingredient-containment">
      <h1>Ingredient Carousel</h1>
      {/* <div>  */}
      <Slider {...settings}>
        {carouselIngredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="ingredient-slide"
            onDragOver={(e) => handleDragOver(e)} // Attach handleDragOver as an event handler
            onDrop={(e) => handleDrop(e, ingredient)} // Attach handleDrop as an event handler
          >
            
            <img
              src={ingredient.image}
              alt={`Ingredient: ${ingredient.name}`}
              className="ingredient-image"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, ingredient)}
            />
            <p>{ingredient.name}</p>

          </div>
        ))}
      </Slider>
        {/* </div> */}
    </div>
  );
};

export default IngredientsCarousel;

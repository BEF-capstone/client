// Import necessary dependencies
import React from 'react';
import './CuisineType.css'; // Import the CSS file for styling

// Define the CuisineType component
const CuisineType = ({ cuisines, selectedCuisine, handleCuisineSelection }) => {
  // Event handler for cuisine click
  const handleCuisineClick = (cuisine) => {
    handleCuisineSelection(cuisine);
  };

  // Render the JSX content
  return (
    <div>
      <h2>Select Cuisine:</h2>
      <div className="cuisine-grid">
        {/* Render the cuisines as cuisine items */}
        {cuisines.map((cuisine) => (
          <div
            key={cuisine.name}
            className={`cuisine-item ${selectedCuisine === cuisine.name ? 'selected' : ''}`}
            onClick={() => handleCuisineClick(cuisine.name)}
          >
            <img src={cuisine.image} alt={cuisine.name} className="cuisine-image" />
            <span className="cuisine-name">{cuisine.name}</span>
            {selectedCuisine === cuisine.name && <span className="selected-indicator">Selected</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisineType;









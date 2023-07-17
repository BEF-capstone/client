// Import necessary dependencies
import React, { useState } from 'react';
import CuisineType from '../CuisineType/CuisineType';

// Define the CuisinePage component
const CuisinePage = () => {
  // Define state variables using the useState hook
  const [searchInput, setSearchInput] = useState(''); // State variable for search input
  const [selectedCuisine, setSelectedCuisine] = useState(""); // State variable for selected cuisine


  // An array of objects, each representing a cuisine and its image.
  const initialCuisines = 

  // Each cuisine object has a name and an image URL.
  // These will be displayed in the CuisineType component.
  [
    { name: "Ghanaian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpK2KICcB7qwod7JdMQ2AgOT8GcoSHh5IhgQ&usqp=CAU" },
    { name: "Togolese", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Clhc5s04hqozbsftAGyAUIGG99Y9mSqCWw&usqp=CAU" },
    { name: "Mexican", image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505" },
    // more cuisines later
  ];

  
  const [cuisines, setCuisines] = useState([...initialCuisines]);

  // Event handler for the search input change called whenever the search input field changes.
  // It updates the state of the searchInput and cuisines variables based on the input.
  const handleSearchInputChange = (event) => {
    const userInput = event.target.value;
    setSearchInput(userInput);


    // If the user has entered something into the search input, we'll try to find any matching cuisines.
    // If we find any, we move them to the top of the list. If we don't find any, we set cuisines to an empty array.
    // If the search input is empty, we reset the cuisines back to their initial state.

    if (userInput !== '') {
      const matchingCuisine = initialCuisines.find(cuisine =>
        cuisine.name.toLowerCase().includes(userInput.toLowerCase())
      );

      if (matchingCuisine) {
        const newCuisines = [
          matchingCuisine,
          ...initialCuisines.filter(cuisine => cuisine.name !== matchingCuisine.name)
        ];
        setCuisines(newCuisines);
      } else {
        setCuisines([]);
      }
    } else {
      setCuisines([...initialCuisines]);
    }
  };

  // Event handler called when a cuisine is selected or deselected.
  // It updates the state of the selectedCuisine variable accordingly.
  const handleCuisineSelection = (cuisine) => {

    // If the clicked cuisine is already selected, we deselect it (set selectedCuisine to empty string).
    // If it's not the currently selected cuisine, we select it (set selectedCuisine to the clicked cuisine).
    if (selectedCuisine === cuisine) {
      setSelectedCuisine("");
    } else {
      setSelectedCuisine(cuisine);
    }
  };

  // includes a search input field and the CuisineType component which displays the cuisines.
  // If there are no cuisines to display (cuisines is an empty array), we display a "No cuisines found." message instead.
  return (
    <div>
      <h2>Cuisine</h2>
      {/* Search input field */}
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Look for cuisine here..."
      />

      {/* Render the CuisineType component */}
      {cuisines.length > 0 ? (
        <CuisineType
          cuisines={cuisines}
          selectedCuisine={selectedCuisine}
          handleCuisineSelection={handleCuisineSelection}
        />
      ) : (
        <p>No cuisines found.</p>
      )}
    </div>
  );
};

export default CuisinePage;










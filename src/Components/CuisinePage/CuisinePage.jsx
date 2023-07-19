// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import CuisineType from '../CuisineType/CuisineType';

// Define the CuisinePage component
const CuisinePage = () => {
  // Define state variables using the useState hook
  const [searchInput, setSearchInput] = useState(''); // State variable for search input
  const [selectedCuisine, setSelectedCuisine] = useState(""); // State variable for selected cuisine

  //State variable for displayed cuisines count, initially set to 9
  const [cuisinesCount, setCuisinesCount] = useState(9);

  // An array of objects, each representing a cuisine and its image.
  const initialCuisines = 

  // Each cuisine object has a name and an image URL.
  // These will be displayed in the CuisineType component.
  [
    { name: "No Cuisine Preference", image: "https://icons.veryicon.com/png/o/miscellaneous/myicon-1/none-1.png"},
    { name: "Ghanaian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpK2KICcB7qwod7JdMQ2AgOT8GcoSHh5IhgQ&usqp=CAU" },
    { name: "Togolese", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Clhc5s04hqozbsftAGyAUIGG99Y9mSqCWw&usqp=CAU" },
    { name: "Mexican", image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505" },
    // more cuisines later
    { name: "Ethiopian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwf1wnMLNWMgy_HBfsx1hEX6KtAUu2YPbEA&usqp=CAU" },
    { name: "Guatemalan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaE-DizjG-nZKuz043OO-cnd1D0PcH8kwPNw&usqp=CAU" },
    { name: "Korean", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-5qM5km_1If_2t8J_yZXGUJtXBeFkkxiQg&usqp=CAU" },
    { name: "French", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSuk-je4r-JBOdyxS1-sLy_NZXQI2x2YJkA&usqp=CAU" },
    { name: "Indonesian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwVXqJMlVFVSxROe3tstmN5cg4cPZOvbQww&usqp=CAU" },
    { name: "American", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5ssyJmXQnEuZiE-cTUWBLvMadzMvxiyfCGi-zCfs69POvlcEfDVPRLY3Gt-yZAHLt-A&usqp=CAU" },
    { name: "Indian", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeKwwkwBRiHHrDbUQX9adx34Jw2RiuvItNg&usqp=CAU" },
    { name: "Taiwanese", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6O2GHx06zQjy5dAcq6OLwMUOoHSmxGlAWYw&usqp=CAU" },
    { name: "Morrocan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXC-AZvunVD4wKaNNB2iZdUUP_hrZ-v3yuoQ&usqp=CAU" },
  ];

  //Usine slice to display only the first 'cuisinesCount' cuisines
  const [cuisines, setCuisines] = useState(initialCuisines.slice(0, cuisinesCount));

  useEffect(() => {
    document.body.style.backgroundColor = "#FEFCF0";
  }, []);

 // Function to handle clicking the Load More button
 const handleLoadMore = () => {
  setCuisinesCount(cuisinesCount + 9); // increase the count by 9
  // No need to call setCuisines here, it will be updated in the useEffect hook below.
};

// An effect that runs whenever cuisinesCount changes.
// It updates the list of cuisines to display.
useEffect(() => {
  setCuisines(initialCuisines.slice(0, cuisinesCount));
}, [cuisinesCount]);

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
// If there are no cuisines to display (cuisines is an empty array), we display a "No cuisines found." message instead.
return (
<Box >
    
  <Typography variant="h2" gutterBottom sx={{ mb: 10, mt: 10 }}>Cuisine</Typography>

  <TextField
    value={searchInput}
    onChange={handleSearchInputChange}
    label="Look for cuisine here..."
    variant="standard"
    sx={{ mb: 10, mt: 3, width: '500px' }}
  />

  {cuisines.length > 0 ? (
    <CuisineType
      cuisines={cuisines}
      selectedCuisine={selectedCuisine}
      handleCuisineSelection={handleCuisineSelection}
      handleLoadMore={handleLoadMore}
    />
  ) : (
    <Typography variant="h6">No cuisines found.</Typography>
  )}
</Box>
);
};

export default CuisinePage;
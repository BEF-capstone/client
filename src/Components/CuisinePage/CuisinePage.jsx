import React, { useState, useEffect } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import CuisineType from "../CuisineType/CuisineType";
import { Link as RouterLink } from "react-router-dom";


const CuisinePage = () => {
  const [searchInput, setSearchInput] = useState(""); // State variable for search input
  const [selectedCuisine, setSelectedCuisine] = useState("");

  //State variable for displayed cuisines count, initially set to 9
  const [cuisinesCount, setCuisinesCount] = useState(9);

  // An array of objects, each representing a cuisine and its image.
  const initialCuisines =
    // Each cuisine object has a name and an image URL.
    // These will be displayed in the CuisineType component.
    [
      {
        name: "Ghanaian",
        image:
          "https://travelfoodatlas.com/wp-content/uploads/2021/10/Jollof-rice.jpg.webp",
      },
      {
        name: "Togolese",
        image:
          "https://ourbigescape.com/wp-content/uploads/2023/01/8.-Agatogo.jpg",
      },
      {
        name: "Mexican",
        image:
          "https://images.pexels.com/photos/5737240/pexels-photo-5737240.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        name: "Ethiopian",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIims8OA_L3VZP-vEFYWul5RzHswxKs_sIA&usqp=CAU",
      },
      {
        name: "Palestinian",
        image: "https://facts.net/wp-content/uploads/2022/07/Arab-Cuisine.jpg",
      },
      {
        name: "Guatemalan",
        image:
          "https://www.willflyforfood.net/wp-content/uploads/2021/07/guatemalan-tostadas.jpg.webp",
      },
      {
        name: "Brazilian",
        image:
          "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1625766316/Traditional-Brazilian-Food-MAIN/Traditional-Brazilian-Food-MAIN.jpg",
      },
      {
        name: "Indonesian",
        image:
          "https://cdn2.wanderlust.co.uk/media/1024/cropped-shutterstock_1156773637.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131973979270000000",
      },
      {
        name: "Korean",
        image:
          "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        name: "Indian",
        image:
          "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1600://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeKwwkwBRiHHrDbUQX9adx34Jw2RiuvItNg&usqp=CAU",
      },
      {
        name: "Morrocan",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXC-AZvunVD4wKaNNB2iZdUUP_hrZ-v3yuoQ&usqp=CAU",
      },
      {
        name: "Taiwanese",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREjLNJn0kZ-JZylrPeCBM2xzpmTZvlSY_bBQ&usqp=CAU",
      },
      ,
      {
        name: "American",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsiiYazc1vZT_5SljxVx0xF6oM988YOxzkA&usqp=CAU",
      },
      {
        name: "French",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4m6968bUzDqoStvmPXd7T56bXztl-NABSUw&usqp=CAU",
      },
      {
        name: "Cambodian",
        image:
          "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1620068213/Traditional-Cambodian-Dishes-To-Eat-Lok-Lak/Traditional-Cambodian-Dishes-To-Eat-Lok-Lak.jpg",
      },
      {
        name: "Chilean",
        image:
          " https://www.willflyforfood.net/wp-content/uploads/2021/08/argentinian-food-humitas.jpg.webp",
      },
      {
        name: "Chinese",
        image:
          "https://facts.net/wp-content/uploads/2022/07/chinese-cuisine.jpeg",
      },
      {
        name: "Greek",
        image:
          "https://bucketlistjourney.net/wp-content/uploads/2016/06/Gyros-RF-2-2.jpg",
      },
      {
        name: "Filipino",
        image:
          "https://facts.net/wp-content/uploads/2022/07/filipino-cuisine.jpeg",
      },
      {
        name: "Congolese",
        image:
          "https://flavorverse.com/wp-content/uploads/2018/11/Poulet-%C3%A0-la-Moamb%C3%A9-Congolese-Food-640x521.jpg",
      },
      {
        name: "Italian",
        image:
          "https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/intro-1643403830.webp",
      },
      {
        name: "Jamaican",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXXyS61TsRcTf8jKf9e8AT5hkFyo39QxrZg&usqp=CAU",
      },
      {
        name: "Pakistani",
        image:
          "https://photos.smugmug.com/Pakistan/i-4R3fRQL/0/4a7cf4b3/X3/pakistan-trip-206-X3.jpg",
      },
      {
        name: "Puerto Rican",
        image:
          "https://www.tastingtable.com/img/gallery/popular-puerto-rican-foods-you-have-to-try-at-least-once/caldo-santo-1637711661.webp",
      },
      {
        name: "Thai",
        image:
          "https://images.unsplash.com/photo-1616278842935-f36557148755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoYWklMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Vietnamese",
        image:
          "https://images.unsplash.com/photo-1619900950180-4a099c7aaeb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZXRuYW1lc2UlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        name: "Venezuelan",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHcxaretBJ5IvWNkpnH_VcKf-8tz41rwY0g&usqp=CAU",
      },
      {
        name: "Turkish",
        image:
          "https://media.cnn.com/api/v1/images/stellar/prod/200402101927-18-best-turkish-foods-lahmacun.jpg?q=w_4000,h_2250,x_0,y_0,c_fill/w_1280",
      },
      {
        name: "Japanese",
        image:
          "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        name: "South African",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2015/04/Bobotie-f454c2a.jpg?quality=90&webp=true&fit=2200,1465",
      },
      {
        name: "Slovak",
        image:
          "https://nomadparadise.com/wp-content/uploads/2019/11/slovakianfoods7.jpg.webp",
      },
      {
        name: "Serbian",
        image:
          "https://www.willflyforfood.net/wp-content/uploads/2021/12/serbian-food-punjene-paprike.jpg.webp",
      },
      {
        name: "Somali",
        image:
          "https://travelfoodatlas.com/wp-content/uploads/2022/11/Sambusa.jpg.webp",
      },
      {
        name: "Danish",
        image:
          "https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/highlight_big/public/2019-02/Wienerbr%C3%B8d_24315.jpg?h=2c9c0a85&itok=f3ibzz6W",
      },
      {
        name: "Nigerian",
        image:
          "https://www.willflyforfood.net/wp-content/uploads/2021/06/nigerian-food-amala-and-ewedu.jpg.webp",
      },
      {
        name: "Portuguese",
        image:
          "https://afar.brightspotcdn.com/dims4/default/9b9b11f/2147483647/strip/true/crop/5760x3840+0+0/resize/2880x1920!/format/webp/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2Fd6%2Ff4%2F7ee890094e27901dc5f6f290c161%2Fshutterstock-2057698268.jpg",
      },
      {
        name: "Peruvian",
        image:
          "https://feastio.com/wp-content/uploads/2022/12/Aji-de-gallina.jpg",
      },
      {
        name: "Kenyan",
        image:
          "https://www.intrepidtravel.com/adventures/wp-content/uploads/2022/05/Kenya-Nyama-Choma-sharing-plate-traditional-dish-1320191333-ss-800x450-1.jpg",
      },
      {
        name: "Guyanese",
        image:
          "https://thekitchencommunity.org/wp-content/uploads/2021/06/Pholourie.jpg",
      },
      {
        name: "Egyptian",
        image:
          "https://www.willflyforfood.net/wp-content/uploads/2021/08/egyptian-food-eggah.jpg.webp",
      },
      {
        name: "Bangladeshi",
        image:
          "https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-08.jpg.webp",
      },
      {
        name: "Singaporean",
        image:
          "https://a.cdn-hotels.com/gdcs/production92/d736/004557ec-8065-43cc-89cb-908df2847371.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
      },
      {
        name: "Zambian",
        image:
          "https://www.chefspencil.com/wp-content/uploads/Ifinkubala.jpg.webp",
      },
      {
        name: "Panamanian",
        image:
          "https://www.willflyforfood.net/wp-content/uploads/2022/12/panamanian-food-carimanolas-de-carne.jpg.webp",
      },
      {
        name: "Albanian",
        image:
          "https://nomadparadise.com/wp-content/uploads/2020/06/albanian_food_09.jpg.webp",
      },
      {
        name: "Algerian",
        image:
          "https://www.veryhungrynomads.com/wp-content/uploads/2022/03/Chakhchoukha-food-of-algeria.jpg",
      },
      {
        name: "Colombian",
        image:
          "https://www.tastingtable.com/img/gallery/13-popular-colombian-foods-you-have-to-try-at-least-once/bandeja-paisa-1660143303.webp",
      },
      {
        name: "Tanzanian",
        image:
          "https://www.chefspencil.com/wp-content/uploads/Samaki-wa-Kupaka.jpg.webp",
      },
      {
        name: "Malaysian",
        image:
          "https://cdn.tasteatlas.com//images/dishes/38d76c6f763345919779e65c33aad430.jpg?w=905&h=510",
      },
      {
        name: "Sierra Leonean",
        image:
          "https://i0.wp.com/bestofvegancom.lightningbasecdn.com/wp-content/uploads/2022/02/ct-sierra-leone-1.jpeg?w=1280&ssl=1",
      },
    ];

  //Using slice to display only the first 'cuisinesCount' cuisines
  const [cuisines, setCuisines] = useState(
    initialCuisines.slice(0, cuisinesCount)
  );

  // Function to handle clicking the Load More button
  const handleLoadMore = () => {
    setCuisinesCount(cuisinesCount + 9); // increase the count by 9
  };

  // An effect that runs whenever cuisinesCount changes.
  // It updates the list of cuisines to display.
  useEffect(() => {
    setCuisines(initialCuisines.slice(0, cuisinesCount));
  }, [cuisinesCount]);

  // Fetch data from the server when the component mounts.
  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        // const response = await axios.get("/api/cuisines");
        // setCuisines(response.data.slice(0, cuisinesCount));
      } catch (error) {
        console.error("Error fetching cuisines data: ", error);
      }
    };
    fetchCuisines();
  }, [cuisinesCount]); // Refresh the data whenever cuisinesCount changes

  // Fetch data from the server when the component mounts.
  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        // const response = await axios.get("/api/cuisines");
        // setCuisines(response.data.slice(0, cuisinesCount));
      } catch (error) {
        console.error("Error fetching cuisines data: ", error);
      }
    };
    fetchCuisines();
  }, [cuisinesCount]); // Refresh the data whenever cuisinesCount changes

  // Fetch data from the server when the component mounts.
  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        // const response = await axios.get("/api/cuisines");
        // setCuisines(response.data.slice(0, cuisinesCount));
      } catch (error) {
        console.error("Error fetching cuisines data: ", error);
      }
    };
    fetchCuisines();
  }, [cuisinesCount]); // Refresh the data whenever cuisinesCount changes

  // The event handler for the search input field change
  const handleSearchInputChange = (event) => {
    // Get the current input from the user
    const userInput = event.target.value;

    // Set the state of the searchInput variable to reflect the current user input
    setSearchInput(userInput);

    // If the user has entered something into the search field
    if (userInput !== "") {
      // Find all cuisines in the initialCuisines array whose name includes the user's input
      // Case is ignored by converting both to lower case
      const matchingCuisines = initialCuisines.filter((cuisine) =>
        cuisine.name.toLowerCase().includes(userInput.toLowerCase())
      );

      // If at least one matching cuisine was found
      if (matchingCuisines.length > 0) {
        // Find all cuisines that do not include the user's input in their name
        // Again, case is ignored by converting both to lower case
        const otherCuisines = initialCuisines.filter(
          (cuisine) =>
            !cuisine.name.toLowerCase().includes(userInput.toLowerCase())
        );

        // Update the cuisines state to first include all matching cuisines, followed by the other cuisines
        setCuisines([...matchingCuisines, ...otherCuisines]);
      } else {
        // If no cuisines match the user's input

        // Update the cuisines state to an empty array
        setCuisines([]);
      }
    } else {
      // If the user has not entered anything into the search field

      // Reset the cuisines to their initial state
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
    <Box
    sx={{
      backgroundColor: "#C98C93",
      minHeight: "100vh",
      width: "100%",
      px: 2, // Add horizontal padding
    }}
  >
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ color: "white", textShadow: '1px 1px #999, 1px 1px #555, 2px 2px #333', fontFamily: "Italiana", textAlign: "center", mt: 10 }}
        >
          Time to Mix!
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ color: "white", fontFamily: "Italiana", textAlign: "center", mt: 3, fontSize: 35 }}
        >
          Select a cuisine that best suits your tastebuds!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <TextField
          value={searchInput}
          onChange={handleSearchInputChange}
          label="Look for cuisine here..."
          variant="standard"
          sx={{
            width: "100%", // Full width on all screen sizes
            "& .MuiInput-underline:after": {
              borderBottom: "1px solid black",
            },
            "& .MuiInput-underline:before": {
              borderBottom: "1px solid black",
            },
            mx: "auto", // Center the search field
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          component={RouterLink} // Use Typography as a link component
          to={`/ingredients?cuisine=`}
          sx={{
            color: "white",
            fontFamily: "Italiana",
            fontSize: 20,
            cursor: "pointer",
            textAlign: "center",
            transition: "transform 0.15s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          No Cuisine Preference? Click here!
        </Typography>
      </Grid>
    </Grid>

    <Box sx={{ minHeight: "400px" }}>
      {cuisines.length > 0 ? (
        <CuisineType
          cuisines={cuisines}
          selectedCuisine={selectedCuisine}
          handleCuisineSelection={handleCuisineSelection}
          handleLoadMore={handleLoadMore}
        />
      ) : (
        <Typography
          variant="h6"
          sx={{ color: "darkslategray", fontFamily: "Italiana" }}
        >
          No cuisines found.
        </Typography>
      )}
    </Box>
  </Box>
);
};

export default CuisinePage;
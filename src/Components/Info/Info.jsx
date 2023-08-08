import React from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Info.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Info = ({ handleSubmit }) => {
  const loggedIn = useSelector((state) => state.userData.loggedIn);

  const getLinkTarget = () => {
    return loggedIn ? "/create-recipe" : "/authenticate";
};
  return (
    <>
      <Box 
        sx={{
          backgroundColor: "#5E0B15",
          minHeight: "30vh",
          width: "100%",
          px: 2,
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: 5,
          marginBottom: "1.5vw",
        
        }}
      >
        <div className="About">
          <h1 className="text"> About </h1>
          <p className="ptext">
            Get ready to actually enjoy the meals you cook.
          </p>
          <p className="ptext"> No more fustration with Chef Compass.</p>
          <p className="ptext"> Lets prioritize the experience </p>
          <Button variant="contained"> Learn </Button>
        </div>

        <div name="info" className="Get-Started">
          <h1 className="text"> Get Started </h1>
          <p className="ptext"> 1. Select a Cuisine of your choice!</p>
          <p className="ptext"> 2. Input your ingredients</p>
          <p className="ptext"> 3. Click stir to get started</p>
          <Link to={getLinkTarget()} onClick={handleSubmit}>
            <Button variant="contained"> MIX </Button>
          </Link>
        </div>

        <div className="Recipes">
          <h1 className="text"> Recipes </h1>
          <p className="ptext"> Our aim is to satisty the taste buds of </p>
          <p className="ptext"> the most diverse palettes. </p>
          <Link to="/recipe-book" onClick={handleSubmit}>
            <Button variant="contained" sx={{ width: "90px" }}>
              Explore
          </Button>
          </Link>
        </div>
      </Box>
    </>
  );
};

export default Info;

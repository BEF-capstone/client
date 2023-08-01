import React from "react";
import "./HowTo.css";
import PICKIT from "../Pics/PICKIT.png";
import MIXIT from "../Pics/MIXIT.png";
import TRYIT from "../Pics/TRYIT.png";

const HowTo = () => {
  return (
    <> 
      {/* <div className="banner4">
        <h1 className= "classtext"> Have a meal with 3 easy steps  </h1>
      </div> */}
    <div name="how-to" className="How-container">
      {/* <h1> How To </h1> */}
      <br></br>
{/* 
      <div className="centered-text">
        <div className="pick">
          <img src={PICKIT} type="png" alt="icon by " />
          <h1 className="text"> PICK IT </h1>
          <p> 1. Select a Cuisine of your choice!</p>
        </div>

        <div className="mix">
          <img src={MIXIT} alt="icon by " />
          <h1 className="text" >  MIX IT </h1> 
          <p> 2. Input your ingredients</p>
        </div>

        <div className="try">
          <img src={TRYIT} alt="icon by Freepik" />
          <h1 className="text"> TRY IT </h1>
          <p> 3. Click stir to get started</p>
        </div>
      </div> */}
    </div>
    </>
  );
};

export default HowTo;

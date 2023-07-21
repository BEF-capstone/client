import React from 'react';
import { Element } from 'react-scroll';
import "./HowTo.css";

const HowTo = () => {
  return (
    <Element name="how-to" className="How-container">
          <div className="How-text">
        <h1> How To </h1>
        <p> 1. Select a Cuisine of your choice!</p>
        <p> 2. Input your ingredients</p>
        <p> 3. Click stir to get started</p>
        </div>

    </Element>
  )
}

export default HowTo
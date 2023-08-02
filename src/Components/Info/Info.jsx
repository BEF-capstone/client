import React from 'react'
import "./Info.css"

const Info = () => {
  return (
    <div name="info" className='Info'>
        <div className="About">
            <h1 className='text'> About </h1>
            <p className='ptext'> Get ready to actually enjoy the meals you cook.  </p>
            <p className='ptext'> No more fustration with Chef Compass.</p>
            <p className='ptext'>  Lets prioritize the experience </p>

            <button> Learn </button>

        </div>
        <div className= "Get-Started">
            <h1 className='text'> Get Started </h1>
            <p className='ptext'> 1. Select a Cuisine of your choice!</p>
            <p className='ptext'> 2. Input your ingredients</p>
            <p className='ptext'> 3. Click stir to get started</p>
            <button> Mix </button>


        </div>
        <div className= "Recipes">
            <h1 className='text'> Recipes </h1>
            <p className='ptext'> Our aim is to satisty the taste buds of  </p>
            <p className='ptext'>  the most diverse palettes. </p>

            <button> Explore </button>
        </div>
    </div>
  )
}

export default Info
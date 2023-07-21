// import React from 'react'
// import "./About.css"

// const About = () => {
//   return (
//     <div className='about-container'> 
//         <div className='about-text'>
//         <h1> About</h1>
//           <p>  This application is meant to aid 
//             people</p>
//           <p> who need a bit of help in the kitchen. </p> 
//           <p> Life can be stressful. </p> 
//           <p>  But Food doesnt have to be.  </p>
//           <p>  Let Chef Compass be your guide!</p>
//         </div>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import { Element } from 'react-scroll';
import "./About.css";

const About = () => {
  return (

    <div name="about" className='about-container'> 

        <h1>About</h1>
        <p>This application is meant to aid people</p>
        <p>who need a bit of help in the kitchen.</p> 
        <p>Life can be stressful.</p> 
        <p>But Food doesnt have to be.</p>
        <p>Let Chef Compass be your guide!</p>
      </div>

    

  );
}

export default About;



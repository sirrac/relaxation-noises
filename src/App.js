
import './App.css';
import styled, {keyframes} from 'styled-components';
import StyledBox from './StyledBoxes';
import React, { useEffect, useState } from "react";
import bird from "./images/bird.jpg";
import trees from "./images/Trees.jpg";
import water from "./images/waterflowing.jpg";
import wolf from "./images/wolf.jpg";

function HeaderBar() {
  return (
    <h1>Testing Space</h1>
  )
}

function App() {

  const [fadeInBox, fadeInBoxSetter] = useState(false);

  useEffect(() => {
    setTimeout(() => {  
      fadeInBoxSetter(true);
    }, 500)
  });

  return (
    <div> 
      <HeaderBar></HeaderBar>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${bird})`}} />}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${trees})`}} />}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${water})`}}/>}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${wolf})`}} />}
       
     </div> 
    </div>

  );
}

export default App;

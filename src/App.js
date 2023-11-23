
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
    <React.Fragment>
      <div id = 'HeaderBarContainer'>
        <h1 style = {{justifyContent: 'center', alignItems: 'center', display: 'flex', fontFamily: 'Helvetica, Sans-Serif'}}> 
          The Relaxation Place 
        </h1>
      </div>
    </React.Fragment>
  )
}

function Footer() {
  return (
    <div id = 'footer'>
      <p> Follow me on Github!</p>
    </div>
  )
}

function App() {

  const [fadeInBox, fadeInBoxSetter] = useState(false);
  const [fadeInFooter, fadeInFooterSetter] = useState(false);

  useEffect(() => {
    setTimeout(() => {  
      fadeInBoxSetter(true);
    }, 500)
  });

  useEffect(() => {
    setTimeout(() => {
      fadeInFooterSetter(true);
    }, 5000)
  });

  return (
    <div> 
      <HeaderBar></HeaderBar>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${bird})`, backgroundSize: "cover"}} />}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${trees})`}} />}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${water})`}}/>}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${wolf})`}} />}

       
     </div> 
     {fadeInFooter && <Footer></Footer>}
    </div>

  );
}

export default App;

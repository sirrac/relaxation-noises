
import './App.css';
import styled, {keyframes} from 'styled-components';
import StyledBox from './StyledBoxes';
import React, { useEffect, useState } from "react";
import useSound from 'use-sound';
import bird from "./images/bird.jpg";
import trees from "./images/Trees.jpg";
import water from "./images/waterflowing.jpg";
import wolf from "./images/wolf.jpg";
import playButton from "./images/playbutton.jpg";
import pauseButton from "./images/pausebutton.jpg";

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

function PlayOrPause() {
  return (
      <img class = "feedbackButton" src = {playButton}/>
  )

}

function App() {

  const [fadeInBox, fadeInBoxSetter] = useState(false);
  const [fadeInFooter, fadeInFooterSetter] = useState(false);
  const [play, {stop}] = useSound();

  const [playingBird, setPlayingBird] = useState(false);

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
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${bird})`}} />}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${trees})`}} />}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${water})`}}/>}
       {fadeInBox && <StyledBox style = {{backgroundImage: `url(${wolf})`}} />  }
     </div> 

     <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       {fadeInBox && <PlayOrPause></PlayOrPause>}
       {fadeInBox && <PlayOrPause></PlayOrPause>}
       {fadeInBox && <PlayOrPause></PlayOrPause>}
       {fadeInBox && <PlayOrPause></PlayOrPause>}
     </div>

     {fadeInFooter && <Footer></Footer>}
    </div>

  );
}

export default App;

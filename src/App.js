
import './App.css';
import styled, {keyframes} from 'styled-components';
import StyledBox from './StyledBoxes';
import React, { useEffect, useState } from "react";

function App() {

  const [fadeInBox, fadeInBoxSetter] = useState(false);

  useEffect(() => {
    setTimeout(() => {  
      fadeInBoxSetter(true);
    }, 500)
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
       {fadeInBox && <StyledBox />}
       {fadeInBox && <StyledBox />}
       {fadeInBox && <StyledBox />}
       {fadeInBox && <StyledBox />}
       
  </div> 

  );
}

export default App;

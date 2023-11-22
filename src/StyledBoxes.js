import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: ${FadeIn} 2s ease-in-out;
  margin: 30px;
 
`;

export default StyledBox;

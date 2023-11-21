import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: light-blue;
  margin: 30px;
  animation: ${fadeIn} 2s ease-in-out;
`;

export default StyledBoxes;

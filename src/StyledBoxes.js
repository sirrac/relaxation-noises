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
  width: 180px;
  height: 180px;
  animation: ${FadeIn} 2s ease-in-out;
  margin: 50px;
  border-radius: 10px;
 
`;

export default StyledBox;

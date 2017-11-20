import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  margin-top: 250px;
  animation: ${spin} 4s infinite linear;
  background-image: url(/public/img/loading.png);
  background-repeact: no-repeat;
  max-width: 250px;
`;

const Loading = () => <Image src="/public/img/loading.png" alt="loading indicator" />;

export default Loading;

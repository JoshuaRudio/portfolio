// eslint-disable-next-line
import React from 'react';
import styled from 'styled-components';
import heroPicture from '../guitar2.jpg';

const HeroSection = styled.div`
  background: url(${heroPicture}) no-repeat;
  background-size: cover;
  height: 70vh;
  text-align: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: block;
`;

export default HeroSection;

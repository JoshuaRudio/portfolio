import React, { Component } from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  background: url("https://static.pexels.com/photos/173921/pexels-photo-173921.png")
    50% no-repeat;
  background-size: cover;
  height: 60vh;
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
`;

const HeroSectionText = styled.div`
  color: #fefefe;
  text-shadow: 1px 1px 2px #0a0a0a;
`;

class Hero extends Component {
  render() {
    return (
      <HeroSection>
        <HeroSectionText>
          <h1 className="hero-header">Joshua A. Rudio</h1>
          <h5 className="hero-sub-header">
            Web Developer | Empathy Engineer | 6-String Specialist
          </h5>
        </HeroSectionText>
      </HeroSection>
    );
  }
}

export default Hero;

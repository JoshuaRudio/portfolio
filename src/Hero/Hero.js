import React, { Component } from 'react';
import Picture from '../Picture.js';
import portfolioPicture from '../portfolio.JPG';
import HeroSection from './HeroSection.js';
import HeroSectionText from './HeroSectionText.js';
import Nav from '../Nav';

class Hero extends Component {
  render() {
    return (
      <HeroSection>
        <Nav />
        <HeroSectionText>
          <h1 className="hero-header">Joshua A. Rudio</h1>
          <Picture url={portfolioPicture} />
          <hr />
          <h5 className="hero-sub-header">Web Developer | Empathy Engineer | 6-String Specialist</h5>
        </HeroSectionText>
      </HeroSection>
    );
  }
}

export default Hero;

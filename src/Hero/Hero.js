import React, { Component } from 'react';
import portfolioPicture from '../portfolio.JPG';
import HeroSection from './HeroSection.js';
import HeroSectionText from './HeroSectionText.js';
import Nav from '../Nav';

class Hero extends Component {
  render() {
    return (
      <HeroSection className="hero">
        <HeroSectionText>
          <h1 className="hero-header">JOSHUA RUDIO</h1>
          <h5 className="hero-sub-header">professional bio</h5>
        </HeroSectionText>
      </HeroSection>
    );
  }
}

export default Hero;

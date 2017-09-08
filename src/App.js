import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero/Hero';
import About from './About';
import SocialMedia from './SocialMedia';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav className="nav-bar" />
        <Hero className="hero-section" />
        <About className="about-section" />
        <SocialMedia className="social-media" />
      </div>
    );
  }
}

export default App;

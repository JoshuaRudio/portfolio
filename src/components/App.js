import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero/Hero';
import About from './About';
import Projects from './Projects';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav className="nav-bar" />
        <Hero className="hero-section" />
        <About className="about-section" />
        <SocialMedia className="social-media" />
        <Projects className="projects" />
      </div>
    );
  }
}

export default App;

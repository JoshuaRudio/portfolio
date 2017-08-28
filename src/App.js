import React, { Component } from 'react';
import Hero from './Hero';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Picture from './Picture.js';
import PorfolioPicture from './portfolio.JPG';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="header">About Me</h1>
        <Picture url={PorfolioPicture} />
        <h3 className="subheader">
          Like a strong oak tree in a storm, I will not be shaken. Unwavering
          and determined, yet humble and fluid.
        </h3>
        <p />
        <p>
          With the goal of working in a dynamic environment in an established
          organization in order to utilize my technical and soft skills gained
          during my time learning web development at Dev Bootcamp. I welcome
          encounters of new and difficult problems because they are
          opportunities to learn, grow, and show resiliency.
        </p>
        <p>
          Besides coding, music is another passion in my life. Self-taught
          guitarist for 10+ years. You may also find me playing video games. I
          emit waves of zen all days.
        </p>
      </div>
    );
  }
}

export default About;

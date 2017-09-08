import React, { Component } from 'react';
import styled from 'styled-components';

const Link = ({ className, children }) =>
  <li className={className}>
    <a href={`/${children.toLowerCase()}`}>
      {children}
    </a>
  </li>;

const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 15px 0px;
  text-decoration: none;
  font-size: 17px;
  `;

// const Name = styled.div`
//   float: left;
//   display: block;
//   color: red;
//   position: relative;
//   bottom: 30px;
//   margin-left: 20px;
// `;

class Nav extends Component {
  render() {
    return (
      <div className="nav-holder">
        <ul className="header-nav">
          <StyledLink className="about-link" children="ABOUT" />
          <StyledLink className="projects-link" children="PROJECTS" />
          <StyledLink className="contact-link" children="CONTACT" />
        </ul>
        {/* <Name>Joshua Rudio</Name> */}
      </div>
    );
  }
}

export default Nav;

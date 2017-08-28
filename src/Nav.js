import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #333;
  overflow: hidden;
  text-align: center;
  display: block;
  opacity: 0.9;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 15px 0px;
  text-decoration: none;
  font-size: 17px;
`;

const Link = ({ className, children }) =>
  <li className={className}>
    <a href={`/${children.toLowerCase()}`}>
      {children}
    </a>
  </li>;

class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <ul className="header-nav">
          <StyledLink className="home-link" children="Home" />
          <StyledLink className="about-link" children="About" />
          <StyledLink className="projects-link" children="Projects" />
          <StyledLink className="contact-link" children="Contact" />
        </ul>
      </Wrapper>
    );
  }
}

export default Nav;

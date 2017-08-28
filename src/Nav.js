import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #333;
  overflow: hidden;
  text-align: center;
  display: block;
`;

const Link = ({ className, children }) =>
  <li className={className}>
    <a href={`/${children}`}>
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

class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <ul className="header-nav">
          <StyledLink className="home" children="Home" />
          <StyledLink className="about" children="About" />
          <StyledLink className="projects" children="Projects" />
          <StyledLink className="contact" children="Contact" />
        </ul>
      </Wrapper>
    );
  }
}

export default Nav;

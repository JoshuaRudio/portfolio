import React, { Component } from 'react';
import styled from 'styled-components';
import github from './Github.svg';
import instagram from './Instagram.svg';
import linkedin from './Linkedin.svg';
import twitter from './Twitter.svg';

const Container = styled.div`
  width: 100%;
  background-color: #190933;
  color: #fff;
`;

const ContentContainer = styled.div`
  width: 60%;
  background-color: #190933;
  color: #fff;
  margin: 0 auto;
  padding: 40px;
`;

const Link = ({ img, href, alt }) =>
  <a href={href} target="_blank">
    <img src={img} alt={alt} className="social-media" />
  </a>;

const StyledLink = styled(Link)`
  display: inline;
  text-align: center;
  padding: 15px 0px;
  text-decoration: none;
  font-size: 17px;
  `;

class SocialMedia extends Component {
  render() {
    return (
      <Container>
        <ContentContainer>
          <h3>Follow Me!</h3>
          <StyledLink img={twitter} href="https://twitter.com/TRUFLIPx" />
          <StyledLink img={linkedin} href="https://linkedin.com/in/joshua-rudio" />
          <StyledLink img={github} href="https://github.com/JoshuaRudio" />
          <StyledLink img={instagram} href="https://www.instagram.com/joshua_from_seattle/" />
        </ContentContainer>
      </Container>
    );
  }
}

export default SocialMedia;

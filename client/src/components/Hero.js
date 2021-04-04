import React from 'react';
import hero from '../assets/hero.jpg'
import styled from "styled-components";


const Hero = () => {
  return (
    <Container>
      <div className="hero-center">
        <img src={hero} alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 100vw;
  }

  @media screen and (min-width: 1136px) {
    .hero-center {
      display: flex;
      img {
        width: 90vw;
        margin: auto auto;
      }
    }
  }
`;

export default Hero

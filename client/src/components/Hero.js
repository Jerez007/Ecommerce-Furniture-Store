import React from "react";
import hero from "../assets/hero.jpg";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <div className="hero-center">
        <img src={hero} alt="" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5px;
  .hero-center {
    display: flex;
    img {
      width: 100vw;
      height: 42vh;
    }
  }

  @media screen and (min-width: 1136px) {
    margin-top: -3px;
    .hero-center {
      display: flex;
      img {
        width: 99vw;
        height: 80vh;

        margin: auto auto;
      }
    }
  }
`;

export default Hero;

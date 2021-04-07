import React from "react";
import heroMobile from "../assets/hero-mobile.jpg";
import heroDesktop from "../assets/hero-desktop.jpg";

import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <div className="hero-center">
        <img className="mobile" src={heroMobile} alt={heroMobile} />
        <img className="desktop" src={heroDesktop} alt={heroDesktop} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5px;
  /* .hero-center {
    display: flex;
    /* img {
      width: 100vw;
      height: 50vh;
    } */

  /* } */

  .hero-center {
    width: 100vw;
  }

  @media screen and (max-width: 766px) {
    .desktop {
      display: none;
    }

    .hero-center {
      img {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 766px) {
    margin-top: -4px;

     .mobile {
      display: none;
    }

    .hero-center {
      img {
        width: 100%;
      }
    }
  }

  /* @media screen and (min-width: 1136px) { */
    /* margin-top: -3px;
    .hero-center {
      display: flex;
      img {
        width: 99vw;
        height: 80vh;

        margin: auto auto;
      }
    } */
  }
`;

export default Hero;

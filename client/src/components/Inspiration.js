import React from "react";
import styled from "styled-components";
import image1 from "../assets/inspiration1.jpg";
import image2 from "../assets/inspiration2.jpg";

const Inspiration = () => {
  return (
    <Container>
      <div className="container">
        <h1>INSPIRATION</h1>

        <div className="content">
          <div className="left-content">
            <img src={image1} alt="furniture" />
            <h2>RESTYLE YOUR BEDROOM</h2>
            <p>
              {"The bedroom often ends up being a place where you store things and personal items that don’t belong anywhere else. Multiple storage solutions, such as underbed boxes, boxes and baskets make it easy to create a place for everything from extra towels, throws, shoes, odds and ends".substring(
                0,
                200
              ) + "..."}
            </p>

            <button type="button">Read More</button>
          </div>

          <div className="right-content">
            <img src={image2} alt="furniture" />
            <h2>WHAT IS HYGGE?</h2>
            <p>
              {"If you're not familiar with the Scandinavian concept of 'Hygge' (hoo•ga), Hygge is about creating a happy and cozy atmosphere in your home. Hygge can be around the dinner table with friends and family or simply snuggling up in your favourite throw for a good read and a cup of coffee in your own company. Even something as simple as lit candles on your window sill can be hygge.".substring(
                0,
                200
              ) + "..."}
            </p>
            <button type="button">Read More</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: var(--clr-primary-3);
  img {
    width: 100%;
    height: 50%;
    margin: 35px 0;
  }
  .container {
    margin-top: 25px;
    margin-bottom: 25px;

    h1,
    h2 {
      text-align: center;
    }

    .content {
      display: flex;
      justify-content: space-evenly;
    }

    .left-content,
    .right-content {
      width: 40vw;
      height: max-content !important;
    }

    p {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 18px;
    }

    button {
      width: 100px !important;
      height: 40px !important;
      border-color: var(--clr-primary-3);
    }
  }

  /* media queries */
  @media screen and (max-width: 769px) {
    .right-content {
      display: none;
    }

    .left-content {
      width: 90vw !important;
    }
  }
`;

export default Inspiration;

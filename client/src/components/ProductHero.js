import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const ProductHero = ({ company, product, title}) => {
  return (
    <Container>
      <div className="section-center">
        <h3>
          <Link to="/">Home / </Link>
          <span className={`${title ? 'title' : null}`}>{company || title}</span>
        </h3>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .section-center {
    margin: 20px 0px 30px 20px;

    h3 {
      white-space: pre;
      color: var(--clr-primary-3);
      font-weight: 200;
      a {
        color: var(--clr-primary-3);
      }

      span {
        text-transform: uppercase;
        letter-spacing: -1px;
      }
    }

    .title {
      text-transform: capitalize !important;
    }
  }

  /* media queries */
  @media screen and (min-width: 660px) {
    font-size: 24px;
  }
`;

export default ProductHero

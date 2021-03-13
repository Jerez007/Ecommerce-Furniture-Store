import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const ProductHero = ({ company, product}) => {
  return (
    <Container>
      <div className="section-center">
        <h3>
          <Link to="/">Home  /  </Link>
          <span>{company}</span>
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

      span {
        text-transform: uppercase;
        letter-spacing: -1px;
      }
      a {
        color: var(--clr-primary-3);
      }
    }
  }
`;

export default ProductHero

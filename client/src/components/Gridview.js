import React from "react";
import Product from "./Product";
import styled from "styled-components";

const Gridview = ({ products }) => {
  return (
    <Container>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  img {
    height: 350px;
  }

  .products-container {
    display: grid;
  }

  /* media queries */
  @media screen and (min-width: 769px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);

      img {
        width: 41vw !important;
      }
    }
  }

  @media screen and (min-width: 950px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);

      img {
        width: 28vw !important;
      }
    }
  }
`;

export default Gridview;

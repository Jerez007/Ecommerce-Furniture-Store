import React from 'react'
import { formatPrice } from "../utils/helpers";
import styled from "styled-components";

const Product = ({ id, name, image, price }) => {
  return (
    <ProductsContainer>
      <div className="products-container">
        <img src={image} alt={name} />
      </div>

      <div className="info">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  h5 {
    text-align: center;
    color: red;
  }

  img {
    width: 100%;

  }
`


export default Product

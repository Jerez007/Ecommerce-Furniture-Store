import React from "react";
import { formatPrice } from "../utils/helpers";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ id, name, image, price }) => {
  return (
    <ProductsContainer>
      <div className="products-container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          
        </Link>
      </div>

      <div className="info">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  .products-container {
    padding: 30px 40px 2px 40px;
  }

  .products-container:hover img{
    opacity: 0.5;
  }

  h5 {
    color: var(--clr-primary-3);
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 200;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .info {
    display: flex;
    justify-content: space-between;
    padding: 5px 40px 0px 40px;
  }

  .info:last-child {
    margin-bottom: 40px;
  }

  p {
    font-weight: 600;
    color: #181818;
  }
`;

export default Product;

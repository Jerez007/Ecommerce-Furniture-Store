import React from "react";
import { formatPrice } from "../utils/helpers";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Product = ({ id, name, image, price }) => {
  return (
    <ProductsContainer>
      <div className="products-container">
        <Link to={`/products/${id}`} className="link">
          <img src={image} alt={name} />
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
  text-align: center;

  .products-container {
    position: relative;
    padding: 30px 40px 2px 40px;
  }

  .products-container:hover img {
    opacity: 0.5;
  }

  .products-container:hover link {
    opacity: 1;
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
    transition: var(--transition);
  }

  .info {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 5px 40px 0px 40px;
  }

  .info:last-child {
    margin-bottom: 40px;
  }

  p {
    font-weight: 600;
    letter-spacing: var(--spacing);
    color: #181818;
  }

  /* media queries */
  @media screen and (min-width: 1031px) {
    .info {
      font-size: 20px;

      h5 {
        font-size: 20px;
      }
    }
  }
`;

export default Product;

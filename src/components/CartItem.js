import React from "react";
import styled from "styled-components";
import { MiniQuantityButtons } from ".";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import QuantityButton from "./QuantityButton";

const CartItem = ({ id, image, name, price, amount}) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {};

  const decrease = () => {};

  return (
    <Container>
      <div className="content">
        <img src={image} alt={name} />

        <div className="info">
          <p>{name}</p>
          <p className="price-container">
            <span>Price</span>
            <span className="price">{formatPrice(price)}</span>
          </p>
        </div>

        <div className="toggle-container">
          <MiniQuantityButtons amount={amount} increase={increase} decrease={decrease} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: var(--clr-primary-3);

  .content {
    display: grid;
    grid-template-columns: auto 2fr 1fr 1fr;
  }

  img {
    height: 150px;
    width: 150px;
    object-fit: contain;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;

    text-transform: capitalize;
  }

  /* styling for the price */
  .price-container span:nth-child(1) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  .price-container {
    display: flex;
    flex-direction: column;
  }

  .price {
    font-weight: 550;
  }
  /* end of styling for the price */

  .toggle-container {
    width: 40px;
  }
`;

export default CartItem;

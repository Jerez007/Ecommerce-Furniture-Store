import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Container>
      <button type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" onClick={increase}><FaPlus /></button>
    </Container>
  );
};

const Container = styled.div``;

export default AmountButtons;

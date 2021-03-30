import React from "react";
import styled from "styled-components";
import Product from "./Product";


const ListView = ({ products }) => {
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
`;


export default ListView;

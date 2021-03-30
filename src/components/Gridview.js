import React from 'react'
import Product from './Product'
import styled from "styled-components";


const Gridview = ({ products }) => {
  return (
    <Container>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        } )}
      </div>
    </Container>
  )
}

const Container = styled.div`
 img {
   height: 350px;
 }
`;


export default Gridview

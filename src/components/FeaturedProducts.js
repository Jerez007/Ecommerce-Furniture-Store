import React from 'react'
import { useProductsContext } from "../context/products_context";
import Loading from "./Loading";

import styled from "styled-components";


const FeaturedProducts = () => {
  const { products_loading: loading, products_error: error, featured_products: featured} = useProductsContext()

  if(loading) {
    return <Loading />
  }

  if (error) {
    return <div>this is an error</div>
  }

  return (
    <FeaturedProductsContainer>
      <div className="products-center">

      </div>
    </FeaturedProductsContainer>
  )
}

const FeaturedProductsContainer = styled.div`

`

export default FeaturedProducts

import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import { single_product_url as url } from "../utils/constants";
import styled from "styled-components";
import ProductHero from "../components/ProductHero";
import {
  Loading,
} from "../components";

const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <ProductContainer>
      <ProductHero />
    </ProductContainer>
  )
}

const ProductContainer = styled.div`

`


export default SingleProductPage

import React from "react";
import { useProductsContext } from "../context/products_context";
import Loading from "./Loading";
import Error from "./Error";
import styled from "styled-components";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FeaturedProductsContainer>
      <div className="products-center">
        <h2>featured products</h2>

        <div className="featured">
          {featured.slice(0, 4).map((product) => {
            return <Product key={product.id} {...product}></Product>;
          })}
        </div>
      </div>
    </FeaturedProductsContainer>
  );
};

const FeaturedProductsContainer = styled.div`
  h2 {
    text-align: center;
    padding: 30px;
    text-transform: uppercase;
    color: var(--clr-primary-3);
  }


  /* media queries */
  @media screen and (min-width: 590px) {
    .featured {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      img {
        height: 180px;
      }
    }
  }
`;

export default FeaturedProducts;

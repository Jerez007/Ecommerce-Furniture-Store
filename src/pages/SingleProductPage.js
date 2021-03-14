import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import { single_product_url as url } from "../utils/constants";
import styled from "styled-components";
import { Loading, Error, ProductHero, Stars, ProductImageSlider } from "../components";


const SingleProductPage = () => {
  const { id } = useParams();
  const { history } = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();


  // gets single product everytime id in param changes
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  // Handles loading and error
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  //end of loading and error section

  const {
    id: sku,
    name,
    price,
    images,
    colors,
    company,
    description,
    category,
    shipping,
    stock,
    stars,
    reviews,
  } = product;     

  return (
    <ProductContainer>
      <ProductHero company={company} />

      <div className="section-center">
        <h2>
          <span className="company">{company}</span>{" "}
          <span className="product-name">{name}</span>
        </h2>

        <div className="sku-review">
          <span>SKU: {sku}</span>

          <p>Write a review</p>
        </div>

        <div className="image-slider">
          <ProductImageSlider
            singleProductImages={images}
          />
        </div>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  .section-center {
    display: flex;
    flex-direction: column;
    color: var(--clr-primary-3);
  }

  h2 {
    margin-bottom: 15px;
  }

  .sku-review {
    display: flex;

    p {
      margin-left: 40px;
      text-decoration: underline;
    }
  }

  .company {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 800;
    padding-right: 5px;
  }

  .product-name {
    text-transform: capitalize;
    font-size: 26px;
    font-weight: 500;
  }

`;

export default SingleProductPage;

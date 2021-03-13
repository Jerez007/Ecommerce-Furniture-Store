import React, { useEffect } from "react";
import { useParams, useHistory, Link} from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import { single_product_url as url } from "../utils/constants";
import styled from "styled-components";
import { Loading, Error, ProductHero } from "../components";

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

  const {id:sku, name, price, image, colors, company, descriptio, category, shipping, stock, stars, reviews} = product

  return (
    <ProductContainer>
      <ProductHero company={company}/>
    </ProductContainer>
  );
};

const ProductContainer = styled.div``;

export default SingleProductPage;

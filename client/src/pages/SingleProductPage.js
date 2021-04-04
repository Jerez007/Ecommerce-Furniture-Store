import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import { single_product_url as url } from "../utils/constants";
import { backend_url } from "../utils/constants";
import styled from "styled-components";
import {
  Loading,
  Error,
  ProductHero,
  Stars,
  ProductImageSlider,
} from "../components";
import AddToCart from "../components/AddToCart";
import { FaCheck, FaMinus } from "react-icons/fa";

const SingleProductPage = () => {
  const { id } = useParams();
  const { history } = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
    product_reviews_loading: reviews_loading,
    product_reviews_error: reviews_error,
    product_reviews,
    fetchProductReviews,
  } = useProductsContext();

  // gets single product everytime id in param changes
  // gets review for the product from the database
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    fetchProductReviews(backend_url);
    // eslint-disable-next-line
  }, [id]);

  // Automatiically redirects user back to homepage incase of error/product not found, after 3 seconds
  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history.push("/");
  //     }, 3000);
  //   }
  //   // eslint-disable-next-line
  // }, [error]);

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

  console.log(" REVIEWS>>>>>>>>>>>>>>>>>>>>>>>>>>>", product_reviews);

  return (
    <ProductContainer>
      <ProductHero company={company} />

      <div className="section-center">
        <h2>
          <span className="company">{company}</span>
          <span className="product-name">{name}</span>
        </h2>

        <div className="sku-review">
          <span>SKU: {sku}</span>

          <p>
            <Link to={`/products/review/${sku}`}>Write a review</Link>
          </p>
        </div>

        <div className="image-slider">
          <ProductImageSlider singleProductImages={images} />
        </div>

        <div className="info">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h3 className="price">{formatPrice(price)}</h3>
        </div>

        <div className="addtocart">
          {stock > 0 && <AddToCart product={product} />}
        </div>

        <div className="stock-info">
          {stock > 0 && (
            <div>
              <FaCheck className="checkmark" />
              <span>In stock online</span>
            </div>
          )}

          {stock === 0 && (
            <div>
              <FaMinus className="minus-mark" />
              <span>Out of stock online</span>
            </div>
          )}
        </div>

        <div className="description">{description}</div>
      </div>

      <h1 className="reviews_title">Reviews</h1>

      <div className="reviews">
        {reviews_loading ? <Loading /> : null}
        {reviews_error ? <Error /> : null}
        {product_reviews.map((review) => {
          // const {id, nickname, review, date} =  review
          if (id === review.id) {
            return <h2>asfsfsdf</h2>;
          }
        })}
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
    margin-bottom: 30px;

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

  .info {
    display: flex;
    flex-direction: column;
    text-align: center;

    h2 {
      margin-top: 30px;
      margin-bottom: 5px !important;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      font-weight: 300;
      color: black;
    }

    .price {
      margin-top: 13px;
      font-weight: 200px;
      letter-spacing: var(--spacing);
    }
  }

  /* stock info section */
  .stock-info {
    margin-bottom: 30px;

    div {
      display: flex;
      align-items: center;
    }
  }

  .checkmark {
    background: #329932;
    color: white;
    padding: 5px;
    font-size: 22px;
    margin-right: 4px;
  }

  .minus-mark {
    background: #ff3232;
    color: white;
    padding: 5px;
    font-size: 22px;
    margin-right: 4px;
  }
  /* end of stock info section */

  .description {
    margin-bottom: 30px;
  }

  /* review section */
  .reviews_title {
    margin-left: 50px;
    margin-top: 30px;
    border-bottom: 1px solid hsl(0, 0%, 90%, 0.9);
    padding-bottom: 7px;
  }

  .reviews {
    margin-left: 50px;
    color: var(--clr-primary-3);
  }
  /* end of review section */
`;

export default SingleProductPage;

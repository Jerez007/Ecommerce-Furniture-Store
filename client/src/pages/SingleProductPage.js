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
  Contact,
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

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
            <div className="noStock-container">
              <FaMinus className="minus-mark" />
              <span>Out of stock online</span>
            </div>
          )}
        </div>

        <div className="description">{description}</div>
      </div>

      <div className="reviews-content">
        <div className="heading">
          <h1 className="reviews-title">Reviews</h1>
          <span>
            <Link to={`/products/review/${sku}`}>Write a review</Link>
          </span>
        </div>

        {reviews_loading ? <Loading /> : null}
        {reviews_error ? <Error /> : null}
        {product_reviews.map((reviewItem) => {
          const { id: reviewID, nickname, review_summary, review, date } = reviewItem;
          if (id === reviewID) {
            return (
              <div className="content">
                <div className="review-header">
                  <h2>{review_summary}</h2>
                  <h4>Written by: {nickname}</h4>
                </div>

                <h4 className="date">{date}</h4>

                <p>{review}</p>
              </div>
            );
          }
          return null
        })}
      </div>

      <Contact />
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

  .noStock-container {
    margin-top: 25px;
  }
  /* end of stock info section */

  .description {
    margin-bottom: 30px;
  }

  /* review section */

  .reviews-content {
    color: black;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 35px;

    .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid lightgray;
      padding-bottom: 7px;
      margin-bottom: 30px;

      span {
        text-decoration: underline;
      }
    }

    h2 {
      text-transform: uppercase;
      color: var(--clr-primary-3);
    }

    h4 {
      margin-bottom: 10px;
      font-weight: 540;
    }

    .date {
      color: #ccc;
      font-weight: 10px !important;
      margin-bottom: 17px;
    }

    p {
      border-bottom: 1px solid lightgray;
      padding-bottom: 35px;
      margin-bottom: 35px;
      font-size: 20px;
    }

    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  /* end of review section */

  /* media queries */
  @media screen and (max-width: 450px) {
    .review-header {
      font-size: 12px;
    }
  }
`;

export default SingleProductPage;

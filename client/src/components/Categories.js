import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bedroom from "../assets/bedroom.jpeg";
import diningroom from "../assets/diningroom.jpeg";
import kitchen from "../assets/kitchen.jpeg";
import livingroom from "../assets/livingroom.jpeg";
import office from "../assets/office.jpeg";
import { useFilterContext } from "../context/filter_context";

const Categories = () => {
  const { updateFilters } = useFilterContext();

  return (
    <CategoriesContainer>
      <h1>shop by categories</h1>

      <div className="categories-center">
        <Link to="/products/bedroom">
          <div className="image-container">
            <img src={bedroom} alt="bedroom" />
            <p>bedroom</p>
          </div>
        </Link>

        <Link to="/products/kitchen">
          <div className="image-container">
            <img src={kitchen} alt="kitchen" />
            <p>kitchen</p>
          </div>
        </Link>

        <Link to="/products/diningroom">
          <div className="image-container">
            <img src={diningroom} alt="diningroom" />
            <p>diningroom</p>
          </div>
        </Link>

        <Link to="/products/kitchen">
          <div className="image-container">
            <img src={livingroom} alt="livingroom" />
            <p>livingroom</p>
          </div>
        </Link>

        <Link to="/products/kitchen">
          <div className="image-container">
            <img src={office} alt="office" />
            <p>office</p>
          </div>
        </Link>
      </div>
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.div`
  background-color: #f5f5f5;
  padding: 25px 10px;

  h1 {
    padding-bottom: 17px;
    text-transform: uppercase;
    color: var(--clr-primary-3);
    text-align: center;
  }

  .image-container {
    position: relative;
    padding: 10px;
    margin-bottom: 15px;

    img {
      width: 100%;
      height: 35vh;
      object-fit: cover;
    }

    p {
      position: absolute;
      top: 30px;
      left: 40px;
      font-size: 25px;
      text-transform: uppercase;
      font-weight: bold;
      color: #696969;
      background-color: rgb(255, 255, 255, 0.5);
    }
  }

  /* media queries */
  @media screen and (min-width: 769px) {
    .categories-center {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  
`;

export default Categories;

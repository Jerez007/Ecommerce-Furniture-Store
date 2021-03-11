import React from 'react'
import styled from "styled-components";
import bedroom from '../assets/bedroom.jpeg'
import diningroom from "../assets/diningroom.jpeg";
import kitchen from "../assets/kitchen.jpeg";
import livingroom from "../assets/livingroom.jpeg";
import office from "../assets/office.jpeg";


const Categories = () => {
  return (
    <CategoriesContainer>
      <div className="categories-center">
        <div className="image-container">
          <img src={bedroom} alt="bedroom" />
          <p>bedroom</p>
        </div>

        <div className="image-container">
          <img src={kitchen} alt="kitchen" />
          <p>kitchen</p>
        </div>

        <div className="image-container">
          <img src={diningroom} alt="diningroom" />
          <p>diningroom</p>
        </div>

        <div className="image-container">
          <img src={livingroom} alt="livingroom" />
          <p>livingroom</p>
        </div>

        <div className="image-container">
          <img src={office} alt="office" />
          <p>office</p>
        </div>
      </div>
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div`
  .image-container {
    position: relative;
    padding: 10px;

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
      color: #303030;
      background-color: rgb(255, 255, 255, 0.5);
    }
  }

  /* media queries */
  @media screen and (min-width: 769px) {

  }
`;


export default Categories

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
          <img src={bedroom} alt="" />
          <p>bedroom</p>
        </div>

        <div className="image-container">
          <img src={bedroom} alt="" />
          <p>bedroom</p>
        </div>

        <div className="image-container">
          <img src={bedroom} alt="" />
          <p>bedroom</p>
        </div>

        <div className="image-container">
          <img src={bedroom} alt="" />
          <p>bedroom</p>
        </div>

        <div className="image-container">
          <img src={bedroom} alt="" />
          <p>bedroom</p>
        </div>
      </div>
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div`

`


export default Categories

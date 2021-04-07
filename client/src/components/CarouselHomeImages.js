import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/carousel_image1.jpg";
import image2 from "../assets/carousel_image2.jpg";
import image3 from "../assets/carousel_image3.jpg";
import image4 from "../assets/carousel_image4.jpg";
import image5 from "../assets/carousel_image5.jpg";
import image6 from "../assets/carousel_image6.jpg";
import image7 from "../assets/carousel_image7.jpg";
import image8 from "../assets/carousel_image8.jpg";
import image9 from "../assets/carousel_image9.jpg";
import image10 from "../assets/carousel_image10.jpg";
import image11 from "../assets/carousel_image11.jpg";
import image12 from "../assets/carousel_image12.jpg";

import styled from 'styled-components'

const CarouselHomeImages = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container>
      <div className="carousel-container">
        <h1>#MYSOLISJ</h1>

        <p>
          Click the image for product details. Share your home decor using
          #mySOLISJ on Instagram!
        </p>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          // additionalTransfrom={0 * 12}
          centerMode={true}
          arrows={true}
        >
          <img src={image1} alt="furniture" />
          <img src={image2} alt="furniture" />
          <img src={image3} alt="furniture" />
          <img src={image4} alt="furniture" />
          <img src={image5} alt="furniture" />
          <img src={image6} alt="furniture" />
          <img src={image7} alt="furniture" />
          <img src={image8} alt="furniture" />
          <img src={image9} alt="furniture" />
          <img src={image10} alt="furniture" />
          <img src={image11} alt="furniture" />
          <img src={image12} alt="furniture" />
        </Carousel>
      </div>
    </Container>
  );
};


const Container = styled.div`
  color: var(--clr-primary-3);
  .carousel-container {
    text-align: center;
    margin-top: 40px;
    padding: 40px 20px;
    background-color: var(--clr-primary-6);
    
     img {
      width: 20vw !important;
      height: 20vw !important;
      margin: 0 !important;
    }

    p {
      font-size: 24px;
      margin-top: 25px;
      opacity: 0.7;
      margin-bottom: -20px;
    }
  }
`;

export default CarouselHomeImages;

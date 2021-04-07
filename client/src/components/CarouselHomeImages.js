import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/carouse_image1.jpg";
import image2 from "../assets/carouse_image2.jpg";
import image3 from "../assets/carouse_image3.jpg";
import image4 from "../assets/carouse_image4.jpg";
import image5 from "../assets/carouse_image5.jpg";
import image6 from "../assets/carouse_image6.jpg";
import image7 from "../assets/carouse_image7.jpg";
import image8 from "../assets/carouse_image8.jpg";
import styled from 'styled-components'

const CarouselHomeImages = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
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
          additionalTransfrom={0 * 8}
        >
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
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
    margin-bottom: 40px;
    padding-left: 10px;
    padding-right: 10px;

    img {
      width: 20vw !important;
      height: 20vw !important;
      margin: 0 !important;
    }

    p {
      font-size: 24px;
      margin-top: 25px;
      opacity: 0.7;
    }
  }
`;

export default CarouselHomeImages;

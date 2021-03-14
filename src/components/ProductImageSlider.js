import React from "react";
// import SimpleImageSlider from "react-simple-image-slider";
// import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";




const ProductImageSlider = ({
  singleProductImages = [
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
}) => {
  // const images = [
  //   { url: singleProductImages[0].url },
  //   { url: singleProductImages[1].url },
  //   { url: singleProductImages[2].url },
  //   { url: singleProductImages[3].url },
  //   { url: singleProductImages[4].url },
  // ];

  const images = [
    { original: singleProductImages[0].url },
    { original: singleProductImages[1].url },
    { original: singleProductImages[2].url },
    { original: singleProductImages[3].url },
    { original: singleProductImages[4].url },
  ];

  // return (
  //   <Container>
  //     <SimpleImageSlider
  //       width={400}
  //       height={400}
  //       images={images}
  //       showNavs={true}
  //       showBullets={true}
  //       className="container"
  //     />
  //   </Container>
  // );
  return <ImageGallery items={images} showThumbnails={false} showBullets ={true}/>;
};

// const Container = styled.div`
//   .container {
//     width: 800px !important;
//   }
// `

export default ProductImageSlider;

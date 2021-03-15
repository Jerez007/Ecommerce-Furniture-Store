import React from "react";
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
  const images = [
    { original: singleProductImages[0].url },
    { original: singleProductImages[1].url },
    { original: singleProductImages[2].url },
    { original: singleProductImages[3].url },
    { original: singleProductImages[4].url },
  ];


  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showBullets={true}
    />
  );
};


export default ProductImageSlider;

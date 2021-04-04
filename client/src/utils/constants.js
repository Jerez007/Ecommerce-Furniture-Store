import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

export const socialMediaIcons = [
  {
    id: 1,
    icon: <FacebookIcon fontSize="large" />,
  },
  {
    id: 2,
    icon: <InstagramIcon fontSize="large" />,
  },
  {
    id: 3,
    icon: <PinterestIcon fontSize="large" />,
  },
];

export const footerMenu = [
  {
    id: 1,
    title: "SOLIS-J CANADA",
    links: [
      "about us",
      "careers",
      "contact us",
      "store expansion",
      "financing",
      "blog",
    ],
  },
  {
    id: 2,
    title: "locations",
    links: ["store hours & location", "B2B"],
  },
  {
    id: 3,
    title: "terms",
    links: [
      "privacy policy",
      "terms & conditions",
      "press releases",
      "return & exchange",
    ],
  },
  {
    id: 4,
    title: "need help?",
    links: [
      "assembly tips",
      "FAQ",
      "shipping & delivery",
      "curbside pickup",
      "SOLIS-J gift card balance",
      "Contest rules",
      "gift card winners",
    ],
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url =
  "https://course-api.com/react-store-single-product?id=";

// backend. this will be placed in an env when in production.
export const backend_url = "http://localhost:5000";

import React from "react";
import GrosureList from "./grosure-list/GrosureList";
import MainCart from "./main-cart/MainCart";
import MainComponent from "./mianComponent/main-container/MainComponent";
import MainRight from "./mianComponent/main-container/MainRight";
import ProductType from "./product-lists/ProductType";
import Container from "./right-nav/Container";
import "./right-side.css";
const RightSide = () => {
  return (
    <section className="right--side--section">
      <Container />
      <div className="right--side--flex">
        <MainComponent />
        <MainRight />
      </div>
      <MainCart />
      <ProductType />
      <GrosureList />
    </section>
  );
};
export default RightSide;

import React from "react";
import "./container.css";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";

const Container = () => {
  return (
    <div className="container--section">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
};
export default Container;

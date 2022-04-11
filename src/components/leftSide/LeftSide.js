import React from "react";
import Market from "./market/Market";
import "./leftSide.css";
import Profile from "./profile/Profile";

const LeftSide = () => {
  return (
    <section className="left--side--section">
      <Market />
      <Profile />
    </section>
  );
};
export default LeftSide;

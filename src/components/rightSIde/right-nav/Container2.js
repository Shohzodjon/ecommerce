import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
const Container2 = () => {
  return (
    <div className="container2--section">
      <h4>
        <MdLocationOn className="location--icon" />
        2972 Westheimer Rd. Santa Ana
      </h4>
      <IoIosArrowDown className="arrowdown--icon" />
    </div>
  );
};
export default Container2;

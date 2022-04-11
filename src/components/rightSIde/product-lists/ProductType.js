import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import "./product-type.css";

const ProductType = () => {
  return (
    <div className="product--type--section">
      <ul>
        <li>
          <GoSettings className="control--icon2" />
        </li>
        <li>
          <span>Pantrys</span>
        </li>
        <li>
          <span>Fruits and Vegetables</span>
        </li>
        <li>
          <span>Eggs and Dairys</span>
        </li>
        <li>
          <span>Frozens</span>
        </li>
        <li>
          <span>Beverange</span>
        </li>
        <li>
          <span>Snacks</span>
        </li>
        <li>
          <span>Households</span>
        </li>
        <li>
          <div className="product--type--flexbox">
            <span>More</span>
            <IoIosArrowDown className="down--icon" />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ProductType;

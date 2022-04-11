import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
const Container3 = () => {
  return (
    <div className="container3--section">
      <label htmlFor="search">
        <FiSearch className="search--icon" />
        <input
          type="text"
          placeholder="Search products in Wallmart"
          id="search"
        />
      </label>

      <GoSettings className="control--icon" />
    </div>
  );
};
export default Container3;

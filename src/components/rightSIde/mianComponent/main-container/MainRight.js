import React from "react";
import { RiStore2Fill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
const MainRight = () => {
  return (
    <div className="main--right--section">
      <div className="main--right--box">
        <RiStore2Fill className="mainRight--store--icon" />
        <span>Shop</span>
      </div>
      <div className="main--right--box2">
        <ImSpoonKnife className="spoonKnife--icon" />
        <span>Recipes</span>
      </div>
    </div>
  );
};
export default MainRight;

import React from "react";
import { ImHeadphones } from "react-icons/im";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

import "./bottom-component.css";

const BottomComponent = () => {
  return (
    <ul className="bottom--component">
      <li>
        <div>
          <ImHeadphones className="headphones--icon" />
          <h4>Help center</h4>
        </div>
        <MdArrowForwardIos className="arrow--icon" />
      </li>
      <li>
        <div>
          <AiOutlineLogout className="logout--icon" />
          <h4>Logout</h4>
        </div>
        <MdArrowForwardIos className="arrow--icon" />
      </li>
    </ul>
  );
};
export default BottomComponent;

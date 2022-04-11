import React from "react";
import MainImg from "../../../../imges/Rectangle 16.png";
import MainImg2 from "../../../../imges/image 2.svg";
import { FiInfo } from "react-icons/fi";
import { GrDeliver } from "react-icons/gr";
import { BsBookmarkStar } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./main.css";

const MainComponent = () => {
  return (
    <div className="main--conponent--section">
      <div className="main--component--img">
        <img src={MainImg} alt="img1" />
        <div className="main--component--img2">
          <img src={MainImg2} alt="img" />
        </div>
      </div>
      <div className="main--component--footer">
        <ul>
          <h2>Wallmart store</h2>

          <li>
            <FiInfo className="info--icon" />{" "}
            <span className="main--component--span">Store info</span>
          </li>
          <li>
            <GrDeliver className="delivery--icon" />
            <span className="main--component--span">Store delivery time</span>
          </li>
          <li>
            <BsBookmarkStar className="bookmark--icon" />
            <span className="main--component--span">Saved</span>
          </li>
        </ul>
        <div className="main--star--box">
          <AiFillStar className="star--icon" />
          <strong>4.5</strong>
        </div>
      </div>
    </div>
  );
};
export default MainComponent;

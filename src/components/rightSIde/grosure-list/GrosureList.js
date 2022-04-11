import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import data from "./data";
import { BsPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./grosure-list.css";

const GrosureList = () => {
  return (
    <section className="grosure--list--section">
      <div className="grosure--list--nav">
        <h2>Fresh Fruit</h2>
        <div className="grosure--list--navright">
          <h3>See all</h3>
          <MdKeyboardArrowRight className="grosure--list--navright__icon" />
        </div>
      </div>

      <div className="grouse--list--card">
        {data.productData.map((item, index) => {
          return (
            <div key={index} className="grosure--list--card--item">
              <div className="grosure--list--flex">
                <div className="grosure--wrapp">
                  <img src={item.symbol} alt="symbol" />
                </div>
                <AiOutlineHeart className="heart--icon" />
              </div>
              <div className="grosure--list--img">
                <img src={item.img} alt="img" />
              </div>
              <h4>{item.title}</h4>
              <div className="grosure--list--btn__group">
                <p className="grosure--list--price">
                  <span>{item.price}</span>$
                </p>

                <button>
                  <BsPlus className="plus--icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default GrosureList;

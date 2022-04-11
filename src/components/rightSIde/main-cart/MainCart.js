import React from "react";

import "./main-cart.css";
import food from "../../../imges/food.svg";
import orange from "../../../imges/orange.png";
import tomato from "../../../imges/tomato.svg";
import avacado from "../../../imges/banana.png";
const MainCart = () => {
  return (
    <section className="main--cart--section">
      <div className="card--container">
        <div className="main--cart orange">
          <h1>Orange</h1>
          <p>Promocode down</p>
          <button>orange20</button>
          <div className="card--img">
            <img src={orange} alt="img" />
          </div>
        </div>

        <div className="main--cart tomato">
          <h1>Tomato</h1>
          <p>Buy at affordable prices</p>

          <div className="card--img">
            <img src={tomato} alt="img" />
          </div>
        </div>

        <div className="main--cart food">
          <h1>Sale 40%</h1>
          <p>Very tasty pasta</p>
          <button>food40</button>
          <div className="card--img">
            <img src={food} alt="img" />
          </div>
        </div>
        <div className="main--cart ovacado">
          <h1>Banana</h1>
          <p>Sale full pack</p>
          <button>Collection</button>
          <div className="card--img">
            <img src={avacado} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainCart;

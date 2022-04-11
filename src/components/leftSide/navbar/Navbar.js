import React from "react";
import { RiStore2Fill, RiFileList3Line, RiWallet3Line } from "react-icons/ri";
import { BsFillBookmarkStarFill, BsPersonFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

import "./navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar--section">
      <li>
        <div>
          <RiStore2Fill className="store--icon" /> <h4>Stores</h4>
        </div>
      </li>
      <li>
        <div>
          <RiFileList3Line className="list--icon" /> <h4>Order history</h4>
        </div>
      </li>
      <li>
        <div>
          <BsFillBookmarkStarFill className="mark--icon" />{" "}
          <h4>Saved stores</h4>
        </div>
      </li>
      <li>
        <div>
          <AiOutlineHeart className="heart--icon" />
          <h4>Liked products</h4>
        </div>
      </li>
      <li>
        <div>
          <AiOutlineEye className="eye--icon" /> <h4>Viwed Products</h4>
        </div>
      </li>
      <li>
        <div>
          <RiWallet3Line className="wallet--icon" />
          <h4>Wallet history</h4>
        </div>
      </li>
      <li>
        <div>
          <BsPersonFill className="person--icon" />
          <h4>Profil setting</h4>
        </div>
      </li>
    </ul>
  );
};

export default Navbar;

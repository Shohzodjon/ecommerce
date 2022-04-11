import React from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { HiBell, HiPlus } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import userImg from "../../../imges/user.png";
import "./profile.css";
import Navbar from "../navbar/Navbar";
import BottomComponent from "../bottomComponent/BottomComponent";

const Profile = () => {
  return (
    <div className="profile--section">
      <div className="own--profile">
        <RiSettings5Fill className="settings" />
        <div className="user--img">
          <img src={userImg} alt="user img" />
        </div>
        <HiBell className="bell--icon" />
      </div>
      <div className="profile--info">
        <h2>Roberto Cavanali</h2>
        <p>(+99893) 100-00-00</p>
      </div>

      <div className="wallet--info">
        <div>
          <h3>Wallet balance</h3>
          <h1>$425,97</h1>
        </div>
        <button className="wallet--add">
          <HiPlus />
        </button>
      </div>
      <div className="send--wallet">
        <FaTelegramPlane className="telegram--icon" />
        <h3>Share wallet</h3>
      </div>
      <Navbar />
      <BottomComponent />
    </div>
  );
};
export default Profile;

import React, { useState } from "react";
import { GiAlarmClock } from "react-icons/gi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";
import { BsX, BsDot } from "react-icons/bs";
const Container4 = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const data = [
    { time: "8:00 AM — 9:00 AM" },
    { time: "9:00 AM — 10:00 AM" },
    { time: "10:00 AM — 11:00 AM" },
    { time: "11:00 AM — 12:00 AM" },
    { time: "12:00 AM — 13:00 AM" },
    { time: "13:00 AM — 14:00 AM" },
    { time: "14:00 AM — 15:00 AM" },
    { time: "15:00 AM — 16:00 AM" },
    { time: "16:00 AM — 17:00 AM" },
  ];

  return (
    <>
      <div className="container4--section">
        <div className="container4--wrapp" onClick={showModal}>
          <GiAlarmClock className="clock--icon" /> <span>By 09:00 — 23:00</span>
        </div>
      </div>

      {/* date section */}
      {show ? (
        <div className="date--section active--class">
          <div className="date--flex">
            <h2>Delivery time</h2>
            <BsX className="close--icon" onClick={closeModal} />
          </div>

          <div className="date--flex">
            <div className="date--flex--flex">
              <RiCalendarTodoLine className="calendar--icon" />
              <p>October 2021</p>
            </div>
            <div className="icons--flex">
              <MdOutlineKeyboardArrowLeft className="arrow--right" />
              <MdOutlineKeyboardArrowRight className="arrow--left" />
            </div>
          </div>

          <table>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
            <tr>
              <td>
                {" "}
                <span className="circle--shape disable">01</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape disable">02</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape disable">03</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape disable">04</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape disable">05</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape disable">06</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape disable">07</span>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <span className="circle--shape disable">08</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape disable">09</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape active">10</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">11</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">12</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">13</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">14</span>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <span className="circle--shape psedu-element">15</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">16</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">17</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">18</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">19</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">20</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">21</span>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <span className="circle--shape psedu-element">22</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">23</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">24</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">25</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">26</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">27</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">28</span>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <span className="circle--shape psedu-element">29</span>
              </td>
              <td>
                {" "}
                <span className="circle--shape psedu-element">30</span>
              </td>
            </tr>
          </table>

          <ul className="date--list">
            {data.map((item, index) => {
              return (
                <li key={index} className="time--list">
                  <div>
                    <BsDot className="dot--icon" />
                    <span>10 October</span>
                  </div>
                  <span>{item.time}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {show ? <div className="overlay overlay--active"></div> : null}
    </>
  );
};
export default Container4;

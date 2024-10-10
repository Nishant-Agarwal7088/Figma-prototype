import React from "react";
import { assets } from "../assets/assets";
import "./page3.css";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/page4"); // Navigate to "/page4"
  };
  return (
    <div className="video-container">
      <div className="screen">
        <img className="texture" src={assets.texture} alt="" />
        <img className="logo-1" src={assets.logo} alt="" />
        <img className="bars" src={assets.bars} alt="" />

        <img className="image-3" src={assets.image_3} alt="" />
        <div className="text">
          <p className="p1">A Lorem for The ipsum</p>
          <hr className="hr" />
          <p className="p2">
            A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
          </p>
        </div>

        <button
          className="button-3"
          draggable
          onClick={handleClick} // Trigger navigation on click
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          <img src={assets.calender} className="calender-3" alt="" />

          <hr />
          <img className="phone-3" src={assets.phone} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Page3;

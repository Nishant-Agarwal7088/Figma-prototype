import React from "react";
import { assets } from "../assets/assets";
import "./page2.css";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  const handleDragEnd = () => {
    navigate("/page3"); // Navigate to "/page3"
  };
  return (
    <div className="video-container">
      <div className="screen">
        <img className="logo-1" src={assets.logo} alt="" />
        <img className="bars" src={assets.bars} alt="" />
        <img className="line-3" src={assets.line2} alt="" />
        <div className="middle-text-2">
          <h1>
            LOREM INTO IPSUM <br />A LOREM{" "}
            <span>
              <i>in</i>
            </span>{" "}
            the IPSUM
          </h1>
        </div>
        <img className="main-image-2" src={assets.main_image} alt="" />
        <button
          className="button-2"
          draggable
          onDragEnd={handleDragEnd} // Trigger navigation on drag end
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          <img src={assets.calender} className="calender" alt="" />
          <p>LOREM</p>
          <hr />
          <img src={assets.phone} alt="" />
          <p>IPSUM</p>
        </button>
      </div>
    </div>
  );
};

export default Page2;

import React from "react";
import { assets } from "../assets/assets";
import "./page1.css";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  const handleDragEnd = () => {
    navigate("/page2"); // Navigate to "/page2"
  };
  return (
    <div className="video-container">
      <div className="screen">
        <img className="logo-1" src={assets.logo} alt="" />
        <img className="bars" src={assets.bars} alt="" />
        <img className="line-2" src={assets.line2} alt="" />
        <div className="middle-text">
          <h1>
            LOREM INTO IPSUM <br />A LOREM{" "}
            <span>
              <i>in</i>
            </span>{" "}
            the IPSUM
          </h1>
        </div>
        <img className="main-image" src={assets.main_image1} alt="" />
        <button
          className="button"
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

export default Page;

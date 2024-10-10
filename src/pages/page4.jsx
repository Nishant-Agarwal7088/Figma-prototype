import React from "react";
import { assets } from "../assets/assets";
import "./page4.css";
import { useNavigate } from "react-router-dom";

const Page4 = () => {
  const navigate = useNavigate();

  const handleDragEnd = () => {
    navigate("/page5"); // Navigate to "/page5"
  };
  return (
    <div className="video-container">
      <div className="screen">
        <img className="logo-1" src={assets.logo} alt="" />
        <img className="bars" src={assets.bars} alt="" />

        <div className="middle-text-4">
          <p className="middle-4 middle-1">LOREM OF </p>
          <p className="middle-4 middle-2">
            LOREM{" "}
            <span>
              <i>of</i>
            </span>{" "}
            IPSUM
          </p>
          <p className="middle-4 middle-3">
            A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.
            A Lorem for the ipsum, A lorem for the ipsum, A lorem for the ipsum.{" "}
            <br /> <br />A Lorem for the ipsum, A lorem for the ipsum, A lorem
            for the ipsum.A Lorem for the ipsum, A lorem for the ipsum, A lorem
            for the ipsum.
          </p>
        </div>
        <img className="image-4" src={assets.image_4} alt="" />
        <button
          className="button-4"
          draggable
          onDragEnd={handleDragEnd} // Trigger navigation on drag end
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

export default Page4;

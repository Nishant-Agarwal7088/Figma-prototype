import React from "react";
import { assets } from "../assets/assets";
import "./page5.css";

const Page5 = () => {
  return (
    <div className="video-container">
      <div className="screen">
        <img className="logo-1" src={assets.logo} alt="" />
        <img className="bars" src={assets.bars} alt="" />

        <img className="image-5" src={assets.image_5} alt="" />
        <div className="text-5">
          <p className="p1">Lorem In Ipsum</p>
          <hr />
          <p className="p2">Lorem lorem Ipsum Ipsum Lorem Lorem Ipsum Ipsum</p>
        </div>
        <button
          className="button-5"
          disabled // Disable the button
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

export default Page5;

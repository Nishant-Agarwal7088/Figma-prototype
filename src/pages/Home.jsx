import React from "react";
import "./Home.css";

import { assets } from "../assets/assets";
import mainlogo from "../assets/logo-bottom.svg";
import { useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const navigate = useNavigate();

  const handleDragEnd = () => {
    navigate("/page1"); // Navigate to "/page1"
  };

  return (
    <div className="video-container">
      <video
        width="414"
        height="736"
        autoPlay
        loop
        muted
        controls={false}
        style={{ pointerEvents: "none" }}
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1356575204746472376/TEAM/9982/cca2/-5ae6-4adb-81b4-c2d194c6ef4c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DA5X4G35nsqCYQOJifjatZJg-ux03avnabBzczxawb01-iKINIZRcDJ6nyQOt2vcAACeY5WVHW7ejPjpEWv4c6590eB1QyuaIwjD9al0X5Fjxd9yTPELjz2rSBXVfl73XOTIyD8ELhDDQ5btixpjuTjQrVWF4ssvcVj~4pCl-xdTv8KzkoKEPKY1XOPqqU652256iKxiJ4YGT2f2m1wX4gG0DF5NNBCocDGzOTy0-T4F3XAW-wCI50Oea6IstUn6jGmFI-~XxR-MAoHcMiKUDdUTL5e~uI9tlRKfoqcHzv-7woaJYOfQEIIg86ks0gBPfETkJU2g4NEzKbrWXmOGIQ__"
          type="video/mp4"
        />
      </video>
      <div className="logo">
        <img src={assets.logo} alt="" />
        <p>LOREM, IPSUM</p>
        <div className="middle-text">
          <p>A LOREM IPSUM</p>
          <p>
            <span>
              <i> in </i>
            </span>
            LOREM IPSUM
          </p>
        </div>

        <div className="footer">
          <img className="mainlogo" src={mainlogo} alt="" />
          <p className="footer-text">
            lorem by <br />
            <b>Lorem & Ipsum lorem</b>
          </p>

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
          <p className="weather">
            27 <img src={assets.weather} alt="" /> lorem
          </p>
        </div>
        <img className="line" src={assets.line} alt="" />
      </div>

      <div className="gradient-overlay"></div>
    </div>
  );
};

export default VideoPlayer;

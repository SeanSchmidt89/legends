import React from "react";
import "./AreaInfo.css";

const AreaInfo = ({ data }) => {
  let { areaInfo, imgArr } = data;
  return (
    <div className="area-info">
      <div className="area-data">
        <div className="area-img">
          <img src={imgArr[5]} alt="/" />
        </div>
        <div className="area-text">
          <p>{areaInfo}</p>
        </div>
      </div>
      <div className="img-overlay"></div>
    </div>
  );
};

export default AreaInfo;

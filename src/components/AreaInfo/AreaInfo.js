import React from "react";
import "./AreaInfo.css";

const AreaInfo = ({ data }) => {
  return (
    <div className="area-info">
      <div className="area-data">
        <p>{data}</p>
      </div>
    </div>
  );
};

export default AreaInfo;

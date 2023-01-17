import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "./Slider.css";

const Slider = ({ data }) => {
  let [imgNum, setImgNum] = useState(0);
  let { imgArr, infoArr } = data;

  const backHandler = () => {
    if (imgNum === 0) {
      setImgNum(2);
    } else {
      setImgNum(imgNum - 1);
    }
  };

  const forwardHandler = () => {
    if (imgNum === 4) {
      setImgNum(0);
    } else {
      setImgNum(imgNum + 1);
    }
  };
  return (
    <div className="slider">
      <img className="slider-img" src={imgArr[imgNum]} alt="/" />
      <div className="slider-overlay" />
      <MdOutlineArrowBackIos className="back" onClick={backHandler} size={50} />
      <MdOutlineArrowForwardIos
        className="forward"
        onClick={forwardHandler}
        size={50}
      />
      <div className="slider-info">
        <h2>{infoArr[0]}</h2>
        <p>{infoArr[1]}</p>
      </div>
    </div>
  );
};

export default Slider;

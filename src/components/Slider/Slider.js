import React, { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "./Slider.css";

const Slider = () => {
  let [imgNum, setImgNum] = useState(0);
  let imgArr = [
    "https://images.unsplash.com/photo-1548209454-8548045387bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2335&q=80",
    "https://images.unsplash.com/photo-1608135003575-9b587f3b0cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  ];

  const backHandler = () => {
    if (imgNum === 0) {
      setImgNum(2);
    } else {
      setImgNum(imgNum - 1);
    }
  };

  const forwardHandler = () => {
    if (imgNum === 2) {
      setImgNum(0);
    } else {
      setImgNum(imgNum + 1);
    }
  };
  return (
    <div className="slider">
      <img className="slider-img" src={imgArr[imgNum]} alt="/" />
      <MdOutlineArrowBackIos className="back" onClick={backHandler} size={60} />
      <MdOutlineArrowForwardIos
        className="forward"
        onClick={forwardHandler}
        size={60}
      />
    </div>
  );
};

export default Slider;

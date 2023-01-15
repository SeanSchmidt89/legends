import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  let [imgNum, setImgNum] = useState(1);
  let imgArr = [
    "https://images.unsplash.com/photo-1548209454-8548045387bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2335&q=80",
    "https://images.unsplash.com/photo-1608135003575-9b587f3b0cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  ];

  const backHandler = () => {
    if (imgNum === 1) {
      return;
    } else {
      setImgNum(imgNum--);
    }
  };

  const forwardHandler = () => {
    if (imgNum === 4) {
      return;
    } else {
      setImgNum(imgNum++);
    }
  };
  return (
    <div className="slider">
      <img className="slider-img" src={imgArr[imgNum]} alt="/" />
      <button onClick={backHandler}>back</button>
      <button onClick={forwardHandler}>forward</button>
      {imgNum}
    </div>
  );
};

export default Slider;

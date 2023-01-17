import React from "react";
import Slider from "../../components/Slider/Slider";
import "./MiamiBeach.css";

const MiamiBeach = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    'https://images.unsplash.com/photo-1580729739238-17abfd5e940f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    "https://images.unsplash.com/photo-1543960423-7dab0e3f299c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80",
    // "https://images.unsplash.com/photo-1567496912640-1b409fa9f0d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1411&q=80",
    "https://images.unsplash.com/photo-1542391085-dd1c64a52bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  ];
  let infoArr = ["Miami Beach", "a slender, nine-mile-long barrier island along the Atlantic Ocean"];
  let props = {
    imgArr,
    infoArr,
  };
  return (
    <div>
      <Slider data={props} />
    </div>
  );
};

export default MiamiBeach;

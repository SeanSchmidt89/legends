import React from "react";
import Slider from "../../components/Slider/Slider";
import AreaInfo from "../../components/AreaInfo/AreaInfo";
import Footer from "../../components/Footer/Footer";
import "./Brickell.css";

const Brickell = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1566805068958-92c5648061e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80",
    "https://images.unsplash.com/photo-1559554351-479eb824b725?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
    "https://images.unsplash.com/photo-1530686577637-0ccce382b327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2734&q=80",
    "https://images.unsplash.com/photo-1546709344-8be01dfbc721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
  ];
  let infoArr = [
    "Brickell",
    "The city's financial center, where glittering business towers and luxury condos tower over Biscayne Bay",
  ];
  let props = {
    imgArr,
    infoArr,
  };
  return (
    <div>
      <Slider data={props} />
      <AreaInfo />
      <Footer />
    </div>
  );
};

export default Brickell;

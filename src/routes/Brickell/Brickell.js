import React from "react";
import Slider from "../../components/Slider/Slider";
import AreaInfo from "../../components/AreaInfo/AreaInfo";
import AreaLinks from "../../components/AreaLinks/AreaLinks";
import Footer from "../../components/Footer/Footer";
import "./Brickell.css";

const Brickell = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1566805068958-92c5648061e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80",
    "https://images.unsplash.com/photo-1559554351-479eb824b725?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
    "https://images.unsplash.com/photo-1530686577637-0ccce382b327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2734&q=80",
    "https://images.unsplash.com/photo-1546709344-8be01dfbc721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1572875198816-5f48845774e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80"
  ];
  let infoArr = [
    "Brickell",
    "The city's financial center, where glittering business towers and luxury condos tower over Biscayne Bay",
  ];
  let areaInfo = [
    "Brickell is a neighborhood located in the heart of Miami, Florida. Known for its bustling financial district and upscale residential developments, Brickell offers a mix of luxury high-rise condos, apartments and office buildings. The area is home to many of the city's top restaurants, bars, and shops, as well as the Miami Circle, a historic archaeological site featuring a circular arrangement of limestone boulders. Additionally, Brickell is also popular for its scenic waterfront parks and marinas, offering stunning views of Biscayne Bay. With easy access to public transportation and major highways, Brickell is a convenient and desirable location for both business and leisure.",
  ];
  let props = {
    imgArr,
    infoArr,
    areaInfo
  };
  return (
    <div>
      <Slider data={props} />
      <AreaLinks />
      <AreaInfo data={props}/>
      <Footer />
    </div>
  );
};

export default Brickell;

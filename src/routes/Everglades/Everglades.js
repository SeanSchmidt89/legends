import React from "react";
import Slider from "../../components/Slider/Slider";
import AreaInfo from "../../components/AreaInfo/AreaInfo";
import Footer from "../../components/Footer/Footer";
import "./Everglades.css";

const Everglades = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1623536460816-51dc21b9d9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "https://images.unsplash.com/photo-1557032154-01808b0d8320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    "https://images.unsplash.com/photo-1660657725605-e40bbca90935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80",
    "https://images.unsplash.com/photo-1540201044005-405c4058a46c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80",
    "https://images.unsplash.com/photo-1649036853210-39256f4d8885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    "https://images.unsplash.com/photo-1660657725589-36ee7732c85c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2763&q=80",
  ];
  let infoArr = [
    "Everglades National Park",
    "a 1.5-million-acre wetlands preserve on the southern tip of the U.S. state of Florida",
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

export default Everglades;

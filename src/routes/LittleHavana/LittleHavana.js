import React from "react";
import Slider from "../..//components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import "./LittleHavana.css";

const LittleHavana = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1558294417-831b4c991662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1624477836421-670f3ed080fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1570396662990-ec320a4d6ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    "https://images.unsplash.com/photo-1558294417-4ab8762c8ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1541293712104-77db9e7752ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  ];
  let infoArr = ["Wynwood", "One of the most happening districts in Miami"];
  let props = {
    imgArr,
    infoArr,
  };
  return (
    <div className="little-havana">
      <Slider data={props} />
      <Footer />
    </div>
  );
};

export default LittleHavana;

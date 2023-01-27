import React from "react";
import Slider from "../../components/Slider/Slider";
import AreaInfo from "../../components/AreaInfo/AreaInfo";
import Footer from "../../components/Footer/Footer";
import "./MiamiBeach.css";

const MiamiBeach = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1501509497947-782640bc1412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1580729739238-17abfd5e940f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1542391085-dd1c64a52bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "https://images.unsplash.com/photo-1535498051285-5613026fae05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    "https://images.unsplash.com/photo-1543960423-7dab0e3f299c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80",
  ];
  let infoArr = [
    "Miami Beach",
    "a slender, nine-mile-long barrier island along the Atlantic Ocean",
  ];
  let areaInfo = [
    "Miami Beach is a barrier island located east of Miami, Florida. Known for its white sand beaches, turquoise waters, and vibrant nightlife, Miami Beach is a popular destination for both tourists and locals. The area is home to several iconic neighborhoods, including South Beach, which is famous for its Art Deco architecture and lively atmosphere. Ocean Drive is one of the most famous street in the area, known for its restaurants, bars, and clubs that stay open until the early hours of the morning. Miami Beach also offers a wide range of activities, from water sports such as swimming, jet skiing, and parasailing, to shopping, dining, and entertainment. It's a perfect place for those who want to experience the sun, sand, and sea.",
  ];
  let props = {
    imgArr,
    infoArr,
    areaInfo,
  };
  return (
    <div>
      <Slider data={props} />
      <AreaInfo data={props} />
      <Footer />
    </div>
  );
};

export default MiamiBeach;

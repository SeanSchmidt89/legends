import React from "react";
import Slider from "../..//components/Slider/Slider";
import AreaInfo from "../../components/AreaInfo/AreaInfo";
import Footer from "../../components/Footer/Footer";
import "./LittleHavana.css";

const LittleHavana = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1624477836421-670f3ed080fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1558294417-831b4c991662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1570396662990-ec320a4d6ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    "https://images.unsplash.com/photo-1558294417-4ab8762c8ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
    "https://images.unsplash.com/photo-1541293712104-77db9e7752ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  ];
  let infoArr = ["Wynwood", "One of the most happening districts in Miami"];
  let areaInfo = [
    "Little Havana is a neighborhood in Miami, Florida that is known for its rich Cuban culture and heritage. It is located just west of Downtown Miami and is home to a large population of Cuban immigrants and their descendants. The neighborhood is known for its lively street life, with Calle Ocho (8th Street) being the heart of Little Havana, where visitors can find a variety of authentic Cuban restaurants, cafes, and cigar shops. Little Havana also has a strong cultural presence, with the famous Tower Theater, which hosts live music and dance performances, as well as the Little Havana Cultural Center, which showcases the neighborhood's history and art. Additionally, Little Havana is home to the famous Maximo Gomez Park, also known as Domino Park, where locals gather to play dominos and chess, and the famous Walk of Fame, where street performers entertain the crowds. Overall, Little Havana is a vibrant, colorful neighborhood that offers a unique glimpse into Miami's Cuban culture and heritage.",
  ];
  let props = {
    imgArr,
    infoArr,
  };
  return (
    <div className="little-havana">
      <Slider data={props} />
      <AreaInfo data={areaInfo} />
      <Footer />
    </div>
  );
};

export default LittleHavana;

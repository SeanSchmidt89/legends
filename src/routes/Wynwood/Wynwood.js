import React from "react";
import Slider from "../../components/Slider/Slider";
import AreaInfo from "../../components/AreaInfo/AreaInfo";
import Footer from "../../components/Footer/Footer";
import "./Wynwood.css";

const Wynwood = () => {
  let imgArr = [
    "https://images.unsplash.com/photo-1593839745217-d514b8821450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
    "https://images.unsplash.com/photo-1590477329022-dffe7d88c970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1621369929981-a2ca4fa55f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    "https://images.unsplash.com/photo-1560319469-77fc0e9c39c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1529326353831-df2fd0f44a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1590157809060-c30e4ab938bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80",
  ];
  let infoArr = ["Wynwood", "One of the most happening districts in Miami"];
  let areaInfo = [
    "Wynwood is a neighborhood in Miami, Florida known for its street art, trendy restaurants, and boutique shops. It is located just north of Downtown Miami and is home to the Wynwood Arts District, which features over 70 art galleries, museums, and collections. The neighborhood is also home to a variety of bars, nightclubs, and music venues, making it a popular destination for nightlife. Many of the buildings in the area have been repurposed into art spaces, making the neighborhood a unique blend of urban and artistic. Additionally, Wynwood is also home to the Wynwood Walls, a collection of large-scale murals and street art, which attracts visitors from all over the world. Overall, Wynwood is a vibrant, eclectic neighborhood that offers a diverse range of experiences for visitors.",
  ];
  let props = {
    imgArr,
    infoArr,
    areaInfo,
  };
  return (
    <div className="wynwood">
      <Slider data={props} />
      <AreaInfo data={props} />
      <Footer />
    </div>
  );
};

export default Wynwood;
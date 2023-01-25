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
  let areaInfo = [
    "The Everglades is a vast wetlands region located in southern Florida, known for its diverse ecosystem and abundance of wildlife. It encompasses over 1.5 million acres of wetlands, marshes, and swamps and is home to a wide variety of plant and animal species. It is a designated World Heritage Site, International Biosphere Reserve, and Wetland of International Importance. Visitors can explore the Everglades by taking an airboat tour, hiking the many nature trails, or by canoe or kayak. The Everglades is also home to a diverse array of wildlife, including alligators, crocodiles, panthers, and over 350 species of birds, making it a popular destination for bird watching and wildlife viewing. It also contains the Everglades National Park, which offers several ranger-led tours, as well as camping and picnicking facilities. The park also offers opportunities for fishing, boating, and canoeing. The Everglades is a unique and fragile ecosystem that offers visitors the chance to experience the beauty and biodiversity of Florida's wetlands.",
  ];
  let props = {
    imgArr,
    infoArr,
  };
  return (
    <div>
      <Slider data={props} />
      <AreaInfo data={areaInfo} />
      <Footer />
    </div>
  );
};

export default Everglades;

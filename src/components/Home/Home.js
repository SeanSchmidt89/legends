import React from "react";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import PlanTrip from "../PlanTrip/PlanTrip";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PlanTrip />
      <PhotoGrid />
      {/* <Reviews /> */}
    </div>
  );
};

export default Home;

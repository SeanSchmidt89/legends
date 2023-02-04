import React from "react";
// import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import AreaLinks from "../AreaLinks/AreaLinks";
// import PlanTrip from "../PlanTrip/PlanTrip";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <Hero />
      <PlanTrip /> */}
      <AreaLinks />
      <PhotoGrid />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PhotoGrid />
      {/* <Reviews /> */}
    </div>
  );
};

export default Home;

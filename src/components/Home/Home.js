import React from "react";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Reviews />
    </div>
  );
};

export default Home;

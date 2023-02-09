import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [places, setPlaces] = useState(false);

  const placesHandler = () => {
    setPlaces(!places);
  };
  return (
    <div className="hero">
      <img
        src="https://images.unsplash.com/photo-1520716448897-f1cc6b0241ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="/"
      />
      <div className="overlay"></div>
      <div className="hero-text">
        <h2>Miami's Premier Travel Co</h2>
        <p>Come explore Miami today</p>
        <p>Book with us and recive exculsive offers</p>
        <div className="places-btn">
          <button onClick={placesHandler}>Explore</button>
          <button className="book-now">Book Now</button>
          <ul className={places ? "show" : "hide"}>
            <Link to="/brickell">
              <li>
                <span>___</span> Brickell
              </li>
            </Link>
            <Link to="/miamibeach">
              <li>
                <span>___</span> Miami Beach
              </li>
            </Link>
            <Link to="/wynwood">
              <li>
                <span>___</span> Wynwood
              </li>
            </Link>
            <Link to="/everglades">
              <li>
                <span>___</span> Everglades
              </li>
            </Link>
            <Link to="/little-havana">
              <li>
                <span>___</span> Little Havana
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

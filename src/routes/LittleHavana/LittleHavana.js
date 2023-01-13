import React from "react";
import "./LittleHavana.css";

const LittleHavana = () => {
  return (
    <div className="little-havana">
      <img
        src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        alt="/"
      />
      <div className="overlay"></div>
      <div className="hero-text">
        <h2>Miami's Premier Travel Co</h2>
        <p>Come explore Miami today</p>
        <p>Book with us and recive exculsive offers</p>
      </div>
    </div>
  );
};

export default LittleHavana;

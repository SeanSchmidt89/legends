import React from "react";
import "./PlanTrip.css";

const PlanTrip = () => {
  return (
    <div className="plan-trip">
      <div className="plan-backdrop">
        <div className="plan-info">
          <h2>jfoisdjiofjdsoijfiosd</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p>
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="plan-container">
          <img
            className="img-one"
            src="https://images.unsplash.com/photo-1520716448897-f1cc6b0241ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt="/"
          />
          <img
            className="img-two"
            src="https://images.unsplash.com/photo-1577626761656-74220b11dab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="/"
          />
          <img
            className="img-three"
            src="https://images.unsplash.com/photo-1571534494457-af9aa81ca32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            alt="/"
          />
        </div>
      </div>
      <div className="bar" />
    </div>
  );
};

export default PlanTrip;

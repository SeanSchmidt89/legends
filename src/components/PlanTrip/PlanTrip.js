import React from "react";
import "./PlanTrip.css";

const PlanTrip = () => {
  return (
    <div className="plan-trip">
      <div className="plan-backdrop">
        <div className="plan-info">
          <h2> Miami, </h2>
          <p>
            a vibrant and exciting city that offers something for everyone. From
            the stunning beaches and crystal clear waters to the bustling
            nightlife and delicious culinary scene, Miami is the perfect
            destination for your next vacation. With Legends travel Co, you'll
            be able to experience all that this city has to offer, from
            exploring the Art Deco District and visiting Little Havana to
            indulging in world-class shopping and dining. Whether you're looking
            for a romantic getaway or a fun-filled family vacation, our
            experienced travel experts will help you plan the trip of a
            lifetime.
          </p>
        </div>
        <div className="plan-container">
          <img
            className="img-one"
            src="https://images.unsplash.com/photo-1558951412-8845d2b0f2fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
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

import React from "react";
import "./PhotoGrid.css";

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      <div className="grid">
        <img
          className="pic-one"
          src="https://images.unsplash.com/photo-1597535973747-951442d5dbc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"
          alt="/"
        />
        <img
          className="pic-two"
          src="https://images.unsplash.com/photo-1551389319-fb570e5a5dde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
          alt="/"
        />
        <img
          className="pic-three"
          src="https://images.unsplash.com/photo-1586474714711-59ad5a5798bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt="/"
        />
        <img
          className="pic-four"
          src="https://images.unsplash.com/photo-1559609647-0f31a1c76059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />
        <img
          className="pic-five"
          src="https://images.unsplash.com/photo-1596883930842-dab7b4e4e866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          alt="/"
        />
      </div>
      <div className="info">
        <p>
          Miami is a vibrant and exciting city that offers something for
          everyone. From the stunning beaches and crystal clear waters to the
          bustling nightlife and delicious culinary scene, Miami is the perfect
          destination for your next vacation. With our Miami travel company,
          you'll be able to experience all that this city has to offer, from
          exploring the Art Deco District and visiting Little Havana to
          indulging in world-class shopping and dining. Whether you're looking
          for a romantic getaway or a fun-filled family vacation, our
          experienced travel experts will help you plan the trip of a lifetime.
          So why wait? Book your Miami vacation today and experience the magic
          of this incredible city!
        </p>
      </div>
    </div>
  );
};

export default PhotoGrid;

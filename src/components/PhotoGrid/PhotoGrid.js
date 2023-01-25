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
      <h2>Legends</h2>
        <ul>
          <li>
            Competitive prices and special deals on travel packages.
          </li>
          <li>
            Providing a wide range of options to choose from,
            catering to different interests and budgets.
          </li>
          <li>
            Offering personalized service and 24/7 customer support for a smooth
            and stress-free trip.
          </li>
          <li>
            Having access to exclusive deals and promotions on flights, hotels,
            and activities.
          </li>
          <li>
            Having a team of experienced travel experts who can provide
            destination recommendations and insider tips.
          </li>
          <li>
            Providing flexible booking options and the ability to make changes
            to your trip as needed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhotoGrid;

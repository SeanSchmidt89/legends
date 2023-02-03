import React from "react";
import { Link } from "react-router-dom";
import "./AreaLinks.css";

const AreaLinks = () => {
  return (
    <div className="arealinks">
      <div className="links-container">
        <div className="one">
          <Link to="/brickell" className="brickell">
            <p>
              <span>_</span>Brickell<span>_</span>
            </p>
          </Link>
          <Link to="/miamibeach" className="miamibeach">
            <p>
              <span>_</span>Miami Beach<span>_</span>
            </p>
          </Link>
          <Link to="/wynwood" className="wynwood">
            <p>
              <span>_</span>Wynwood<span>_</span>
            </p>
          </Link>
        </div>
        <div className="two">
          <Link to="/everglades" className="everglades">
            <p>
              <span>_</span>Everglades<span>_</span>
            </p>
          </Link>
          <Link to="/little-havana" className="littlehavana">
            <p>
              <span>_</span>Little Havana<span>_</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AreaLinks;

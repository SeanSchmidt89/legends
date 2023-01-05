import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Legends</h1>
      </Link>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Catalog</li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Legends</h1>
      </Link>
      <div className="nav-links">
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
      <RxHamburgerMenu className="hamburger" size={22} />
    </div>
  );
};

export default Nav;

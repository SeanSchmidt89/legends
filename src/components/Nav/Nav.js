import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [sideNav, setSideNav] = useState(false);

  const sideNavHandler = () => {
    setSideNav(!sideNav);
  };
  return (
    <div className="nav">
      <Link to="/">
        <h1>Legends</h1>
      </Link>
      <div className={!sideNav ? "nav-links" : "side-nav"}>
        <ul>
          <Link onClick={sideNavHandler} to="/">
            <li>Home</li>
          </Link>
          <Link onClick={sideNavHandler} to="/">
            <li>Catalog</li>
          </Link>
          <Link onClick={sideNavHandler} to="/">
            <li>About</li>
          </Link>
        </ul>
      </div>
      {!sideNav ? (
        <RxHamburgerMenu
          className="hamburger"
          onClick={sideNavHandler}
          size={22}
        />
      ) : (
        <AiOutlineClose className="x" onClick={sideNavHandler} size={22} />
      )}
    </div>
  );
};

export default Nav;

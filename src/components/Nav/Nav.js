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

  sideNav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="nav">
      <Link to="/">
        <h1>Legends</h1>
      </Link>
      {!sideNav ? (
        <div className="nav-links">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>Catalog</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="side-nav">
          <ul>
            <Link onClick={sideNavHandler} to="/">
              <li>
                <p>-</p>Home<p>-</p>
              </li>
            </Link>
            <Link onClick={sideNavHandler} to="/">
              <li>
                <p>-</p>Catalog<p>-</p>
              </li>
            </Link>
            <Link onClick={sideNavHandler} to="/">
              <li>
                <p>-</p>About<p>-</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
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

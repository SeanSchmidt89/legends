import React from "react";
import { CiFacebook } from "react-icons/ci";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineCopyright,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { RiSnapchatLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social-media">
          <Link to="/">
            <CiFacebook size={35} />
          </Link>
          <Link to="/">
            <AiOutlineInstagram size={35} />
          </Link>
          <Link to="/">
            <FiTwitter size={35} />
          </Link>
          <Link to="/">
            <AiOutlineYoutube size={35} />
          </Link>
          <Link to="/">
            <RiSnapchatLine size={35} />
          </Link>
        </div>
        <div className="copy-right">
          <p>
            <span>
              <AiOutlineCopyright size={15} />
            </span>
            2023 SEANS PROJECT
          </p>
          <p>DEVELOPED BY SEAN SCHMIDT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

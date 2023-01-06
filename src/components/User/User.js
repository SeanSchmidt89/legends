import React from "react";
import { BiStar } from "react-icons/bi";
import "./User.css";

const User = ({ user }) => {
  let rating = Math.ceil(Math.random() * (10 - 4) + 4);
  return (
    <div className="user">
      <img src={user.picture.medium} alt={user.name.first} />

      <p>{user.name.first}</p>
      <div className="rating">
        <p>{rating}</p>
        <BiStar />
      </div>
    </div>
  );
};

export default User;

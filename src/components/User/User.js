import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="user">
      <img src={user.picture.medium} alt={user.name.first} />
      <p>{user.name.first}</p>
    </div>
  );
};

export default User;

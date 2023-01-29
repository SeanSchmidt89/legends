import React from "react";
import { useSelector } from "react-redux";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
import "./User.css";

const User = ({ user }) => {
  const review = useSelector((state) => state.users.reviews);
  let rating = Math.ceil(Math.random() * (10 - 4) + 4);
  let rand = Math.floor(Math.random() * 14);
  return (
    <div className="user">
      <img src={user.picture.medium} alt={user.name.first} />
      <p>{user.name.first}</p>
      <div className="rating">
        {rating === 5 && (
          <div>
            <FaRegStar /> <FaRegStar /> <FaRegStarHalf />
          </div>
        )}
        {rating === 6 && (
          <div>
            <FaRegStar /> <FaRegStar /> <FaRegStar />
          </div>
        )}
        {rating === 7 && (
          <div>
            <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStarHalf />
          </div>
        )}
        {rating === 8 && (
          <div>
            <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />
          </div>
        )}
        {rating === 9 && (
          <div>
            <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />{" "}
            <FaRegStarHalf />
          </div>
        )}
        {rating === 10 && (
          <div>
            <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />{" "}
            <FaRegStar />
          </div>
        )}
      </div>
      <p className="review">{review[rand].slice(0, 110)}...</p>
    </div>
  );
};

export default User;

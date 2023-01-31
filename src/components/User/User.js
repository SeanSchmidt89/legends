import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
import "./User.css";

const User = ({ user }) => {
  const review = useSelector((state) => state.users.reviews);
  let rating = Math.ceil(Math.random() * (10 - 4) + 4);
  let rand = Math.floor(Math.random() * 14);
  let id = user.login.uuid;
  return (
    <Link to={`/review/${id}`}>
      <div className="user">
        <img src={user.picture.medium} alt={user.name.first} />
        <p>{user.name.first}</p>
        <div className="rating">
          {rating === 5 && (
            <div>
              <FaRegStar size={12} /> <FaRegStar size={12} />{" "}
              <FaRegStarHalf size={12} />
            </div>
          )}
          {rating === 6 && (
            <div>
              <FaRegStar size={12} /> <FaRegStar size={12} />{" "}
              <FaRegStar size={12} />
            </div>
          )}
          {rating === 7 && (
            <div>
              <FaRegStar size={12} /> <FaRegStar size={12} />{" "}
              <FaRegStar size={12} /> <FaRegStarHalf size={12} />
            </div>
          )}
          {rating === 8 && (
            <div>
              <FaRegStar size={12} /> <FaRegStar size={12} />{" "}
              <FaRegStar size={12} /> <FaRegStar size={12} />
            </div>
          )}
          {rating === 9 && (
            <div>
              <FaRegStar size={12} /> <FaRegStar size={12} />{" "}
              <FaRegStar size={12} /> <FaRegStar size={12} />{" "}
              <FaRegStarHalf size={12} />
            </div>
          )}
          {rating === 10 && (
            <div>
              <FaRegStar size={12} /> <FaRegStar size={12} />{" "}
              <FaRegStar size={12} /> <FaRegStar size={12} />{" "}
              <FaRegStar size={12} />
            </div>
          )}
        </div>
        <p className="review">{review[rand].slice(0, 110)}...</p>
      </div>
    </Link>
  );
};

export default User;

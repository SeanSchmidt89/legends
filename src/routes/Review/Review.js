import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import Footer from "../../components/Footer/Footer";
import "./Review.css";

const Review = () => {
  let { id } = useParams();
  let userList = useSelector((state) => state.users.users);
  let reviews = useSelector((state) => state.users.reviews);
  let user = userList.filter((user) => user.login.uuid === id);
  let rating = Math.ceil(Math.random() * (10 - 4) + 4);
  let rand = Math.floor(Math.random() * 14);
  return (
    <div className="review-container">
      <img
        src="https://images.unsplash.com/photo-1559554351-479eb824b725?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
        alt="/"
      />
      <div className="review-overlay">
        {/* <div className="text-overlay" /> */}
      </div>
      <div className="user-details">
        {user[0].picture && (
          <img src={user[0].picture.large} alt={user[0].name.first} />
        )}
        {user[0].name ? <p>{user[0].name.first}</p> : null}
        <div className="rating">
          {rating === 5 && (
            <div>
              <FaRegStar size={21} /> <FaRegStar size={21} />{" "}
              <FaRegStarHalf size={21} />
            </div>
          )}
          {rating === 6 && (
            <div>
              <FaRegStar size={21} /> <FaRegStar size={21} />{" "}
              <FaRegStar size={21} />
            </div>
          )}
          {rating === 7 && (
            <div>
              <FaRegStar size={21} /> <FaRegStar size={21} />{" "}
              <FaRegStar size={21} /> <FaRegStarHalf size={21} />
            </div>
          )}
          {rating === 8 && (
            <div>
              <FaRegStar size={21} /> <FaRegStar size={21} />{" "}
              <FaRegStar size={21} /> <FaRegStar size={21} />
            </div>
          )}
          {rating === 9 && (
            <div>
              <FaRegStar size={21} /> <FaRegStar size={21} />{" "}
              <FaRegStar size={21} /> <FaRegStar size={21} />{" "}
              <FaRegStarHalf size={21} />
            </div>
          )}
          {rating === 10 && (
            <div>
              <FaRegStar size={21} /> <FaRegStar size={21} />{" "}
              <FaRegStar size={21} /> <FaRegStar size={21} />{" "}
              <FaRegStar size={21} />
            </div>
          )}
        </div>
        <div className="rating-sm">
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
        <div className="back-btn">
          <Link to="/">
            <p>
              <span>
                <MdKeyboardBackspace size={26} />
              </span>
              back
            </p>
          </Link>
        </div>
      </div>
      <div className="review">
        <p className="review-title">{user[0].name.first}'s Review</p>
        <p>{reviews && reviews[rand]}</p>
      </div>

      <Footer />
    </div>
  );
};

export default Review;

import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import "./Review.css";

const Review = () => {
  let { id } = useParams();
  let userList = useSelector((state) => state.users.users);
  let user = userList.filter((user) => user.login.uuid === id);
  return (
    <div className="review-container">
      <img
        src="https://images.unsplash.com/photo-1559554351-479eb824b725?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
        alt="/"
      />
      <div className="review-overlay">
        <div className="text-overlay" />
      </div>

      <div className="user-img">
        {user[0].picture && (
          <img src={user[0].picture.large} alt={user[0].name.first} />
        )}
      </div>
      {user[0].name ? <p>{user[0].name.first}</p> : null}
      <Footer />
    </div>
  );
};

export default Review;

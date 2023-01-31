import React from "react";
import { useParams } from "react-router-dom";
import "./Review.css";

const Review = () => {
  let { id } = useParams();
  return <div className="review">Review{id}</div>;
};

export default Review;

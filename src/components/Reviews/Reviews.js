import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/userSlice";
import User from "../User/User";
import axios from "axios";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "./Reviews.css";

const Reviews = () => {
  const dispatch = useDispatch();
  const [moreReviews, setMoreReviews] = useState(false);
  const userList = useSelector((state) => state.users.users);
  const moreReivewHandler = () => {
    setMoreReviews(!moreReviews);
  };
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then((response) => dispatch(getUsers(response.data.results)))
      .catch((error) => console.log(error.massage));
  }, [dispatch, moreReviews]);
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>
      <div className="container">
        {userList
          .map((item) => <User key={item.login.uuid} user={item} />)
          .slice(0, 4)}
        <MdOutlineArrowBackIos
          className="back-arrow"
          onClick={moreReivewHandler}
          size={35}
        />
        <MdOutlineArrowForwardIos
          className="forward-arrow"
          onClick={moreReivewHandler}
          size={35}
        />
      </div>
      <div className="container-small">
        {userList
          .map((item) => <User key={item.login.uuid} user={item} />)
          .slice(0, 2)}
        <MdOutlineArrowBackIos
          className="back-arrow"
          onClick={moreReivewHandler}
          size={28}
        />
        <MdOutlineArrowForwardIos
          className="forward-arrow"
          onClick={moreReivewHandler}
          size={28}
        />
      </div>
    </div>
  );
};

export default Reviews;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/userSlice";
import User from "../User/User";
import axios from "axios";
import "./Reviews.css";

const Reviews = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.users);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => dispatch(getUsers(response.data.results)))
      .catch((error) => console.log(error.massage));
  }, [dispatch]);
  return (
    <div className="reviews">
      Reviews
      <div className="container">
        {userList.map((item) => (
          <User key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

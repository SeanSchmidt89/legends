import React from "react";
import Footer from "../../components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-data">
          <div className="about-img">
            <img
              src="https://images.unsplash.com/photo-1590157809060-c30e4ab938bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80"
              alt="/"
            />
          </div>
          <div className="about-text">
            <p>
              This website was designed with React JS, Redux toolkit, React
              Router and React Icons. It uses Axios to pull from an API at
              randomuser.me to generate users for customer reviews.
            </p>
            <a href="https://github.com/SeanSchmidt89/legends" className="view-code">View my code</a>
          </div>
        </div>
        <div className="about-overlay"></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

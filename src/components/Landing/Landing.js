import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export const Landing = () => {
  // What we want
  //
  // A button that routes to the customer section
  // A button that routes to the business owner section
  // A button that routes runnr section
  // A button that routes to the marketplace
  return (
    <div className="landing__container">
      <Link to="/runnr">
        <button className="btn btn-primary">Runnr</button>
      </Link>
      <Link to="/business">
        <button className="btn btn-primary">Business</button>
      </Link>
      <Link to="/explore">
        <button className="btn btn-primary">Explore</button>
      </Link>
      <Link to="/customer">
        <button className="btn btn-outline-primary">Customer</button>
      </Link>
    </div>
  );
};

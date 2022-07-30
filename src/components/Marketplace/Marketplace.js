import "./Marketplace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsProgress,
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "./Card/Card";

import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
export const Marketplace = () => {
  const isLoggedIn = true;
  const primaryNavItems = [
    "Body Wears",
    "Food",
    "Groceries",
    "Devices/Electronics",
  ];
  const secondaryNavItems = ["Shoes", "Clothes", "Accessories", "UnderWear"];
  return (
    <div className="marketplace__container">
      {/* 
    3 categories
    1. Header Section // Think of the runnr name cart icon run it, hamburger icon etx
    2. Navigation Section // The bodywears, food, grocries etc 
    3. Body Section // Think of the shoes and what not
    */}
      <div className="marketplace__header">
        {/* 
        1.has a hamburger icon
        2.has a cart icon
        3.has a search icon
        4.has a settings icon
        5. has a signup and register / avatar component
        t. has a run it banner button ish thingy
         */}

        <div className="marketplace_header_top">
          <FontAwesomeIcon className="bars_icon" icon={faBars} />
          <span>.RUNNR</span>
          <div>
            {isLoggedIn ? (
              <FontAwesomeIcon className="user_icon" icon={faUser} />
            ) : (
              <div>
                <button className="btn btn-primary">Login</button>
                <button className="btn btn-primary">Register</button>
              </div>
            )}
          </div>
        </div>
        <div className="marketplace_header_bottom_top">
          <span>Marketplace</span>
          <FontAwesomeIcon
            className="shoppingcart_icon"
            icon={faCartShopping}
          />
        </div>
        <div className="marketplace_header_bottom_bottom">
          <input
            className=" form-control marketplace_search"
            placeholder="search"
          />
          <FontAwesomeIcon className="search_icon" icon={faSearch} />
          <Link to="./runit">
            <button className="btn btn-primary">
              Run it <p>get your packages delivered quickly and safely</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="marketplace__navigation">
        <Navbar items={primaryNavItems} />
        <Navbar items={secondaryNavItems} />
      </div>
      <div className="marketplace__body">
        {/* two thing the top header part and the cards */}
        <div className="marketplace_body_header">
          <span>15items</span>
          <FontAwesomeIcon className="bars_icon" icon={faBarsProgress} />
        </div>
        <div className="card_container">
          <Card id="card_1" />
          <Card id="card_2" />
        </div>
      </div>
    </div>
  );
};

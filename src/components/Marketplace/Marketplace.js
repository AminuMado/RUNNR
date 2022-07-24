import "./Marketplace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsProgress,
  faCartShopping,
  faHeart,
  faSearch,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import test_Src from "../../Assets/23.png";
import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
export const Marketplace = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

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
          <div className="card">
            <img className="care-img-top" src={test_Src} alt="icon"></img>
            <div className="card-body">
              <FontAwesomeIcon
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "heart_icon liked" : "heart_icon"}
                icon={faHeart}
              />
              <FontAwesomeIcon
                onClick={() => setIsAddedToCart(!isAddedToCart)}
                className={
                  isAddedToCart
                    ? "shoppingcart_icon added"
                    : "shoppingcart_icon"
                }
                icon={faCartShopping}
              />
              <FontAwesomeIcon
                onClick={() => setIsStarred(!isStarred)}
                className={isStarred ? "star_icon starred" : "star_icon"}
                icon={faStar}
              />
              <h5 className="card-title">Startropper</h5>
              <h6 className="card-price">$30</h6>
              <h6 className="card-distance">5.0km</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

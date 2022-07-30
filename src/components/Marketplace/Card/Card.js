import "./Card.css";
import test_Src from "../../../Assets/23.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  return (
    <div className="card">
      <Link to={`./${props.id}`}>
        <img className="card-img-top" src={test_Src} alt="icon"></img>
      </Link>
      <div className="card-body">
        <FontAwesomeIcon
          onClick={() => setIsLiked(!isLiked)}
          className={isLiked ? "heart_icon liked" : "heart_icon"}
          icon={faHeart}
        />
        <FontAwesomeIcon
          onClick={() => setIsAddedToCart(!isAddedToCart)}
          className={
            isAddedToCart ? "shoppingcart_icon added" : "shoppingcart_icon"
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
  );
};

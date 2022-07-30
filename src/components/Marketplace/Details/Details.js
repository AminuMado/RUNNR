import "./Details.css";
import test_Src from "../../../Assets/23.png";
import test_Src1 from "../../../Assets/4.png";
import test_Src2 from "../../../Assets/3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Carousel } from "../../Carousel/Carousel";
export const Details = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const sizeOptions = [42, 43, 44, 45, 46];
  const changeQuantity = (type, count) => {
    if (type === "+") {
      setQuantity(++count);
      return;
    }
    if (count <= 1) return;
    setQuantity(--count);
  };
  const images = [test_Src, test_Src1, test_Src2];
  return (
    <div className="details_container">
      {/* 
        1.backbutton
        2.image carousel
        3.card details
        4. sizes
        5.add to cart
      */}
      <FontAwesomeIcon icon={faArrowLeft} />

      <div className="card">
        <FontAwesomeIcon icon={faArrowRight} />
        <Carousel images={images} />
        <div className="card-body">
          <h5 className="card-title">Startropper</h5>
          <h6 className="card-price">$30</h6>
          <h6 className="card-distance">5.0km</h6>
        </div>
      </div>
      <div className="bottom_details_container">
        <div className="sizes_container">
          <h2>Sizes</h2>
          {sizeOptions.map((sizeOption) => (
            <button
              key={sizeOption}
              onClick={() => setSelectedSize(sizeOption)}
              className={selectedSize === sizeOption ? "active" : ""}
            >
              {sizeOption}
            </button>
          ))}
        </div>
        <div className="quantity_container">
          <div className="cart-item-quantity">
            <p>Quantity:{quantity}</p>
            <div className="quantity-btns-container">
              <button onClick={() => changeQuantity("-", quantity)}>-</button>
              <button onClick={() => changeQuantity("+", quantity)}>+</button>
            </div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

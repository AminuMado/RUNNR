import "./CheckOut.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const CheckOut = () => {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      {/* we have 
1. A back Button
2. Checkout Title
3. The items list with their prices and a view and delete option
4. Summary sheet for items
5. Order Cataloging section
*/}
      <div>
        <FontAwesomeIcon onClick={() => navigate(-1)} icon={faArrowLeft} />
        <h1>Check Out</h1>
      </div>
      <div className="checkout_container">
        <div className="checkout_listItem">
          <span>1</span>
          <div className="checkout_listItem_description">
            <p>{`Whatever Design Shoes,[red],[2]`}</p>{" "}
            <p className="checkout_listItem_description_distance">2.9km</p>
          </div>
          <span>₦12,000</span>
          <div className="checkout_links">
            <p className="minusCircle"> - </p>
            <p>view</p>
          </div>
        </div>
        <div className="checkout_listItem">
          <span>2</span>
          <div className="checkout_listItem_description">
            <p>{`Peak Milk Sachet,[1]`}</p>{" "}
            <p className="checkout_listItem_description_distance">0.9km</p>
          </div>
          <span>₦12,000</span>
          <div className="checkout_links">
            <p className="minusCircle"> - </p>
            <p>view</p>
          </div>
        </div>
        <div className="checkout_listItem">
          <span>3</span>
          <div className="checkout_listItem_description">
            <p>{`Box of Cupcakes,[1]`}</p>{" "}
            <p className="checkout_listItem_description_distance">1km</p>
          </div>
          <span>₦12,000</span>
          <div className="checkout_links">
            <p className="minusCircle"> - </p>
            <p>view</p>
          </div>
        </div>
      </div>
      <div className="checkout_summary">
        <p>₦21,500</p>
        <p>RUNNR Fee: ₦1500</p>
        <p>Total:₦23,000</p>
      </div>
      <button onClick={() => setIsHidden(!isHidden)}>Proceed to payment</button>
      <div
        className={isHidden ? "checkout_payment hidden" : "checkout_payment"}
      >
        <button onClick={() => setIsHidden(!isHidden)}>Close</button>

        <h1>Order Catalouging</h1>
        <div>
          <div className="checkout_payment_item">
            <p>Combine Order</p>
            <input type={"checkbox"} />
            <span className="checkout_payment_item_desc">
              *May cost and take longer for multiple orders far away from each
              other
            </span>
          </div>
          <div className="checkout_payment_item">
            <p>Single Order</p>
            <input type={"checkbox"} />
            <span className="checkout_payment_item_desc">
              *For multiple items, each item will be treated as individual
              orders
            </span>
          </div>
        </div>
        <div>
          <h1>Payment Options:</h1>
          <div>
            <button>CASH</button>
            <button>POS</button>
          </div>
          <p>₦23,000</p>
          <button>RUN IT</button>
        </div>
      </div>
    </div>
  );
};

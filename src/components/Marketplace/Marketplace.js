import "./Marketplace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownZA,
  faBars,
  faCaretDown,
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export const Marketplace = () => {
  const isLoggedIn = true;

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
          <button className="btn btn-primary">
            Run it <p>get your packages delivered quickly and safely</p>
          </button>
        </div>
      </div>
      <div className="marketplace__navigation"></div>
      <div className="marketplace__body"></div>
    </div>
  );
};

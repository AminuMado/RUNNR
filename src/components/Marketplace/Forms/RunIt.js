import "./RunIt.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const RunIt = () => {
  return (
    <div className="runit_container_wrapper">
      <div className="runit_container">
        <h1>Run It</h1>
        <Link to="/marketplace">
          <FontAwesomeIcon className="back_icon" icon={faArrowLeft} />
        </Link>
        <form className="p-2">
          <div className="mb-3 select_container">
            <label htmlFor="Category">Category</label>
            <FontAwesomeIcon className="select_icon" icon={faCaretDown} />
            <select className="form-control">
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="formGroupDescription"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupPickUp">Pick Up</label>
            <input
              type="text"
              className="form-control"
              id="formGroupPickUp"
              placeholder="skip this for now"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupPickupNumber">Pickup Number</label>
            <input
              type="tel"
              className="form-control"
              id="formGroupPickupNumber"
              placeholder="+23480123456"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupDropOff">Drop Off</label>
            <input
              type="text"
              className="form-control"
              id="formGroupDropOff"
              placeholder="skip this for now"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupDropOffNumber">DropOff Number</label>
            <input
              type="tel"
              className="form-control"
              id="formGroupDropOffNumber"
              placeholder="+23480123456"
            />
          </div>
          <p>
            By clicking the "Run It" button you agree to the terms and
            conditions of the platform
          </p>
          <button type="submit" className="btn btn-primary submit_btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

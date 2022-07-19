import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-wrapper">
      <h1>RUNNR COURIER REGISTRATION</h1>
      <form>
        <label>
          <p>FirstName</p>
          <input type="text" />
        </label>
        <label>
          <p>LastName</p>
          <input type="text" />
        </label>
        <label>
          <p>Phone Number</p>
          <input type="tel" />
        </label>
        <label>
          <p>Email Address</p>
          <input type="email" />
        </label>
        <label>
          <p>Business Name</p>
          <input type="text" />
        </label>
        <label>
          <p>ID type</p>
          <input type="text" />
        </label>
        <label>
          <p>ID Number</p>
          <input type="number" />
        </label>
        <label>
          <p>Address</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <p>
            By clicking the "Submit" button i agree to RUNNR's Terms of Use and
            acknowledge that I have read the Privacy Policy.
          </p>
          <p>
            I also agree that representatives from RUNNR may contact me by
            email, phone or SMS(including by automated means) for review,
            marketing and other purposes.
          </p>
        </div>
        <div>
          <p>Get exposure for your goods and services</p>
          <p>Register Your Business</p>
        </div>
      </form>
    </div>
  );
}

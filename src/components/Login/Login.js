import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="m-4">
        <form
          className="needs-validation"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.checkValidity());
            console.log("clicked");
          }}
        >
          <div className="mb-3 position-relative">
            <label className="form-label" htmlFor="inputEmail">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              required
            />
            <div className="invalid-tooltip">
              Please enter a valid email address.
            </div>
          </div>
          <div className="mb-3 position-relative">
            <label className="form-label" htmlFor="inputPassword">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              required
            />
            <div className="invalid-tooltip">
              Please enter your password to continue.
            </div>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkRemember"
              />
              <label className="form-check-label" htmlFor="checkRemember">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Navigation from "../Navigation";
import { useHistory, Link } from "react-router-dom";
import logo from "./leaf-closeup-on-white-background.jpeg";
import "./SplashPage.css";

function SplashPage() {
  let history = useHistory();

  function SignupButton() {
    history.push("/signup");
  }

  return (
    <>
      <div className="splashNav">
        <div id="leftNav"></div>
        <div id="rightNav">
          <h3>Clevernote</h3>
          <img className="logo" src={logo} />
        </div>
      </div>
      <div id="splashContainer">
        <div className="headingWithSignupLink">
          <h1 id="splashMainText">
            Jot down a memory a note to your future self
          </h1>
          <h2>
            Research shows people forget fifty percent of information in an
            hour, seventy percent within twenty-four hours, and ninety percent
            within a week.
          </h2>
          <button
            id="signupFromSplashButton"
            type="button"
            onClick={SignupButton}
          >
            Sign up for free
          </button>
          <Link className="loginFromSplash" to="/login">
            Already have and account? Log in
          </Link>
        </div>
      </div>
    </>
  );
}
export default SplashPage;

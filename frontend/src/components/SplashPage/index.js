import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import Navigation from "../Navigation";
import { useHistory, Link } from "react-router-dom";
import logo from "./leaf-closeup-on-white-background.jpeg";
import placeholder from "./placeholder-splash.png";
import "./SplashPage.css";

function SplashPage() {
  let history = useHistory();
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  function SignupButton() {
    history.push("/signup");
  }

  //   function navBottomBorder() {
  //     const nav = document.querySelector(".splashNav");
  //     nav.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.5)";
  //     // nav.style.backgroundColor = "red";
  //   }

  //   window.addEventListener("DOMContentLoaded", event => {
  //     const body = document.querySelector("body");
  //     console.log(body);
  //     const nav = document.querySelector(".splashNav");
  //     console.log(nav);
  //     body.onscroll = function () {
  //       nav.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.5)";
  //     };
  //   });

  setTimeout(event => {
    const body = document.querySelector("body");
    const nav = document.querySelector(".splashNav");
    body.onscroll = function () {
      nav.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.125)";
    };
  }, 100);

  const handleDemo = async e => {
    e.preventDefault();
    setErrors([]);
    await dispatch(
      sessionActions.login({
        credential: "Demo-lition",
        password: "password",
      })
    ).catch(async res => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    history.push("/");
    return;
  };

  return (
    <div className="navAndSplashMainContainer">
      <div className="splashNav">
        <div id="leftNav">
          <button id="demoButton" onClick={handleDemo}>
            Demo
          </button>
          <Link className="loginFromSplashNav" to="/login">
            Log in
          </Link>
        </div>

        <div id="rightNav">
          <h3>Clevernote</h3>
          <img className="logoSplash" src={logo} />
        </div>
      </div>
      <div id="splashContainer">
        <div className="headingWithSignupLink">
          <h1 id="splashMainText">
            Jot down a memory or a note to your future self
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
        <div className="secondSectionSplash">
          <img className="secondSectionImage" src={placeholder} />
          <ul className="secondSectionText">
            <li>
              <h4>WORK ANYWHERE</h4>
              <p>
                Keep important info handy—your notes sync automatically to all
                your devices.
              </p>
            </li>
            <li>
              <h4>REMEMBER EVERYTHING</h4>
              <p>
                Make notes more useful by adding text, images, audio, scans,
                PDFs, and documents.
              </p>
            </li>
            <li>
              <h4>TURN TO-DO INTO DONE</h4>
              <p>
                Bring your notes, tasks, and schedules together to get things
                done more easily.
              </p>
            </li>
            <li>
              <h4>FIND THINGS FAST</h4>
              <p>
                Get what you need, when you need it with powerful, flexible
                search capabilities.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SplashPage;

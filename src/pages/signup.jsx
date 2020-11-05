import React from "react";
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
} from "framework7-react";

import signupImg from "../assets/friends.jpg";
import fbImg from "../assets/facebook.svg";
import googleImg from "../assets/google.svg";

import "../css/signup.scss";

export default () => (
  <Page name="signup" className="signup">
    <header className="signup-header">
      <a href="#">Log in</a>
    </header>
    <h2 className="signup-title">
      Create a profile to save your personal curriculum
    </h2>
    <div className="signup-imgWrapper">
      <img className="signup-img" src={signupImg} alt="signup" />
    </div>

    <div className="signup-container">
      <p className="signup-txt">
        By signin up your agree to our <a href="#">terms</a> and{" "}
        <a href="#">Privacy policy</a>
      </p>

      <button className="signup-btn fb">
        <div className="icon-wrapper">
          <img className="signup-icon" src={fbImg} alt="facebook" />
        </div>
        <p>continue with facebook</p>
      </button>
      <button className="signup-btn google">
        <div className="icon-wrapper">
          <img className="signup-icon" src={googleImg} alt="google" />
        </div>
        <p>continue with google</p>
      </button>

      <button className="signup-email">Sign up with email</button>
    </div>
  </Page>
);

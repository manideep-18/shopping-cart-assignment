import React from "react";
import { Link } from "react-router-dom";

import logo from "../../static/images/logo.png";
import cartImage from "../../static/images/cart.svg";

import "./styles.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="responsiveContainer">
          <header className="headerContainer">
            <img className="logoStyles" src={logo} alt="logo" />
            <nav className="homeNavBar">
              <Link className="linkRightSpaceStyles" to="/">
                Home
              </Link>
              <Link className="commonLinkStyles" to="/products">
                Products
              </Link>
            </nav>
            <div className="textImageContainer">
              <nav className="signinNavBar">
                <Link className="linkRightSpaceStyles" to="/signin">
                  Signin
                </Link>
                <Link className="commonLinkStyles" to="/register">
                  Register
                </Link>
              </nav>
              <div className="cartImageContainer">
                <img
                  className="cartImageStyles"
                  src={cartImage}
                  alt="cartImage"
                />
                <span className="itemsText">0 items</span>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;

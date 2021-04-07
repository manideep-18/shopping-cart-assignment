import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

import mobileLogo from "../../static/images/logo.png";
import logo from "../../static/images/logo_2x.png";
import cartImage from "../../static/images/cart.svg";

import "./styles.scss";
import { inject, observer } from "mobx-react";
import AriaModal from "react-aria-modal";
import EmptyCartSection from "../EmptyCartSection";

@inject("productsStore", "cartItemsStore")
@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalStatus: false };
  }

  handleModalStatus = () => {
    const { modalStatus } = this.state;
    this.setState({ modalStatus: !modalStatus });
  };

  render() {
    const { cartItemsStore, productsStore, history } = this.props;
    return (
      <header className="headerContainer">
        <div className="responsiveContainer">
          <div className="mainContainer">
            <img
              className="logoStyles"
              srcSet={`${mobileLogo} 767w,${logo} 1024w`}
              src={logo}
              alt="logo"
            />
            <nav className="homeNavBar">
              <Link className="linkRightSpaceStyles" to="/">
                Home
              </Link>
              <a
                href="#"
                className="customLinkStyles"
                onClick={(event) => {
                  event.preventDefault();
                  history.push("/products/all");
                  productsStore.updateProductsData("all");
                }}
              >
                Products
              </a>
            </nav>
            <div className="textImageContainer">
              <nav className="signinNavBar">
                {localStorage.getItem("authToken") ? (
                  <a
                    className="logoutLinkStyles"
                    href="/"
                    onClick={() => {
                      localStorage.removeItem("authToken");
                    }}
                    role="button"
                  >
                    logout
                  </a>
                ) : (
                  <>
                    {" "}
                    <Link className="linkRightSpaceStyles" to="/signin">
                      Signin
                    </Link>
                    <Link className="commonLinkStyles" to="/register">
                      Register
                    </Link>
                  </>
                )}
              </nav>
              <button
                className="cartImageContainer"
                onClick={
                  cartItemsStore.cartItems.length === 0
                    ? this.handleModalStatus
                    : () => {
                        history.push("/cart");
                      }
                }
              >
                <img
                  className="cartImageStyles"
                  src={cartImage}
                  alt="cartImage"
                />
                <span className="itemsText">
                  {cartItemsStore.cartItems.length} items
                </span>
              </button>
            </div>
          </div>
        </div>
        {cartItemsStore.cartItems.length === 0 && (
          <AriaModal
            mounted={this.state.modalStatus}
            focusDialog
            titleId="Accept Modal"
            underlayClass="emptyCartModalStyles"
          >
            <EmptyCartSection
              productsStore={productsStore}
              handleModal={this.handleModalStatus}
            />
          </AriaModal>
        )}
      </header>
    );
  }
}

export default withRouter(Header);

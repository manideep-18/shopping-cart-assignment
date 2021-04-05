import React from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../../static/images/logo.png";
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
    const { cartItemsStore } = this.props;
    return (
      <div className="mainContainer">
        <div className="responsiveContainer">
          <header className="headerContainer">
            <img className="logoStyles" src={logo} alt="logo" />
            <nav className="homeNavBar">
              <Link className="linkRightSpaceStyles" to="/">
                Home
              </Link>
              <button
                className="customButtonStyles"
                onClick={() => {
                  this.props.history.push("/products/all");
                  this.props.productsStore.updateProductsData("all");
                }}
              >
                Products
              </button>
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
              <div
                className="cartImageContainer"
                onClick={
                  cartItemsStore.cartItems.length === 0
                    ? this.handleModalStatus
                    : () => {
                        this.props.history.push("/cart");
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
              </div>
            </div>
          </header>
        </div>
        {cartItemsStore.cartItems.length === 0 && (
          <AriaModal
            mounted={this.state.modalStatus}
            focusDialog
            titleId="Accept Modal"
            underlayClass="emptyCartModalStyles"
          >
            <EmptyCartSection handleModal={this.handleModalStatus} />
          </AriaModal>
        )}
      </div>
    );
  }
}

export default withRouter(Header);

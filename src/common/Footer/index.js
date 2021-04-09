import React from "react";

import "./styles.scss";

class Footer extends React.Component {
  componentDidUpdate() {
    console.log("mani");
  }
  render() {
    return (
      <footer className="footerMainContainer">
        <div className="footerResponsiveContainer">
          <span>
            Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from "react-router";
import { currentCategoryId, currentCategoryPath } from "../../utils/currentUrl";

import "./styles.scss";

@observer
class MobileProductItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: "" };
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    const { productsStore } = this.props;
    this.setState({ selectValue: event.target.value });
    productsStore.updateProductsData(event.target.value);
    this.props.history.push(
      `/products/${currentCategoryPath(event.target.value)}`
    );
  };

  componentDidUpdate(prevProps, prevState) {
    const { productsStore } = this.props;
    if (prevState.selectValue !== productsStore.id) {
      const resultCategoryId = currentCategoryId(window.location.href);
      // console.log(prevState.selectValue, "??");
      this.setState({ selectValue: resultCategoryId });
    }
  }

  componentDidMount() {
    const resultCategoryId = currentCategoryId(window.location.href);
    // console.log(prevState.selectValue, "??");
    this.setState({ selectValue: resultCategoryId });
  }

  render() {
    const { productsStore } = this.props;

    let imageUrl = require.context("../../../static/images/products", true);

    return (
      <div className="mobileProductItemsContainer">
        <select
          className="customSelectStyles"
          value={this.state.selectValue}
          onChange={this.handleChange}
        >
          <option value="all">{"All"}</option>
          <option value="5b6899953d1a866534f516e2">
            {"Fruits & Vegetables"}
          </option>
          <option value="5b6899123d1a866534f516de">
            Bakery Cakes and Dairy
          </option>
          <option value="5b675e5e5936635728f9fc30">Beverages</option>
          <option value="5b68994e3d1a866534f516df">
            {"Beauty and Hygiene"}
          </option>
          <option value="5b6899683d1a866534f516e0">{"Baby Care"}</option>
        </select>
      </div>
    );
  }
}

export default withRouter(MobileProductItems);

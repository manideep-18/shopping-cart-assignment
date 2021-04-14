import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from "react-router";
import { currentCategoryId, currentCategoryPath } from "../../utils/currentUrl";

import "./styles.scss";

@inject("productsStore")
@observer
class MobileProductItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: "" };
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    const { productsStore } = this.props;
    const { categoriesData } = productsStore;

    this.setState({ selectValue: event.target.value });
    productsStore.updateProductsData(event.target.value);
    this.props.history.push(
      `/products/${currentCategoryPath(categoriesData, event.target.value)}`
    );
  };

  componentDidUpdate(prevProps, prevState) {
    const { productsStore } = this.props;
    const { categoriesData } = productsStore;

    // productsStore.categoriesDataApi();

    if (
      prevState.selectValue !== productsStore.id &&
      categoriesData.length > 0
    ) {
      const resultCategoryId = currentCategoryId(
        categoriesData,
        window.location.href
      );
      // console.log(prevState.selectValue, "??");
      this.setState({ selectValue: resultCategoryId });
    }
  }

  componentDidMount() {
    const { productsStore } = this.props;
    // const { categoriesData } = productsStore;

    productsStore.categoriesDataApi();

    const resultCategoryId = currentCategoryId(
      productsStore.categoriesData,
      window.location.href
    );
    // console.log(prevState.selectValue, "??");
    this.setState({ selectValue: resultCategoryId });
  }

  render() {
    const { productsStore } = this.props;
    console.log(productsStore.id, "???");
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

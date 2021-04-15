import { inject, observer } from "mobx-react";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import LoadingWrapper from "../../../common/LoadingWrapper";

import { ascendingOrderAlphabetical } from "../../../utils/SortingDataUtils";

import "./styles.scss";

@observer
class ProductCategories extends React.Component {
  componentDidMount() {
    const { productsStore } = this.props;

    productsStore.categoriesDataApi();
  }

  render() {
    const { history, productsStore } = this.props;
    const { categoriesData, categoriesDataApiStatus } = productsStore;
    return (
      <LoadingWrapper
        apiStatus={categoriesDataApiStatus}
        onRetryClick={() => {
          productsStore.categoriesDataApi();
        }}
      >
        <nav className="categoriesListStyles">
          <ul>
            {ascendingOrderAlphabetical(categoriesData, "order").map(
              ({ id, key, order, name }) => {
                // console.log(productsStore.id, "??", id);
                if (order > 0)
                  return (
                    <li key={id}>
                      <a
                        href="#"
                        className={
                          productsStore.id === id ? "activeButtonStyles" : null
                        }
                        onClick={(event) => {
                          event.preventDefault();
                          if (productsStore.id === id) {
                            history.push(`/products/all`);
                            productsStore.updateProductsData("all");
                          } else {
                            history.push(`/products/${key}`);
                            productsStore.updateProductsData(id);
                          }
                        }}
                      >
                        {name}
                      </a>
                    </li>
                  );
              }
            )}
          </ul>
        </nav>
      </LoadingWrapper>
    );
  }
}

export default withRouter(ProductCategories);

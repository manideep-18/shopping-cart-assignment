import { inject, observer } from "mobx-react";
import React from "react";
import { withRouter } from "react-router";
import LoadingWrapper from "../../common/LoadingWrapper";

import categoriesData from "../../server/categories/index.get.json";
import { ascendingOrderAlphabetical } from "../../utils/SortingDataUtils";

import "./styles.scss";

@inject("productsStore")
@observer
class CategoriesSection extends React.Component {
  componentDidMount() {
    const { productsStore } = this.props;

    productsStore.categoriesDataApi();
  }

  render() {
    let baseImageUrl = require.context("../../static/images/category", true);
    const { productsStore } = this.props;
    const { categoriesDataApiStatus, categoriesData } = productsStore;
    // console.log(this.props.productsStore, "??");
    return (
      <div className="responsiveContainer">
        <LoadingWrapper
          apiStatus={categoriesDataApiStatus}
          onRetryClick={() => {
            productsStore.categoriesDataApi();
          }}
        >
          <div className="categoriesContainer">
            {ascendingOrderAlphabetical(categoriesData, "order").map(
              ({ imageUrl, name, order, description, key, id }) => {
                if (order > 0)
                  return (
                    <div className="imageTextContainer" key={name}>
                      <div className="imageContainer">
                        <img
                          className="categoryImageStyles"
                          src={baseImageUrl(imageUrl).default}
                          alt={name}
                        />
                      </div>
                      <div className="textsContainer">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <button
                          className="exploreButtonStyles"
                          onClick={(event) => {
                            event.preventDefault();
                            this.props.productsStore.updateProductsData(id);
                            this.props.history.push(`/products/${key}`);
                          }}
                        >
                          Explore {key}
                        </button>
                      </div>
                    </div>
                  );
                else {
                  return null;
                }
              }
            )}
          </div>
        </LoadingWrapper>
      </div>
    );
  }
}

export default withRouter(CategoriesSection);

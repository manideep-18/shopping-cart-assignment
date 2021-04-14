import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import offersData from "../../server/banners/index.get.json";

import "./styles.scss";
import { inject, observer } from "mobx-react";
import LoadingWrapper from "../../common/LoadingWrapper";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="customSlickNextStyles" onClick={onClick}>
      <span>NEXT</span>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="customSlickPrevStyles" onClick={onClick}>
      <span>PREV</span>
    </div>
  );
}

@inject("productsStore")
@observer
class OffersSlick extends React.Component {
  componentDidMount() {
    const { productsStore } = this.props;

    productsStore.offersDataApi();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 500,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
    };

    let imageUrl = require.context("../../static/images/offers", true);

    const { productsStore } = this.props;
    const { offersDataApiStatus, offersData, offersDataApi } = productsStore;

    return (
      <div className="responsiveContainer">
        <LoadingWrapper
          apiStatus={offersDataApiStatus}
          onRetryClick={() => {
            offersDataApi();
          }}
        >
          <div>
            <Slider className="slickCustomStyles" {...settings}>
              {offersData.map(({ bannerImageUrl, bannerImageAlt, order }) => {
                return (
                  <div key={order}>
                    <img
                      className="offerStyles"
                      src={imageUrl(bannerImageUrl).default}
                      alt={bannerImageAlt}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </LoadingWrapper>
      </div>
    );
  }
}

export default OffersSlick;

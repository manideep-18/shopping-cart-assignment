import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import offersData from "../../server/banners/index.get.json";

import "./styles.scss";

class OffersSlick extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: 500,
    };

    let imageUrl = require.context("../../static/images/offers", true);

    return (
      <div className="responsiveContainer">
        <div>
          <Slider className="slickCustomStyles" {...settings}>
            {offersData.map(({ bannerImageUrl, bannerImageAlt, order }) => {
              let url;

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
      </div>
    );
  }
}

export default OffersSlick;

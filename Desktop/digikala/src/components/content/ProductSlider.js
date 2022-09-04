import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AccessTime } from "@material-ui/icons";
import "../../css/content/ProductSlider.css";
import { partition } from "../../Helpers";
import { Link } from "react-router-dom";
import TempProduct from "./TempProduct";
import RandomKey from "../../Modules/RandomKey";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import axios from "axios";

function ProductSlider({ products, category, options, timer }) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:8000/Api/Products.php")
        .then((res) => dispatch({ type: "setProducts", products: res.data }))
        .catch((err) => console.log(err));
    }, 2000);
  }, []);

  let settings = {
    dots: false,
    arrows: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    centerPadding: 60,
    infinite: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  settings =
    typeof options != "undefined" ? Object.assign(settings, options) : settings;

  let expirationTime = new Date();

  let customProducts = state.products.length ? state.products : [1, 2, 3, 4];

  return (
    <Slider {...settings}>
      {customProducts.map((product) => (
        <div
          className="product-item bg-white d-flex flex-column justify-content-between font-number-b"
          key={RandomKey()}
        >
          {typeof product == "number" ? (
            <TempProduct />
          ) : (
            <Link to={`/product?name=${product.title}`}>
              <div className="pt-4 px-3 pb-2">
                <img src={product.wallpaper} className="img-fluid" />
                <div>
                  {/* product title */}
                  <div className="title">{product.title}</div>
                  {/* product title */}

                  {/* product price and offPrice */}
                  {product.offPrice ? (
                    <div className="productMore">
                      <div className="d-flex align-items-center">
                        <span className="offPercentIcon">
                          <i className="me-1">%</i>
                          {Math.round(
                            ((product.price - product.offPrice) /
                              product.price) *
                              100
                          )}
                        </span>
                        <del>{partition(product.price)}</del>
                      </div>
                      <div className="d-flex">
                        <span className="me-2">تومان</span>
                        <i className="price">{partition(product.offPrice)}</i>
                      </div>
                    </div>
                  ) : (
                    <div className="productMore d-flex flex-column justify-content-center">
                      <div className="d-flex">
                        <span className="me-2 ">تومان</span>
                        <i className="price">
                          <span>{partition(product.price)}</span>
                        </i>
                      </div>
                    </div>
                  )}
                  {/* product price and offPrice */}
                </div>
                {/* product timer */}
                {timer ? (
                  <div className="expiration">
                    <AccessTime className="clock-icon mr-2" />
                    <span>
                      {expirationTime.getHours()}:{expirationTime.getMinutes()}:
                      {expirationTime.getSeconds()}
                    </span>
                  </div>
                ) : (
                  <div className="mt-4"></div>
                )}
                {/* product timer */}
              </div>
            </Link>
          )}
        </div>
      ))}
    </Slider>
  );
}

export default ProductSlider;

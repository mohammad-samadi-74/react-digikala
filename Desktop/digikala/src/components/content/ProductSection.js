import { ArrowBackIos } from "@material-ui/icons";
import React from "react";
import "../../css/content/ProductSection.css";
import ProductSlider from "./ProductSlider";

function ProductSection({ logo, className }) {
  return (
    <div className={`products-section ${className ? className : ""}`}>
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-10 col-6">
            <ProductSlider
              products={[
                {
                  src: "/images/content/products/product-1.jpg",
                  title: "لپ تاپ 15.6 اینچی اچ‌پی مدل 15 DW3021NIA - NB",
                  price: 23500000,
                  offPrice: 18999000,
                },
                {
                  src: "/images/content/products/product-2.jpg",
                  title:
                    "گوشی موبایل شیائومی مدل Mi 10T Lite 5G M2007J17G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6 گیگ",
                  price: 6767000,
                  offPrice: 6555000,
                },
                {
                  src: "/images/content/products/product-3.jpg",
                  title: "تابه گریل نالینو مدل دنیلی سایز 34 ",
                  price: 779000,
                  offPrice: 620000,
                },
                {
                  src: "/images/content/products/product-4.jpg",
                  title: "کوله پشتی 65 لیتری فوروارد مدل FCLT420",
                  price: 929000,
                  offPrice: 359000,
                },
                {
                  src: "/images/content/products/product-4.jpg",
                  title: "کوله پشتی 65 لیتری فوروارد مدل FCLT420",
                  price: 929000,
                  offPrice: 359000,
                },
              ]}
              timer={true}
            />
          </div>
          <div className="col-lg-2 col-6 d-flex p-2 flex-column justify-content-center align-items-center">
            <img src={logo ? logo : ""} className=" img-fluid" />
            <br />
            <button className="watch-all-btn">
              <ArrowBackIos className="arrowBackIcon" />
              مشاهده همه
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;

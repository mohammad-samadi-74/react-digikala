import React from "react";
import ProductSlider from "./ProductSlider";
import "../../css/content/ProductOfferSlider.css";

function ProductOfferSlider({ products, title }) {
  return (
    <div className="products-offer-slider">
      <div className="products-offer-information">
        <h4 className="products-offer-title">{title}</h4>
        <div className="products-offer-sort">براساس بازدید های شما</div>
      </div>
      <ProductSlider
        options={{
          speed: 600,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          centerPadding: 60,
          responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
          ],
        }}
        products={products}
      />
    </div>
  );
}

export default ProductOfferSlider;

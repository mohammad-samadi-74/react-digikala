import React from "react";
import "../../css/header/Discount.css";

function Discount({ image }) {
  return (
    <div className="container-fluid discount-gif-container px-0">
      <img src={image} />
    </div>
  );
}

export default Discount;

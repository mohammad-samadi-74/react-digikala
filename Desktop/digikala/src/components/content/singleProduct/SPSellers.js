import React from "react";
import { ArrowBackIos } from "@material-ui/icons";

function SPSellers() {
  return (
    <div className="best-seller d-flex justify-content-between align-items-center">
      <img src="/images/digikala-logo.png" alt="logo" />
      <div>
        <div className="d-flex justify-content-between">
          <span>دیجی کالا</span>
          <ArrowBackIos className="backarrow-icon" />
        </div>
        <div className="function d-flex">
          <div className="satisfaction">
            <span className="value">90%</span>&nbsp;
            <span>رضایت خریداران</span>
          </div>
          <span className="seperator my-2 ps-3"></span>
          &nbsp;&nbsp;&nbsp;
          <div className="rate">
            <span>عملکرد :</span>&nbsp;
            <span className="value">عالی</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPSellers;

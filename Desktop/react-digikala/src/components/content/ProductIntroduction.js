import React, { useState } from "react";
import "../../css/content/ProductIntroduction.css";
import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";

import SPComments from "./singleProduct/SPComments";
import SPIntroduction from "./singleProduct/SPIntroduction";
import SPProIntroduction from "./singleProduct/SPProIntroduction";
import SPInfo from "./singleProduct/SPInfo";

function ProductIntroduction() {
  const [answers, setAnswers] = useState(false);

  return (
    <div id="introduction-section" className="rtl">
      {/* scrollspy */}
      <nav
        id="product-introduction-navbar"
        className="navbar navbar-light px-3"
      >
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#product-introduction">
              معرفی
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#product-prointroduction">
              بررسی تخصصی
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#product-info">
              مشخصات
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#product-comments">
              دیدگاه ها
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-spy="scroll"
        data-target="#product-introduction-navbar"
        data-offset="0"
        className="scrollspy-example product-information-tabs"
        tabIndex="0"
      >
        <SPIntroduction />
        <SPProIntroduction />
        <SPInfo />
        <SPComments />
      </div>

      {/* scrollspy */}
    </div>
  );
}

export default ProductIntroduction;

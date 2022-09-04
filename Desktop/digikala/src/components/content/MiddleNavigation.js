import { Build, LaptopMac, Weekend } from "@material-ui/icons";
import React from "react";
import "../../css/content/MiddleNavigation.css";
import { partition } from "../../Helpers";

function MiddleNavigation() {
  return (
    <div className="middle-navigation d-flex flex-row-reverse justify-content-center">
      <div className="middle-navigation-item">
        <a href="#">
          <LaptopMac />
          <p>کالای دیجیتال</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(103000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <Build />
          <p>خودرو,ابزار و تجهیزات صنعتی</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(158000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <img src="./images/content/icons/shirt.svg" />
          <p>مد و پوشاک</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(75000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <img src="./images/content/icons/baby.svg" />
          <p>اسباب بازی,کودک و نوزاد</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(45000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <img src="./images/content/icons/food.svg" />
          <p>کالا های سوپر مارکتی</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(700000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <img src="./images/content/icons/health.svg" />
          <p>زیبایی و سلامت</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(108000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <Weekend />
          <p>خانه و آشپزخانه</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(527000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <img src="./images/content/icons/art.svg" />
          <p>کتاب,لوازم و التحریر و هنر</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(268000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <img src="./images/content/icons/tent.svg" />
          <p>ورزش و سفر</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(41000)}</i>
          </span>
        </a>
      </div>
      <div className="middle-navigation-item">
        <a href="#">
          <img src="./images/content/icons/products.svg" />
          <p>محصولات بومی و محلی</p>
          <span className="d-flex">
            <i>کالا</i>
            <i>+{partition(3000)}</i>
          </span>
        </a>
      </div>
    </div>
  );
}

export default MiddleNavigation;

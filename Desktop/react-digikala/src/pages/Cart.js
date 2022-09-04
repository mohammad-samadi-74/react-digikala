import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navigation from "../components/header/Navigation";
import { mdiLogin } from "@mdi/js";
import CartItemsSection from "../components/content/CartItemsSection";
import CartInfo from "../components/content/CartInfo";
import Icon from "@mdi/react";

import "../css/content/Cart.css";

function Cart(props) {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "ویفر با روکش شکلات تلخ کوپا بسته 30 عددی ",
      image: "./images/content/products/product-19.jpg",
      seller: "دیجی کالا",
      count: 1,
      price: 150000,
      offPercent: 0,
      amazingDiscount: false,
    },
    {
      id: 2,
      name: "چیپس سیب زمینی با طعم نمک باتو - 450 گرم ",
      image: "./images/content/products/product-20.jpg",
      seller: "دیجی کالا",
      count: 1,
      price: 48000,
      offPercent: 0,
      amazingDiscount: false,
    },
    {
      id: 3,
      name: "لواشک پذیرایی مخلوط 5 میوه فافا مقدار 120گرم ",
      image: "./images/content/products/product-21.jpg",
      seller: "فافا تیار ",
      count: 1,
      price: 6000,
      offPercent: 0,
      amazingDiscount: false,
    },
    {
      id: 4,
      name: "کتاب بخواهید تا به شما داده شود اثر استروجری هیکز ",
      image: "./images/content/products/product-22.jpg",
      seller: "دیجی‌کالا",
      count: 1,
      price: 60000,
      offPercent: 38,
      amazingDiscount: true,
    },
  ]);

  return (
    <div id="cart">
      <Navigation login={props.login} logoutUser={props.logoutUser} />

      <div className="cart container-xl ">
        {/* cart navigation */}
        <div className="cart-navigation d-flex">
          <div className="cart-navigation-item active">
            <Link to="/cart">سبد خرید</Link>
          </div>
        </div>

        {/* cart content */}
        <div className="cart-content row">
          <div className="col-xl-3 col-1-2 px-0  mb-4">
            {!props.login ? (
              <div className="login rtl mx-2 bg-white shadow-sm d-flex justify-content-center align-items-center flex-column">
                <h4>
                  <Link to="/login">
                    <Icon path={mdiLogin} size={1.5} />
                    ورود به حساب کاربری
                  </Link>
                </h4>
                <p>
                  برای مشاهده محصولاتی که پیش‌تر به سبد خود اضافه کرده‌اید
                  لطفاوارد شوید.
                </p>
              </div>
            ) : (
              <CartInfo />
            )}
          </div>
          <div className="col-xl-9 col-12 px-0">
            {!cart.length ? (
              <div className="empty-cart mx-2 bg-white shadow-sm d-flex justify-content-center align-items-center flex-column">
                <img src="./images/emptyCart.png" alt="emptyCart" />
                <p>سبد خرید شما خالی است! </p>
                <p className="ditails">
                  می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید
                </p>
                <div className="redirects d-flex">
                  <Link to="/">تخفیف‌ها و پیشنهادها </Link>
                  <span>|</span>
                  <Link to="/"> محصولات پرفروش روز </Link>
                </div>
              </div>
            ) : (
              <div className="items mx-2 bg-white border-light shadow-sm d-flex justify-content-center align-items-center flex-column">
                <CartItemsSection items={cart} id={1} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

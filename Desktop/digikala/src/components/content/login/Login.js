import { HighlightOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import $ from "jquery";

function BaseLogin(props) {
  return (
    <form className="bg-white rounded-lg d-flex flex-column px-4 pt-3 pb-4 shadow-sm">
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/home" className="inline home-link">
          <img src="./images/logo.svg" alt="logo" />
        </Link>
      </div>
      <h4>فرم ورود</h4>
      <p>شماره موبایل یا پست الکترونیک خود را وارد کنید </p>
      <div className="input-container">
        <input
          className="loginInput"
          type="text"
          placeholder=""
          onChange={props.inputHandler}
        />
        <HighlightOff onClick={props.eraseText} />
      </div>

      <button className="btn bg-red text-white submit" onClick={props.sendData}>
        ورود به دیجی کالا
      </button>
      <p className="mt-3">
        با ورود و یا ثبت نام در دیجی‌کالا شما <a>شرایط و قوانین</a>
        استفاده از سرویس های سایت دیجی‌کالا و<a>قوانین حریم خصوصی</a> آن را
        می‌پذیرید.
      </p>
    </form>
  );
}

export default BaseLogin;

import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/content/Form.css";

// add context
import AppContext from "../context/AppContext";
import Loading from "../components/Loading";
import { Alert } from "react-bootstrap";

function Login(props) {
  const { state, dispatch } = useContext(AppContext);

  // local states
  const [form, setForm] = useState({ phoneMail: "", password: "" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let formHandler = (e, type) => {
    let newValue = e.target.value;

    if (type === "password") setForm({ ...form, password: newValue });
    else setForm({ ...form, phoneMail: newValue });
  };

  let sendForm = (e) => {
    e.preventDefault();
    let user = { phoneMail: form.phoneMail, password: form.password };
    setLoading(true);

    // handle empty inputs
    if (form.phoneMail.trim() === "" || form.password.trim() === "") {
      setError("فیلد ایمیل /شماره تلفن یا پسوورد نمیتواند خالی باشد.");
      setLoading(false);
      return;
    }

    // ajax request
    axios
      .post("http://localhost:8000/Api/Login.php", user)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          if (res.data.status === "error") {
            setError(res.data.error);
          } else {
            setError([]);
            setForm({ phoneMail: "", password: "" });
            localStorage.setItem("auth", JSON.stringify(res.data.user));
            dispatch({ type: "loginUser", user: res.data.user });
          }
        }, 300);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div id="form-page" className="bg-white loading-moda">
      <form
        className="bg-white rounded-lg d-flex flex-column px-4 pt-3 pb-4 shadow-sm"
        onSubmit={(e) => {
          sendForm(e);
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/home" className="inline home-link">
            <img src="./images/logo.svg" alt="logo" />
          </Link>
        </div>
        <h4>فرم ورود</h4>
        {error ? (
          <Alert variant="danger" onClose={() => setError("")} dismissible>
            {error}
          </Alert>
        ) : (
          ""
        )}

        <p>شماره موبایل یا پست الکترونیک خود را وارد کنید </p>
        <div className="input-container">
          <input
            className="loginInput"
            type="text"
            placeholder="---"
            onChange={(e) => {
              formHandler(e, "phone/mail");
            }}
            value={form.phoneMail}
          />
        </div>
        <p>پسوورد خود را وارد کنید </p>
        <div className="input-container">
          <input
            className="loginInput"
            type="password"
            placeholder="******"
            onChange={(e) => {
              formHandler(e, "password");
            }}
            value={form.password}
          />
        </div>

        <button className="btn btn-danger  text-white submit">
          ورود به دیجی کالا
        </button>
        <p className="mt-3">
          با ورود و یا ثبت نام در دیجی‌کالا شما{" "}
          <a className="underline">شرایط و قوانین</a>
          استفاده از سرویس های سایت دیجی‌کالا و
          <a className="underline">قوانین حریم خصوصی</a> آن را می‌پذیرید.
        </p>

        <Link to="/signup" className="text-primary">
          هنوز ثبت نام نکرده اید ؟
        </Link>
        {loading ? <Loading /> : ""}
      </form>
    </div>
  );
}

export default Login;

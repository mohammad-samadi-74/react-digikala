import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/content/Form.css";

// add context
import AppContext from "../context/AppContext";
import Loading from "../components/Loading";
import { Alert } from "react-bootstrap";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

function Signup(props) {
  const { state, dispatch } = useContext(AppContext);

  // local states
  const [form, setForm] = useState({ phone: "", email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  let formHandler = (e, type) => {
    let newValue = e.target.value;

    if (type === "password") setForm({ ...form, password: newValue });
    else setForm({ ...form, phoneMail: newValue });
  };

  let sendForm = (e) => {
    e.preventDefault();
    let user = {
      phone: form.phone,
      email: form.email,
      password: form.password,
    };

    // handle empty inputs
    if (
      [form.phone.trim(), form.email.trim(), form.password.trim()].includes("")
    ) {
      setErrors(["فیلد ایمیل و شماره تلفن یا پسوورد نمیتواند خالی باشد."]);
      return;
    }

    setLoading(true);
    // ajax request
    axios
      .post("http://localhost:8000/Api/Signup.php", user)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "error") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setErrors(res.data.errors);
        } else {
          setErrors([]);
          setForm({ phoneMail: "", password: "" });
          localStorage.setItem("auth", JSON.stringify(res.data.user));
          dispatch({ type: "loginUser", user: res.data.user });
        }
        setLoading(false);
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
        <h4>فرم ثبت نام</h4>
        {errors.map((error, index) => (
          <Alert
            variant="danger"
            key={index}
            onClose={(e) => {
              setErrors(errors.filter((error) => error != errors[index]));
            }}
            dismissible
          >
            {error}
          </Alert>
        ))}
        <p>شماره موبایل خود را وارد کنید </p>
        <div className="input-container">
          <input
            type="text"
            placeholder="09---------"
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
            value={form.phone}
          />
        </div>
        <p>ایمیل خود را وارد کنید</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="------"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            value={form.email}
          />
        </div>
        <p>پسوورد خود را وارد کنید </p>
        <div className="input-container">
          <input
            type="password"
            placeholder="******"
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            value={form.password}
          />
        </div>

        <button className="btn btn-danger  text-white submit">
          ورود به دیجی کالا
        </button>
        <p className="mt-3">
          با ورود و یا ثبت نام در دیجی‌کالا شما <a>شرایط و قوانین</a>
          استفاده از سرویس های سایت دیجی‌کالا و<a>قوانین حریم خصوصی</a> آن را
          می‌پذیرید.
        </p>
        {loading ? <Loading /> : ""}
      </form>
    </div>
  );
}

export default Signup;

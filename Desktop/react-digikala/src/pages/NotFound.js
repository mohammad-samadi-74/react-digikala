import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/content/NotFound.css";

function NotFound() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  let loadPage = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div
      className="error-container shadow-sm bg-white p-3 text-right alert alert-warning"
      role="alert"
    >
      <img src="/../images/404Logo.png" alt="not" />
      <strong>صفحه ای با آدرس مورد نظر یافت نشد !</strong>
      <Link to="/home" onClick={loadPage.bind(this)}>
        <p>برای ورود به صفحه اصلی سایت دیجی کالا کلیک کنید.</p>
      </Link>

      {loading == true ? (
        <>
          <span>درحال انتقال ...</span>
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default NotFound;

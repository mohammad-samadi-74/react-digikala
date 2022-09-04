import { useContext } from "react";
import {
  ExitToApp,
  ShoppingCart,
  PersonOutline,
  Menu,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../../css/header/FirstNavigation.css";

// import components
import SearchBox from "./SearchBox";
import ProfileModal from "./ProfileModal";

// import Context
import AppContext from "./../../context/AppContext";

function FirstNavigation({ show, setShow }) {
  let { state, dispatch } = useContext(AppContext);

  return (
    <div className="bg-white px-0" id="navigation">
      <div className="container-xl px-4 ">
        <div className="navigation ">
          <div className="baseNavigation">
            <div className="baseNavigation__right">
              <Link to="/home">
                <img src="/images/logo.svg" alt="logo" />
              </Link>
              <SearchBox />
            </div>
            <div className="baseNavigation__left">
              {/* close navigation button */}
              <div className="bg-white d-flex d-lg-none justify-content-end ms-2">
                <button
                  className="ms-auto px-4 m-2 mx-4 text-secondary"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <span className="me-2 font-vazir"> منوی اصلی</span>
                  <Menu />
                </button>
              </div>
              {/* close navigation button */}
              {/* login button */}
              {state.login ? (
                <>
                  <ProfileModal />
                  <button
                    className="logoutButton"
                    onClick={() => {
                      dispatch({ type: "logoutUser" });
                    }}
                  >
                    <ExitToApp className="logoutBtnIcon" />
                    <span>خروج</span>
                  </button>
                </>
              ) : (
                <Link className="loginButton" to="/login">
                  <PersonOutline className="loginBtnIcon" />
                  <span>ورود به حساب کاربری</span>
                </Link>
              )}
              {/* login button */}

              <div className="cartIcon-container">
                <Link className="cartIcon" to="/cart">
                  <ShoppingCart fontSize="small" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstNavigation;

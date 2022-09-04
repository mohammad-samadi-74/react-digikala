import { useContext, useEffect } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

// import components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import AppContext from "./context/AppContext";
import Signup from "./pages/Signup";
import axios from "axios";

function MyRoutes() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let auth = localStorage.getItem("auth");

    if (auth) {
      dispatch({ type: "loginConfirm", auth });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route
        path="/login"
        element={state.login ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/signup"
        element={state.login ? <Navigate to="/home" /> : <Signup />}
      />
      <Route
        path="/profile"
        element={state.login ? <Profile /> : <Navigate to="/login" />}
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
    </Routes>
  );
}

export default MyRoutes;

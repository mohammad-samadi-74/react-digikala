import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

function App() {
  const [login, setLogin] = useState(false);

  let loginUser = () => {
    setLogin(true);
  };

  let logoutUser = () => {
    setLogin(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home login={login} logoutUser={logoutUser} />}
          />
          <Route
            path="/home"
            element={<Home login={login} logoutUser={logoutUser} />}
          />
          <Route
            path="/product"
            element={<Product login={login} logoutUser={logoutUser} />}
          />
          <Route
            path="/login"
            element={
              login == true ? (
                <Navigate to="/home" />
              ) : (
                <Login loginUser={loginUser.bind(this)} />
              )
            }
          />
          <Route
            path="/profile"
            element={
              login == true ? (
                <Profile login={login} logoutUser={logoutUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/cart"
            element={<Cart login={login} logoutUser={logoutUser} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

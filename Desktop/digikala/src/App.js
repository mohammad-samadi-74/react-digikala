import { Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import { useReducer } from "react";

// import roures component
import MyRoutes from "./MyRoutes";
// import context
import AppContext from "./context/AppContext";
// import reducer
import AppReducer from "./reducer/AppReducer";
import { useEffect } from "react";
import axios from "axios";

function App() {
  let initialState = {
    login: false,
    users: [],
    products: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        <MyRoutes />
      </AppContext.Provider>
    </div>
  );
}

export default App;

const AppReducer = (state, action) => {
  switch (action.type) {
    case "logoutUser":
      return logoutUser(state);
    case "loginUser":
      return logintUser(state, action.user);
    case "loginConfirm":
      return loginConfirm(state, action.auth);
    case "setProducts":
      return setProducts(state, action.products);
    default:
      return state;
  }
};

export default AppReducer;

let logoutUser = (state) => {
  if (localStorage.getItem("auth")) localStorage.removeItem("auth");
  return { ...state, login: false };
};

let logintUser = (state, user) => {
  return { ...state, login: user };
};

let loginConfirm = (state, auth) => {
  return { ...state, login: auth };
};

let setProducts = (state, products) => {
  return { ...state, products: products };
};

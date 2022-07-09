import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  let loginUser = () => {
    setLogin(true);
  };

  let logoutUser = () => {
    setLogin(false);
  };

  return <div className="App">aaa</div>;
}

export default App;

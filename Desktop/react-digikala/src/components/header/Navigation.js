import { Menu } from "@material-ui/icons";

import React, { useContext, useEffect, useState } from "react";

// import components
import FirstNavigation from "./FirstNavigation";
import SecondNavigation from "./SecondNavigation";

function Navigation() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header id="first-navigation-header">
        <FirstNavigation show={show} setShow={setShow} />
      </header>

      <header
        id="second-navigation-header"
        className={`bg-white d-lg-block ${show ? "d-block" : "d-none"}`}
      >
        <div className="container-xl">
          <SecondNavigation setShow={setShow} />
        </div>
      </header>
    </>
  );
}

export default Navigation;

import React from "react";
import "../../css/content/Advertise.css";

function Advertise({ src, className }) {
  return (
    <div
      className={`${
        className ? className : ""
      } advertise d-flex justify-content-center align-items-center px-1`}
    >
      <img src={src} alt="advertise-image" className="img-fluid" />
    </div>
  );
}

export default Advertise;

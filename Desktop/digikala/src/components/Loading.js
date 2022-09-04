import React from "react";
import "./../css/loading.css";

function Loading() {
  return (
    <div className="loading">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;

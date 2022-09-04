import { Sort } from "@material-ui/icons";
import React from "react";

function SPCommentsNavigation() {
  return (
    <div id="commentsNavigation">
      <Sort />
      <ul>
        <li>مرتب سازی بر اساس</li>
        <li className="active">جدید ترین</li>
        <li>مفید ترین</li>
        <li>دیدگاه خریداران</li>
      </ul>
    </div>
  );
}

export default SPCommentsNavigation;

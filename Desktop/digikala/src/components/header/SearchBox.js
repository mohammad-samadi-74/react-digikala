import React from "react";
import { Search } from "@material-ui/icons";

function SearchBox() {
  return (
    <div className="topNav__searchBox mb-2">
      <Search className="searchIcon" />
      <input type="text" name="search" placeholder="جستجو در دیجی کالا ..." />
    </div>
  );
}

export default SearchBox;

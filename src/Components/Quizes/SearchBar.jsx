import React from "react";
import { ReactSVG } from "react-svg";
import SearchIcon from "./search.svg";

function SearchBar() {
  return (
    <div className="form-outline col-3 d-flex inputDiv m-1">
      <input
        type="search"
        id="searchBox"
        className="col-11"
        placeholder="search"
      />
      <ReactSVG src={SearchIcon} className="col-1" />
    </div>
  );
}

export default SearchBar;

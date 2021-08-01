import React from "react";
import { ReactSVG } from "react-svg";
import SearchIcon from "../Quizes/search.svg";
import DropdownList from "../Dropdown/Dropdown";
import { dropdownItems } from "../Dropdown/List";

function Header() {
  return (
    <div className="Row container">
      <div className="Dropdown">
        <DropdownList
          dropdownItems={dropdownItems.categories}
          title="Category"
          style="blueBackground"
        />
      </div>
      <div className="form-outline col-3 d-flex inputDiv m-1">
        <input
          type="search"
          id="searchBox"
          className="col-11"
          placeholder="Enter Your Quiz Name"
        />
        <ReactSVG src={SearchIcon} className="col-1" />
      </div>
      <div>
        <DropdownList
          dropdownItems={dropdownItems.difficulty}
          title="Difficulty"
          style="greyBackground"
        />
      </div>
    </div>
  );
}

export default Header;

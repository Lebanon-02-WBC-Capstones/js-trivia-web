import React from "react";
import DropdownList from "../Dropdown/Dropdown";
import { dropdownItems } from "../Dropdown/List";
import SearchBar from "./SearchBar";
function Quizes() {
  return (
    <div className="Row container">
      <div className="Dropdown">
        <DropdownList
          dropdownItems={dropdownItems.categories}
          title="Category"
          style="blueBackground"
        />
        <DropdownList
          dropdownItems={dropdownItems.difficulty}
          title="Difficulty"
          style="greyBackground"
        />
        <DropdownList
          dropdownItems={dropdownItems.sortBy}
          title="Sort By"
          style="greyBackground"
        />
      </div>
      <SearchBar />
    </div>
  );
}
export default Quizes;

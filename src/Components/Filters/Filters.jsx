import React from "react";
import DropdownList from "../Dropdown/Dropdown";
import { dropdownItems } from "../Dropdown/List";

export default function Filters() {
  return (
    <div className="Dropdown">
      <DropdownList
        dropdownItems={dropdownItems.categories}
        title="Category"
        style="greyBackground"
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
  );
}

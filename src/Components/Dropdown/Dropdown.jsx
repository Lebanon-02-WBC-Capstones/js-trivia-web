import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
export default function DropdownList() {
  return (
    <div>
      {/* Category  */}

      <DropdownButton id="DropdownCategoryList" title="Category">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>

      {/* Difficulty */}
      <DropdownButton id="DropdownDifficultyList" title="Difficulty">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>

      {/* Sort By */}
      <DropdownButton id="DropdownSortByList" title="Sort By">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

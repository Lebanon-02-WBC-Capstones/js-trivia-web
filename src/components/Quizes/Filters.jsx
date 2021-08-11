import React from "react";
import { Container } from "react-bootstrap";
import DropdownList from "../Dropdown/Dropdown";
import SearchBar from "./SearchBar";
import { dropdownItems } from "../Dropdown/List";

export default function Filters(props) {
  return (
    <Container>
      <div className="row d-flex justify-content-between">
        <div className="d-flex col-5">
          <DropdownList
            dropdownItems={dropdownItems.categories}
            title="Category"
            style="blueBackground"
            value={props.category}
            function={props.setCategory}
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
    </Container>
  );
}

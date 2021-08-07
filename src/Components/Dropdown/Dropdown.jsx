import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
/* eslint-disable react/prop-types */

export default function DropdownList(props) {
  const [dropdown, setDropdown] = useState(props.title);

  const handleSelect = (e) => {
    setDropdown(e);
    props.function(e);
  };

  return (
    <DropdownButton
      id={props.style}
      title={dropdown}
      onSelect={handleSelect}
      className="m-2"
    >
      {props.dropdownItems.map((dropdownItem, index) => (
        <Dropdown.Item eventKey={dropdownItem} key={index}>
          {dropdownItem}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

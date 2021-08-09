import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
/* eslint-disable react/prop-types */

export default function DropdownList(props) {
  const [dropdown, setDropdown] = useState(props.title);
  const [selection, setSelection] = useState(props.style);
  const handleSelect = (e) => {
    setDropdown(e);
    //props.function(e);
    setSelection("blueBackground");
  };

  return (
    <DropdownButton id={selection} title={dropdown} onSelect={handleSelect}>
      {props.dropdownItems.map((dropdownItem, index) => (
        <Dropdown.Item eventKey={dropdownItem} key={index}>
          {dropdownItem}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

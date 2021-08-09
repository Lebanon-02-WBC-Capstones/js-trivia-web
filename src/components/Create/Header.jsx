import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DropdownList from "../Dropdown/Dropdown";
import { dropdownItems } from "../Dropdown/List";

function Header(props) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [difficutly, setDifficutly] = useState("");

  function getCategory(state) {
    let id;
    for (let i = 0; i < dropdownItems.categories.length; i++) {
      if (dropdownItems.categories[i] === state) {
        id = i;
      }
    }
    setCategory(id);
  }

  function getDifficulty(state) {
    let id;
    for (let i = 0; i < dropdownItems.difficulty.length; i++) {
      if (dropdownItems.difficulty[i] === state) {
        id = i;
      }
    }
    setDifficutly(id);
  }

  useEffect(() => {
    props.function(category, name, difficutly);
  }, [category, name, difficutly]);

  return (
    <Container>
      <div className="Row">
        <div className="m-1">
          <DropdownList
            dropdownItems={dropdownItems.categories}
            function={getCategory}
            title="Category"
            style="blueBackground"
          />
        </div>
        <div className="form-outline col-3 d-flex inputDiv m-1">
          <input
            type="search"
            id="searchBox"
            className="col-12 text-center"
            placeholder="Enter Your Quiz Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="m-1">
          <DropdownList
            dropdownItems={dropdownItems.difficulty}
            function={getDifficulty}
            title="Difficulty"
            style="greyBackground"
          />
        </div>
      </div>
    </Container>
  );
}

export default Header;

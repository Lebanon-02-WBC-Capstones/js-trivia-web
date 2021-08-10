import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import DropdownList from "../Dropdown/Dropdown";
import { dropdownItems } from "../Dropdown/List";

function Header(props) {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [difficutly, setDifficutly] = useState("");

  function getCategory(category) {
    setCategory(category);
  }

  function getDifficulty(difficulty) {
    setDifficutly(difficulty);
  }

  useEffect(() => {
    props.function(category, name, difficutly);
  }, [category, name, difficutly]);

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <DropdownList
          dropdownItems={dropdownItems.categories}
          function={getCategory}
          title="Category"
          style="greyBackground"
        />

        <div className="form-outline col-3 d-flex inputDiv m-2">
          <input
            type="search"
            id="searchBox"
            className="col-12 text-center"
            placeholder="Enter Your Quiz Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <DropdownList
          dropdownItems={dropdownItems.difficulty}
          function={getDifficulty}
          title="Difficulty"
          style="greyBackground"
        />
      </div>
    </Container>
  );
}

export default Header;

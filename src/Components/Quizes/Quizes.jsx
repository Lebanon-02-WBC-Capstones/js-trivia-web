import React from "react";
import Filters from "../Filters/Filters";
import SearchBar from "./SearchBar";
function Quizes() {
  return (
    <div className="Row container">
      <Filters />
      <SearchBar />
    </div>
  );
}
export default Quizes;

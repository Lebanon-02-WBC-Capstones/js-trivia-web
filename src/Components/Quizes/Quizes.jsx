import React from "react";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import QuizGrid from "./QuizGrid";
import PageNumber from "./PageNumber";

function Quizes() {
  return (
    <>
      <Filters />
      <QuizGrid />
      <PageNumber />
    </>
  );
}
export default Quizes;

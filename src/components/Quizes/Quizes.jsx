import React from "react";
import Filters from "./Filters";
import QuizGrid from "./QuizGrid";
import PageNumber from "./PageNumber";
import Result from "../Result/Result";
function Quizes() {
  return (
    <>
      <Filters />
      <QuizGrid />
      <Result />
      <PageNumber />
    </>
  );
}
export default Quizes;

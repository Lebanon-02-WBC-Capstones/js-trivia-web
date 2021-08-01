import React from "react";
import Trash from "../../Assets/trash.svg";
import { ReactSVG } from "react-svg";

function Row(props) {
  let { question, wrongAnswers, correctAnswer } = props.question;
  return (
    <div className="row m-1">
      <div className="col-6 m-1 grey round-left p-1 text-center">
        {question}
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        {correctAnswer}
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        {wrongAnswers[0]}
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        {wrongAnswers[1]}
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        {wrongAnswers[2]}
      </div>
      <div className="col-1 m-1 p-1 grey round-right text-center">
        <ReactSVG src={Trash} />
      </div>
    </div>
  );
}

export default Row;

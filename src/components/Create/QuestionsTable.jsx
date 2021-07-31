import React from "react";
import { Container } from "react-bootstrap";
import Row from "./Row";

function QuestionsTable() {
  let testQustion = {
    question: "2+2?",
    wrongAnswers: [3, 5, 2],
    correctAnswer: 4,
  };

  return (
    <Container>
      <Header />
      <Row question={testQustion} />
    </Container>
  );
}

function Header() {
  return (
    <div className="row m-1">
      <div className="col-6 m-1 grey round-left p-1 text-center bold">
        Question
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center bold">
        Correct Answer
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center bold">
        False
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center bold">
        False
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center bold">
        False
      </div>
      <div className="col-1 m-1 p-1 grey round-right text-center"></div>
    </div>
  );
}

export default QuestionsTable;

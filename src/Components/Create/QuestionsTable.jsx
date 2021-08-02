import React from "react";
import { Container } from "react-bootstrap";
import Row from "./Row";

function QuestionsTable(props) {
  return (
    <Container>
      <Header />
      {props.questions.map((question, index) => (
        <Row question={question} key={index} />
      ))}
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

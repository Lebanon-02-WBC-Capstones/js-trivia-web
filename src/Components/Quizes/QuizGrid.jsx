import React from "react";
import { quizzes } from "./Quizzes.js";
import QuizCard from "./QuizCard";
import { Container } from "react-bootstrap";
function QuizGrid() {
  return (
    <div>
      <Container>
        <QuizCard quizzes={quizzes} />
      </Container>
    </div>
  );
}

export default QuizGrid;

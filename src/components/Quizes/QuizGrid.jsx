import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import QuizCard from "./QuizCard";
import { Container } from "react-bootstrap";

function QuizGrid(props) {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredQuizzes, setfilteredQuizzes] = useState([]);

  const fetchQuizzes = async () => {
    const response = db.collection("Quizzes");
    const data = await response.get();
    data.docs.forEach((quiz) => {
      setQuizzes((prev) => [...prev, quiz.data()]);
    });
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  useEffect(() => {
    let filtered = quizzes.filter(
      (quiz) => quiz.category === props.filters.category
    );
    setfilteredQuizzes(filtered);
  }, [props.filters.category]);

  return (
    <div>
      <Container>
        <QuizCard quizzes={filteredQuizzes} />
      </Container>
    </div>
  );
}

export default QuizGrid;

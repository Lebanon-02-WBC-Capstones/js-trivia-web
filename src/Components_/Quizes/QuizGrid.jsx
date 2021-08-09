/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { quizzes } from "./Quizzes.js";
import QuizCard from "./QuizCard";
import { Container } from "react-bootstrap";
function QuizGrid() {
  const [quizzes, setQuizzes] = useState([]);
  const Fetchdata = () => {
    db.collection("Quizzes")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setQuizzes((arr) => [...arr, data]);
        });
      });
  };
  window.addEventListener("load", () => {
    Fetchdata();
  });
  // eslint-disable-next-line no-console
  console.log("Next line quizzes");
  // eslint-disable-next-line no-console
  console.log(quizzes);
  return (
    <div>
      <Container>
        <QuizCard quizzes={quizzes} />
      </Container>
    </div>
  );
}

export default QuizGrid;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import CloseButton from "react-bootstrap/CloseButton";
import InputGroup from "react-bootstrap/InputGroup";
import "./Question.css";
import { quizzes } from "../Quizes/Quizzes";
import { db } from "../../Firebase";
import { useParams, useHistory } from "react-router-dom";
/* eslint-disable no-debugger, no-console */

export default function QuizHandler() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quiz, setQuiz] = useState({});
  const [questionNumber, setQuestionNumber] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const { id } = useParams();
  const history = useHistory();

  const getQuiz = async () => {
    const response = db.collection("Quizzes");
    const doc = await response.doc(id).get();
    console.log(doc);
    setQuiz(doc.data());
  };

  useEffect(() => {
    getQuiz();
    //console.log(quiz);
  }, [id]);

  {
    /*
  const questions = [
    {
      questionText: "What is the capital of France?",
      questionOptions: [
        { answerText: "Beirut", isCorrect: false },
        { answerText: "Newyork", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "London", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Lebanon?",
      questionOptions: [
        { answerText: "Paris", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Beirut", isCorrect: true },
        { answerText: "Newyork", isCorrect: false },
      ],
    },
  ];
*/
  }

  const handleClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;
    if (isCorrect === true) {
      setScore(score + 1);
    }

    // if (nextQuestion < quiz.questions.length) {
    //   setCurrentQuestion(nextQuestion);
    // } else {
    //   setShowScore(true);
    //   setQuestionNumber(false);
    // }
  };

  const letters = ["A:", "B:", "C:", "D:"];

  return <div>hello</div>;
  // {

  /*
    <div className="quiz">
      {showScore ? (
        //history.push("/result", "", { score: score })

        history.push({
          pathname: "/result",
          search: "?score=score", // query string
          state: {
            // location state
            score: score,
          },
        })
      ) : (
        <Container className="Cont">
          <CloseButton />
          <div>
            {questionNumber ? (
              <div className="QuesNb">
                Question <br />
                {currentQuestion + 1}/{quiz.questions.length} 
              </div>
            ) : (
              <div>you reached the end of the quiz</div>
            )}
          </div>
          <div className="question">
            {quiz.questions[currentQuestion].questionText}
          </div>

          <div className="Answer">
            {quiz.questions[currentQuestion].questionOptions.map(
              (questionOption, index) => (
                <Container className="Container2" as={ButtonGroup} key={index}>
                  {" "}
                  <div className="QuesDiv">
                    <Button
                      variant="warning"
                      className="But"
                      index={index}
                      onClick={() => handleClick(questionOption.isCorrect)}
                    >
                      <InputGroup.Text id="basic-addon1">
                        {letters[index]}
                      </InputGroup.Text>
                      {questionOption.answerText}
                    </Button>{" "}
                  </div>
                </Container>
              )
            )}
          </div>
        </Container>
      )}
    </div>
              */
  //};
}

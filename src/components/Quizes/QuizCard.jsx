import React from "react";
import { difficulty } from "../../dummy_data";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

// Please don't remove the comments; they help in breaking down the code and
// organizing it
function QuizCard(props) {
  function diff_color(quiz) {
    if (quiz.difficulty === 0) {
      return (
        <span
          className="badge rounded-pill bg-success align-left"
          style={{ fontSize: "0.7rem" }}
        >
          {difficulty[quiz.difficulty]}
        </span>
      );
    } else if (quiz.difficulty === 2) {
      return (
        <span
          className="badge rounded-pill bg-danger align-left"
          style={{ fontSize: "0.7rem" }}
        >
          {difficulty[quiz.difficulty]}
        </span>
      );
    } else {
      return (
        <span
          className="badge rounded-pill bg-warning align-left"
          style={{ fontSize: "0.7rem" }}
        >
          {difficulty[quiz.difficulty]}
        </span>
      );
    }
  }
  return (
    <div
      className="row row-cols-1 row-cols-md-2 g-4 justify-content-center"
      style={{ fontSize: "0.5rem" }}
    >
      {props.quizzes.map((quiz, index) => {
        return (
          <div className="col-6 col-md-6" key={index}>
            <div className="col-9 col-md-9 mx-auto">
              <div className="card mt-5">
                <div className="card-body">
                  {/* First Row with Quiz Title and Rating */}
                  <div className="row justify-content-between">
                    <div className="col-6 col-md-6">
                      <h5 className="text-dark cardText ">{quiz.name}</h5>
                    </div>

                    <div className="col-4 col-md-4 d-flex">
                      <span className="star">&#9733;</span>
                      <p className="cardText ">{quiz.rating}</p>
                    </div>
                  </div>
                  {/* End of First Row */}
                  {/* Start of Second Row */}
                  <div className="row justify-content-start">
                    <div className="col-4 col-md-4">{diff_color(quiz)}</div>
                  </div>
                  {/* End of Second Row */}
                  {/* Start of Third Row */}
                  <div className="row justify-content-start">
                    <div className="col-6 col-md-6 justify-content-start">
                      <p className="cardText align-left">
                        Players: {quiz.players}
                      </p>
                    </div>
                  </div>
                  {/* End of Third Row */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuizCard;

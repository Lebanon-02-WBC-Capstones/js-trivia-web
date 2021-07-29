import React from "react";
// import { categories, difficulty } from "./Quizzes";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
/* eslint-disable react/prop-types */
function QuizCard(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
      {props.quizzes.map((quiz, index) => {
        return (
          <div className="col-6 col-md-6" key={index}>
            <div className="col-9 col-md-9 mx-auto">
              <div className="card mt-5">
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-6 col-md-6">
                      <h5 className="card-title text-dark cardText ">
                        {quiz.name}
                      </h5>
                    </div>
                    <div className="col-6 col-md-6">
                      <p className="card-text text-dark cardText">
                        {quiz.rating} Stars
                      </p>
                    </div>
                  </div>
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

import React from "react";
import { difficulty } from "./Quizzes";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
// import { ReactSVG } from "react-svg";
// import starsvg from "./starsvg.svg";
/* eslint-disable react/prop-types */

// Please don't remove the comments; they help in breaking down the code and
// organizing it
function QuizCard(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
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

                    <div className="col-4 col-md-4 d-flex ">
                      <span className="star">&#9733;</span>
                      <p className="cardText ">{quiz.rating}</p>
                      {/* <div className="row justify-content-center">
                        <div className="col-3 col-md-3 pb-5 ">
                          <img src={star} width="10px" />
                        </div>
                        <div className="col-3 col-md-3 p-0">
                          <p className="cardText ">{quiz.rating}</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* End of First Row */}

                  {/* Start of Second Row */}
                  <div className="row justify-content-start ml-3">
                    <div className="col-2 col-md-4">
                      {if(quiz.difficulty === 1){
                        return (<span className="badge rounded-pill bg-success align-left">
                          {difficulty[quiz.difficulty]}
                        </span>)}
                      }
                      {/* <span className="badge rounded-pill bg-success align-left">
                        {difficulty[quiz.difficulty]}
                      </span> */}
                    </div>
                  </div>
                  {/* End of Second Row */}
                  {/* Start of Third Row */}
                  <div className="row justify-content-start">
                    <div className="col-6 col-md-6">
                      <p className="cardText">Players: {quiz.players}</p>
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

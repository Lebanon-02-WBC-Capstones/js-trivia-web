import React from "react";
import { difficulty } from "../../dummy_data";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../App.css";
import "./quizcard.css";

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
      className="row row-cols-1 row-cols-md-2 g-4 m-3 justify-content-between"
      style={{ fontSize: "0.5rem" }}
    >
      {props.quizzes.map((quiz, index) => {
        return (
          // Card output
          <div className="quizcard col-5 col-md-5 p-0" key={index}>
            {/* First row in each card */}
            <div className="row d-flex justify-content-between p-0">
              {/* Quiz Name - first column in first row */}
              <div className="col-4 col-md-4 p-0">
                <h5 className="quizTitle">{quiz.name}</h5>
              </div>
              {/* Rating - second column in first row */}
              <div className="col-4 col-md-4 d-flex p-0 justify-content-center">
                <div
                  className="text-center star p-0"
                  style={{ fontSize: "1rem" }}
                >
                  &#9733;
                </div>
                <p className="numplayers">{quiz.rating}</p>
              </div>
            </div>
            {/* End of first row in each card */}
            {/* Second row in each card */}
            <div className="row d-flex justify-content-between p-0">
              {/* Difficulty level */}
              <div className="col-4 col-md-4 p-0">
                <h6>{diff_color(quiz)}</h6>
              </div>
            </div>
            {/* End of second row in each card */}
            {/* Third row in each card */}
            <div className="row d-flex justify-content-between p-0 justify-content-start">
              <div className="col-4 col-md-4">
                <p className="numplayers">Players: {quiz.players}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// function QuizCard(props) {
//   function diff_color(quiz) {
//     if (quiz.difficulty === 0) {
//       return (
//         <span
//           className="badge rounded-pill bg-success align-left"
//           style={{ fontSize: "0.7rem" }}
//         >
//           {difficulty[quiz.difficulty]}
//         </span>
//       );
//     } else if (quiz.difficulty === 2) {
//       return (
//         <span
//           className="badge rounded-pill bg-danger align-left"
//           style={{ fontSize: "0.7rem" }}
//         >
//           {difficulty[quiz.difficulty]}
//         </span>
//       );
//     } else {
//       return (
//         <span
//           className="badge rounded-pill bg-warning align-left"
//           style={{ fontSize: "0.7rem" }}
//         >
//           {difficulty[quiz.difficulty]}
//         </span>
//       );
//     }
//   }
//   return (
//     <div
//       className="row row-cols-1 row-cols-md-2 g-4 m-3"
//       style={{ fontSize: "0.5rem" }}
//     >
//       {props.quizzes.map((quiz, index) => {
//         return (
//           <div className="d-flex col-6 col-md-6 m-0" key={index}>
//             <div className="col-9 col-md-9 mx-auto my-4">
//               <div className="card">
//                 <div className="card-body">
//                   {/* First Row with Quiz Title and Rating */}
//                   <div className="row">
//                     <div className="col-12 col-md-12">
//                       <h5
//                         className="text-dark mx-4"
//                         style={{ textAlign: "left" }}
//                       >
//                         {quiz.name}
//                       </h5>
//                     </div>
//                   </div>
//                   {/* End of First Row */}
//                   {/* Start of Second Row */}
//                   <div className="row justify-content-start">
//                     <div
//                       className="col-4 col-md-4 mx-4"
//                       style={{ textAlign: "left" }}
//                     >
//                       {diff_color(quiz)}
//                     </div>
//                   </div>
//                   {/* End of Second Row */}
//                   {/* Start of Third Row */}
//                   <div className="row justify-content-start">
//                     <div className="col-6 col-md-6 justify-content-start">
//                       <p
//                         className="cardText align-left mx-4 m-1"
//                         style={{ textAlign: "left" }}
//                       >
//                         Players: {quiz.players}
//                       </p>
//                     </div>
//                     <div className="col-6 col-md-6 d-flex justify-content-end">
//                       <div className="d-flex mx-4 align-items-center align-text-middle">
//                         <div
//                           className="text-center star mr-1"
//                           style={{ fontSize: "1.5rem" }}
//                         >
//                           &#9733;
//                         </div>
//                         <div
//                           className="text-center"
//                           style={{ fontSize: "1rem" }}
//                         >
//                           {quiz.rating}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* End of Third Row */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default QuizCard;

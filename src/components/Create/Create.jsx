import React, { useState } from "react";
import Header from "./Header";
import QuestionsTable from "./QuestionsTable";
import Buttons from "./Buttons";

function Create() {
  const [quiz, setQuiz] = useState({
    name: "",
    rating: 0,
    difficulty: 0,
    times_played: 0,
    category: 0,
    created_by: "username",
    number_of_ratings: 0,
    questions: [],
    posted: false,
    admin_message: "",
  });

  function getValues(category, name, difficulty) {
    setQuiz((prev) => ({
      ...prev,
      category: category,
      name: name,
      difficulty: difficulty,
    }));
    return quiz;
  }

  function getQuestion(question) {
    setQuiz((prev) => ({
      ...prev,
      questions: [...prev.questions, question],
    }));
  }

  function deleteQuestion(id) {
    let oldQuestions = [...quiz.questions];
    let newQuestions = oldQuestions.filter((question) => id !== question.id);
    setQuiz((prev) => ({ ...prev, questions: newQuestions }));
  }

  function deleteQuiz() {
    setQuiz({
      name: "",
      rating: 0,
      difficulty: "",
      times_played: 0,
      category: "",
      created_by: "username",
      number_of_ratings: 0,
      questions: [],
      posted: false,
      admin_message: "",
    });
  }

  return (
    <div>
      <h2 className="m-2">Edit Your Quiz</h2>
      <Header function={getValues} />
      <QuestionsTable
        questions={quiz.questions}
        deleteQuestion={deleteQuestion}
      />
      <Buttons getQuestion={getQuestion} quiz={quiz} deleteQuiz={deleteQuiz} />
    </div>
  );
}

export default Create;

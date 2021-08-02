import React, { useState } from "react";
import Header from "./Header";
import QuestionsTable from "./QuestionsTable";
import Buttons from "./Buttons";

function Create() {
  const [quiz, setQuiz] = useState({
    name: "",
    difficulty: 0, //0 is easy, 1 is medium, and 2 is hard
    times_played: 0,
    category: 0, //category integer is matched with text in above categories object
    created_by: "username",
    number_of_ratings: 0,
    rating: 0,
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

  return (
    <div>
      <h2 className="m-2">Edit Your Quiz</h2>
      <Header function={getValues} />
      <QuestionsTable questions={quiz.questions} />
      <Buttons function={getQuestion} />
    </div>
  );
}

export default Create;

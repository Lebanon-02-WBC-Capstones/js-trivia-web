const categories = {
  0: "history",
  1: "science",
  2: "music",
  3: "geography",
  4: "languages",
  5: "coding",
  6: "literature",
  7: "movies",
  8: "business",
  9: "politics",
  10: "sports",
  11: "challenges",
};

const quiz = {
  id: 1234, //changed it to integer instead of string
  difficulty: 0, //0 is easy, 1 is medium, and 2 is hard
  times_played: 200,
  category: 1, //category integer is matched with text in above categories object
  created_by: "username",
  number_of_ratings: 1000,
  rating: 4.5,
  // New rating = (old_rating * (number_of_ratings-1) +new_rating)/ (number_of_ratings)
  //Changed question type as suggested by Wadad
  questions: [
    {
      questionText: "What is the molecular formula for water?",
      questionOptions: [
        { answerText: "H2O2", isCorrect: false },
        { answerText: "HO2", isCorrect: false },
        { answerText: "H2O", isCorrect: true },
        { answerText: "H2O3", isCorrect: false },
      ],
    },
    {
      questionText: "How many bones are in the human body?",
      questionOptions: [
        { answerText: 203, isCorrect: false },
        { answerText: 210, isCorrect: false },
        { answerText: 206, isCorrect: true },
        { answerText: 200, isCorrect: false },
      ],
    }, //shall we include maths as a "science"? Questions in this category can be
    //chemistry, biology, physics, astronomy...
    {
      questionText: "The sum of any two odd integers is odd.",
      questionOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
  ],
  posted: true,
  admin_message: "",
};

const user = {
  admin: false,
  username: "username", //removed email and password as these will be handled by firebase
  //as Abdulrahman mentioned yesterday
  id: 1234,
  avatar: "example.jpg",
  quizzes: [1234, 1342, 121, 3214],
};

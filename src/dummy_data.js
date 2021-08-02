export const categories = {
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

export const difficulty = {
  1: "Easy",
  2: "Med",
  3: "Hard",
};

export const quizzes = [
  {
    id: 1234,
    name: "Quiz 1",
    rating: 3.8,
    difficulty: 1,
    players: 150,
    times_played: 200,
    created_by: "username",
    number_of_ratings: 1000,
    category: 1,
    // New rating = (old_rating * (number_of_ratings-1) +new_rating)/ (number_of_ratings)
    questions: [
      {
        questionText: "What is 2+2?",
        questionOptions: [4, 6, 8, 10],
        correctAnswer: 4,
      },
      {
        questionText: "What is 42*2?",
        questionOptions: [84, 64, 422, 7],
        correctAnswer: 84,
      },
      {
        questionText: "How many sides does a square have ?",
        questionOptions: [4, 6, 8, 10],
        correctAnswer: 4,
      },
      {
        questionText: "What is the sum of angles in a triangle?",
        questionOptions: [180, 360, 100, 90],
        correctAnswer: 180,
      },
    ],
  },
  {
    id: 1234,
    name: "Quiz 2",
    rating: 3.8,
    difficulty: 2,
    players: 300,
    times_played: 700,
    created_by: "user2",
    number_of_ratings: 1567,
    category: 5,
    // New rating = (old_rating * (number_of_ratings-1) +new_rating)/ (number_of_ratings)
    questions: [
      {
        questionText: "What does the MP stand for in MP3?",
        questionOptions: [
          "Music Player",
          "Multi Pass",
          "Micro Point",
          "Moving Picture",
        ],
        correctAnswer: "Moving Picture",
      },
      {
        questionText: "What amount of bits commonly equals one byte?",
        questionOptions: [1, 2, 8, 64],
        correctAnswer: 8,
      },
      {
        questionText: "In web design, what does CSS stand for?",
        questionOptions: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Cascading Style Sheet",
          "Computer Style Sheet",
        ],
        correctAnswer: "Cascading Style Sheet",
      },
      {
        questionText: "This mobile OS held the largest market share in 2012.",
        questionOptions: ["Android", "BlackBerry", "Symbian", "iOS"],
        correctAnswer: "iOS",
      },
    ],
  },
  {
    id: 1234,
    name: "Quiz 3",
    rating: 3.8,
    difficulty: 1,
    players: 150,
    times_played: 200,
    created_by: "username",
    number_of_ratings: 1000,
    category: 3,
    // New rating = (old_rating * (number_of_ratings-1) +new_rating)/ (number_of_ratings)
    questions: [
      {
        questionText: "What is the capital of India?",
        questionOptions: ["Bejing", "Montreal", "Tithi", "New Delhi"],
        correctAnswer: "New Delhi",
      },
      {
        questionText: "The Alps are a mountain range on which continent?",
        questionOptions: ["North America", "Europe", "Asia", "Africa"],
        correctAnswer: "Europe",
      },
      {
        questionText: "What is Laos?",
        questionOptions: [4, 6, 8, 10],
        correctAnswer: 4,
      },
      {
        questionText: "What is the sum of angles in a triangle?",
        questionOptions: ["Country", "Region", "River", "City"],
        correctAnswer: "Country",
      },
    ],
  },
  {
    id: 1234,
    name: "Quiz 4",
    rating: 3.8,
    difficulty: 3,
    players: 150,
    times_played: 200,
    created_by: "username",
    number_of_ratings: 1000,
    category: 6,
    // New rating = (old_rating * (number_of_ratings-1) +new_rating)/ (number_of_ratings)
    questions: [
      {
        questionText:
          "In the Beatrix Potter books, what type of animal is Tommy Brock?",
        questionOptions: ["Fox", "Frog", "Rabbit", "Badger"],
        correctAnswer: "Badger",
      },
      {
        questionText:
          "In the Harry Potter universe, what is Cornelius Fudge's middle name?",
        questionOptions: ["James", "Harold", "Christopher", "Oswald"],
        correctAnswer: 84,
      },
      {
        questionText: "What is Hermione Granger's middle name?",
        questionOptions: ["Jean", "Jane", "Emma", "Jo"],
        correctAnswer: "Jean",
      },
      {
        questionText:
          "In the Harry Potter series, what is Headmaster Dumbledore's full name?",
        questionOptions: [
          "Albus Valum Jetta Mobius Dumbledore",
          "Albus James Lunae Otto Dumbledore",
          "Albus Valencium Horatio Kul Dumbledore",
          "Albus Percival Wulfric Brian Dumbledore",
        ],
        correctAnswer: "Albus Percival Wulfric Brian Dumbledore",
      },
    ],
  },
  {
    id: 1234,
    name: "Quiz 5",
    rating: 3.8,
    difficulty: 1,
    players: 150,
    times_played: 200,
    created_by: "username",
    number_of_ratings: 1000,
    category: 10,
    // New rating = (old_rating * (number_of_ratings-1) +new_rating)/ (number_of_ratings)
    questions: [
      {
        questionText: "Which country hosted the 2021 Summer Olympics?",
        questionOptions: ["Japan", "China", "Australia", "Germany"],
        correctAnswer: "Japan",
      },
      {
        questionText: "Who won the 2015 Formula 1 World Championship?",
        questionOptions: ["Quebec City", "Houston", "Montreal", "New York"],
        correctAnswer: "Quebec City",
      },
      {
        questionText:
          "What team did England beat to win in the 1966 World Cup final?",
        questionOptions: ["West Germany", "Soviet Union", "Portugal", "Brazil"],
        correctAnswer: "West Germany",
      },
      {
        questionText:
          "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
        questionOptions: ["1-5", "1-6", "2-6", "1-7"],
        correctAnswer: "1-7",
      },
    ],
  },
  {
    id: 1234,
    name: "Quiz 6",
    rating: 3.8,
    difficulty: 2,
    players: 150,
    times_played: 200,
    created_by: "username",
    number_of_ratings: 1000,
    category: 9,
    // New rating = (old_rating * (number_of_ratings-1) +new_rating)/ (number_of_ratings)
    questions: [
      {
        questionText:
          "Which president erased the national debt of the United States?",
        questionOptions: [
          "Andrew Jackson",
          "Ronald Reagan",
          "John F. Kennedy",
          "Franklin Roosevelt",
        ],
        correctAnswer: "Andrew Jackson",
      },
      {
        questionText:
          "Who became Prime Minister of the United Kingdom in July 2016?",
        questionOptions: [
          "Theresa May",
          "Boris Johnson",
          "David Cameron",
          "Tony Blair",
        ],
        correctAnswer: "Theresa May",
      },
      {
        questionText:
          "What is former United States President Bill Clinton's full name?",
        questionOptions: [
          "William Jefferson Clinton",
          "William Roosevelt Clinton",
          "William Truman Clinton",
          "William Lincoln Clinton",
        ],
        correctAnswer: "William Jefferson Clinton",
      },
      {
        questionText:
          "Who succeeded Joseph Stalin as General Secretary of the Communist Party of the Soviet Union?",
        questionOptions: [
          "Nikita Khrushchev",
          "Leonid Brezhnev",
          "Mikhail Gorbachev",
          "Boris Yeltsin",
        ],
        correctAnswer: "Nikita Khrushchev",
      },
    ],
  },
];

const user = {
  admin: false,
  username: "username", //removed email and password as these will be handled by firebase
  //as Abdulrahman mentioned yesterday
  id: 1234,
  avatar: "example.jpg",
  quizzes: [1234, 1342, 121, 3214],
};

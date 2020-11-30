// NeoG Camp - markOne

// REQUIREMENTS
// Build a CLI app which can quiz users on a certain topic.
// Use nodeJS.
// Use repl.it to host the app.
// This should be similar to the app made in lesson One of levelZero.

// initialize external libraries - readline-sync
var readlineSync = require('readline-sync');

// initialize variables to track the status of quiz
// username, correct answers, question array
var userName = '';
var correctAnswers = 0;
var wrongAnswers = 0;

var questionBank = [
  {
    question: "Q1",
    hint: "hint",
    answer: ["A1","a1"]
  },
  {
    question: "Q2",
    hint: "hint",
    answer: ["A2","a2"]
  },
  {
    question: "Q3",
    hint: "hint",
    answer: ["A3", "a3"]
  },
  {
    question: "Q4",
    hint: "hint",
    answer: ["A4"]
  },
  {
    question: "Q5",
    hint: "hint",
    answer: ["A5"]
  },
  {
    question: "Q6",
    hint: "hint",
    answer: ["A6"]
  },
  {
    question: "Q7",
    hint: "hint",
    answer: ["A7"]
  },
  {
    question: "Q8",
    hint: "hint",
    answer: ["A8"]
  },
  {
    question: "Q9",
    hint: "hint",
    answer: ["A9"]
  },
  {
    question: "Q10",
    hint: "hint",
    answer: ["A10"]
  },
];

// helper functions
function getAnswer(question) {
  var answer = readlineSync.question(question);
  return answer;
}

function getHint(question) {
  return question.hint;
}

// loop to ask all questions
for (var i = 0; i < questionBank.length; i++) {
  var questionObj = questionBank[i];
  var question = "\nQ: " + questionObj.question + '\nA: ';
  var questionsLeft = questionBank.length - i - 1;

  // ask each question to the user
  var userReply = getAnswer(question);

  // check if it is an answer or a request for a hint
  if(userReply == 'H' || userReply == 'h'){
    // print the hint and then ask for answer
    console.log("Hint: " + getHint(questionObj));
    userReply = getAnswer(question);
  }

  // validate answer
  if(questionObj.answer.includes(userReply)){
    // tally points and congratulate the user
    correctAnswers++;
    console.log("Correct answer");
  }
  else {
    wrongAnswers++;
    console.log("You got " + wrongAnswers + " question/s wrong.");
  }

  console.log("Correct: " + correctAnswers + " Remaining: " + questionsLeft);
}


// display end results
var finalResult = `\n   ---=== RESULT ===---
Dear ${userName}, thank you for playing markOne.

Your performance is as follows:
Correct   : ${correctAnswers}
Total     : ${questionBank.length}
Score     : ${(correctAnswers/questionBank.length)*100}%
`;
console.log(finalResult);

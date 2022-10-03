var readlineSync = require("readline-sync");

// import chalk from "chalk";

var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome to the game " + userName +". "+"Let's play DO YOU KNOW ABHISEK.");

console.log("--------------")

function game(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("Yes you are right!");
    score = score + 1;
    console.log("Your current score "+ score);
  } else{
    console.log("Ohh noo. You are wrong!");
    console.log("Your current score "+ score);
  }
  console.log("_______________")
}



var questions = [{
  question: "Where Do I live?",
  answer: "Junagarh"
}, {
  question:"What is my nick name? ",
  answer: "Sonu"
}, {
  question: "Which school did I go ?",
  answer: "SSVM"
}
];

for (var i=0; i<questions.length; i++) {
  var currentQuestions = questions[i];
  game(currentQuestions.question, currentQuestions.answer);
}


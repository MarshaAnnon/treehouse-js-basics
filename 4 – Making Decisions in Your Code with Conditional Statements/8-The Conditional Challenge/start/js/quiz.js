/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let score = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const main = document.querySelector("main");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const answer1 = prompt("Name a programming language that's also a gem.");
if ( answer1.toUpperCase() === 'RUBY' ) {
  score += 1;
}

const answer2 = prompt("Name a programming language that's also a snake.");
if ( answer2.toUpperCase() === 'PYTHON' ) {
  score += 1;
}

const answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
  score += 1;
}

const answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
  score += 1;
}

const answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
  score += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (score === 5) {
  rank = "Gold";
} else if (score >= 3 && score <= 4) {
  rank = "Silver";
} else if (score >= 1 && score <= 2 ) {
  rank = "Bronze"
} else {
  rank = "No crown for you"
}

// 6. Output results to the <main> element
main.innerHTML = `
  <h2>You got ${score} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${rank}</strong></p>
`;

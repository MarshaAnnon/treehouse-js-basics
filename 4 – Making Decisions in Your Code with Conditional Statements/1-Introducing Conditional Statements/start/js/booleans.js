let correctGuess = false;
let number = 6;
const guess = prompt('Guess a number between 1 to 10');

//+ converts the string value of guess to a number value to ensure
//you are comparing to number values +guess
if (+guess === number) {
  correctGuess = true;
}

if (correctGuess) {
  console.log('WooHoo, guessed the correct number!!');
} else {
  console.log(`WaWaWa, the number was ${number}`);
}

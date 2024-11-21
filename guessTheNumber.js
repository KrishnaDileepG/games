function valid(number) {
  return number + '' === 'NaN';
}

function guessTheNumber() {
  let numberOfAttempts = 5;
  console.log("Welcome to Guess the Number! \n The secret number is between 1 and 100. You have 5 attempts to find it.")
  console.log("                                       ");
  const actualNumber = Math.floor(Math.random() * 100);

  while (numberOfAttempts >= 1) {
    const guessNumber = +prompt("Take a guess!  (remaining attempts " + numberOfAttempts + " )");
    if (!valid(guessNumber)) {
      if (actualNumber === guessNumber) {
        break;
      }

      else if (actualNumber > guessNumber) {
        console.log(guessNumber + " Too low! Try a higher number ⬆️");
        console.log("                                       ");
      } else {
        console.log(guessNumber + " Too high! Try a smaller number ⬇️.")
        console.log("                                       ");
      }
      numberOfAttempts--;
    }
    if (valid(guessNumber)) {
      console.log("Invalid Input");
    }
  }

  const lose = "Oh no! You've used all your attempts. Better luck next time!😕";
  const won = "Bravo! You've nailed it. The number was " + actualNumber + "!🥳🤩";
  const stat = numberOfAttempts === 0 ? lose : won;
  console.log(stat);
}

function isContinue() {
  guessTheNumber();
  while (confirm("Do you want to play again?")) {
    guessTheNumber();
  }
  console.log("Good Bye 👋");
}

isContinue();

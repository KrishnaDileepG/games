function isEqual(numberOfTimes, limit) {
  return numberOfTimes === limit;
}

function startGame() {
  const actualAnimal = "squirrel";
  let numberOfTimes = 1;

  console.log("ABOUT THE ANIMAL : They are acrobatic, intelligent, and adaptable.");

  while (numberOfTimes <= 5) {
    const userGuess = prompt("Guess the animal : ");

    if (actualAnimal === userGuess) {
      break;
    }

    if (isEqual(numberOfTimes, 1)) {
      console.log("one clue is revealed but You lost one chance😕...");
      console.log(" 🛑 Typically live 5–10 years, but some species can live up to 20 years. ");
    }

    if (isEqual(numberOfTimes, 2)) {
      console.log("one clue is revealed but You lost one chance😕...");
      console.log(" 🛑 They are live in groups and use alarm calls to warn each other of danger.");

    }

    if (isEqual(numberOfTimes, 3)) {
      console.log("one clue is revealed but You lost one chance😕...");
      console.log(" 🛑 They grow thicker fur in colder climates to stay warm. They may also change their diet depending on what's available. ");
    }

    if (isEqual(numberOfTimes, 4)) {
      console.log("Last chance THINK...........");
      console.log(" 🛑 They store food by burying it underground, a behavior called caching and They zigzag to escape predators. ");
    }
    numberOfTimes++;
  }
  return numberOfTimes;
}

function guessTheAnimal() {
  const playerName = prompt("Enter your Name");
  const confirmIntrest = confirm("you want to play ?");
  let userStatus = 0;

  if (confirmIntrest) {
    userStatus = startGame();

    const status = userStatus === 6 ? "BETTER LUCK NEXT TIME 🙂 " : "EXCELLENT🤩";
    console.log(status + playerName);
  }
}

guessTheAnimal();

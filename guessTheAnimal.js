function guessTheAnimal() {
  const playerName = prompt("Enter your Name");
  const confirmIntrest = confirm("you want to play ?");

  if (confirmIntrest) {
    const actualAnimal = "squirrel";
    let numberOfTimes = 1;

    console.log("ABOUT THE ANIMAL : They are acrobatic, intelligent, and adaptable.")
    while (numberOfTimes <= 5) {
      const userGuess = prompt("Guess the animal : ");

      if (actualAnimal === userGuess) {
        break;
      }

      if (numberOfTimes === 1) {
        console.log("one clue is revealed but You lost one chance😕...");
        console.log(" 🛑 Typically live 5–10 years, but some species can live up to 20 years. ");
      }

      if (numberOfTimes === 2) {
        console.log("one clue is revealed but You lost one chance😕...");
        console.log(" 🛑 They are live in groups and use alarm calls to warn each other of danger.");

      }

      if (numberOfTimes === 3) {
        console.log("one clue is revealed but You lost one chance😕...");
        console.log(" 🛑 They grow thicker fur in colder climates to stay warm. They may also change their diet depending on what's available. ");
      }

      if (numberOfTimes === 4) {
        console.log("Last chance THINK...........");
        console.log(" 🛑 They store food by burying it underground, a behavior called caching and They zigzag to escape predators. ")
      }
      numberOfTimes++;
    }
    const status = numberOfTimes === 6 ? "BETTER LUCK NEXT TIME 🙂 " : "EXCELLENT🤩";
    console.log(status + playerName);
  }
}
guessTheAnimal();

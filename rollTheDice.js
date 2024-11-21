function wait() {
  for (let i = 0; i < 500000000; i++) {

  }
}

function rollIterate() {
  for (let times = 0; times < 5; times++) {
    console.log("   ◻️   ");
    console.log(" ◻️ ◻️   ");
    console.log("◻️  ◻️  ");
    console.log("   ◻️   ");
    console.log("◻️ ◻️ ◻️ ◻️");

    wait();

    console.clear();

    console.log("◻️ ◻️ ◻️");
    console.log("    ◻️");
    console.log("◻️ ◻️ ◻️");
    console.log("◻️");
    console.log("◻️ ◻️ ◻️");
    wait();

    console.clear();

    console.log("◻️ ◻️ ◻️");
    console.log("    ◻️");
    console.log("◻️ ◻️ ◻️");
    console.log("    ◻️");
    console.log("◻️ ◻️ ◻️");
    wait();

    console.clear();

    console.log("◻️   ◻️");
    console.log("◻️   ◻️");
    console.log("◻️ ◻️ ◻️");
    console.log("    ◻️");
    console.log("    ◻️");
    wait();

    console.clear();
    console.log("◻️ ◻️ ◻️");
    console.log("◻️");
    console.log("◻️ ◻️ ◻️");
    console.log("    ◻️");
    console.log("◻️ ◻️ ◻️");
    wait();

    console.clear();
    console.log("◻️ ◻️ ◻️");
    console.log("◻️");
    console.log("◻️ ◻️ ◻️");
    console.log("◻️   ◻️");
    console.log("◻️ ◻️ ◻️");
    wait();
    console.clear();
  }
}
function rollDiceVisual(visualDice) {
  switch (visualDice) {
    case 1:
      console.log("   ◻️   ");
      console.log(" ◻️ ◻️   ");
      console.log("◻️  ◻️  ");
      console.log("   ◻️   ");
      console.log("◻️ ◻️ ◻️ ◻️");
      break;
    case 2:
      console.log("◻️ ◻️ ◻️");
      console.log("    ◻️");
      console.log("◻️ ◻️ ◻️");
      console.log("◻️");
      console.log("◻️ ◻️ ◻️");
      break;
    case 3:
      console.log("◻️ ◻️ ◻️");
      console.log("    ◻️");
      console.log("◻️ ◻️ ◻️");
      console.log("    ◻️");
      console.log("◻️ ◻️ ◻️");
      break;
    case 4:
      console.log("◻️   ◻️");
      console.log("◻️   ◻️");
      console.log("◻️ ◻️ ◻️");
      console.log("    ◻️");
      console.log("    ◻️");
      break;
    case 5:
      console.log("◻️ ◻️ ◻️");
      console.log("◻️");
      console.log("◻️ ◻️ ◻️");
      console.log("    ◻️");
      console.log("◻️ ◻️ ◻️");
      break;
    case 6:
      console.log("◻️ ◻️ ◻️");
      console.log("◻️");
      console.log("◻️ ◻️ ◻️");
      console.log("◻️   ◻️");
      console.log("◻️ ◻️ ◻️");
      break;
  }
}

function getGame(playerOne, playerTwo) {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let n = 1;
  while (n < 10) {
    prompt(playerOne + " roll the dice");
    let newScore1 = Math.floor(Math.random() * 6) + 1;
    let visualDice = newScore1;
    rollIterate();
    rollDiceVisual(visualDice)
    console.log(newScore1);
    playerOneScore = playerOneScore + newScore1;
    console.log("The score of  " + playerOne + " : " + playerOneScore)

    if (playerOneScore >= 15) {
      console.log("CONGRATS 🥳" + playerOne);
      break;
    }

    prompt(playerTwo + " roll the dice");
    let newScore2 = Math.ceil(Math.random() * 6) + 1;
    visualDice = newScore2;
    rollIterate();
    rollDiceVisual(visualDice);
    console.log(newScore2);
    playerTwoScore = playerTwoScore + newScore2;
    console.log("The score of " + playerTwo + " : " + playerTwoScore);

    if (playerTwoScore >= 15) {
      console.log("CONGRATS 🥳" + playerTwo);
      break;
    }
    n++;
  }
}

function rollTheDice() {
  const isReady = confirm("Do you want to play ?");
  if (isReady) {
    const playerOne = prompt("Enter your Player One Name : ", "Dora");
    const playerTwo = prompt("Enter your Player Two Name : ", "Buji");
    getGame(playerOne, playerTwo);
  }
}

rollTheDice();

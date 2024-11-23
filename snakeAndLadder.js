const SNAKE = "🐍";
const LADDER = "🪜";
const playerOne = "🧑‍🌾";
const playerTwo = "🕵🏻‍♂️";
const END = "🏆";
const SPACE = " ";

function isEqual(score, index) {
  return score === index;
}

function snakeVisual(index) {
  switch (index) {
    case 16:
    case 59:
    case 63:
    case 67:
    case 87:
    case 93:
    case 95:
    case 99:
      return true;
  }
}

function laddervisual(index) {
  switch (index) {
    case 9:
    case 18:
    case 25:
    case 56:
    case 68:
    case 76:
    case 79:
      return true;
  }
}

function snakeBoard(playerOneScore, playerTwoScore) {

  let board = "----------------------------------------------------\n";
  let value = 0;

  for (let index = 100; index >= 1; index--) {
    value = index;

    if (snakeVisual(index)) {
      value = SNAKE;
    }

    if (laddervisual(index)) {
      value = LADDER;
    }

    if (isEqual(playerOneScore, index)) {
      value = playerOne;
    }

    if (isEqual(playerTwoScore, index)) {
      value = playerTwo;
    }

    if (index < 10) {
      const sign = value === LADDER ? "" : "0";
      value = sign + value;

      if (isEqual(playerOneScore, index)) {
        value = playerOne;
      }

      if (isEqual(playerTwoScore, index)) {
        value = playerTwo;
      }
      board += "| " + value + " ";
    }

    if (index >= 10) {
      if (index === 100) {
        value = END;
      }
      board += "| " + value + " ";
    }

    if (index % 10 === 1) {
      board += " |\n";
      board += "----------------------------------------------------\n";
    }
  }
  console.log(board);
}

function isSnake(position) {
  const snake1 = 16;
  const snake2 = 59;
  const snake3 = 63;
  const snake4 = 67;
  const snake5 = 87;
  const snake6 = 93;
  const snake7 = 95;
  const snake8 = 99;

  switch (position) {
    case snake1:
      console.log("🐍 bit you........");
      return 7;
    case snake2:
      console.log("🐍 bit you........");
      return 17;
    case snake3:
      console.log("🐍 bit you........");
      return 19;
    case snake4:
      console.log("🐍 bit you........");
      return 30;
    case snake5:
      console.log("🐍 bit you........");
      return 24;
    case snake6:
      console.log("🐍 bit you........");
      return 69;
    case snake7:
      console.log("🐍 bit you........");
      return 75;
    case snake8:
      console.log("🐍 bit you........");
      return 77;
  }
  return position;
}

function isLadder(position) {
  const ladder1 = 9;
  const ladder2 = 18;
  const ladder3 = 25;
  const ladder4 = 56;
  const ladder5 = 68;
  const ladder6 = 76;
  const ladder7 = 79;

  switch (position) {
    case ladder1:
      console.log("You got ladder 🪜.....Good Move🥳")
      return 27;
    case ladder2:
      console.log("You got ladder 🪜.....Good Move🥳")
      return 37;
    case ladder3:
      console.log("You got ladder 🪜.....Good Move🥳")
      return 54;
    case ladder4:
      console.log("You got ladder 🪜.....Good Move🥳")
      return 64;
    case ladder5:
      console.log("You got ladder 🪜.....Good Move🥳")
      return 88;
    case ladder6:
      console.log("You got ladder 🪜.....Good Move🥳")
      return 97;
    case ladder7:
      console.log("You got ladder 🪜.....Good Move🥳")
      return 100;
  }
  return position;
}

function dice() {
  return Math.ceil(Math.random() * 6);
}

function playerOneGame(playerOne, playerOnePosition, playerTwoPosition) {
  prompt(playerOne + " roll the dice");
  let newPosition1 = dice();

  console.clear();
  console.log(newPosition1);

  playerOnePosition = playerOnePosition + newPosition1;

  if (playerOnePosition > 100) {
    playerOnePosition = playerOnePosition - newPosition1;
  }

  playerOnePosition = isLadder(playerOnePosition);
  playerOnePosition = isSnake(playerOnePosition);

  console.log("The position of  " + playerOne + " : " + playerOnePosition);
  snakeBoard(playerOnePosition, playerTwoPosition);

  return playerOnePosition;
}

function playerTwoGame(playerTwo, playerTwoPosition, playerOnePosition) {
  prompt(playerTwo + " roll the dice");
  let newPosition2 = dice();

  console.clear();
  console.log(newPosition2);

  playerTwoPosition = playerTwoPosition + newPosition2;

  if (playerTwoPosition > 100) {
    playerTwoPosition = playerTwoPosition - newPosition2;
  }

  playerTwoPosition = isLadder(playerTwoPosition);
  playerTwoPosition = isSnake(playerTwoPosition);

  console.log("The position of " + playerTwo + " : " + playerTwoPosition);
  snakeBoard(playerOnePosition, playerTwoPosition);

  return playerTwoPosition;
}

function startGame(playerOne, playerTwo) {
  let playerOnePosition = 0;
  let playerTwoPosition = 0;

  snakeBoard(playerOnePosition, playerTwoPosition);

  while (playerOnePosition !== 100 && playerTwoPosition !== 100) {
    playerOnePosition = playerOneGame(playerOne, playerOnePosition, playerTwoPosition);
    playerTwoPosition = playerTwoGame(playerTwo, playerTwoPosition, playerOnePosition);

  }

  const winner = playerOnePosition === 100 ? playerOne : playerTwo;
  console.log("YOU DID IT......... 🥳 🤩" + winner);
}

function snakeAndLadder() {
  const isReady = confirm("Do you want to play ?");

  if (isReady) {
    const playerOne = prompt("Enter your Player One Name : ", "player 1");
    const playerTwo = prompt("Enter your Player Two Name : ", "player 2");
    startGame(playerOne, playerTwo);
  }
}
snakeAndLadder();

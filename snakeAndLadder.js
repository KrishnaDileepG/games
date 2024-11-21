function snakeVisual(index) {
  return index === 16 || index === 59 || index === 63 || index === 67 || index === 87 || index === 93 || index === 95 || index === 99;
}

function laddervisual(index) {
  return index === 9 || index === 18 || index === 25 || index === 56 || index === 68 || index === 76 || index === 79;
}


function snakeBoard(playerOneScore, playerTwoScore) {
  
  const SNAKE = "🐍";
  const LADDER = "🪜";
  const playerOne = "🧑‍🌾";
  const playerTwo = "🕵🏻‍♂️";
  const END = "🏆"

  let board = "____________________________________________________\n";
  let value = 0;

  for (let index = 100; index >= 1; index--) {
    value = index;

    if (snakeVisual(index)) {
      value = SNAKE;
    }

    if (laddervisual(index)) {
      value = LADDER;
    }

    if (playerOneScore === index) {
      value = playerOne;
    }

    if (playerTwoScore === index) {
      value = playerTwo;
    }

    if (index < 10) {
      value = "0" + value;

      if (playerOneScore === index) {
        value = playerOne;
      }

      if (playerTwoScore === index) {
        value = playerTwo;
      }

      board += "| " + value + " ";
    }

    if (playerOneScore === index) {
      value = playerOne;
    }
    if (playerTwoScore === index) {
      value = playerTwo;
    }

    if (index >= 10) {
      if (index === 100) {
        value = END;
      }
      board += "| " + value + " ";
    }


    if (index % 10 === 1) {
      board += " |\n";
      board += "____________________________________________________\n";
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

function tryGame(playerOne, playerTwo) {
  let playerOnePosition = 0;
  let playerTwoPosition = 0;
  snakeBoard(playerOnePosition, playerTwoPosition);
  while (playerOnePosition !== 100 && playerTwoPosition !== 100) {

    prompt(playerOne + " roll the dice");
    let newPosition1 = Math.ceil(Math.random() * 6);
    console.log(newPosition1);
    playerOnePosition = playerOnePosition + newPosition1;

    if (playerOnePosition > 100) {
      playerOnePosition = playerOnePosition - newPosition1;
    }
    playerOnePosition = isLadder(playerOnePosition);
    playerOnePosition = isSnake(playerOnePosition);
    console.log("The position of  " + playerOne + " : " + playerOnePosition);
    snakeBoard(playerOnePosition, playerTwoPosition);
   

    prompt(playerTwo + " roll the dice");

    let newPosition2 = Math.ceil(Math.random() * 6);
    console.log(newPosition2);

    playerTwoPosition = playerTwoPosition + newPosition2;

    if (playerTwoPosition > 100) {
      playerTwoPosition = playerTwoPosition - newPosition1;
    }

    playerTwoPosition = isLadder(playerTwoPosition);
    playerTwoPosition = isSnake(playerTwoPosition);
    console.log("The position of " + playerTwo + " : " + playerTwoPosition);
    snakeBoard(playerOnePosition, playerTwoPosition);
   
  }

  const winner = playerOnePosition === 100 ? playerOne : playerTwo;
  console.log("YOU DID IT......... 🥳 🤩" + winner);
}


function snakeAndLadder() {
  const isReady = confirm("Do you want to play ?");
  if (isReady) {
    const playerOne = prompt("Enter your Player One Name : ", "Dora");
    const playerTwo = prompt("Enter your Player Two Name : ", "Buji");
    tryGame(playerOne, playerTwo);
  }

}
snakeAndLadder();

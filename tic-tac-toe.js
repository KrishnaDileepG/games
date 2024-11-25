const vertical = " ║ ";
const horizontal = "\n\t⸺⸺⸺⸺⸺⸺⸺⸺⸺⸺⸺\n";
const cross_mark = "❌";
const round = "⭕";

function ticTacToeGrid(board) {
  console.clear();
  let boardString = "\t";

  for (let index = 0; index < 9; index++) {
    boardString += board[index] !== " " ? board[index] : '0' + (index + 1);

    if ((index + 1) % 3 === 0 && index !== 8) {
      boardString += horizontal + '\t';
    }
    if ((index + 1) % 3 !== 0) {
      boardString += vertical;
    }
  }
  console.log(boardString);
}

function updateBoard(board, position, symbol) {
  let newBoard = "";

  for (let index = 0; index < board.length; index++) {
    newBoard += index === position ? symbol : board[index];
  }
  return newBoard;
}

function slice(string, start, end) {
  let slicedStr = '';

  for (let index = start; index < end; index++) {
    slicedStr += string[index];
  }

  return slicedStr;
}

function isCharFound(set, subSet) {
  for (let index = 0; index < set.length; index++) {
    if (set[index] === subSet) {
      return true;
    }
  }

  return false;
}

function isSubSet(set, subSet) {
  for (let subIndex = 0; subIndex < subSet.length; subIndex += 4) {
    const string = slice(subSet, subIndex, subIndex + 3);
    let count = 0;

    for (let index = 0; index < set.length; index++) {
      if (isCharFound(string, set[index])) {
        count++;
      }
    }

    if (count === 3) {
      return true;
    }
  }

  return false;
}

function checkStatus(playerPositions) {
  const WINNING_COMBINATIONS = "012 345 678 036 147 258 048 246";
  return isSubSet(playerPositions, WINNING_COMBINATIONS);
}

function addInput(position) {
  return position;
}

function startGame(playerOneSymbol, playerTwoSymbol, playerOne, playerTwo) {
  let board = "         ";
  let currentPlayer = playerOne;
  let currentSymbol = playerOneSymbol;
  let playerOneinputset = "";
  let playerTwoinputset = "";
  let currentInputSet = "";
  let chance = 0;

  while (chance < 9) {
    ticTacToeGrid(board);
    console.log(currentPlayer + " it's your turn " + currentSymbol);

    let position = +prompt("Enter the cell number you want to play") - 1;

    if (isValid(position, board)) {
      console.log("Invalid move ");
      continue;
    }

    if (currentPlayer === playerOne) {
      playerOneinputset += addInput(position);
      currentInputSet = playerOneinputset;
    }

    if (currentPlayer === playerTwo) {
      playerTwoinputset += addInput(position);
      currentInputSet = playerTwoinputset;
    }

    board = updateBoard(board, position, currentSymbol);
    chance++;

    if (checkStatus(currentInputSet)) {
      ticTacToeGrid(board);
      console.log(currentPlayer + " congratulations 🥳 ");
      return;
    }
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    currentSymbol = currentSymbol === playerOneSymbol ? playerTwoSymbol : playerOneSymbol;
  }

  ticTacToeGrid(board);
  console.log("It's a draw!");
}

function isValid(position, board) {
  return position < 0 || position > 8 || board[position] !== " ";
}

function getSymbol(playerOne, playerTwo) {
  let playerOneSymbol = "❌";
  let playerTwoSymbol = "⭕";

  let getMark = confirm(playerOne + ", do you want this mark ❌?");
  if (getMark) {
    playerOneSymbol = "❌";
    playerTwoSymbol = "⭕";
  } else {
    playerOneSymbol = "⭕";
    playerTwoSymbol = "❌";
  }

  startGame(playerOneSymbol, playerTwoSymbol, playerOne, playerTwo);
}

function ticTacToe() {
  console.log("TIC - TAC - TOE");
  const isWilling = confirm("Did you want to play ?")

  if (isWilling) {
    const playerOne = prompt("Enter your Player One Name : ", "Dora");
    const playerTwo = prompt("Enter your Player Two Name : ", "Buji");
    getSymbol(playerOne, playerTwo);
  }
}

ticTacToe();


const vertical = " ║ ";
const horizontal = "\n⸺⸺⸺⸺⸺⸺⸺⸺\n";
const cross_mark = "❌";
const round = "⭕";

function visualTicTac(board) {
  console.clear();
  let boardString = "";

  for (let index = 0; index < 9; index++) {
    boardString += board[index] !== " " ? board[index] : index + 1;

    if ((index + 1) % 3 === 0 && index !== 8) {
      boardString += horizontal;
    } else if ((index + 1) % 3 !== 0) {
      boardString += vertical;
    }
  }
  console.log(boardString);
}

function checkWin(board, symbol) {
  if (
    (board[0] === symbol && board[1] === symbol && board[2] === symbol) ||
    (board[3] === symbol && board[4] === symbol && board[5] === symbol) ||
    (board[6] === symbol && board[7] === symbol && board[8] === symbol)) {
    return true;
  }

  if (
    (board[0] === symbol && board[3] === symbol && board[6] === symbol) ||
    (board[1] === symbol && board[4] === symbol && board[7] === symbol) ||
    (board[2] === symbol && board[5] === symbol && board[8] === symbol)) {
    return true;
  }

  if (
    (board[0] === symbol && board[4] === symbol && board[8] === symbol) ||
    (board[2] === symbol && board[4] === symbol && board[6] === symbol)) {
    return true;
  }

  return false;
}

function updateBoard(board, position, symbol) {
  let newBoard = "";

  for (let index = 0; index < board.length; index++) {
    if (index === position) {
      newBoard += symbol;
    } else {
      newBoard += board[index];
    }
  }
  return newBoard;
}

function tryGame(playerOneSymbol, playerTwoSymbol, playerOne, playerTwo) {
  let board = "         ";
  let currentPlayer = playerOne;
  let currentSymbol = playerOneSymbol;

  let chance = 0;
  while (chance < 9) {
    visualTicTac(board);
    console.log(currentPlayer + " it's your turn " + currentSymbol);

    let position = +prompt("Enter the cell number you want to play") - 1;

    if (position < 0 || position > 8 || board[position] !== " ") {
      console.log("Invalid move ");
      continue;
    }

    board = updateBoard(board, position, currentSymbol);
    chance++;

    if (checkWin(board, currentSymbol)) {
      visualTicTac(board);
      console.log(currentPlayer + " congratulations 🥳 ");
      return;
    }
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    currentSymbol = currentSymbol === playerOneSymbol ? playerTwoSymbol : playerOneSymbol;
  }

  visualTicTac(board);
  console.log("It's a draw!");
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

  tryGame(playerOneSymbol, playerTwoSymbol, playerOne, playerTwo);
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

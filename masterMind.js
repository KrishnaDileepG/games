const EMPTY_STRING = "";
const SPACE = " ";
const VALUE_SAME = "🤍";
const POSITION_SAME = "💛";

function findIndex(string, char) {
  for (let index = 0; index < string.length; index++) {
    if (char === string[index]) {
      return index;
    }
  }

  return -1;
}

function gameStatus(scorePegs) {
  return scorePegs === "💛💛💛💛";
}

function isValid(userPattern) {
  let numberOfCharacter = 0;
  for (let index = 0; index < 4; index++) {
    if(userPattern[index] !== SPACE) {
      numberOfCharacter += 1;
    }
  }
  return numberOfCharacter === 4;
}

function scoringPegs(userPattern, actualPattern) {
  let scorePegs = EMPTY_STRING;

  for (let index = 0; index < actualPattern.length; index++) {
    const charIndex = findIndex(userPattern, actualPattern[index]);
    const isCharSpace = actualPattern[index] === SPACE;
    const isCharFound = charIndex !== -1;

    if (isCharFound && !isCharSpace) {
      const valueToChange = charIndex === index ? POSITION_SAME : VALUE_SAME;
      scorePegs += valueToChange;
    }
  }

  return scorePegs;
}

function userGuess() {
  const userPattern = prompt("Enter your Pattern 🖊️ :  ");
  return  userPattern;
}

function isPresent(actualString, newValue) {
  for (let index = 0; index < actualString.length; index++) {
    if (actualString[index] === newValue) {
      return true;
    }
  }
  return false;
}

function code() {
  return Math.ceil(Math.random() * 9);
}

function actualPattern() {
  let index = 1;
  let actualString = EMPTY_STRING;

  while (index <= 4) {
    const newValue = EMPTY_STRING + code();

    if (!isPresent(actualString, newValue)) {
      actualString += newValue;
      index++;
    }
  }

  return actualString;
}

function masterMindDescription(chance) {
  console.log(" ");
  console.log("       ⭐️⭐️⭐️MASTER MIND⭐️⭐️⭐️         ");
  console.log(" ");
  console.log("--* Mastermind is a board game that challenges players to use logic and reasoning to crack a secret code  --* \n -> you need to give 4 numbers to guess which numbers are the master pegs \n -> You have " + chance + " chances to guess the master pegs\n -> " + VALUE_SAME + " means your prediction is right and " + POSITION_SAME + " means your prediction is in correct position \n");
  console.log(" ");

}

function masterMind(chance) {
  let trys = 1;
  masterMindDescription(chance);
  const pattern = actualPattern();

  while (trys <= chance) {
    const userPattern = userGuess();

    if (!isValid(userPattern)) {
      console.log("Invalid input");
      continue;
    }

    console.log('"' + userPattern + '"');
    const peg = scoringPegs(userPattern, pattern);

    if (gameStatus(peg)) {
      break;
    }
    console.log(peg);
    trys++;
  }
  const win = "YOU HAVE MASTER MIND ......🤩";
  const fail = pattern + " is the master predict .......YOU NEED TO GROW MORE TO BECOME A MASTERMIND😝 ";
  const status = trys === chance + 1 ? fail : win;
  console.log(status);
}

masterMind(7);

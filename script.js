let currentPlayer = "X";

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function move(row, col) {
  if (board[row][col] == "") {
    board[row][col] = currentPlayer;

    document.getElementById("board").children[3 * row + col].innerHTML =
      currentPlayer;

    // checWin();
    // alert will excecute first then innerHTML so we have to use setTimeout
    if (checWin()) {
      setTimeout(() => {
        alert(currentPlayer + "  is winner ");
        resetBoard();
      }, 0);

      if (!checWin) return;
    }

    if (checkTie() == true) {
      setTimeout(() => {
        alert("tie");
        resetBoard();
      }, 0);
      return;
    }
    currentPlayer = currentPlayer == "X" ? "O" : "X";

    // console.log(board);
  }
}

function checWin() {
  // for row
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] == currentPlayer &&
      board[i][1] == currentPlayer &&
      board[i][2] == currentPlayer
    ) {
      console.log(currentPlayer, "wins");
      return true;
    }
  }

  // for column
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] == currentPlayer &&
      board[1][j] == currentPlayer &&
      board[2][j] == currentPlayer
    ) {
      console.log(currentPlayer, "wins");
      return true;
    }
  }

  // for DIAG
  // for (let j = 0; j < 3; j++) {
  if (
    board[0][0] == currentPlayer &&
    board[1][1] == currentPlayer &&
    board[2][2] == currentPlayer
  ) {
    console.log(currentPlayer, "wins");
    return true;
  }

  if (
    board[0][2] == currentPlayer &&
    board[1][1] == currentPlayer &&
    board[2][0] == currentPlayer
  ) {
    console.log(currentPlayer, "wins");
    return true;
  }
}

function resetBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  let cells = document.getElementByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  currentPlayer = "X";
}

function checkTie() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") {
        return false;
      }
    }
  }
  return true;
}

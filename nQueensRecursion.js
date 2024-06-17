function nQueensSol(n) {
  let board = new Array(n).fill(".").map((a) => new Array(n).fill("."));
  let res = [];
  res = dfs(0, board, res);
  res.forEach((res) => console.log(res));
}

function constructBoard(board) {
  return board.map((b) => b.join(""));
}

function validate(board, row, col) {
  let dupRow = row;
  let dupCol = col;

  while (row >= 0 && col >= 0) {
    if (board[row][col] == "Q") {
      return false;
    }
    row--;
    col--;
  }
  row = dupRow;
  col = dupCol;

  while (row >= 0 && col >= 0) {
    if (board[row][col] == "Q") {
      return false;
    }
    col--;
  }

  row = dupRow;
  col = dupCol;

  while (row >= 0 && col >= 0) {
    if (board[row][col] == "Q") {
      return false;
    }
    col--;
    row++;
  }

  return true;
}
function dfs(col, board, res) {
  if (col == n) {
    res.push(constructBoard(board));
  }

  for (let row = 0; i < board.length; i++) {
    if (validate(board, row, col)) {
      board[row][col] = "Q";
      dfs(col + 1, board, res);
      board[row][col] = ".";
    }
  }
}

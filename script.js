/*function solveNQueens(n) {
  let board = new Array(n).fill(null).map(() => new Array(n).fill('.'));
  let res = [];
  dfs(0, board, res);
  return res;
}

function validate(board, row, col) {
  let duprow = row;
  let dupcol = col;

  while (row >= 0 && col >= 0) {
      if (board[row][col] === 'Q') return false;
      row--;
      col--;
  }

  row = duprow;
  col = dupcol;
  while (col >= 0) {
      if (board[row][col] === 'Q') return false;
      col--;
  }

  row = duprow;
  col = dupcol;
  while (col >= 0 && row < board.length) {
      if (board[row][col] === 'Q') return false;
      col--;
      row++;
  }
  return true;
}

function dfs(col, board, res) {
  if (col === board.length) {
      res.push(construct(board));
      return;
  }

  for (let row = 0; row < board.length; row++) {
      if (validate(board, row, col)) {
          board[row][col] = 'Q';
          dfs(col + 1, board, res);
          board[row][col] = '.';
      }
  }
}

function construct(board) {
  let res = [];
  for (let i = 0; i < board.length; i++) {
      res.push(board[i].join(''));
  }
  return res;
}

// Test the code
const N = 4;
const queen = solveNQueens(N);
let i = 1;
queen.forEach(arrangement => {
  console.log(`Arrangement ${i}`);
  arrangement.forEach(row => console.log(row));
  console.log();
  i += 1;
});

*/

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

  while (col >= 0) {
    if (board[row][col] == "Q") {
      return false;
    }
    col--;
  }

  row = dupRow;
  col = dupCol;

  while (col >= 0 && row < board.length) {
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

  for (let row = 0; row < board.length; row++) {
    if (validate(board, row, col)) {
      board[row][col] = "Q";
      dfs(col + 1, board, res);
      board[row][col] = ".";
    }
  }
}

function nQueensSol(n) {
  let board = new Array(n).fill(".").map((a) => new Array(n).fill("."));
  let res = [];
  dfs(0, board, res);
  res.forEach((res) => console.log(res));
}

const n = 4;
nQueensSol(n);

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];
function knightProbability(n, k, row, column) {
  const result = recursive(n);

  return result(n, k, row, column);
}

const recursive = (n) => {
  const cache = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));
  return function inner(n, k, row, column) {
    if (row < 0 || row >= n || column < 0 || column >= n) {
      return 0;
    }

    if (k === 0) return 1;

    if (cache[row][column][k] !== undefined) return cache[row][column][k];

    let res = 0;

    for (let i = 0; i < DIRECTIONS.length; i++) {
      const dir = DIRECTIONS[i];
      res += inner(n, k - 1, row + dir[0], column + dir[1]) / 8;
    }
    cache[row][column][k] = res;

    return res;
  };
};

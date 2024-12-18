const generate2DArray = (height) => {
  const arr = [];
  const rows = height;
  const cols = Math.pow(2, height) - 1;

  return Array.from({ length: rows }, () => Array(cols).fill(""));
};

const traverse = (node, level, left, right, res) => {
  if (!node) return;

  const mid = Math.floor((left + right) / 2);

  res[level][mid] = node.val.toString();
  traverse(node.left, level + 1, left, mid, res);
  traverse(node.right, level + 1, mid, right, res);
};
const recursiveDepth = (node, count) => {
  if (node === null) return count;

  count++;

  return Math.max(
    recursiveDepth(node.left, count),
    recursiveDepth(node.right, count),
  );
};

function printTree(root) {
  let count = 0;

  const height = recursiveDepth(root, count);
  const answer = generate2DArray(height);

  traverse(root, 0, 0, Math.pow(2, height) - 1, answer);

  return answer;
}

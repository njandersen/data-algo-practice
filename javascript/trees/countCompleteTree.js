const getTreeHeight = (root) => {
  let height = 0;

  while (root.left) {
    height++;
    root = root.left;
  }

  return height;
};

const nodeExists = (index, height, node) => {
  let left = 0;
  let right = Math.pow(2, height) - 1;
  let count = 0;

  while (count < height) {
    let mid = Math.ceil((left + right) / 2);
    if (index >= mid) {
      node = node.right;
      left = mid;
    } else {
      node = node.left;
      right = mid - 1;
    }
    count++;
  }

  return node !== null;
};

function countNodes(root) {
  if (!root) return 0;

  const height = getTreeHeight(root);
  if (height === 0) return 1;

  const upperCount = Math.pow(2, height) - 1;

  let left = 0;
  let right = upperCount;

  while (left < right) {
    let index = Math.ceil((left + right) / 2);
    if (nodeExists(index, height, root)) {
      left = index;
    } else {
      right = index - 1;
    }
  }

  return upperCount + left + 1;
}
